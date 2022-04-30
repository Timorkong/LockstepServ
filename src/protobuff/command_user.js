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

    Cmd.User = (function() {

        /**
         * Namespace User.
         * @memberof Cmd
         * @namespace
         */
        var User = {};

        /**
         * CMD enum.
         * @name Cmd.User.CMD
         * @enum {number}
         * @property {number} CMD_INVALID=65535 CMD_INVALID value
         * @property {number} CMD_HEART_BEAT_REQ=4096 CMD_HEART_BEAT_REQ value
         * @property {number} CMD_HEART_BEAT_RSP=4097 CMD_HEART_BEAT_RSP value
         */
        User.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[65535] = "CMD_INVALID"] = 65535;
            values[valuesById[4096] = "CMD_HEART_BEAT_REQ"] = 4096;
            values[valuesById[4097] = "CMD_HEART_BEAT_RSP"] = 4097;
            return values;
        })();

        /**
         * RET enum.
         * @name Cmd.User.RET
         * @enum {number}
         * @property {number} RET_SYS_ERR=-1 RET_SYS_ERR value
         * @property {number} RET_SUCCESS=0 RET_SUCCESS value
         * @property {number} RET_MODULE_SWITCH_OFF=256 RET_MODULE_SWITCH_OFF value
         */
        User.RET = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[-1] = "RET_SYS_ERR"] = -1;
            values[valuesById[0] = "RET_SUCCESS"] = 0;
            values[valuesById[256] = "RET_MODULE_SWITCH_OFF"] = 256;
            return values;
        })();

        return User;
    })();

    return Cmd;
})();

module.exports = $root;
