import { Socket } from "net";
import { NetManager } from "../../../../NetWork/NetManager";
import { NET_DEFINE } from "../../../../NetWork/msgData";
import { UniqueIdManager } from "../../UniqueIdManager";
import { Util } from "./../../../Util/Util";
import { PROTOCOL_COMMON } from "./../../../../../src/protobuff/command_protocol_common";
import { RoomManager } from "../RoomManager";
import { Cmd } from "./../../../../../src/protobuff/command_id";
import { Writer } from "protobufjs";

export class UserInfo {
  public socket!: Socket;
  public seat: number = -1;
  public userLevel!: number;

  public uniqueId: number = UniqueIdManager.Null;

  public roomId: number = UniqueIdManager.Null;

  public isStartGame: boolean = false;

  public userName: string = "default name";

  constructor(userName: string) {
    this.userName = userName;
    this.uniqueId = UniqueIdManager.GetId;
    this.roomId = UniqueIdManager.Null;
    this.isStartGame = false;
    this.seat = -1;
  }

  public ToProto(): PROTOCOL_COMMON.IUserInfo {
    let ret = new PROTOCOL_COMMON.UserInfo();
    ret.userName = this.userName;
    ret.userSeat = this.seat;
    return ret;
  }

  public onSocket(socket: Socket) {
    console.error("set socket = ", socket.remotePort);

    this.socket = socket;

    this.socket.on("close", (hadError: boolean) => {
      console.error("onClose hadError = ", hadError);
      RoomManager.Instance(RoomManager).LeaveRoom(this);
    });
    this.socket.on("connect", () => {
      console.error("on user connect");
    });
    this.socket.on("data", (data: Buffer) => {
      try {
        let startIndex = 0;
        let endIndex = 0;
        while (true) {
          let size = data.readUInt32BE(endIndex);
          let msgId = data.readUInt32BE(endIndex + NET_DEFINE.HEAD_LENTH_SIZE);
          startIndex = endIndex + NET_DEFINE.HEAD_SIZE;
          endIndex = startIndex + size;
          let packBuffer = data.subarray(startIndex, endIndex);;
          if (msgId > Cmd.ID.CMD.CMD_FRAME_SYNC_MIN && msgId < Cmd.ID.CMD.CMD_FRAME_SYNC_MAX) {
            packBuffer = data.subarray(startIndex - NET_DEFINE.HEAD_SIZE, endIndex)
            packBuffer.writeInt32LE(size);
            packBuffer.writeInt32LE(msgId, NET_DEFINE.HEAD_MSG_ID_SIZE);
            msgId = Cmd.ID.CMD.CMD_FRAME_TRANSPOND;
          }

          if (process.env.NODE_DEBUG == "true") {
            console.log(`receive msg size = ${size} msgId = ${msgId} msg = ${Util.Bytes2String(packBuffer)}`)
          }
          NetManager.Instance(NetManager).dispatch_req?.DisPatch(msgId, packBuffer, this);
          if (endIndex >= data.length) break;
        }
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