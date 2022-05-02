import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import protobuff, { BufferReader, Reader } from "protobufjs"
import { Socket } from "net";
import { NetManager } from "./NetManager";

export class protocol_req {
  public CMD_HEART_BEAT_REQ(...args: any[]) {

    let buffer: Buffer = args[0][0]
    let scoket: Socket = args[0][1]
    let buff = Reader.create(buffer);
    let req = PROTOCOL.CMD_HEART_BEAT_REQ.decode(buff)
    console.error("CMD_HEART_BEAT_REQ id = ", req.id, " name = ", req.name);
    NetManager.Instance(NetManager).protocol_rsp?.CMD_HEART_BEAT_RSP(scoket);
  }
}