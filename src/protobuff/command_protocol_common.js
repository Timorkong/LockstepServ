/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOLCOMMON = (function() {

    /**
     * Namespace PROTOCOLCOMMON.
     * @exports PROTOCOLCOMMON
     * @namespace
     */
    var PROTOCOLCOMMON = {};

    PROTOCOLCOMMON.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof PROTOCOLCOMMON
         * @interface IUserInfo
         * @property {string|null} [UserName] UserInfo UserName
         * @property {number|null} [UserSeat] UserInfo UserSeat
         */

        /**
         * Constructs a new UserInfo.
         * @memberof PROTOCOLCOMMON
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {PROTOCOLCOMMON.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo UserName.
         * @member {string} UserName
         * @memberof PROTOCOLCOMMON.UserInfo
         * @instance
         */
        UserInfo.prototype.UserName = "";

        /**
         * UserInfo UserSeat.
         * @member {number} UserSeat
         * @memberof PROTOCOLCOMMON.UserInfo
         * @instance
         */
        UserInfo.prototype.UserSeat = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {PROTOCOLCOMMON.IUserInfo=} [properties] Properties to set
         * @returns {PROTOCOLCOMMON.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PROTOCOLCOMMON.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {PROTOCOLCOMMON.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            if (message.UserSeat != null && message.hasOwnProperty("UserSeat"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserSeat);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {PROTOCOLCOMMON.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLCOMMON.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLCOMMON.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserName = reader.string();
                    break;
                case 2:
                    message.UserSeat = reader.int32();
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
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLCOMMON.UserInfo} UserInfo
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
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.UserSeat != null && message.hasOwnProperty("UserSeat"))
                if (!$util.isInteger(message.UserSeat))
                    return "UserSeat: integer expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLCOMMON.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLCOMMON.UserInfo)
                return object;
            var message = new $root.PROTOCOLCOMMON.UserInfo();
            if (object.UserName != null)
                message.UserName = String(object.UserName);
            if (object.UserSeat != null)
                message.UserSeat = object.UserSeat | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLCOMMON.UserInfo
         * @static
         * @param {PROTOCOLCOMMON.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserName = "";
                object.UserSeat = 0;
            }
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                object.UserName = message.UserName;
            if (message.UserSeat != null && message.hasOwnProperty("UserSeat"))
                object.UserSeat = message.UserSeat;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOLCOMMON.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    PROTOCOLCOMMON.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof PROTOCOLCOMMON
         * @interface IRoomInfo
         * @property {string|null} [RoomName] RoomInfo RoomName
         * @property {Array.<PROTOCOLCOMMON.IUserInfo>|null} [UserList] RoomInfo UserList
         * @property {number|null} [RoomUniqueId] RoomInfo RoomUniqueId
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof PROTOCOLCOMMON
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {PROTOCOLCOMMON.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.UserList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo RoomName.
         * @member {string} RoomName
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomName = "";

        /**
         * RoomInfo UserList.
         * @member {Array.<PROTOCOLCOMMON.IUserInfo>} UserList
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.UserList = $util.emptyArray;

        /**
         * RoomInfo RoomUniqueId.
         * @member {number} RoomUniqueId
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomUniqueId = 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {PROTOCOLCOMMON.IRoomInfo=} [properties] Properties to set
         * @returns {PROTOCOLCOMMON.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link PROTOCOLCOMMON.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {PROTOCOLCOMMON.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomName);
            if (message.UserList != null && message.UserList.length)
                for (var i = 0; i < message.UserList.length; ++i)
                    $root.PROTOCOLCOMMON.UserInfo.encode(message.UserList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.RoomUniqueId != null && message.hasOwnProperty("RoomUniqueId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RoomUniqueId);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {PROTOCOLCOMMON.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLCOMMON.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLCOMMON.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomName = reader.string();
                    break;
                case 2:
                    if (!(message.UserList && message.UserList.length))
                        message.UserList = [];
                    message.UserList.push($root.PROTOCOLCOMMON.UserInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.RoomUniqueId = reader.int32();
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
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLCOMMON.RoomInfo} RoomInfo
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
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            if (message.UserList != null && message.hasOwnProperty("UserList")) {
                if (!Array.isArray(message.UserList))
                    return "UserList: array expected";
                for (var i = 0; i < message.UserList.length; ++i) {
                    var error = $root.PROTOCOLCOMMON.UserInfo.verify(message.UserList[i]);
                    if (error)
                        return "UserList." + error;
                }
            }
            if (message.RoomUniqueId != null && message.hasOwnProperty("RoomUniqueId"))
                if (!$util.isInteger(message.RoomUniqueId))
                    return "RoomUniqueId: integer expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLCOMMON.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLCOMMON.RoomInfo)
                return object;
            var message = new $root.PROTOCOLCOMMON.RoomInfo();
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            if (object.UserList) {
                if (!Array.isArray(object.UserList))
                    throw TypeError(".PROTOCOLCOMMON.RoomInfo.UserList: array expected");
                message.UserList = [];
                for (var i = 0; i < object.UserList.length; ++i) {
                    if (typeof object.UserList[i] !== "object")
                        throw TypeError(".PROTOCOLCOMMON.RoomInfo.UserList: object expected");
                    message.UserList[i] = $root.PROTOCOLCOMMON.UserInfo.fromObject(object.UserList[i]);
                }
            }
            if (object.RoomUniqueId != null)
                message.RoomUniqueId = object.RoomUniqueId | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @static
         * @param {PROTOCOLCOMMON.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserList = [];
            if (options.defaults) {
                object.RoomName = "";
                object.RoomUniqueId = 0;
            }
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            if (message.UserList && message.UserList.length) {
                object.UserList = [];
                for (var j = 0; j < message.UserList.length; ++j)
                    object.UserList[j] = $root.PROTOCOLCOMMON.UserInfo.toObject(message.UserList[j], options);
            }
            if (message.RoomUniqueId != null && message.hasOwnProperty("RoomUniqueId"))
                object.RoomUniqueId = message.RoomUniqueId;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof PROTOCOLCOMMON.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    PROTOCOLCOMMON.PreBattleData = (function() {

        /**
         * Properties of a PreBattleData.
         * @memberof PROTOCOLCOMMON
         * @interface IPreBattleData
         * @property {string|null} [LevelName] PreBattleData LevelName
         */

        /**
         * Constructs a new PreBattleData.
         * @memberof PROTOCOLCOMMON
         * @classdesc Represents a PreBattleData.
         * @implements IPreBattleData
         * @constructor
         * @param {PROTOCOLCOMMON.IPreBattleData=} [properties] Properties to set
         */
        function PreBattleData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreBattleData LevelName.
         * @member {string} LevelName
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @instance
         */
        PreBattleData.prototype.LevelName = "";

        /**
         * Creates a new PreBattleData instance using the specified properties.
         * @function create
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {PROTOCOLCOMMON.IPreBattleData=} [properties] Properties to set
         * @returns {PROTOCOLCOMMON.PreBattleData} PreBattleData instance
         */
        PreBattleData.create = function create(properties) {
            return new PreBattleData(properties);
        };

        /**
         * Encodes the specified PreBattleData message. Does not implicitly {@link PROTOCOLCOMMON.PreBattleData.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {PROTOCOLCOMMON.IPreBattleData} message PreBattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreBattleData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LevelName != null && message.hasOwnProperty("LevelName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LevelName);
            return writer;
        };

        /**
         * Encodes the specified PreBattleData message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.PreBattleData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {PROTOCOLCOMMON.IPreBattleData} message PreBattleData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreBattleData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreBattleData message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLCOMMON.PreBattleData} PreBattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreBattleData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLCOMMON.PreBattleData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LevelName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreBattleData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLCOMMON.PreBattleData} PreBattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreBattleData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreBattleData message.
         * @function verify
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreBattleData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LevelName != null && message.hasOwnProperty("LevelName"))
                if (!$util.isString(message.LevelName))
                    return "LevelName: string expected";
            return null;
        };

        /**
         * Creates a PreBattleData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLCOMMON.PreBattleData} PreBattleData
         */
        PreBattleData.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLCOMMON.PreBattleData)
                return object;
            var message = new $root.PROTOCOLCOMMON.PreBattleData();
            if (object.LevelName != null)
                message.LevelName = String(object.LevelName);
            return message;
        };

        /**
         * Creates a plain object from a PreBattleData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @static
         * @param {PROTOCOLCOMMON.PreBattleData} message PreBattleData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreBattleData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.LevelName = "";
            if (message.LevelName != null && message.hasOwnProperty("LevelName"))
                object.LevelName = message.LevelName;
            return object;
        };

        /**
         * Converts this PreBattleData to JSON.
         * @function toJSON
         * @memberof PROTOCOLCOMMON.PreBattleData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreBattleData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreBattleData;
    })();

    return PROTOCOLCOMMON;
})();

module.exports = $root;
