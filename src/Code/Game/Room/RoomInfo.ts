import { UserInfo } from "./User/UserInfo";
import { UniqueIdManager } from "../UniqueIdManager";

export class RoomInfo {

  public roomName: string | null = "defalut room name";

  public uniqueId: number = UniqueIdManager.Null;

  private mapUser: Map<number, UserInfo> = new Map<number, UserInfo>();

  public get MapUser(): Map<number, UserInfo> {
    return this.mapUser;
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
    this.mapUser.set(userInfo.uniqueId, userInfo);
  }
}