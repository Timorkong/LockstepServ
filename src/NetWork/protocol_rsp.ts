import { Socket } from "net";
import { Cmd } from "./../../src/protobuff/command_id";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import { PROTOCOL_ROOM } from "./../../src/protobuff/command_protocol_room";
import { RoomManager } from "./../../src/Code/Game/Room/RoomManager";
import { Util } from "./../../src/Code/Util/Util";
import { RoomInfo } from "./../../src/Code/Game/Room/RoomInfo";
import { PROTOCOL_WAR } from "./../../src/protobuff/command_protocol_war";
import { NetUtil } from "./../../src/Code/Util/NetUtil";
import { UniqueIdManager } from "./../../src/Code/Game/UniqueIdManager";

export class protocol_rsp {
  public CMD_HEART_BEAT_RSP(socket: Socket) {
    let rsp: PROTOCOL.CMD_HEART_BEAT_RSP = new PROTOCOL.CMD_HEART_BEAT_RSP();
    rsp.id = 1;
    rsp.name = "fdafd";
    NetUtil.Send(PROTOCOL.CMD_HEART_BEAT_RSP, rsp, socket, Cmd.ID.CMD.CMD_HEART_BEAT_RSP);
  }

  public CMD_ROOM_LIST_RSP(UserInfo: UserInfo) {
    let rsp = new PROTOCOL_ROOM.CMD_ROOM_LIST_RSP();
    rsp.roomList = Util.GetRoomList();
    NetUtil.Send(PROTOCOL_ROOM.CMD_ROOM_LIST_RSP, rsp, UserInfo.socket, Cmd.ID.CMD.CMD_ROOM_LIST_RSP);
  }

  public CMD_CREATE_ROOM_RSP(userInfo: UserInfo, req: PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ) {
    let rsp = PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.create();
    let roomInfo = RoomManager.Instance(RoomManager).CreateRoom(req.roomName);
    roomInfo.UserEnterRoom(userInfo);
    rsp.roomInfo = roomInfo.ToProto();
    rsp.playerSeat = userInfo.seat;
    NetUtil.Send(PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP, rsp, userInfo.socket, Cmd.ID.CMD.CMD_CREATE_ROOM_RSP);
  }

  public CMD_LEAVE_ROOM_RSP(userInfo: UserInfo) {
    let roomInfo = RoomManager.Instance(RoomManager).LeaveRoom(userInfo);
    let rsp = new PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP();
    rsp.roomList = Util.GetRoomList();
    NetUtil.Send(PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP, rsp, userInfo.socket, Cmd.ID.CMD.CMD_LEAVE_ROOM_RSP);
    this.CMD_UPDATE_ROOM_INFO_NOTICE(roomInfo);
  }

  public CMD_UPDATE_ROOM_INFO_NOTICE(roomInfo: RoomInfo | undefined, ignoreId: number = UniqueIdManager.Null) {
    if (roomInfo && roomInfo.MapUser.size > 0) {
      let rsp = PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.create();
      let roomProto = roomInfo.ToProto(ignoreId);
      rsp.roomInfo = roomProto;

      let writer = NetUtil.Encode(PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE, rsp, Cmd.ID.CMD.CMD_UPDATE_ROOM_INFO_NOTICE);
      roomInfo.PushCommandByWriter(writer)
      roomInfo.SendWarMessage();
    }
  }
  public CMD_ENTER_GAME_RSP(userInfo: UserInfo, req: PROTOCOL_WAR.CMD_ENTER_GAME_REQ) {
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    let rsp = PROTOCOL_WAR.CMD_ENTER_GAME_RSP.create();
    rsp.data = req.data;
    let writer = NetUtil.Encode(PROTOCOL_WAR.CMD_ENTER_GAME_RSP, rsp, Cmd.ID.CMD.CMD_ENTER_GAME_RSP);
    roomInfo.PushCommandByWriter(writer)
    roomInfo.SendWarMessage();
  }

  public CMD_START_GAME_RSP(userInfo: UserInfo) {
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    userInfo.isStartGame = true;
    let sucess = true;
    roomInfo.MapUser.forEach(user => {
      if (user.isStartGame == false) sucess = false;
    })
    if (sucess) {
      let rsp = PROTOCOL_WAR.CMD_START_GAME_RSP.create();
      rsp.roomInfo = roomInfo.ToProto();
      let writer = NetUtil.Encode(PROTOCOL_WAR.CMD_START_GAME_RSP, rsp, Cmd.ID.CMD.CMD_START_GAME_RSP);
      roomInfo.PushCommandByWriter(writer)
      roomInfo.PushSequence(true);
      roomInfo.SendWarMessage();
      roomInfo.Running = true;
    }
  }

  public CMD_WAR_SEQUENCE_NOTICE(roomInfo: RoomInfo) {
    roomInfo.SendWarMessage();
    roomInfo.PushSequence(true);
  }

  public CMD_JOIN_ROOM_RSP(userInfo: UserInfo) {
    let roomInfo = <RoomInfo>RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    let rsp = PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.create();
    rsp.roomInfo = roomInfo.ToProto();
    rsp.playerSeat = userInfo.seat;
    NetUtil.Send(PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP, rsp, userInfo.socket, Cmd.ID.CMD.CMD_JOIN_ROOM_RSP);
    this.CMD_UPDATE_ROOM_INFO_NOTICE(roomInfo, userInfo.uniqueId);
  }

  public CMD_WAR_MOVE(userInfo: UserInfo, req: PROTOCOL_WAR.CMD_WAR_MOVE) {
    let roomInfo = <RoomInfo>RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    let rsp = PROTOCOL_WAR.CMD_WAR_MOVE.create();
    rsp.seat = req.seat;
    rsp.moveX = req.moveX;
    rsp.moveY = req.moveY;
    let writer = NetUtil.Encode(PROTOCOL_WAR.CMD_WAR_MOVE, rsp, Cmd.ID.CMD.CMD_WAR_MOVE);
    roomInfo.PushCommandByWriter(writer)
  }
}