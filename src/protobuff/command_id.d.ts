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
            CMD_CREATE_ROOM_REQ = 2000,
            CMD_CREATE_ROOM_RSP = 2001,
            CMD_LEAVE_ROOM_REQ = 2002,
            CMD_LEAVE_ROOM_RSP = 2003,
            CMD_UPDATE_ROOM_INFO_NOTICE = 2004,
            CMD_ROOM_LIST_REQ = 2005,
            CMD_ROOM_LIST_RSP = 2006,
            CMD_JOIN_ROOM_REQ = 2007,
            CMD_JOIN_ROOM_RSP = 2008,
            CMD_ENTER_GAME_REQ = 3000,
            CMD_ENTER_GAME_RSP = 3001,
            CMD_START_GAME_REQ = 3002,
            CMD_START_GAME_RSP = 3003,
            CMD_FRAME_SYNC_MIN = 10000,
            CMD_FRAME_TRANSPOND = 10001,
            CMD_WAR_SEQUENCE_NOTICE = 10002,
            CMD_WAR_MOVE = 10003,
            CMD_FRAME_SYNC_MAX = 20000
        }
    }
}
