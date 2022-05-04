import { RoomInfo } from "./RoomInfo";
import { UserInfo } from "./User/UserInfo";
import { Singleton } from "./../../../../src/Code/Singleton/Singleton";
import { UniqueIdManager } from "../UniqueIdManager";

export class RoomManager extends Singleton<RoomManager> {
  private mapRoom: Map<number, RoomInfo> = new Map<number, RoomInfo>();

  private mapUser: Map<number, UserInfo> = new Map<number, UserInfo>();

  public get MapRoom(): Map<number, RoomInfo> {
    return this.mapRoom;
  }

  public EnterRoom(roomInfo: RoomInfo | undefined, userInfo: UserInfo | undefined) {
    if (userInfo == null || userInfo.uniqueId == UniqueIdManager.Null ||
      roomInfo == null || roomInfo.uniqueId == UniqueIdManager.Null) {
      console.error("角色数据异常");
      return;
    }

    if (!this.mapUser.has(userInfo.uniqueId) || !this.mapRoom.has(roomInfo.uniqueId)) {
      console.error("房间/角色不存在");
      return;
    }

    roomInfo.UserEnterRoom(userInfo);
  }

  public EnterRoomByid(roomId: number, userId: number) {
    var userInfo: UserInfo | undefined = this.mapUser.get(userId);
    let roomInfo: RoomInfo | undefined = this.mapRoom.get(roomId);
    this.EnterRoom(roomInfo, userInfo);
  }

  public LeaveRoom(userInfo: UserInfo | undefined): RoomInfo | undefined {
    if (userInfo == null) return undefined;
    let roomInfo = this.mapRoom.get(userInfo?.roomId);
    if (roomInfo) {
      roomInfo.UserLeave(userInfo);
      if (roomInfo.MapUser.size == 0) {
        this.RemoveRoom(roomInfo);
      }
    }
    return roomInfo;
  }

  public AddUser2Map(userInfo: UserInfo) {
    if (userInfo == null || userInfo.uniqueId == null) {
      console.error("角色数据异常");
      return;
    }

    if (this.mapUser.has(userInfo.uniqueId)) {
      console.error("角色id冲突");
      return;
    }
    this.mapUser.set(userInfo.uniqueId, userInfo);
  }

  public CreateUser(userName: string): UserInfo {
    let ret = new UserInfo(userName);
    this.AddUser2Map(ret);
    return ret;
  }

  public DeleteUser(userInfo: UserInfo) {
    if (this.mapRoom.has(userInfo.roomId)) {
      let roomInfo = this.mapRoom.get(userInfo.roomId);
      roomInfo?.UserLeave(userInfo);
    }
  }

  public AddRoom2Map(roomInfo: RoomInfo) {
    if (roomInfo == null || roomInfo.uniqueId == null) {
      console.error("房间数据异常");
      return;
    }

    if (this.mapRoom.has(roomInfo.uniqueId)) {
      console.error("房间id冲突");
      return;
    }
    this.mapRoom.set(roomInfo.uniqueId, roomInfo);
  }
  public CreateRoom(roomName: string | null = null): RoomInfo {
    let ret = new RoomInfo(roomName);
    this.AddRoom2Map(ret);
    return ret;
  }

  public RemoveRoom(roomInfo: RoomInfo | undefined) {
    if (roomInfo) this.mapRoom.delete(roomInfo.uniqueId);
  }

  public RemoveRoomById(roomId: number) {
    if (!this.mapRoom.has(roomId)) return;
    let roomInfo = this.mapRoom.get(roomId);
    this.RemoveRoom(roomInfo);
  }

}