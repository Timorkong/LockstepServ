/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Cmd = (function() {

    /**
     * Namespace Cmd.
     * @exports Cmd
     * @namespace
     */
    var Cmd = {};

    Cmd.ID = (function() {

        /**
         * Namespace ID.
         * @memberof Cmd
         * @namespace
         */
        var ID = {};

        /**
         * CMD enum.
         * @name Cmd.ID.CMD
         * @enum {string}
         * @property {number} Invaild=0 Invaild value
         * @property {number} HeartBeatReq=1000 HeartBeatReq value
         * @property {number} HeartBeatRsp=1001 HeartBeatRsp value
         * @property {number} CreateRoomReq=2000 CreateRoomReq value
         * @property {number} CreateRoomRsp=2001 CreateRoomRsp value
         * @property {number} LeaveRoomReq=2002 LeaveRoomReq value
         * @property {number} LeaveRoomRsp=2003 LeaveRoomRsp value
         * @property {number} UpdateRoomInfoNotice=2004 UpdateRoomInfoNotice value
         * @property {number} RoomListReq=2005 RoomListReq value
         * @property {number} RoomListRsp=2006 RoomListRsp value
         * @property {number} JoinRoomReq=2007 JoinRoomReq value
         * @property {number} JoinRoomRsp=2008 JoinRoomRsp value
         * @property {number} EnterGameReq=3000 EnterGameReq value
         * @property {number} EnterGameRsp=3001 EnterGameRsp value
         * @property {number} StartGameReq=3002 StartGameReq value
         * @property {number} StartGameRsp=3003 StartGameRsp value
         * @property {number} FrameSyncMin=10000 FrameSyncMin value
         * @property {number} FrameTranspond=10001 FrameTranspond value
         * @property {number} WarSequenceNotice=10002 WarSequenceNotice value
         * @property {number} WarMove=10003 WarMove value
         * @property {number} FrameSyncMax=20000 FrameSyncMax value
         */
        ID.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Invaild"] = 0;
            values[valuesById[1000] = "HeartBeatReq"] = 1000;
            values[valuesById[1001] = "HeartBeatRsp"] = 1001;
            values[valuesById[2000] = "CreateRoomReq"] = 2000;
            values[valuesById[2001] = "CreateRoomRsp"] = 2001;
            values[valuesById[2002] = "LeaveRoomReq"] = 2002;
            values[valuesById[2003] = "LeaveRoomRsp"] = 2003;
            values[valuesById[2004] = "UpdateRoomInfoNotice"] = 2004;
            values[valuesById[2005] = "RoomListReq"] = 2005;
            values[valuesById[2006] = "RoomListRsp"] = 2006;
            values[valuesById[2007] = "JoinRoomReq"] = 2007;
            values[valuesById[2008] = "JoinRoomRsp"] = 2008;
            values[valuesById[3000] = "EnterGameReq"] = 3000;
            values[valuesById[3001] = "EnterGameRsp"] = 3001;
            values[valuesById[3002] = "StartGameReq"] = 3002;
            values[valuesById[3003] = "StartGameRsp"] = 3003;
            values[valuesById[10000] = "FrameSyncMin"] = 10000;
            values[valuesById[10001] = "FrameTranspond"] = 10001;
            values[valuesById[10002] = "WarSequenceNotice"] = 10002;
            values[valuesById[10003] = "WarMove"] = 10003;
            values[valuesById[20000] = "FrameSyncMax"] = 20000;
            return values;
        })();

        return ID;
    })();

    return Cmd;
})();

module.exports = $root;
