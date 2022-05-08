/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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

    return PROTOCOL_COMMON;
})();

module.exports = $root;
