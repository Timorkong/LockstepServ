import { RoomManager } from "../Game/Room/RoomManager";
import { PROTOCOLCOMMON } from "src/protobuff/command_protocol_common";
export class Util {
  public static GetRoomList(): PROTOCOLCOMMON.IRoomInfo[] {
    let ret: PROTOCOLCOMMON.IRoomInfo[] = [];
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