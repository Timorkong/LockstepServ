import { Socket } from "net";

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
    console.error("on Data buffer lenth = ", Buffer.length);
  }

  private onError(err: Error) {
    console.error("onError = ", err.message);
  }

  private onClose(hadError: boolean) {
    console.error("onClose hadError = ", hadError);
  }
}