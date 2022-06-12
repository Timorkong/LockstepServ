import * as $protobuf from "protobufjs";
/** Namespace Cmd. */
export namespace Cmd {

    /** Namespace ID. */
    namespace ID {

        /** CMD enum. */
        enum CMD {
            Invaild = 0,
            HeartBeatReq = 1000,
            HeartBeatRsp = 1001,
            CreateRoomReq = 2000,
            CreateRoomRsp = 2001,
            LeaveRoomReq = 2002,
            LeaveRoomRsp = 2003,
            UpdateRoomInfoNotice = 2004,
            RoomListReq = 2005,
            RoomListRsp = 2006,
            JoinRoomReq = 2007,
            JoinRoomRsp = 2008,
            EnterGameReq = 3000,
            EnterGameRsp = 3001,
            StartGameReq = 3002,
            StartGameRsp = 3003,
            FrameSyncMin = 10000,
            FrameTranspond = 10001,
            WarSequenceNotice = 10002,
            WarMove = 10003,
            FrameSyncMax = 20000
        }
    }
}
