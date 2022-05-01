import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import protobuff, { BufferReader, Reader } from "protobufjs"

export class protocol_req {
  public CMD_HEART_BEAT_REQ(buffer: Buffer) {

    let buff = Reader.create(buffer);
    let req = PROTOCOL.CMD_HEART_BEAT_REQ.decode(buff)
  }
}