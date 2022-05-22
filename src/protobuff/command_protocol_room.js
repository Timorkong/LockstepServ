/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOL_ROOM = (function() {

    /**
     * Namespace PROTOCOL_ROOM.
     * @exports PROTOCOL_ROOM
     * @namespace
     */
    var PROTOCOL_ROOM = {};

    PROTOCOL_ROOM.CMD_ROOM_LIST_REQ = (function() {

        /**
         * Properties of a CMD_ROOM_LIST_REQ.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_ROOM_LIST_REQ
         */

        /**
         * Constructs a new CMD_ROOM_LIST_REQ.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_ROOM_LIST_REQ.
         * @implements ICMD_ROOM_LIST_REQ
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ=} [properties] Properties to set
         */
        function CMD_ROOM_LIST_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CMD_ROOM_LIST_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_REQ} CMD_ROOM_LIST_REQ instance
         */
        CMD_ROOM_LIST_REQ.create = function create(properties) {
            return new CMD_ROOM_LIST_REQ(properties);
        };

        /**
         * Encodes the specified CMD_ROOM_LIST_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ} message CMD_ROOM_LIST_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ROOM_LIST_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CMD_ROOM_LIST_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ} message CMD_ROOM_LIST_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ROOM_LIST_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_ROOM_LIST_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_REQ} CMD_ROOM_LIST_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ROOM_LIST_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_ROOM_LIST_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_ROOM_LIST_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_REQ} CMD_ROOM_LIST_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ROOM_LIST_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_ROOM_LIST_REQ message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_ROOM_LIST_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CMD_ROOM_LIST_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_REQ} CMD_ROOM_LIST_REQ
         */
        CMD_ROOM_LIST_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_ROOM_LIST_REQ)
                return object;
            return new $root.PROTOCOL_ROOM.CMD_ROOM_LIST_REQ();
        };

        /**
         * Creates a plain object from a CMD_ROOM_LIST_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @static
         * @param {PROTOCOL_ROOM.CMD_ROOM_LIST_REQ} message CMD_ROOM_LIST_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_ROOM_LIST_REQ.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CMD_ROOM_LIST_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_ROOM_LIST_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_ROOM_LIST_REQ;
    })();

    PROTOCOL_ROOM.CMD_ROOM_LIST_RSP = (function() {

        /**
         * Properties of a CMD_ROOM_LIST_RSP.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_ROOM_LIST_RSP
         * @property {Array.<PROTOCOL_COMMON.IRoomInfo>|null} [roomList] CMD_ROOM_LIST_RSP roomList
         */

        /**
         * Constructs a new CMD_ROOM_LIST_RSP.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_ROOM_LIST_RSP.
         * @implements ICMD_ROOM_LIST_RSP
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP=} [properties] Properties to set
         */
        function CMD_ROOM_LIST_RSP(properties) {
            this.roomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_ROOM_LIST_RSP roomList.
         * @member {Array.<PROTOCOL_COMMON.IRoomInfo>} roomList
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @instance
         */
        CMD_ROOM_LIST_RSP.prototype.roomList = $util.emptyArray;

        /**
         * Creates a new CMD_ROOM_LIST_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_RSP} CMD_ROOM_LIST_RSP instance
         */
        CMD_ROOM_LIST_RSP.create = function create(properties) {
            return new CMD_ROOM_LIST_RSP(properties);
        };

        /**
         * Encodes the specified CMD_ROOM_LIST_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP} message CMD_ROOM_LIST_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ROOM_LIST_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_ROOM_LIST_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP} message CMD_ROOM_LIST_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ROOM_LIST_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_ROOM_LIST_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_RSP} CMD_ROOM_LIST_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ROOM_LIST_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_ROOM_LIST_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roomList && message.roomList.length))
                        message.roomList = [];
                    message.roomList.push($root.PROTOCOL_COMMON.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_ROOM_LIST_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_RSP} CMD_ROOM_LIST_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ROOM_LIST_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_ROOM_LIST_RSP message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_ROOM_LIST_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.PROTOCOL_COMMON.RoomInfo.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_ROOM_LIST_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_ROOM_LIST_RSP} CMD_ROOM_LIST_RSP
         */
        CMD_ROOM_LIST_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_ROOM_LIST_RSP)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_ROOM_LIST_RSP();
            if (object.roomList) {
                if (!Array.isArray(object.roomList))
                    throw TypeError(".PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.roomList: array expected");
                message.roomList = [];
                for (var i = 0; i < object.roomList.length; ++i) {
                    if (typeof object.roomList[i] !== "object")
                        throw TypeError(".PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.roomList: object expected");
                    message.roomList[i] = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_ROOM_LIST_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @static
         * @param {PROTOCOL_ROOM.CMD_ROOM_LIST_RSP} message CMD_ROOM_LIST_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_ROOM_LIST_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomList = [];
            if (message.roomList && message.roomList.length) {
                object.roomList = [];
                for (var j = 0; j < message.roomList.length; ++j)
                    object.roomList[j] = $root.PROTOCOL_COMMON.RoomInfo.toObject(message.roomList[j], options);
            }
            return object;
        };

        /**
         * Converts this CMD_ROOM_LIST_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_ROOM_LIST_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_ROOM_LIST_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_ROOM_LIST_RSP;
    })();

    PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ = (function() {

        /**
         * Properties of a CMD_CREATE_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_CREATE_ROOM_REQ
         * @property {string|null} [roomName] CMD_CREATE_ROOM_REQ roomName
         */

        /**
         * Constructs a new CMD_CREATE_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_CREATE_ROOM_REQ.
         * @implements ICMD_CREATE_ROOM_REQ
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ=} [properties] Properties to set
         */
        function CMD_CREATE_ROOM_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_CREATE_ROOM_REQ roomName.
         * @member {string|null|undefined} roomName
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @instance
         */
        CMD_CREATE_ROOM_REQ.prototype.roomName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_CREATE_ROOM_REQ _roomName.
         * @member {"roomName"|undefined} _roomName
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @instance
         */
        Object.defineProperty(CMD_CREATE_ROOM_REQ.prototype, "_roomName", {
            get: $util.oneOfGetter($oneOfFields = ["roomName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_CREATE_ROOM_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ} CMD_CREATE_ROOM_REQ instance
         */
        CMD_CREATE_ROOM_REQ.create = function create(properties) {
            return new CMD_CREATE_ROOM_REQ(properties);
        };

        /**
         * Encodes the specified CMD_CREATE_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ} message CMD_CREATE_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_CREATE_ROOM_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomName);
            return writer;
        };

        /**
         * Encodes the specified CMD_CREATE_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ} message CMD_CREATE_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_CREATE_ROOM_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_CREATE_ROOM_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ} CMD_CREATE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_CREATE_ROOM_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_CREATE_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ} CMD_CREATE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_CREATE_ROOM_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_CREATE_ROOM_REQ message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_CREATE_ROOM_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.roomName != null && message.hasOwnProperty("roomName")) {
                properties._roomName = 1;
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            }
            return null;
        };

        /**
         * Creates a CMD_CREATE_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ} CMD_CREATE_ROOM_REQ
         */
        CMD_CREATE_ROOM_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ();
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            return message;
        };

        /**
         * Creates a plain object from a CMD_CREATE_ROOM_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ} message CMD_CREATE_ROOM_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_CREATE_ROOM_REQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.roomName != null && message.hasOwnProperty("roomName")) {
                object.roomName = message.roomName;
                if (options.oneofs)
                    object._roomName = "roomName";
            }
            return object;
        };

        /**
         * Converts this CMD_CREATE_ROOM_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_CREATE_ROOM_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_CREATE_ROOM_REQ;
    })();

    PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP = (function() {

        /**
         * Properties of a CMD_CREATE_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_CREATE_ROOM_RSP
         * @property {number|null} [playerSeat] CMD_CREATE_ROOM_RSP playerSeat
         * @property {PROTOCOL_COMMON.IRoomInfo|null} [roomInfo] CMD_CREATE_ROOM_RSP roomInfo
         */

        /**
         * Constructs a new CMD_CREATE_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_CREATE_ROOM_RSP.
         * @implements ICMD_CREATE_ROOM_RSP
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP=} [properties] Properties to set
         */
        function CMD_CREATE_ROOM_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_CREATE_ROOM_RSP playerSeat.
         * @member {number|null|undefined} playerSeat
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         */
        CMD_CREATE_ROOM_RSP.prototype.playerSeat = null;

        /**
         * CMD_CREATE_ROOM_RSP roomInfo.
         * @member {PROTOCOL_COMMON.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         */
        CMD_CREATE_ROOM_RSP.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_CREATE_ROOM_RSP _playerSeat.
         * @member {"playerSeat"|undefined} _playerSeat
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         */
        Object.defineProperty(CMD_CREATE_ROOM_RSP.prototype, "_playerSeat", {
            get: $util.oneOfGetter($oneOfFields = ["playerSeat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_CREATE_ROOM_RSP _roomInfo.
         * @member {"roomInfo"|undefined} _roomInfo
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         */
        Object.defineProperty(CMD_CREATE_ROOM_RSP.prototype, "_roomInfo", {
            get: $util.oneOfGetter($oneOfFields = ["roomInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_CREATE_ROOM_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP} CMD_CREATE_ROOM_RSP instance
         */
        CMD_CREATE_ROOM_RSP.create = function create(properties) {
            return new CMD_CREATE_ROOM_RSP(properties);
        };

        /**
         * Encodes the specified CMD_CREATE_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP} message CMD_CREATE_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_CREATE_ROOM_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerSeat != null && Object.hasOwnProperty.call(message, "playerSeat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerSeat);
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_CREATE_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP} message CMD_CREATE_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_CREATE_ROOM_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_CREATE_ROOM_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP} CMD_CREATE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_CREATE_ROOM_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerSeat = reader.int32();
                    break;
                case 2:
                    message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_CREATE_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP} CMD_CREATE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_CREATE_ROOM_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_CREATE_ROOM_RSP message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_CREATE_ROOM_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.playerSeat != null && message.hasOwnProperty("playerSeat")) {
                properties._playerSeat = 1;
                if (!$util.isInteger(message.playerSeat))
                    return "playerSeat: integer expected";
            }
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                properties._roomInfo = 1;
                {
                    var error = $root.PROTOCOL_COMMON.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_CREATE_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP} CMD_CREATE_ROOM_RSP
         */
        CMD_CREATE_ROOM_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP();
            if (object.playerSeat != null)
                message.playerSeat = object.playerSeat | 0;
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_CREATE_ROOM_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP} message CMD_CREATE_ROOM_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_CREATE_ROOM_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.playerSeat != null && message.hasOwnProperty("playerSeat")) {
                object.playerSeat = message.playerSeat;
                if (options.oneofs)
                    object._playerSeat = "playerSeat";
            }
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                object.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.toObject(message.roomInfo, options);
                if (options.oneofs)
                    object._roomInfo = "roomInfo";
            }
            return object;
        };

        /**
         * Converts this CMD_CREATE_ROOM_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_CREATE_ROOM_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_CREATE_ROOM_RSP;
    })();

    PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ = (function() {

        /**
         * Properties of a CMD_LEAVE_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_LEAVE_ROOM_REQ
         */

        /**
         * Constructs a new CMD_LEAVE_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_LEAVE_ROOM_REQ.
         * @implements ICMD_LEAVE_ROOM_REQ
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ=} [properties] Properties to set
         */
        function CMD_LEAVE_ROOM_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CMD_LEAVE_ROOM_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ} CMD_LEAVE_ROOM_REQ instance
         */
        CMD_LEAVE_ROOM_REQ.create = function create(properties) {
            return new CMD_LEAVE_ROOM_REQ(properties);
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ} message CMD_LEAVE_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ} message CMD_LEAVE_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ} CMD_LEAVE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ} CMD_LEAVE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_LEAVE_ROOM_REQ message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_LEAVE_ROOM_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CMD_LEAVE_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ} CMD_LEAVE_ROOM_REQ
         */
        CMD_LEAVE_ROOM_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ)
                return object;
            return new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ();
        };

        /**
         * Creates a plain object from a CMD_LEAVE_ROOM_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ} message CMD_LEAVE_ROOM_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_LEAVE_ROOM_REQ.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CMD_LEAVE_ROOM_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_LEAVE_ROOM_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_LEAVE_ROOM_REQ;
    })();

    PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP = (function() {

        /**
         * Properties of a CMD_LEAVE_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_LEAVE_ROOM_RSP
         * @property {Array.<PROTOCOL_COMMON.IRoomInfo>|null} [roomList] CMD_LEAVE_ROOM_RSP roomList
         */

        /**
         * Constructs a new CMD_LEAVE_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_LEAVE_ROOM_RSP.
         * @implements ICMD_LEAVE_ROOM_RSP
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP=} [properties] Properties to set
         */
        function CMD_LEAVE_ROOM_RSP(properties) {
            this.roomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_LEAVE_ROOM_RSP roomList.
         * @member {Array.<PROTOCOL_COMMON.IRoomInfo>} roomList
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @instance
         */
        CMD_LEAVE_ROOM_RSP.prototype.roomList = $util.emptyArray;

        /**
         * Creates a new CMD_LEAVE_ROOM_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP} CMD_LEAVE_ROOM_RSP instance
         */
        CMD_LEAVE_ROOM_RSP.create = function create(properties) {
            return new CMD_LEAVE_ROOM_RSP(properties);
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP} message CMD_LEAVE_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomList != null && message.roomList.length)
                for (var i = 0; i < message.roomList.length; ++i)
                    $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP} message CMD_LEAVE_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP} CMD_LEAVE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roomList && message.roomList.length))
                        message.roomList = [];
                    message.roomList.push($root.PROTOCOL_COMMON.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP} CMD_LEAVE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_LEAVE_ROOM_RSP message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_LEAVE_ROOM_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomList != null && message.hasOwnProperty("roomList")) {
                if (!Array.isArray(message.roomList))
                    return "roomList: array expected";
                for (var i = 0; i < message.roomList.length; ++i) {
                    var error = $root.PROTOCOL_COMMON.RoomInfo.verify(message.roomList[i]);
                    if (error)
                        return "roomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_LEAVE_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP} CMD_LEAVE_ROOM_RSP
         */
        CMD_LEAVE_ROOM_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP();
            if (object.roomList) {
                if (!Array.isArray(object.roomList))
                    throw TypeError(".PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.roomList: array expected");
                message.roomList = [];
                for (var i = 0; i < object.roomList.length; ++i) {
                    if (typeof object.roomList[i] !== "object")
                        throw TypeError(".PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.roomList: object expected");
                    message.roomList[i] = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_LEAVE_ROOM_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP} message CMD_LEAVE_ROOM_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_LEAVE_ROOM_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomList = [];
            if (message.roomList && message.roomList.length) {
                object.roomList = [];
                for (var j = 0; j < message.roomList.length; ++j)
                    object.roomList[j] = $root.PROTOCOL_COMMON.RoomInfo.toObject(message.roomList[j], options);
            }
            return object;
        };

        /**
         * Converts this CMD_LEAVE_ROOM_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_LEAVE_ROOM_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_LEAVE_ROOM_RSP;
    })();

    PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE = (function() {

        /**
         * Properties of a CMD_UPDATE_ROOM_INFO_NOTICE.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_UPDATE_ROOM_INFO_NOTICE
         * @property {PROTOCOL_COMMON.IRoomInfo|null} [roomInfo] CMD_UPDATE_ROOM_INFO_NOTICE roomInfo
         */

        /**
         * Constructs a new CMD_UPDATE_ROOM_INFO_NOTICE.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_UPDATE_ROOM_INFO_NOTICE.
         * @implements ICMD_UPDATE_ROOM_INFO_NOTICE
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE=} [properties] Properties to set
         */
        function CMD_UPDATE_ROOM_INFO_NOTICE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_UPDATE_ROOM_INFO_NOTICE roomInfo.
         * @member {PROTOCOL_COMMON.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @instance
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_UPDATE_ROOM_INFO_NOTICE _roomInfo.
         * @member {"roomInfo"|undefined} _roomInfo
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @instance
         */
        Object.defineProperty(CMD_UPDATE_ROOM_INFO_NOTICE.prototype, "_roomInfo", {
            get: $util.oneOfGetter($oneOfFields = ["roomInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_UPDATE_ROOM_INFO_NOTICE instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE} CMD_UPDATE_ROOM_INFO_NOTICE instance
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.create = function create(properties) {
            return new CMD_UPDATE_ROOM_INFO_NOTICE(properties);
        };

        /**
         * Encodes the specified CMD_UPDATE_ROOM_INFO_NOTICE message. Does not implicitly {@link PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE} message CMD_UPDATE_ROOM_INFO_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_UPDATE_ROOM_INFO_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE} message CMD_UPDATE_ROOM_INFO_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_UPDATE_ROOM_INFO_NOTICE message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE} CMD_UPDATE_ROOM_INFO_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_UPDATE_ROOM_INFO_NOTICE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE} CMD_UPDATE_ROOM_INFO_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_UPDATE_ROOM_INFO_NOTICE message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                properties._roomInfo = 1;
                {
                    var error = $root.PROTOCOL_COMMON.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_UPDATE_ROOM_INFO_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE} CMD_UPDATE_ROOM_INFO_NOTICE
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE();
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_UPDATE_ROOM_INFO_NOTICE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE} message CMD_UPDATE_ROOM_INFO_NOTICE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                object.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.toObject(message.roomInfo, options);
                if (options.oneofs)
                    object._roomInfo = "roomInfo";
            }
            return object;
        };

        /**
         * Converts this CMD_UPDATE_ROOM_INFO_NOTICE to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_UPDATE_ROOM_INFO_NOTICE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_UPDATE_ROOM_INFO_NOTICE;
    })();

    PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ = (function() {

        /**
         * Properties of a CMD_JOIN_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_JOIN_ROOM_REQ
         * @property {number|null} [roomUnquieId] CMD_JOIN_ROOM_REQ roomUnquieId
         */

        /**
         * Constructs a new CMD_JOIN_ROOM_REQ.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_JOIN_ROOM_REQ.
         * @implements ICMD_JOIN_ROOM_REQ
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ=} [properties] Properties to set
         */
        function CMD_JOIN_ROOM_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_JOIN_ROOM_REQ roomUnquieId.
         * @member {number|null|undefined} roomUnquieId
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @instance
         */
        CMD_JOIN_ROOM_REQ.prototype.roomUnquieId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_JOIN_ROOM_REQ _roomUnquieId.
         * @member {"roomUnquieId"|undefined} _roomUnquieId
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @instance
         */
        Object.defineProperty(CMD_JOIN_ROOM_REQ.prototype, "_roomUnquieId", {
            get: $util.oneOfGetter($oneOfFields = ["roomUnquieId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_JOIN_ROOM_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ} CMD_JOIN_ROOM_REQ instance
         */
        CMD_JOIN_ROOM_REQ.create = function create(properties) {
            return new CMD_JOIN_ROOM_REQ(properties);
        };

        /**
         * Encodes the specified CMD_JOIN_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ} message CMD_JOIN_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_JOIN_ROOM_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomUnquieId != null && Object.hasOwnProperty.call(message, "roomUnquieId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomUnquieId);
            return writer;
        };

        /**
         * Encodes the specified CMD_JOIN_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ} message CMD_JOIN_ROOM_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_JOIN_ROOM_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_JOIN_ROOM_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ} CMD_JOIN_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_JOIN_ROOM_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomUnquieId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_JOIN_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ} CMD_JOIN_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_JOIN_ROOM_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_JOIN_ROOM_REQ message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_JOIN_ROOM_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.roomUnquieId != null && message.hasOwnProperty("roomUnquieId")) {
                properties._roomUnquieId = 1;
                if (!$util.isInteger(message.roomUnquieId))
                    return "roomUnquieId: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_JOIN_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ} CMD_JOIN_ROOM_REQ
         */
        CMD_JOIN_ROOM_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ();
            if (object.roomUnquieId != null)
                message.roomUnquieId = object.roomUnquieId | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_JOIN_ROOM_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @static
         * @param {PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ} message CMD_JOIN_ROOM_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_JOIN_ROOM_REQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.roomUnquieId != null && message.hasOwnProperty("roomUnquieId")) {
                object.roomUnquieId = message.roomUnquieId;
                if (options.oneofs)
                    object._roomUnquieId = "roomUnquieId";
            }
            return object;
        };

        /**
         * Converts this CMD_JOIN_ROOM_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_JOIN_ROOM_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_JOIN_ROOM_REQ;
    })();

    PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP = (function() {

        /**
         * Properties of a CMD_JOIN_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_JOIN_ROOM_RSP
         * @property {number|null} [playerSeat] CMD_JOIN_ROOM_RSP playerSeat
         * @property {PROTOCOL_COMMON.IRoomInfo|null} [roomInfo] CMD_JOIN_ROOM_RSP roomInfo
         */

        /**
         * Constructs a new CMD_JOIN_ROOM_RSP.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_JOIN_ROOM_RSP.
         * @implements ICMD_JOIN_ROOM_RSP
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP=} [properties] Properties to set
         */
        function CMD_JOIN_ROOM_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_JOIN_ROOM_RSP playerSeat.
         * @member {number|null|undefined} playerSeat
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @instance
         */
        CMD_JOIN_ROOM_RSP.prototype.playerSeat = null;

        /**
         * CMD_JOIN_ROOM_RSP roomInfo.
         * @member {PROTOCOL_COMMON.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @instance
         */
        CMD_JOIN_ROOM_RSP.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_JOIN_ROOM_RSP _playerSeat.
         * @member {"playerSeat"|undefined} _playerSeat
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @instance
         */
        Object.defineProperty(CMD_JOIN_ROOM_RSP.prototype, "_playerSeat", {
            get: $util.oneOfGetter($oneOfFields = ["playerSeat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_JOIN_ROOM_RSP _roomInfo.
         * @member {"roomInfo"|undefined} _roomInfo
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @instance
         */
        Object.defineProperty(CMD_JOIN_ROOM_RSP.prototype, "_roomInfo", {
            get: $util.oneOfGetter($oneOfFields = ["roomInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_JOIN_ROOM_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP} CMD_JOIN_ROOM_RSP instance
         */
        CMD_JOIN_ROOM_RSP.create = function create(properties) {
            return new CMD_JOIN_ROOM_RSP(properties);
        };

        /**
         * Encodes the specified CMD_JOIN_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP} message CMD_JOIN_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_JOIN_ROOM_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerSeat != null && Object.hasOwnProperty.call(message, "playerSeat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerSeat);
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_JOIN_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP} message CMD_JOIN_ROOM_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_JOIN_ROOM_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_JOIN_ROOM_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP} CMD_JOIN_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_JOIN_ROOM_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerSeat = reader.int32();
                    break;
                case 2:
                    message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_JOIN_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP} CMD_JOIN_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_JOIN_ROOM_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_JOIN_ROOM_RSP message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_JOIN_ROOM_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.playerSeat != null && message.hasOwnProperty("playerSeat")) {
                properties._playerSeat = 1;
                if (!$util.isInteger(message.playerSeat))
                    return "playerSeat: integer expected";
            }
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                properties._roomInfo = 1;
                {
                    var error = $root.PROTOCOL_COMMON.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_JOIN_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP} CMD_JOIN_ROOM_RSP
         */
        CMD_JOIN_ROOM_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP();
            if (object.playerSeat != null)
                message.playerSeat = object.playerSeat | 0;
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_JOIN_ROOM_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @static
         * @param {PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP} message CMD_JOIN_ROOM_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_JOIN_ROOM_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.playerSeat != null && message.hasOwnProperty("playerSeat")) {
                object.playerSeat = message.playerSeat;
                if (options.oneofs)
                    object._playerSeat = "playerSeat";
            }
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                object.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.toObject(message.roomInfo, options);
                if (options.oneofs)
                    object._roomInfo = "roomInfo";
            }
            return object;
        };

        /**
         * Converts this CMD_JOIN_ROOM_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_JOIN_ROOM_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_JOIN_ROOM_RSP;
    })();

    return PROTOCOL_ROOM;
})();

$root.PROTOCOL_COMMON = (function() {

    /**
     * Namespace PROTOCOL_COMMON.
     * @exports PROTOCOL_COMMON
     * @namespace
     */
    var PROTOCOL_COMMON = {};

    PROTOCOL_COMMON.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof PROTOCOL_COMMON
         * @interface IUserInfo
         * @property {string|null} [userName] UserInfo userName
         * @property {number|null} [userSeat] UserInfo userSeat
         */

        /**
         * Constructs a new UserInfo.
         * @memberof PROTOCOL_COMMON
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {PROTOCOL_COMMON.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo userName.
         * @member {string|null|undefined} userName
         * @memberof PROTOCOL_COMMON.UserInfo
         * @instance
         */
        UserInfo.prototype.userName = null;

        /**
         * UserInfo userSeat.
         * @member {number|null|undefined} userSeat
         * @memberof PROTOCOL_COMMON.UserInfo
         * @instance
         */
        UserInfo.prototype.userSeat = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserInfo _userName.
         * @member {"userName"|undefined} _userName
         * @memberof PROTOCOL_COMMON.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_userName", {
            get: $util.oneOfGetter($oneOfFields = ["userName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * UserInfo _userSeat.
         * @member {"userSeat"|undefined} _userSeat
         * @memberof PROTOCOL_COMMON.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_userSeat", {
            get: $util.oneOfGetter($oneOfFields = ["userSeat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {PROTOCOL_COMMON.IUserInfo=} [properties] Properties to set
         * @returns {PROTOCOL_COMMON.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PROTOCOL_COMMON.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {PROTOCOL_COMMON.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.userSeat != null && Object.hasOwnProperty.call(message, "userSeat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userSeat);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {PROTOCOL_COMMON.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_COMMON.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_COMMON.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.userSeat = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_COMMON.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.userName != null && message.hasOwnProperty("userName")) {
                properties._userName = 1;
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            }
            if (message.userSeat != null && message.hasOwnProperty("userSeat")) {
                properties._userSeat = 1;
                if (!$util.isInteger(message.userSeat))
                    return "userSeat: integer expected";
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_COMMON.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_COMMON.UserInfo)
                return object;
            var message = new $root.PROTOCOL_COMMON.UserInfo();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userSeat != null)
                message.userSeat = object.userSeat | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_COMMON.UserInfo
         * @static
         * @param {PROTOCOL_COMMON.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.userName != null && message.hasOwnProperty("userName")) {
                object.userName = message.userName;
                if (options.oneofs)
                    object._userName = "userName";
            }
            if (message.userSeat != null && message.hasOwnProperty("userSeat")) {
                object.userSeat = message.userSeat;
                if (options.oneofs)
                    object._userSeat = "userSeat";
            }
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOL_COMMON.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    PROTOCOL_COMMON.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof PROTOCOL_COMMON
         * @interface IRoomInfo
         * @property {string|null} [roomName] RoomInfo roomName
         * @property {Array.<PROTOCOL_COMMON.IUserInfo>|null} [userList] RoomInfo userList
         * @property {number|null} [roomUniqueId] RoomInfo roomUniqueId
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof PROTOCOL_COMMON
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {PROTOCOL_COMMON.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.userList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomName.
         * @member {string|null|undefined} roomName
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomName = null;

        /**
         * RoomInfo userList.
         * @member {Array.<PROTOCOL_COMMON.IUserInfo>} userList
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.userList = $util.emptyArray;

        /**
         * RoomInfo roomUniqueId.
         * @member {number|null|undefined} roomUniqueId
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomUniqueId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RoomInfo _roomName.
         * @member {"roomName"|undefined} _roomName
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         */
        Object.defineProperty(RoomInfo.prototype, "_roomName", {
            get: $util.oneOfGetter($oneOfFields = ["roomName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * RoomInfo _roomUniqueId.
         * @member {"roomUniqueId"|undefined} _roomUniqueId
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         */
        Object.defineProperty(RoomInfo.prototype, "_roomUniqueId", {
            get: $util.oneOfGetter($oneOfFields = ["roomUniqueId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {PROTOCOL_COMMON.IRoomInfo=} [properties] Properties to set
         * @returns {PROTOCOL_COMMON.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link PROTOCOL_COMMON.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {PROTOCOL_COMMON.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomName != null && Object.hasOwnProperty.call(message, "roomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomName);
            if (message.userList != null && message.userList.length)
                for (var i = 0; i < message.userList.length; ++i)
                    $root.PROTOCOL_COMMON.UserInfo.encode(message.userList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.roomUniqueId != null && Object.hasOwnProperty.call(message, "roomUniqueId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomUniqueId);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {PROTOCOL_COMMON.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_COMMON.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_COMMON.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($root.PROTOCOL_COMMON.UserInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.roomUniqueId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_COMMON.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.roomName != null && message.hasOwnProperty("roomName")) {
                properties._roomName = 1;
                if (!$util.isString(message.roomName))
                    return "roomName: string expected";
            }
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $root.PROTOCOL_COMMON.UserInfo.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            if (message.roomUniqueId != null && message.hasOwnProperty("roomUniqueId")) {
                properties._roomUniqueId = 1;
                if (!$util.isInteger(message.roomUniqueId))
                    return "roomUniqueId: integer expected";
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_COMMON.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_COMMON.RoomInfo)
                return object;
            var message = new $root.PROTOCOL_COMMON.RoomInfo();
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".PROTOCOL_COMMON.RoomInfo.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".PROTOCOL_COMMON.RoomInfo.userList: object expected");
                    message.userList[i] = $root.PROTOCOL_COMMON.UserInfo.fromObject(object.userList[i]);
                }
            }
            if (object.roomUniqueId != null)
                message.roomUniqueId = object.roomUniqueId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @static
         * @param {PROTOCOL_COMMON.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (message.roomName != null && message.hasOwnProperty("roomName")) {
                object.roomName = message.roomName;
                if (options.oneofs)
                    object._roomName = "roomName";
            }
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $root.PROTOCOL_COMMON.UserInfo.toObject(message.userList[j], options);
            }
            if (message.roomUniqueId != null && message.hasOwnProperty("roomUniqueId")) {
                object.roomUniqueId = message.roomUniqueId;
                if (options.oneofs)
                    object._roomUniqueId = "roomUniqueId";
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOL_COMMON.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    PROTOCOL_COMMON.pre_battle_data = (function() {

        /**
         * Properties of a pre_battle_data.
         * @memberof PROTOCOL_COMMON
         * @interface Ipre_battle_data
         * @property {string|null} [levelName] pre_battle_data levelName
         */

        /**
         * Constructs a new pre_battle_data.
         * @memberof PROTOCOL_COMMON
         * @classdesc Represents a pre_battle_data.
         * @implements Ipre_battle_data
         * @constructor
         * @param {PROTOCOL_COMMON.Ipre_battle_data=} [properties] Properties to set
         */
        function pre_battle_data(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * pre_battle_data levelName.
         * @member {string|null|undefined} levelName
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @instance
         */
        pre_battle_data.prototype.levelName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * pre_battle_data _levelName.
         * @member {"levelName"|undefined} _levelName
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @instance
         */
        Object.defineProperty(pre_battle_data.prototype, "_levelName", {
            get: $util.oneOfGetter($oneOfFields = ["levelName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new pre_battle_data instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {PROTOCOL_COMMON.Ipre_battle_data=} [properties] Properties to set
         * @returns {PROTOCOL_COMMON.pre_battle_data} pre_battle_data instance
         */
        pre_battle_data.create = function create(properties) {
            return new pre_battle_data(properties);
        };

        /**
         * Encodes the specified pre_battle_data message. Does not implicitly {@link PROTOCOL_COMMON.pre_battle_data.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {PROTOCOL_COMMON.Ipre_battle_data} message pre_battle_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        pre_battle_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.levelName != null && Object.hasOwnProperty.call(message, "levelName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.levelName);
            return writer;
        };

        /**
         * Encodes the specified pre_battle_data message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.pre_battle_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {PROTOCOL_COMMON.Ipre_battle_data} message pre_battle_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        pre_battle_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a pre_battle_data message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_COMMON.pre_battle_data} pre_battle_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        pre_battle_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_COMMON.pre_battle_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.levelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a pre_battle_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_COMMON.pre_battle_data} pre_battle_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        pre_battle_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a pre_battle_data message.
         * @function verify
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        pre_battle_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.levelName != null && message.hasOwnProperty("levelName")) {
                properties._levelName = 1;
                if (!$util.isString(message.levelName))
                    return "levelName: string expected";
            }
            return null;
        };

        /**
         * Creates a pre_battle_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_COMMON.pre_battle_data} pre_battle_data
         */
        pre_battle_data.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_COMMON.pre_battle_data)
                return object;
            var message = new $root.PROTOCOL_COMMON.pre_battle_data();
            if (object.levelName != null)
                message.levelName = String(object.levelName);
            return message;
        };

        /**
         * Creates a plain object from a pre_battle_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @static
         * @param {PROTOCOL_COMMON.pre_battle_data} message pre_battle_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        pre_battle_data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.levelName != null && message.hasOwnProperty("levelName")) {
                object.levelName = message.levelName;
                if (options.oneofs)
                    object._levelName = "levelName";
            }
            return object;
        };

        /**
         * Converts this pre_battle_data to JSON.
         * @function toJSON
         * @memberof PROTOCOL_COMMON.pre_battle_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        pre_battle_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return pre_battle_data;
    })();

    return PROTOCOL_COMMON;
})();

module.exports = $root;
