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
         * @property {number} CMD_HEART_BEAT_REQ=4096 CMD_HEART_BEAT_REQ value
         * @property {number} CMD_HEART_BEAT_RSP=4097 CMD_HEART_BEAT_RSP value
         * @property {number} CMD_HEART_BEAT_RSP1=16 CMD_HEART_BEAT_RSP1 value
         */
        ID.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CMD_INVALID"] = 0;
            values[valuesById[4096] = "CMD_HEART_BEAT_REQ"] = 4096;
            values[valuesById[4097] = "CMD_HEART_BEAT_RSP"] = 4097;
            values[valuesById[16] = "CMD_HEART_BEAT_RSP1"] = 16;
            return values;
        })();

        return ID;
    })();

    return Cmd;
})();

module.exports = $root;
