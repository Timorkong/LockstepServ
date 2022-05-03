import { Socket } from "net";
import { NetManager } from "../../../../NetWork/NetManager";
import { NET_DEFINE } from "../../../../NetWork/msgData";
import { UniqueIdManager } from "../../UniqueIdManager";

export class UserInfo {
  public socket!: Socket;

  public userLevel!: number;

  public uniqueId: number = UniqueIdManager.Null;

  public roomId: number = UniqueIdManager.Null;

  public userName: string = "default name";

  constructor(userName: string) {
    this.userName = userName;
    this.uniqueId = UniqueIdManager.GetId;
    this.roomId = UniqueIdManager.Null;
  }

  public onSocket(socket: Socket) {
    console.error("set socket = ", socket.remotePort);

    this.socket = socket;

    this.socket.on("close", (hadError: boolean) => {
      console.error("onClose hadError = ", hadError);
    });
    this.socket.on("connect", () => {
      console.error("on user connect");
    });
    this.socket.on("data", (data: Buffer) => {
      try {
        let size = data.readUInt32BE();
        let msgId = data.readUInt32BE(NET_DEFINE.HEAD_LENTH_SIZE);
        let sequnece = data.readUInt32BE(NET_DEFINE.HEAD_LENTH_SIZE + NET_DEFINE.HEAD_MSG_ID_SIZE);
        let msgBuffer = data.slice(NET_DEFINE.HEAD_SIZE);
        NetManager.Instance(NetManager).dispatch_req?.DisPatch(msgId, msgBuffer, this);
      }
      catch (err) {
        console.error(err);
      }
    });
    this.socket.on("error", (err: Error) => {
      console.error("onError = ", err.message);
    });
  }
}