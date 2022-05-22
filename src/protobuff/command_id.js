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
         * @enum {number}
         * @property {number} CMD_INVALID=0 CMD_INVALID value
         * @property {number} CMD_HEART_BEAT_REQ=1000 CMD_HEART_BEAT_REQ value
         * @property {number} CMD_HEART_BEAT_RSP=1001 CMD_HEART_BEAT_RSP value
         * @property {number} CMD_CREATE_ROOM_REQ=2000 CMD_CREATE_ROOM_REQ value
         * @property {number} CMD_CREATE_ROOM_RSP=2001 CMD_CREATE_ROOM_RSP value
         * @property {number} CMD_LEAVE_ROOM_REQ=2002 CMD_LEAVE_ROOM_REQ value
         * @property {number} CMD_LEAVE_ROOM_RSP=2003 CMD_LEAVE_ROOM_RSP value
         * @property {number} CMD_UPDATE_ROOM_INFO_NOTICE=2004 CMD_UPDATE_ROOM_INFO_NOTICE value
         * @property {number} CMD_ROOM_LIST_REQ=2005 CMD_ROOM_LIST_REQ value
         * @property {number} CMD_ROOM_LIST_RSP=2006 CMD_ROOM_LIST_RSP value
         * @property {number} CMD_JOIN_ROOM_REQ=2007 CMD_JOIN_ROOM_REQ value
         * @property {number} CMD_JOIN_ROOM_RSP=2008 CMD_JOIN_ROOM_RSP value
         * @property {number} CMD_ENTER_GAME_REQ=3000 CMD_ENTER_GAME_REQ value
         * @property {number} CMD_ENTER_GAME_RSP=3001 CMD_ENTER_GAME_RSP value
         * @property {number} CMD_START_GAME_REQ=3002 CMD_START_GAME_REQ value
         * @property {number} CMD_START_GAME_RSP=3003 CMD_START_GAME_RSP value
         * @property {number} CMD_FRAME_SYNC_MIN=10000 CMD_FRAME_SYNC_MIN value
         * @property {number} CMD_FRAME_TRANSPOND=10001 CMD_FRAME_TRANSPOND value
         * @property {number} CMD_WAR_SEQUENCE_NOTICE=10002 CMD_WAR_SEQUENCE_NOTICE value
         * @property {number} CMD_WAR_MOVE=10003 CMD_WAR_MOVE value
         * @property {number} CMD_FRAME_SYNC_MAX=20000 CMD_FRAME_SYNC_MAX value
         */
        ID.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CMD_INVALID"] = 0;
            values[valuesById[1000] = "CMD_HEART_BEAT_REQ"] = 1000;
            values[valuesById[1001] = "CMD_HEART_BEAT_RSP"] = 1001;
            values[valuesById[2000] = "CMD_CREATE_ROOM_REQ"] = 2000;
            values[valuesById[2001] = "CMD_CREATE_ROOM_RSP"] = 2001;
            values[valuesById[2002] = "CMD_LEAVE_ROOM_REQ"] = 2002;
            values[valuesById[2003] = "CMD_LEAVE_ROOM_RSP"] = 2003;
            values[valuesById[2004] = "CMD_UPDATE_ROOM_INFO_NOTICE"] = 2004;
            values[valuesById[2005] = "CMD_ROOM_LIST_REQ"] = 2005;
            values[valuesById[2006] = "CMD_ROOM_LIST_RSP"] = 2006;
            values[valuesById[2007] = "CMD_JOIN_ROOM_REQ"] = 2007;
            values[valuesById[2008] = "CMD_JOIN_ROOM_RSP"] = 2008;
            values[valuesById[3000] = "CMD_ENTER_GAME_REQ"] = 3000;
            values[valuesById[3001] = "CMD_ENTER_GAME_RSP"] = 3001;
            values[valuesById[3002] = "CMD_START_GAME_REQ"] = 3002;
            values[valuesById[3003] = "CMD_START_GAME_RSP"] = 3003;
            values[valuesById[10000] = "CMD_FRAME_SYNC_MIN"] = 10000;
            values[valuesById[10001] = "CMD_FRAME_TRANSPOND"] = 10001;
            values[valuesById[10002] = "CMD_WAR_SEQUENCE_NOTICE"] = 10002;
            values[valuesById[10003] = "CMD_WAR_MOVE"] = 10003;
            values[valuesById[20000] = "CMD_FRAME_SYNC_MAX"] = 20000;
            return values;
        })();

        return ID;
    })();

    return Cmd;
})();

module.exports = $root;
