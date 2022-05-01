import { Socket } from "net";
import { NetManager } from "./../../../src/NetWork/NetManager";

export class UserInfo {
  public socket!: Socket;

  public userLevel!: number;

  public userUnique!: number;

  public userName!: string;

  public onSocket(socket: Socket) {
    this.socket = socket;
    this.socket.on("close", this.onClose);
    this.socket.on("connect", this.onConnect);
    this.socket.on("data", this.onData);
    this.socket.on("error", this.onError);
  }

  private onConnect() {
    console.error("on user connect");
  }

  private onData(data: Buffer) {
    try {
      let size = data.readInt16BE();
      let msgId = data.readUInt32BE(2);
      let sequnece = data.readUInt32BE(6);
      let msgBuffer = data.slice(10);
      let arr: Uint8Array = new Uint8Array();
      NetManager.Instance(NetManager).dispatch_req?.DisPatch(msgId, msgBuffer);
    }
    catch (err) {
      console.error(err);
    }
  }

  private onError(err: Error) {
    console.error("onError = ", err.message);
  }

  private onClose(hadError: boolean) {
    console.error("onClose hadError = ", hadError);
  }
}