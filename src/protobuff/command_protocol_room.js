/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOLROOM = (function() {

    /**
     * Namespace PROTOCOLROOM.
     * @exports PROTOCOLROOM
     * @namespace
     */
    var PROTOCOLROOM = {};

    PROTOCOLROOM.RoomListReq = (function() {

        /**
         * Properties of a RoomListReq.
         * @memberof PROTOCOLROOM
         * @interface IRoomListReq
         */

        /**
         * Constructs a new RoomListReq.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a RoomListReq.
         * @implements IRoomListReq
         * @constructor
         * @param {PROTOCOLROOM.IRoomListReq=} [properties] Properties to set
         */
        function RoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {PROTOCOLROOM.IRoomListReq=} [properties] Properties to set
         * @returns {PROTOCOLROOM.RoomListReq} RoomListReq instance
         */
        RoomListReq.create = function create(properties) {
            return new RoomListReq(properties);
        };

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link PROTOCOLROOM.RoomListReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {PROTOCOLROOM.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.RoomListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {PROTOCOLROOM.IRoomListReq} message RoomListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.RoomListReq();
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
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.RoomListReq} RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListReq message.
         * @function verify
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.RoomListReq} RoomListReq
         */
        RoomListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.RoomListReq)
                return object;
            return new $root.PROTOCOLROOM.RoomListReq();
        };

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.RoomListReq
         * @static
         * @param {PROTOCOLROOM.RoomListReq} message RoomListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this RoomListReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.RoomListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListReq;
    })();

    PROTOCOLROOM.RoomListRsp = (function() {

        /**
         * Properties of a RoomListRsp.
         * @memberof PROTOCOLROOM
         * @interface IRoomListRsp
         * @property {Array.<PROTOCOLCOMMON.IRoomInfo>|null} [RoomList] RoomListRsp RoomList
         */

        /**
         * Constructs a new RoomListRsp.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a RoomListRsp.
         * @implements IRoomListRsp
         * @constructor
         * @param {PROTOCOLROOM.IRoomListRsp=} [properties] Properties to set
         */
        function RoomListRsp(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomListRsp RoomList.
         * @member {Array.<PROTOCOLCOMMON.IRoomInfo>} RoomList
         * @memberof PROTOCOLROOM.RoomListRsp
         * @instance
         */
        RoomListRsp.prototype.RoomList = $util.emptyArray;

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {PROTOCOLROOM.IRoomListRsp=} [properties] Properties to set
         * @returns {PROTOCOLROOM.RoomListRsp} RoomListRsp instance
         */
        RoomListRsp.create = function create(properties) {
            return new RoomListRsp(properties);
        };

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link PROTOCOLROOM.RoomListRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {PROTOCOLROOM.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.RoomListRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {PROTOCOLROOM.IRoomListRsp} message RoomListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomListRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.RoomListRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.PROTOCOLCOMMON.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.RoomListRsp} RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomListRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomListRsp message.
         * @function verify
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomListRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.PROTOCOLCOMMON.RoomInfo.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.RoomListRsp} RoomListRsp
         */
        RoomListRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.RoomListRsp)
                return object;
            var message = new $root.PROTOCOLROOM.RoomListRsp();
            if (object.RoomList) {
                if (!Array.isArray(object.RoomList))
                    throw TypeError(".PROTOCOLROOM.RoomListRsp.RoomList: array expected");
                message.RoomList = [];
                for (var i = 0; i < object.RoomList.length; ++i) {
                    if (typeof object.RoomList[i] !== "object")
                        throw TypeError(".PROTOCOLROOM.RoomListRsp.RoomList: object expected");
                    message.RoomList[i] = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.RoomListRsp
         * @static
         * @param {PROTOCOLROOM.RoomListRsp} message RoomListRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomListRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RoomList = [];
            if (message.RoomList && message.RoomList.length) {
                object.RoomList = [];
                for (var j = 0; j < message.RoomList.length; ++j)
                    object.RoomList[j] = $root.PROTOCOLCOMMON.RoomInfo.toObject(message.RoomList[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomListRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.RoomListRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomListRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListRsp;
    })();

    PROTOCOLROOM.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof PROTOCOLROOM
         * @interface ICreateRoomReq
         * @property {string|null} [RoomName] CreateRoomReq RoomName
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {PROTOCOLROOM.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq RoomName.
         * @member {string} RoomName
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.RoomName = "";

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {PROTOCOLROOM.ICreateRoomReq=} [properties] Properties to set
         * @returns {PROTOCOLROOM.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link PROTOCOLROOM.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {PROTOCOLROOM.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RoomName);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {PROTOCOLROOM.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.CreateRoomReq)
                return object;
            var message = new $root.PROTOCOLROOM.CreateRoomReq();
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @static
         * @param {PROTOCOLROOM.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RoomName = "";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomReq;
    })();

    PROTOCOLROOM.CreateRoomRsp = (function() {

        /**
         * Properties of a CreateRoomRsp.
         * @memberof PROTOCOLROOM
         * @interface ICreateRoomRsp
         * @property {number|null} [PlayerSeat] CreateRoomRsp PlayerSeat
         * @property {PROTOCOLCOMMON.IRoomInfo|null} [RoomInfo] CreateRoomRsp RoomInfo
         */

        /**
         * Constructs a new CreateRoomRsp.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a CreateRoomRsp.
         * @implements ICreateRoomRsp
         * @constructor
         * @param {PROTOCOLROOM.ICreateRoomRsp=} [properties] Properties to set
         */
        function CreateRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRsp PlayerSeat.
         * @member {number} PlayerSeat
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.PlayerSeat = 0;

        /**
         * CreateRoomRsp RoomInfo.
         * @member {PROTOCOLCOMMON.IRoomInfo|null|undefined} RoomInfo
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @instance
         */
        CreateRoomRsp.prototype.RoomInfo = null;

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {PROTOCOLROOM.ICreateRoomRsp=} [properties] Properties to set
         * @returns {PROTOCOLROOM.CreateRoomRsp} CreateRoomRsp instance
         */
        CreateRoomRsp.create = function create(properties) {
            return new CreateRoomRsp(properties);
        };

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link PROTOCOLROOM.CreateRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {PROTOCOLROOM.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PlayerSeat);
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.CreateRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {PROTOCOLROOM.ICreateRoomRsp} message CreateRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.CreateRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PlayerSeat = reader.int32();
                    break;
                case 2:
                    message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.CreateRoomRsp} CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRsp message.
         * @function verify
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                if (!$util.isInteger(message.PlayerSeat))
                    return "PlayerSeat: integer expected";
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo")) {
                var error = $root.PROTOCOLCOMMON.RoomInfo.verify(message.RoomInfo);
                if (error)
                    return "RoomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.CreateRoomRsp} CreateRoomRsp
         */
        CreateRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.CreateRoomRsp)
                return object;
            var message = new $root.PROTOCOLROOM.CreateRoomRsp();
            if (object.PlayerSeat != null)
                message.PlayerSeat = object.PlayerSeat | 0;
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".PROTOCOLROOM.CreateRoomRsp.RoomInfo: object expected");
                message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @static
         * @param {PROTOCOLROOM.CreateRoomRsp} message CreateRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PlayerSeat = 0;
                object.RoomInfo = null;
            }
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                object.PlayerSeat = message.PlayerSeat;
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                object.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.toObject(message.RoomInfo, options);
            return object;
        };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.CreateRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRsp;
    })();

    PROTOCOLROOM.LeaveRoomReq = (function() {

        /**
         * Properties of a LeaveRoomReq.
         * @memberof PROTOCOLROOM
         * @interface ILeaveRoomReq
         */

        /**
         * Constructs a new LeaveRoomReq.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a LeaveRoomReq.
         * @implements ILeaveRoomReq
         * @constructor
         * @param {PROTOCOLROOM.ILeaveRoomReq=} [properties] Properties to set
         */
        function LeaveRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LeaveRoomReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomReq=} [properties] Properties to set
         * @returns {PROTOCOLROOM.LeaveRoomReq} LeaveRoomReq instance
         */
        LeaveRoomReq.create = function create(properties) {
            return new LeaveRoomReq(properties);
        };

        /**
         * Encodes the specified LeaveRoomReq message. Does not implicitly {@link PROTOCOLROOM.LeaveRoomReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.LeaveRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomReq} message LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.LeaveRoomReq();
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
         * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.LeaveRoomReq} LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomReq message.
         * @function verify
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.LeaveRoomReq} LeaveRoomReq
         */
        LeaveRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.LeaveRoomReq)
                return object;
            return new $root.PROTOCOLROOM.LeaveRoomReq();
        };

        /**
         * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @static
         * @param {PROTOCOLROOM.LeaveRoomReq} message LeaveRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LeaveRoomReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.LeaveRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveRoomReq;
    })();

    PROTOCOLROOM.LeaveRoomRsp = (function() {

        /**
         * Properties of a LeaveRoomRsp.
         * @memberof PROTOCOLROOM
         * @interface ILeaveRoomRsp
         * @property {Array.<PROTOCOLCOMMON.IRoomInfo>|null} [RoomList] LeaveRoomRsp RoomList
         */

        /**
         * Constructs a new LeaveRoomRsp.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a LeaveRoomRsp.
         * @implements ILeaveRoomRsp
         * @constructor
         * @param {PROTOCOLROOM.ILeaveRoomRsp=} [properties] Properties to set
         */
        function LeaveRoomRsp(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveRoomRsp RoomList.
         * @member {Array.<PROTOCOLCOMMON.IRoomInfo>} RoomList
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @instance
         */
        LeaveRoomRsp.prototype.RoomList = $util.emptyArray;

        /**
         * Creates a new LeaveRoomRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomRsp=} [properties] Properties to set
         * @returns {PROTOCOLROOM.LeaveRoomRsp} LeaveRoomRsp instance
         */
        LeaveRoomRsp.create = function create(properties) {
            return new LeaveRoomRsp(properties);
        };

        /**
         * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link PROTOCOLROOM.LeaveRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomRsp} message LeaveRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LeaveRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.LeaveRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {PROTOCOLROOM.ILeaveRoomRsp} message LeaveRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.LeaveRoomRsp} LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.LeaveRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.PROTOCOLCOMMON.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.LeaveRoomRsp} LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveRoomRsp message.
         * @function verify
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.PROTOCOLCOMMON.RoomInfo.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LeaveRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.LeaveRoomRsp} LeaveRoomRsp
         */
        LeaveRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.LeaveRoomRsp)
                return object;
            var message = new $root.PROTOCOLROOM.LeaveRoomRsp();
            if (object.RoomList) {
                if (!Array.isArray(object.RoomList))
                    throw TypeError(".PROTOCOLROOM.LeaveRoomRsp.RoomList: array expected");
                message.RoomList = [];
                for (var i = 0; i < object.RoomList.length; ++i) {
                    if (typeof object.RoomList[i] !== "object")
                        throw TypeError(".PROTOCOLROOM.LeaveRoomRsp.RoomList: object expected");
                    message.RoomList[i] = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LeaveRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @static
         * @param {PROTOCOLROOM.LeaveRoomRsp} message LeaveRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RoomList = [];
            if (message.RoomList && message.RoomList.length) {
                object.RoomList = [];
                for (var j = 0; j < message.RoomList.length; ++j)
                    object.RoomList[j] = $root.PROTOCOLCOMMON.RoomInfo.toObject(message.RoomList[j], options);
            }
            return object;
        };

        /**
         * Converts this LeaveRoomRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.LeaveRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveRoomRsp;
    })();

    PROTOCOLROOM.UpdateRoomInfoNotice = (function() {

        /**
         * Properties of an UpdateRoomInfoNotice.
         * @memberof PROTOCOLROOM
         * @interface IUpdateRoomInfoNotice
         * @property {PROTOCOLCOMMON.IRoomInfo|null} [RoomInfo] UpdateRoomInfoNotice RoomInfo
         */

        /**
         * Constructs a new UpdateRoomInfoNotice.
         * @memberof PROTOCOLROOM
         * @classdesc Represents an UpdateRoomInfoNotice.
         * @implements IUpdateRoomInfoNotice
         * @constructor
         * @param {PROTOCOLROOM.IUpdateRoomInfoNotice=} [properties] Properties to set
         */
        function UpdateRoomInfoNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoomInfoNotice RoomInfo.
         * @member {PROTOCOLCOMMON.IRoomInfo|null|undefined} RoomInfo
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @instance
         */
        UpdateRoomInfoNotice.prototype.RoomInfo = null;

        /**
         * Creates a new UpdateRoomInfoNotice instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {PROTOCOLROOM.IUpdateRoomInfoNotice=} [properties] Properties to set
         * @returns {PROTOCOLROOM.UpdateRoomInfoNotice} UpdateRoomInfoNotice instance
         */
        UpdateRoomInfoNotice.create = function create(properties) {
            return new UpdateRoomInfoNotice(properties);
        };

        /**
         * Encodes the specified UpdateRoomInfoNotice message. Does not implicitly {@link PROTOCOLROOM.UpdateRoomInfoNotice.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {PROTOCOLROOM.IUpdateRoomInfoNotice} message UpdateRoomInfoNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateRoomInfoNotice message, length delimited. Does not implicitly {@link PROTOCOLROOM.UpdateRoomInfoNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {PROTOCOLROOM.IUpdateRoomInfoNotice} message UpdateRoomInfoNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoomInfoNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoomInfoNotice message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.UpdateRoomInfoNotice} UpdateRoomInfoNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.UpdateRoomInfoNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRoomInfoNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.UpdateRoomInfoNotice} UpdateRoomInfoNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoomInfoNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoomInfoNotice message.
         * @function verify
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoomInfoNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo")) {
                var error = $root.PROTOCOLCOMMON.RoomInfo.verify(message.RoomInfo);
                if (error)
                    return "RoomInfo." + error;
            }
            return null;
        };

        /**
         * Creates an UpdateRoomInfoNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.UpdateRoomInfoNotice} UpdateRoomInfoNotice
         */
        UpdateRoomInfoNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.UpdateRoomInfoNotice)
                return object;
            var message = new $root.PROTOCOLROOM.UpdateRoomInfoNotice();
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".PROTOCOLROOM.UpdateRoomInfoNotice.RoomInfo: object expected");
                message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoomInfoNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @static
         * @param {PROTOCOLROOM.UpdateRoomInfoNotice} message UpdateRoomInfoNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoomInfoNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RoomInfo = null;
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                object.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.toObject(message.RoomInfo, options);
            return object;
        };

        /**
         * Converts this UpdateRoomInfoNotice to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.UpdateRoomInfoNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoomInfoNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateRoomInfoNotice;
    })();

    PROTOCOLROOM.JoinRoomReq = (function() {

        /**
         * Properties of a JoinRoomReq.
         * @memberof PROTOCOLROOM
         * @interface IJoinRoomReq
         * @property {number|null} [RoomUnquieId] JoinRoomReq RoomUnquieId
         */

        /**
         * Constructs a new JoinRoomReq.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a JoinRoomReq.
         * @implements IJoinRoomReq
         * @constructor
         * @param {PROTOCOLROOM.IJoinRoomReq=} [properties] Properties to set
         */
        function JoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomReq RoomUnquieId.
         * @member {number} RoomUnquieId
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @instance
         */
        JoinRoomReq.prototype.RoomUnquieId = 0;

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {PROTOCOLROOM.IJoinRoomReq=} [properties] Properties to set
         * @returns {PROTOCOLROOM.JoinRoomReq} JoinRoomReq instance
         */
        JoinRoomReq.create = function create(properties) {
            return new JoinRoomReq(properties);
        };

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link PROTOCOLROOM.JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {PROTOCOLROOM.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomUnquieId != null && message.hasOwnProperty("RoomUnquieId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomUnquieId);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.JoinRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {PROTOCOLROOM.IJoinRoomReq} message JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.JoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomUnquieId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.JoinRoomReq} JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomReq message.
         * @function verify
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomUnquieId != null && message.hasOwnProperty("RoomUnquieId"))
                if (!$util.isInteger(message.RoomUnquieId))
                    return "RoomUnquieId: integer expected";
            return null;
        };

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.JoinRoomReq} JoinRoomReq
         */
        JoinRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.JoinRoomReq)
                return object;
            var message = new $root.PROTOCOLROOM.JoinRoomReq();
            if (object.RoomUnquieId != null)
                message.RoomUnquieId = object.RoomUnquieId | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @static
         * @param {PROTOCOLROOM.JoinRoomReq} message JoinRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RoomUnquieId = 0;
            if (message.RoomUnquieId != null && message.hasOwnProperty("RoomUnquieId"))
                object.RoomUnquieId = message.RoomUnquieId;
            return object;
        };

        /**
         * Converts this JoinRoomReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.JoinRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomReq;
    })();

    PROTOCOLROOM.JoinRoomRsp = (function() {

        /**
         * Properties of a JoinRoomRsp.
         * @memberof PROTOCOLROOM
         * @interface IJoinRoomRsp
         * @property {number|null} [PlayerSeat] JoinRoomRsp PlayerSeat
         * @property {PROTOCOLCOMMON.IRoomInfo|null} [RoomInfo] JoinRoomRsp RoomInfo
         */

        /**
         * Constructs a new JoinRoomRsp.
         * @memberof PROTOCOLROOM
         * @classdesc Represents a JoinRoomRsp.
         * @implements IJoinRoomRsp
         * @constructor
         * @param {PROTOCOLROOM.IJoinRoomRsp=} [properties] Properties to set
         */
        function JoinRoomRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRsp PlayerSeat.
         * @member {number} PlayerSeat
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @instance
         */
        JoinRoomRsp.prototype.PlayerSeat = 0;

        /**
         * JoinRoomRsp RoomInfo.
         * @member {PROTOCOLCOMMON.IRoomInfo|null|undefined} RoomInfo
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @instance
         */
        JoinRoomRsp.prototype.RoomInfo = null;

        /**
         * Creates a new JoinRoomRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {PROTOCOLROOM.IJoinRoomRsp=} [properties] Properties to set
         * @returns {PROTOCOLROOM.JoinRoomRsp} JoinRoomRsp instance
         */
        JoinRoomRsp.create = function create(properties) {
            return new JoinRoomRsp(properties);
        };

        /**
         * Encodes the specified JoinRoomRsp message. Does not implicitly {@link PROTOCOLROOM.JoinRoomRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {PROTOCOLROOM.IJoinRoomRsp} message JoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PlayerSeat);
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.JoinRoomRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {PROTOCOLROOM.IJoinRoomRsp} message JoinRoomRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLROOM.JoinRoomRsp} JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLROOM.JoinRoomRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PlayerSeat = reader.int32();
                    break;
                case 2:
                    message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLROOM.JoinRoomRsp} JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRsp message.
         * @function verify
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                if (!$util.isInteger(message.PlayerSeat))
                    return "PlayerSeat: integer expected";
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo")) {
                var error = $root.PROTOCOLCOMMON.RoomInfo.verify(message.RoomInfo);
                if (error)
                    return "RoomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a JoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLROOM.JoinRoomRsp} JoinRoomRsp
         */
        JoinRoomRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLROOM.JoinRoomRsp)
                return object;
            var message = new $root.PROTOCOLROOM.JoinRoomRsp();
            if (object.PlayerSeat != null)
                message.PlayerSeat = object.PlayerSeat | 0;
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".PROTOCOLROOM.JoinRoomRsp.RoomInfo: object expected");
                message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @static
         * @param {PROTOCOLROOM.JoinRoomRsp} message JoinRoomRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PlayerSeat = 0;
                object.RoomInfo = null;
            }
            if (message.PlayerSeat != null && message.hasOwnProperty("PlayerSeat"))
                object.PlayerSeat = message.PlayerSeat;
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                object.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.toObject(message.RoomInfo, options);
            return object;
        };

        /**
         * Converts this JoinRoomRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLROOM.JoinRoomRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomRsp;
    })();

    return PROTOCOLROOM;
})();

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
