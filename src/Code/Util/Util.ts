import { PROTOCOL_ROOM } from "./../../protobuff/command_protocol_room";
import { RoomManager } from "../Game/Room/RoomManager";
import { RoomInfo } from "../Game/Room/RoomInfo";
export class Util {
  public static GetRoomList(): PROTOCOL_ROOM.IRoomInfo[] {
    let ret: PROTOCOL_ROOM.IRoomInfo[] = [];
    RoomManager.Instance(RoomManager).MapRoom.forEach(roomInfo => {
      let room = roomInfo.ToProto();
      ret.push(room);
    })
    return ret;
  }

  public static Bytes2String(bytes: protobuf.Buffer): string {
    let ret: string = "";
    bytes.forEach(item => {
      ret += item.toString() + " ";
    });
    return ret;
  }
}