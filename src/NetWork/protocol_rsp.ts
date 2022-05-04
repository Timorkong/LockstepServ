import { Socket } from "net";
import protobuf, { BufferWriter, Writer, roots, util } from "protobufjs";
import { Cmd } from "./../../src/protobuff/command_id";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import { PROTOCOL_ROOM } from "./../../src/protobuff/command_protocol_room";
import { RoomManager } from "./../../src/Code/Game/Room/RoomManager";
import { Util } from "./../../src/Code/Util/Util";
import { RoomInfo } from "src/Code/Game/Room/RoomInfo";

export class protocol_rsp {
  public CMD_HEART_BEAT_RSP(socket: Socket) {
    let rsp: PROTOCOL.CMD_HEART_BEAT_RSP = new PROTOCOL.CMD_HEART_BEAT_RSP();
    rsp.id = 1;
    rsp.name = "fdafd";
    this.Send(PROTOCOL.CMD_HEART_BEAT_RSP, rsp, socket, Cmd.ID.CMD.CMD_HEART_BEAT_RSP);
  }

  public CMD_ROOM_LIST_RSP(UserInfo: UserInfo) {
    let rsp = new PROTOCOL_ROOM.CMD_ROOM_LIST_RSP();
    rsp.roomList = Util.GetRoomList();
    this.Send(PROTOCOL_ROOM.CMD_ROOM_LIST_RSP, rsp, UserInfo.socket, Cmd.ID.CMD.CMD_ROOM_LIST_RSP);
  }

  public CMD_CREATE_ROOM_RSP(userInfo: UserInfo, req: PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ) {
    let rsp = PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.create();
    let roomInfo = RoomManager.Instance(RoomManager).CreateRoom(req.roomName);
    RoomManager.Instance(RoomManager).EnterRoom(roomInfo, userInfo);
    rsp.roomInfo = roomInfo.ToProto();
    this.Send(PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP, rsp, userInfo.socket, Cmd.ID.CMD.CMD_CREATE_ROOM_RSP);
  }

  public CMD_LEAVE_ROOM_RSP(userInfo: UserInfo) {
    let roomInfo = RoomManager.Instance(RoomManager).LeaveRoom(userInfo);
    let rsp = new PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP();
    rsp.roomList = Util.GetRoomList();
    this.Send(PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP, rsp, userInfo.socket, Cmd.ID.CMD.CMD_LEAVE_ROOM_RSP);
    this.CMD_LEAVE_ROOM_NOTICE(roomInfo);
  }

  public CMD_LEAVE_ROOM_NOTICE(roomInfo: RoomInfo | undefined) {
    if (roomInfo && roomInfo.MapUser.size > 0) {
      let rsp = PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE.create();
      let roomProto = roomInfo.ToProto();
      rsp.roomInfo = roomProto;
      roomInfo.MapUser.forEach((userInfo, id) => {
        this.Send(PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE, rsp, userInfo.socket, Cmd.ID.CMD.CMD_LEAVE_ROOM_NOTICE);
      })
    }
  }

  public Send(encoder: any, rsp: any, socket: Socket, cmd: Cmd.ID.CMD) {
    let buffer = encoder.encode(rsp).finish();
    let writer: BufferWriter = Writer.create();
    writer.fixed32(buffer.length);
    writer.fixed32(<number>cmd);
    writer.fixed32(0);
    writer.custombytes(buffer);
    let sendbuffer = writer.finish();
    if (process.env.NODE_DEBUG == "true") {
      console.log(`send msg size = ${buffer.length} msgId = ${<number>cmd} sequnece = 0 msg = ${Util.Bytes2String(sendbuffer)}`)
    }
    socket.write(sendbuffer);
  }
}