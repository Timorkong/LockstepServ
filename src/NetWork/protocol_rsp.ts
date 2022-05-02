import { Socket } from "net";
import { PROTOCOL } from "./../../src/protobuff/command_protocol";
import protobuf, { BufferWriter, Writer } from "protobufjs";
import { Cmd } from "./../../src/protobuff/command_id";
import { NET_DEFINE } from "./msgData";

export class protocol_rsp {
  public CMD_HEART_BEAT_RSP(socket: Socket) {
    let rsp: PROTOCOL.CMD_HEART_BEAT_RSP = new PROTOCOL.CMD_HEART_BEAT_RSP();
    rsp.id = 1;
    rsp.name = "fdafd";
    this.Send(PROTOCOL.CMD_HEART_BEAT_RSP, rsp, socket, Cmd.ID.CMD.CMD_HEART_BEAT_RSP);
    PROTOCOL.CMD_HEART_BEAT_RSP.encode
  }

  public Send(encoder: any, rsp: any, socket: Socket, cmd: Cmd.ID.CMD) {
    let buffer = encoder.encode(rsp).finish();
    let writer: BufferWriter = Writer.create();
    writer.fixed32(buffer.length);
    writer.fixed32(<number>cmd);
    let msgidbuffer = writer.finish();
    writer.fixed32(0);
    let sequencebuffer = writer.finish();
    writer.custombytes(buffer);
    let sendbuffer = writer.finish();
    console.error(sendbuffer);
    socket.write(sendbuffer);
  }
}