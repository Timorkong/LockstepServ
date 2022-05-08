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
         * @property {number} CMD_CREATE_ROOM_REQ=1002 CMD_CREATE_ROOM_REQ value
         * @property {number} CMD_CREATE_ROOM_RSP=1003 CMD_CREATE_ROOM_RSP value
         * @property {number} CMD_LEAVE_ROOM_REQ=1004 CMD_LEAVE_ROOM_REQ value
         * @property {number} CMD_LEAVE_ROOM_RSP=1005 CMD_LEAVE_ROOM_RSP value
         * @property {number} CMD_LEAVE_ROOM_NOTICE=1006 CMD_LEAVE_ROOM_NOTICE value
         * @property {number} CMD_ROOM_LIST_REQ=1007 CMD_ROOM_LIST_REQ value
         * @property {number} CMD_ROOM_LIST_RSP=1008 CMD_ROOM_LIST_RSP value
         * @property {number} CMD_ENTER_GAME_REQ=1009 CMD_ENTER_GAME_REQ value
         * @property {number} CMD_ENTER_GAME_RSP=1010 CMD_ENTER_GAME_RSP value
         * @property {number} CMD_START_GAME_REQ=1011 CMD_START_GAME_REQ value
         * @property {number} CMD_START_GAME_RSP=1012 CMD_START_GAME_RSP value
         * @property {number} CMD_WAR_MOVE_REQ=1013 CMD_WAR_MOVE_REQ value
         * @property {number} CMD_WAR_MOVE_RSP=1014 CMD_WAR_MOVE_RSP value
         * @property {number} CMD_WAR_COMMAND_NOTICE=1015 CMD_WAR_COMMAND_NOTICE value
         */
        ID.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CMD_INVALID"] = 0;
            values[valuesById[1000] = "CMD_HEART_BEAT_REQ"] = 1000;
            values[valuesById[1001] = "CMD_HEART_BEAT_RSP"] = 1001;
            values[valuesById[1002] = "CMD_CREATE_ROOM_REQ"] = 1002;
            values[valuesById[1003] = "CMD_CREATE_ROOM_RSP"] = 1003;
            values[valuesById[1004] = "CMD_LEAVE_ROOM_REQ"] = 1004;
            values[valuesById[1005] = "CMD_LEAVE_ROOM_RSP"] = 1005;
            values[valuesById[1006] = "CMD_LEAVE_ROOM_NOTICE"] = 1006;
            values[valuesById[1007] = "CMD_ROOM_LIST_REQ"] = 1007;
            values[valuesById[1008] = "CMD_ROOM_LIST_RSP"] = 1008;
            values[valuesById[1009] = "CMD_ENTER_GAME_REQ"] = 1009;
            values[valuesById[1010] = "CMD_ENTER_GAME_RSP"] = 1010;
            values[valuesById[1011] = "CMD_START_GAME_REQ"] = 1011;
            values[valuesById[1012] = "CMD_START_GAME_RSP"] = 1012;
            values[valuesById[1013] = "CMD_WAR_MOVE_REQ"] = 1013;
            values[valuesById[1014] = "CMD_WAR_MOVE_RSP"] = 1014;
            values[valuesById[1015] = "CMD_WAR_COMMAND_NOTICE"] = 1015;
            return values;
        })();

        return ID;
    })();

    return Cmd;
})();

module.exports = $root;
