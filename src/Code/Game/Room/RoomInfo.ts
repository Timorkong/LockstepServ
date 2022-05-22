import { UserInfo } from "./User/UserInfo";
import { UniqueIdManager } from "../UniqueIdManager";
import { PROTOCOL_COMMON } from "./../../../../src/protobuff/command_protocol_common";
import { Writer, BufferWriter } from "protobufjs";
import { NetUtil } from "./../../../../src/Code/Util/NetUtil";
import { PROTOCOL_WAR } from "./../../../../src/protobuff/command_protocol_war";
import { Cmd } from "./../../../../src/protobuff/command_id";

export class RoomInfo {

  public roomName: string | null = "defalut room name";

  public uniqueId: number = UniqueIdManager.Null;

  private mapUser: Map<number, UserInfo> = new Map<number, UserInfo>();

  public warWrater: BufferWriter = Writer.create();

  public Running: boolean = false;

  public sequence: number = 0;
  //角色位置
  public playerSeat: number = 0;

  public get MapUser(): Map<number, UserInfo> {
    return this.mapUser;
  }

  public ToProto(ignoreId: number = UniqueIdManager.Null): PROTOCOL_COMMON.IRoomInfo {
    let ret = PROTOCOL_COMMON.RoomInfo.create();
    ret.userList = [];
    ret.roomName = this.roomName;
    ret.roomUniqueId = this.uniqueId;
    this.mapUser.forEach((userInfo, id) => {
      if (id == ignoreId) return;
      ret.userList.push(userInfo.ToProto());
    })
    return ret;
  }

  constructor(roomName: string | null) {
    this.roomName = roomName;
    this.sequence = 0;
    this.playerSeat = 1;
    this.uniqueId = UniqueIdManager.GetId;
  }

  public HasUser(userId: number): boolean {
    return this.mapUser.has(userId);
  }

  public UserLeaveId(userId: number) {
    if (this.mapUser.has(userId)) {
      this.UserLeave(this.mapUser.get(userId));
    }
  }

  public UserLeave(userInfo: UserInfo | undefined) {
    if (userInfo == null) return;
    userInfo.roomId = UniqueIdManager.Null;
    this.mapUser.delete(userInfo.uniqueId);
  }

  public UserEnterRoom(userInfo: UserInfo | undefined) {
    if (userInfo == null) return;
    userInfo.roomId = this.uniqueId;
    userInfo.seat = this.playerSeat++;
    this.mapUser.set(userInfo.uniqueId, userInfo);
  }

  public PushCommandByWriter(writer: Writer) {
    let buffer = writer.finish();
    this.PushCommandByBuffer(buffer);
  }

  public PushCommandByBuffer(buffer: Uint8Array) {
    this.warWrater.custombytes(buffer);
  }

  public Flush(): Uint8Array {
    let ret = this.warWrater.finish();
    this.warWrater.reset();
    return ret;
  }

  public PushSequence(isAddSequence: boolean) {
    let rsp = PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE.create();
    rsp.sequence = this.sequence;
    if (isAddSequence) this.sequence++;
    let writer = NetUtil.Encode(PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE, rsp, Cmd.ID.CMD.CMD_WAR_SEQUENCE_NOTICE);
    this.PushCommandByWriter(writer)
  }

  public SendWarMessage() {
    let command = this.Flush();
    if (command.length == 0) return;
    this.MapUser.forEach(user => {
      if (process.env.NODE_DEBUG == "true") {
        console.log(`send msg size = ${command.length}`)
      }
      user.socket.write(command);
    })
  }

  public Update() {
    if (this.Running == false) return;
    this.SendWarMessage();
    this.PushSequence(true);
  }
}