import * as $protobuf from "protobufjs";
/** Namespace Cmd. */
export namespace Cmd {

    /** Namespace ID. */
    namespace ID {

        /** CMD enum. */
        enum CMD {
            CMD_INVALID = 0,
            CMD_HEART_BEAT_REQ = 1000,
            CMD_HEART_BEAT_RSP = 1001,
            CMD_CREATE_ROOM_REQ = 1002,
            CMD_CREATE_ROOM_RSP = 1003,
            CMD_LEAVE_ROOM_REQ = 1004,
            CMD_LEAVE_ROOM_RSP = 1005,
            CMD_LEAVE_ROOM_NOTICE = 1006,
            CMD_ROOM_LIST_REQ = 1007,
            CMD_ROOM_LIST_RSP = 1008
        }
    }
}
