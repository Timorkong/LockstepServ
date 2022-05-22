import { Reader } from "protobufjs"
import { NetManager } from "./NetManager";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOL_ROOM } from "./../../src/protobuff/command_protocol_room";
import { PROTOCOL_WAR } from "./../../src/protobuff/command_protocol_war";
import { NetUtil } from "./../../src/Code/Util/NetUtil";
import { Cmd } from "./../../src/protobuff/command_id";
import { RoomManager } from "./../../src/Code/Game/Room/RoomManager";

export class protocol_req {
  public CMD_HEART_BEAT_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.CMD_HEART_BEAT_RSP(userInfo.socket);
  }

  public CMD_ROOM_LIST_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.CMD_ROOM_LIST_RSP(userInfo);
  }
  public CMD_CREATE_ROOM_REQ(...args: any[]) {
    let buffers: Buffer = args[0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.CMD_CREATE_ROOM_RSP(userInfo, req);
  }
  public CMD_LEAVE_ROOM_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.CMD_LEAVE_ROOM_RSP(userInfo);
  }

  public CMD_ENTER_GAME_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    let buffers: Buffer = args[0];
    let buffReader = new Reader(buffers);
    let req = PROTOCOL_WAR.CMD_ENTER_GAME_REQ.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.CMD_ENTER_GAME_RSP(userInfo, req);
  }
  public CMD_START_GAME_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.CMD_START_GAME_RSP(userInfo);
  }
  //战斗帧转发数据
  public CMD_FRAME_TRANSPOND(...args: any[]) {
    let buffers: Buffer = args[0][0];
    let userInfo: UserInfo = args[0][1];
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    roomInfo.PushCommandByBuffer(buffers);
  }

  public CMD_WAR_MOVE(...args: any[]) {
    let buffers: Buffer = args[0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOL_WAR.CMD_WAR_MOVE.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.CMD_WAR_MOVE(userInfo, req);
  }

  public CMD_JOIN_ROOM_REQ(...args: any[]) {
    let buffers: Buffer = args[0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ.decode(buffReader);
    if (RoomManager.Instance(RoomManager).MapRoom.has(<number>req.roomUnquieId)) {
      let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(<number>req.roomUnquieId);
      roomInfo?.UserEnterRoom(userInfo);
      NetManager.Instance(NetManager).protocol_rsp?.CMD_JOIN_ROOM_RSP(userInfo);
    }
  }
}