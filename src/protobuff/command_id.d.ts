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
            CMD_ROOM_LIST_RSP = 1008,
            CMD_ENTER_GAME_REQ = 1009,
            CMD_ENTER_GAME_RSP = 1010,
            CMD_START_GAME_REQ = 1011,
            CMD_START_GAME_RSP = 1012,
            CMD_WAR_MOVE_REQ = 1013,
            CMD_WAR_MOVE_RSP = 1014,
            CMD_WAR_COMMAND_NOTICE = 1015
        }
    }
}
