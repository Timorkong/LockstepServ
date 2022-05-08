import { RoomManager } from "../Game/Room/RoomManager";
import { PROTOCOL_COMMON } from "src/protobuff/command_protocol_common";
export class Util {
  public static GetRoomList(): PROTOCOL_COMMON.IRoomInfo[] {
    let ret: PROTOCOL_COMMON.IRoomInfo[] = [];
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