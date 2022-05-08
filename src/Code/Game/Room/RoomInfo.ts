import { UserInfo } from "./User/UserInfo";
import { UniqueIdManager } from "../UniqueIdManager";
import { PROTOCOL_COMMON } from "./../../../../src/protobuff/command_protocol_common";
import { Writer } from "protobufjs";

export class RoomInfo {

  public roomName: string | null = "defalut room name";

  public uniqueId: number = UniqueIdManager.Null;

  private mapUser: Map<number, UserInfo> = new Map<number, UserInfo>();

  public warWrater: Writer = new Writer();

  public get MapUser(): Map<number, UserInfo> {
    return this.mapUser;
  }

  public ToProto(): PROTOCOL_COMMON.IRoomInfo {
    let ret = PROTOCOL_COMMON.RoomInfo.create();
    ret.userList = [];
    ret.roomName = this.roomName;
    this.mapUser.forEach((userInfo, id) => {
      ret.userList.push(userInfo.ToProto());
    })
    return ret;
  }

  constructor(roomName: string | null) {
    this.roomName = roomName;
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
    userInfo.seat = UniqueIdManager.GetId;
    this.mapUser.set(userInfo.uniqueId, userInfo);
  }

  public PushCommand(writer: Writer) {
    this.warWrater.custombytes(writer.finish());
  }

  public Flush(): Uint8Array {
    let ret = this.warWrater.finish();
    this.warWrater.reset();
    return ret;
  }
}