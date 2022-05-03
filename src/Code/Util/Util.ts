import { PROTOCOL_ROOM } from "./../../protobuff/command_protocol_room";
import { RoomManager } from "../Game/Room/RoomManager";
export class Util {
  public static GetRoomList(): PROTOCOL_ROOM.IRoomInfo[] {
    let ret: PROTOCOL_ROOM.IRoomInfo[] = [];
    RoomManager.Instance(RoomManager).MapRoom.forEach(roomInfo => {
      let room = PROTOCOL_ROOM.RoomInfo.create();
      roomInfo.MapUser.forEach(userInfo => {
        let user = PROTOCOL_ROOM.UserInfo.create();
        user.userName = userInfo.userName;
        room.userList.push(user);
      })
      ret.push(room);
    })
    return ret;
  }
}