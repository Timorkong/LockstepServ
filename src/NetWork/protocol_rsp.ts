import { Socket } from "net";
import { Cmd } from "./../../src/protobuff/command_id";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import { PROTOCOLROOM } from "./../../src/protobuff/command_protocol_room";
import { RoomManager } from "./../../src/Code/Game/Room/RoomManager";
import { Util } from "./../../src/Code/Util/Util";
import { RoomInfo } from "./../../src/Code/Game/Room/RoomInfo";
import { PROTOCOLWAR } from "./../../src/protobuff/command_protocol_war";
import { NetUtil } from "./../../src/Code/Util/NetUtil";
import { UniqueIdManager } from "./../../src/Code/Game/UniqueIdManager";

export class protocol_rsp {
  public HeartBeatRsp(socket: Socket) {
    let rsp: PROTOCOL.HeartBeatRsp = new PROTOCOL.HeartBeatRsp();
    rsp.Id = 1;
    rsp.Name = "fdafd";
    NetUtil.Send(PROTOCOL.HeartBeatRsp, rsp, socket, Cmd.ID.CMD.HeartBeatRsp);
  }

  public RoomListRsp(UserInfo: UserInfo) {
    let rsp = new PROTOCOLROOM.RoomListRsp();
    rsp.RoomList = Util.GetRoomList();
    NetUtil.Send(PROTOCOLROOM.RoomListRsp, rsp, UserInfo.socket, Cmd.ID.CMD.RoomListRsp);
  }

  public CreateRoomRsp(userInfo: UserInfo, req: PROTOCOLROOM.CreateRoomReq) {
    let rsp = PROTOCOLROOM.CreateRoomRsp.create();
    let roomInfo = RoomManager.Instance(RoomManager).CreateRoom(req.RoomName);
    roomInfo.UserEnterRoom(userInfo);
    rsp.RoomInfo = roomInfo.ToProto();
    rsp.PlayerSeat = userInfo.seat;
    NetUtil.Send(PROTOCOLROOM.CreateRoomRsp, rsp, userInfo.socket, Cmd.ID.CMD.CreateRoomRsp);
  }

  public LeaveRoomRsp(userInfo: UserInfo) {
    let roomInfo = RoomManager.Instance(RoomManager).LeaveRoom(userInfo);
    let rsp = new PROTOCOLROOM.LeaveRoomRsp();
    rsp.RoomList = Util.GetRoomList();
    NetUtil.Send(PROTOCOLROOM.LeaveRoomRsp, rsp, userInfo.socket, Cmd.ID.CMD.LeaveRoomRsp);
    this.UpdateRoomInfoNotice(roomInfo);
  }

  public UpdateRoomInfoNotice(roomInfo: RoomInfo | undefined, ignoreId: number = UniqueIdManager.Null) {
    if (roomInfo && roomInfo.MapUser.size > 0) {
      let rsp = PROTOCOLROOM.UpdateRoomInfoNotice.create();
      let roomProto = roomInfo.ToProto(ignoreId);
      rsp.RoomInfo = roomProto;

      let writer = NetUtil.Encode(PROTOCOLROOM.UpdateRoomInfoNotice, rsp, Cmd.ID.CMD.UpdateRoomInfoNotice);
      roomInfo.PushCommandByWriter(writer)
      roomInfo.SendWarMessage();
    }
  }
  public EnterGameRsp(userInfo: UserInfo, req: PROTOCOLWAR.EnterGameReq) {
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    let rsp = PROTOCOLWAR.EnterGameRsp.create();
    rsp.Data = req.Data;
    let writer = NetUtil.Encode(PROTOCOLWAR.EnterGameRsp, rsp, Cmd.ID.CMD.EnterGameRsp);
    roomInfo.PushCommandByWriter(writer)
    roomInfo.SendWarMessage();
  }

  public StartGameRsp(userInfo: UserInfo) {
    let roomInfo = RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    if (roomInfo == null) return;
    userInfo.isStartGame = true;
    let sucess = true;
    roomInfo.MapUser.forEach(user => {
      if (user.isStartGame == false) sucess = false;
    })
    if (sucess) {
      let rsp = PROTOCOLWAR.StartGameRsp.create();
      rsp.RoomInfo = roomInfo.ToProto();
      let writer = NetUtil.Encode(PROTOCOLWAR.StartGameRsp, rsp, Cmd.ID.CMD.StartGameRsp);
      roomInfo.PushCommandByWriter(writer)
      roomInfo.PushSequence(true);
      roomInfo.SendWarMessage();
      roomInfo.Running = true;
    }
  }

  public WarSequenceNotice(roomInfo: RoomInfo) { 
    roomInfo.SendWarMessage();
    roomInfo.PushSequence(true);
  }

  public JoinRoomRsp(userInfo: UserInfo) {
    let roomInfo = <RoomInfo>RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    let rsp = PROTOCOLROOM.JoinRoomRsp.create();
    rsp.RoomInfo = roomInfo.ToProto();
    rsp.PlayerSeat = userInfo.seat;
    NetUtil.Send(PROTOCOLROOM.JoinRoomRsp, rsp, userInfo.socket, Cmd.ID.CMD.JoinRoomRsp);
    this.UpdateRoomInfoNotice(roomInfo);
  }

  public WarMove(userInfo: UserInfo, req: PROTOCOLWAR.WarMove) {
    let roomInfo = <RoomInfo>RoomManager.Instance(RoomManager).MapRoom.get(userInfo.roomId);
    let rsp = PROTOCOLWAR.WarMove.create();
    rsp.Seat = req.Seat;
    rsp.MoveX = req.MoveX;
    rsp.MoveY = req.MoveY;
    let writer = NetUtil.Encode(PROTOCOLWAR.WarMove, rsp, Cmd.ID.CMD.WarMove);
    roomInfo.PushCommandByWriter(writer)
  }
}