import { Reader } from "protobufjs"
import { NetManager } from "./NetManager";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOLROOM } from "./../../src/protobuff/command_protocol_room";
import { PROTOCOLWAR } from "./../../src/protobuff/command_protocol_war";
import { NetUtil } from "./../../src/Code/Util/NetUtil";
import { Cmd } from "./../../src/protobuff/command_id";
import { RoomManager } from "./../../src/Code/Game/Room/RoomManager";

export class protocol_req {
  public HeartBeatReq(...args: any[]) { 
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.HeartBeatRsp(userInfo.socket);
  }

  public RoomListReq(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.RoomListRsp(userInfo);
  }
  public CreateRoomReq(...args: any[]) {
    let buffers: Buffer = args[0][0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOLROOM.CreateRoomReq.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.CreateRoomRsp(userInfo, req);
  }
  public LeaveRoomReq(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.LeaveRoomRsp(userInfo);
  }

  public EnterGameReq(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    let buffers: Buffer = args[0][0];
    let buffReader = new Reader(buffers);
    let req = PROTOCOLWAR.EnterGameReq.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.EnterGameRsp(userInfo, req);
  }
  public StartGameReq(...args: any[]) {
    let userInfo: UserInfo = args[0][1]
    NetManager.Instance(NetManager).protocol_rsp?.StartGameRsp(userInfo);
  }
  //战斗帧转发数据
  public FrameTranspond(...args: any[]) {
    let buffers: Buffer = args[0][0];
    let userInfo: UserInfo = args[0][1];
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    roomInfo.PushCommandByBuffer(buffers);
  }

  public WarMove(...args: any[]) {
    let buffers: Buffer = args[0][0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOLWAR.WarMove.decode(buffReader);
    NetManager.Instance(NetManager).protocol_rsp?.WarMove(userInfo, req);
  }

  public JoinRoomReq(...args: any[]) {
    let buffers: Buffer = args[0][0];
    let userInfo: UserInfo = args[0][1];
    let buffReader = new Reader(buffers);
    let req = PROTOCOLROOM.JoinRoomReq.decode(buffReader);
    if (RoomManager.Instance(RoomManager).MapRoom.has(<number>req.RoomUnquieId)) {
      let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(<number>req.RoomUnquieId);
      roomInfo?.UserEnterRoom(userInfo);
      NetManager.Instance(NetManager).protocol_rsp?.JoinRoomRsp(userInfo);
    }
  }
}