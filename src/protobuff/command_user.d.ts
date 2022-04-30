import * as $protobuf from "protobufjs";
/** Namespace Cmd. */
export namespace Cmd {

    /** Namespace User. */
    namespace User {

        /** CMD enum. */
        enum CMD {
            CMD_INVALID = 65535,
            CMD_HEART_BEAT_REQ = 4096,
            CMD_HEART_BEAT_RSP = 4097
        }

        /** RET enum. */
        enum RET {
            RET_SYS_ERR = -1,
            RET_SUCCESS = 0,
            RET_MODULE_SWITCH_OFF = 256
        }
    }
}
