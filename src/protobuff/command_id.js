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
            return values;
        })();

        return ID;
    })();

    return Cmd;
})();

module.exports = $root;
