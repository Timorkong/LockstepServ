import { Socket } from "net";
import { Cmd } from "./../../../src/protobuff/command_id";
import { BufferWriter, Writer } from "protobufjs";
import { Util } from "./Util";
import { NET_DEFINE } from "./../../../src/NetWork/msgData";


export class NetUtil {
  public static Encode(encoder: any, rsp: any, cmd: Cmd.ID.CMD): Writer {
    let buffer = encoder.encode(rsp).finish();
    let writer: BufferWriter = Writer.create();
    writer.fixed32(buffer.length);
    writer.fixed32(<number>cmd);
    writer.custombytes(buffer);
    return writer;
  }

  public static Send(encoder: any, rsp: any, socket: Socket, cmd: Cmd.ID.CMD) {
    let sendbuffer = this.Encode(encoder, rsp, cmd).finish();
    if (process.env.NODE_DEBUG == "true") {
      console.log(`send msg size = ${sendbuffer.length - NET_DEFINE.HEAD_SIZE} msgId = ${<number>cmd} msg = ${Util.Bytes2String(sendbuffer)}`)
    }
    socket.write(sendbuffer);
  }
}