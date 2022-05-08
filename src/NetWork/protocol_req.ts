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
    NetManager.Instance(NetManager).protocol_rsp?.CMD_ENTER_GAME_RSP(userInfo);
  }
  public CMD_START_GAME_REQ(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.CMD_START_GAME_RSP(userInfo);
  }

  public CMD_WAR_MOVE_REQ(...args: any[]) {
    let buffers: Buffer = args[0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOL_WAR.CMD_WAR_MOVE_REQ.decode(buffReader);
    let rsp = PROTOCOL_WAR.CMD_WAR_MOVE_RSP.create();
    rsp.seat = userInfo.seat;
    rsp.isDown = req.isDown;
    rsp.degree = req.degree;
    let moveWriter = NetUtil.Encode(PROTOCOL_WAR.CMD_WAR_MOVE_RSP, rsp, Cmd.ID.CMD.CMD_WAR_MOVE_RSP);
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    roomInfo.PushCommand(moveWriter);
  }
}