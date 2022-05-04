import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import protobuff, { BufferReader, Reader } from "protobufjs"
import { Socket } from "net";
import { NetManager } from "./NetManager";
import { UserInfo } from "./../../src/Code/Game/Room/User/UserInfo";
import { PROTOCOL_ROOM } from "./../../src/protobuff/command_protocol_room";

export class protocol_req {
  public CMD_HEART_BEAT_REQ(...args: any[]) {
    // let buffer: Buffer = args[0][0]
    let userInfo: UserInfo = args[0][1]
    // let buff = Reader.create(buffer);
    // let req = PROTOCOL.CMD_HEART_BEAT_REQ.decode(buff)
    // console.error("CMD_HEART_BEAT_REQ id = ", req.id, " name = ", req.name);
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
}