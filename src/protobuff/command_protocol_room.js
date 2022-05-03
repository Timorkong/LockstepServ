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

    PROTOCOL_ROOM.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof PROTOCOL_ROOM
         * @interface IUserInfo
         * @property {string|null} [userName] UserInfo userName
         */

        /**
         * Constructs a new UserInfo.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {PROTOCOL_ROOM.IUserInfo=} [properties] Properties to set
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
         * @memberof PROTOCOL_ROOM.UserInfo
         * @instance
         */
        UserInfo.prototype.userName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserInfo _userName.
         * @member {"userName"|undefined} _userName
         * @memberof PROTOCOL_ROOM.UserInfo
         * @instance
         */
        Object.defineProperty(UserInfo.prototype, "_userName", {
            get: $util.oneOfGetter($oneOfFields = ["userName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {PROTOCOL_ROOM.IUserInfo=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PROTOCOL_ROOM.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {PROTOCOL_ROOM.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {PROTOCOL_ROOM.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
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
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.UserInfo} UserInfo
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
         * @memberof PROTOCOL_ROOM.UserInfo
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
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.UserInfo)
                return object;
            var message = new $root.PROTOCOL_ROOM.UserInfo();
            if (object.userName != null)
                message.userName = String(object.userName);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.UserInfo
         * @static
         * @param {PROTOCOL_ROOM.UserInfo} message UserInfo
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
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    PROTOCOL_ROOM.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof PROTOCOL_ROOM
         * @interface IRoomInfo
         * @property {string|null} [roomName] RoomInfo roomName
         * @property {Array.<PROTOCOL_ROOM.IUserInfo>|null} [userList] RoomInfo userList
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {PROTOCOL_ROOM.IRoomInfo=} [properties] Properties to set
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
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomName = null;

        /**
         * RoomInfo userList.
         * @member {Array.<PROTOCOL_ROOM.IUserInfo>} userList
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @instance
         */
        RoomInfo.prototype.userList = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RoomInfo _roomName.
         * @member {"roomName"|undefined} _roomName
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @instance
         */
        Object.defineProperty(RoomInfo.prototype, "_roomName", {
            get: $util.oneOfGetter($oneOfFields = ["roomName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {PROTOCOL_ROOM.IRoomInfo=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link PROTOCOL_ROOM.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {PROTOCOL_ROOM.IRoomInfo} message RoomInfo message or plain object to encode
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
                    $root.PROTOCOL_ROOM.UserInfo.encode(message.userList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {PROTOCOL_ROOM.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomName = reader.string();
                    break;
                case 2:
                    if (!(message.userList && message.userList.length))
                        message.userList = [];
                    message.userList.push($root.PROTOCOL_ROOM.UserInfo.decode(reader, reader.uint32()));
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
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.RoomInfo} RoomInfo
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
         * @memberof PROTOCOL_ROOM.RoomInfo
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
                    var error = $root.PROTOCOL_ROOM.UserInfo.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.RoomInfo)
                return object;
            var message = new $root.PROTOCOL_ROOM.RoomInfo();
            if (object.roomName != null)
                message.roomName = String(object.roomName);
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".PROTOCOL_ROOM.RoomInfo.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".PROTOCOL_ROOM.RoomInfo.userList: object expected");
                    message.userList[i] = $root.PROTOCOL_ROOM.UserInfo.fromObject(object.userList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @static
         * @param {PROTOCOL_ROOM.RoomInfo} message RoomInfo
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
                    object.userList[j] = $root.PROTOCOL_ROOM.UserInfo.toObject(message.userList[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

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
         * @property {Array.<PROTOCOL_ROOM.IRoomInfo>|null} [roomList] CMD_ROOM_LIST_RSP roomList
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
         * @member {Array.<PROTOCOL_ROOM.IRoomInfo>} roomList
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
                    $root.PROTOCOL_ROOM.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.roomList.push($root.PROTOCOL_ROOM.RoomInfo.decode(reader, reader.uint32()));
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
                    var error = $root.PROTOCOL_ROOM.RoomInfo.verify(message.roomList[i]);
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
                    message.roomList[i] = $root.PROTOCOL_ROOM.RoomInfo.fromObject(object.roomList[i]);
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
                    object.roomList[j] = $root.PROTOCOL_ROOM.RoomInfo.toObject(message.roomList[j], options);
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
         * @property {PROTOCOL_ROOM.IRoomInfo|null} [roomInfo] CMD_CREATE_ROOM_RSP roomInfo
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
         * CMD_CREATE_ROOM_RSP roomInfo.
         * @member {PROTOCOL_ROOM.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP
         * @instance
         */
        CMD_CREATE_ROOM_RSP.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

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
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_ROOM.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.decode(reader, reader.uint32());
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
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                properties._roomInfo = 1;
                {
                    var error = $root.PROTOCOL_ROOM.RoomInfo.verify(message.roomInfo);
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
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.fromObject(object.roomInfo);
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
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                object.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.toObject(message.roomInfo, options);
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
         * @property {Array.<PROTOCOL_ROOM.IRoomInfo>|null} [roomList] CMD_LEAVE_ROOM_RSP roomList
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
         * @member {Array.<PROTOCOL_ROOM.IRoomInfo>} roomList
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
                    $root.PROTOCOL_ROOM.RoomInfo.encode(message.roomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                    message.roomList.push($root.PROTOCOL_ROOM.RoomInfo.decode(reader, reader.uint32()));
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
                    var error = $root.PROTOCOL_ROOM.RoomInfo.verify(message.roomList[i]);
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
                    message.roomList[i] = $root.PROTOCOL_ROOM.RoomInfo.fromObject(object.roomList[i]);
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
                    object.roomList[j] = $root.PROTOCOL_ROOM.RoomInfo.toObject(message.roomList[j], options);
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

    PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE = (function() {

        /**
         * Properties of a CMD_LEAVE_ROOM_NOTICE.
         * @memberof PROTOCOL_ROOM
         * @interface ICMD_LEAVE_ROOM_NOTICE
         * @property {PROTOCOL_ROOM.IRoomInfo|null} [roomInfo] CMD_LEAVE_ROOM_NOTICE roomInfo
         */

        /**
         * Constructs a new CMD_LEAVE_ROOM_NOTICE.
         * @memberof PROTOCOL_ROOM
         * @classdesc Represents a CMD_LEAVE_ROOM_NOTICE.
         * @implements ICMD_LEAVE_ROOM_NOTICE
         * @constructor
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_NOTICE=} [properties] Properties to set
         */
        function CMD_LEAVE_ROOM_NOTICE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_LEAVE_ROOM_NOTICE roomInfo.
         * @member {PROTOCOL_ROOM.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @instance
         */
        CMD_LEAVE_ROOM_NOTICE.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_LEAVE_ROOM_NOTICE _roomInfo.
         * @member {"roomInfo"|undefined} _roomInfo
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @instance
         */
        Object.defineProperty(CMD_LEAVE_ROOM_NOTICE.prototype, "_roomInfo", {
            get: $util.oneOfGetter($oneOfFields = ["roomInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_LEAVE_ROOM_NOTICE instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_NOTICE=} [properties] Properties to set
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE} CMD_LEAVE_ROOM_NOTICE instance
         */
        CMD_LEAVE_ROOM_NOTICE.create = function create(properties) {
            return new CMD_LEAVE_ROOM_NOTICE(properties);
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_NOTICE message. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_NOTICE} message CMD_LEAVE_ROOM_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_NOTICE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_ROOM.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_LEAVE_ROOM_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.ICMD_LEAVE_ROOM_NOTICE} message CMD_LEAVE_ROOM_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_LEAVE_ROOM_NOTICE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_NOTICE message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE} CMD_LEAVE_ROOM_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_NOTICE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_LEAVE_ROOM_NOTICE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE} CMD_LEAVE_ROOM_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_LEAVE_ROOM_NOTICE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_LEAVE_ROOM_NOTICE message.
         * @function verify
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_LEAVE_ROOM_NOTICE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                properties._roomInfo = 1;
                {
                    var error = $root.PROTOCOL_ROOM.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_LEAVE_ROOM_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE} CMD_LEAVE_ROOM_NOTICE
         */
        CMD_LEAVE_ROOM_NOTICE.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE)
                return object;
            var message = new $root.PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE();
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_LEAVE_ROOM_NOTICE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @static
         * @param {PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE} message CMD_LEAVE_ROOM_NOTICE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_LEAVE_ROOM_NOTICE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                object.roomInfo = $root.PROTOCOL_ROOM.RoomInfo.toObject(message.roomInfo, options);
                if (options.oneofs)
                    object._roomInfo = "roomInfo";
            }
            return object;
        };

        /**
         * Converts this CMD_LEAVE_ROOM_NOTICE to JSON.
         * @function toJSON
         * @memberof PROTOCOL_ROOM.CMD_LEAVE_ROOM_NOTICE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_LEAVE_ROOM_NOTICE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_LEAVE_ROOM_NOTICE;
    })();

    return PROTOCOL_ROOM;
})();

module.exports = $root;