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
