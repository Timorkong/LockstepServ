/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOLWAR = (function() {

    /**
     * Namespace PROTOCOLWAR.
     * @exports PROTOCOLWAR
     * @namespace
     */
    var PROTOCOLWAR = {};

    PROTOCOLWAR.EnterGameReq = (function() {

        /**
         * Properties of an EnterGameReq.
         * @memberof PROTOCOLWAR
         * @interface IEnterGameReq
         * @property {PROTOCOLCOMMON.IPreBattleData|null} [Data] EnterGameReq Data
         */

        /**
         * Constructs a new EnterGameReq.
         * @memberof PROTOCOLWAR
         * @classdesc Represents an EnterGameReq.
         * @implements IEnterGameReq
         * @constructor
         * @param {PROTOCOLWAR.IEnterGameReq=} [properties] Properties to set
         */
        function EnterGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGameReq Data.
         * @member {PROTOCOLCOMMON.IPreBattleData|null|undefined} Data
         * @memberof PROTOCOLWAR.EnterGameReq
         * @instance
         */
        EnterGameReq.prototype.Data = null;

        /**
         * Creates a new EnterGameReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {PROTOCOLWAR.IEnterGameReq=} [properties] Properties to set
         * @returns {PROTOCOLWAR.EnterGameReq} EnterGameReq instance
         */
        EnterGameReq.create = function create(properties) {
            return new EnterGameReq(properties);
        };

        /**
         * Encodes the specified EnterGameReq message. Does not implicitly {@link PROTOCOLWAR.EnterGameReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {PROTOCOLWAR.IEnterGameReq} message EnterGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && message.hasOwnProperty("Data"))
                $root.PROTOCOLCOMMON.PreBattleData.encode(message.Data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterGameReq message, length delimited. Does not implicitly {@link PROTOCOLWAR.EnterGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {PROTOCOLWAR.IEnterGameReq} message EnterGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.EnterGameReq} EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.EnterGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Data = $root.PROTOCOLCOMMON.PreBattleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.EnterGameReq} EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGameReq message.
         * @function verify
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                var error = $root.PROTOCOLCOMMON.PreBattleData.verify(message.Data);
                if (error)
                    return "Data." + error;
            }
            return null;
        };

        /**
         * Creates an EnterGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.EnterGameReq} EnterGameReq
         */
        EnterGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.EnterGameReq)
                return object;
            var message = new $root.PROTOCOLWAR.EnterGameReq();
            if (object.Data != null) {
                if (typeof object.Data !== "object")
                    throw TypeError(".PROTOCOLWAR.EnterGameReq.Data: object expected");
                message.Data = $root.PROTOCOLCOMMON.PreBattleData.fromObject(object.Data);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.EnterGameReq
         * @static
         * @param {PROTOCOLWAR.EnterGameReq} message EnterGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Data = null;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = $root.PROTOCOLCOMMON.PreBattleData.toObject(message.Data, options);
            return object;
        };

        /**
         * Converts this EnterGameReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.EnterGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGameReq;
    })();

    PROTOCOLWAR.EnterGameRsp = (function() {

        /**
         * Properties of an EnterGameRsp.
         * @memberof PROTOCOLWAR
         * @interface IEnterGameRsp
         * @property {PROTOCOLCOMMON.IPreBattleData|null} [Data] EnterGameRsp Data
         */

        /**
         * Constructs a new EnterGameRsp.
         * @memberof PROTOCOLWAR
         * @classdesc Represents an EnterGameRsp.
         * @implements IEnterGameRsp
         * @constructor
         * @param {PROTOCOLWAR.IEnterGameRsp=} [properties] Properties to set
         */
        function EnterGameRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGameRsp Data.
         * @member {PROTOCOLCOMMON.IPreBattleData|null|undefined} Data
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @instance
         */
        EnterGameRsp.prototype.Data = null;

        /**
         * Creates a new EnterGameRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {PROTOCOLWAR.IEnterGameRsp=} [properties] Properties to set
         * @returns {PROTOCOLWAR.EnterGameRsp} EnterGameRsp instance
         */
        EnterGameRsp.create = function create(properties) {
            return new EnterGameRsp(properties);
        };

        /**
         * Encodes the specified EnterGameRsp message. Does not implicitly {@link PROTOCOLWAR.EnterGameRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {PROTOCOLWAR.IEnterGameRsp} message EnterGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Data != null && message.hasOwnProperty("Data"))
                $root.PROTOCOLCOMMON.PreBattleData.encode(message.Data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterGameRsp message, length delimited. Does not implicitly {@link PROTOCOLWAR.EnterGameRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {PROTOCOLWAR.IEnterGameRsp} message EnterGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGameRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGameRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.EnterGameRsp} EnterGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.EnterGameRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Data = $root.PROTOCOLCOMMON.PreBattleData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterGameRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.EnterGameRsp} EnterGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGameRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGameRsp message.
         * @function verify
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGameRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Data != null && message.hasOwnProperty("Data")) {
                var error = $root.PROTOCOLCOMMON.PreBattleData.verify(message.Data);
                if (error)
                    return "Data." + error;
            }
            return null;
        };

        /**
         * Creates an EnterGameRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.EnterGameRsp} EnterGameRsp
         */
        EnterGameRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.EnterGameRsp)
                return object;
            var message = new $root.PROTOCOLWAR.EnterGameRsp();
            if (object.Data != null) {
                if (typeof object.Data !== "object")
                    throw TypeError(".PROTOCOLWAR.EnterGameRsp.Data: object expected");
                message.Data = $root.PROTOCOLCOMMON.PreBattleData.fromObject(object.Data);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterGameRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @static
         * @param {PROTOCOLWAR.EnterGameRsp} message EnterGameRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterGameRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Data = null;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = $root.PROTOCOLCOMMON.PreBattleData.toObject(message.Data, options);
            return object;
        };

        /**
         * Converts this EnterGameRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.EnterGameRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterGameRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGameRsp;
    })();

    PROTOCOLWAR.StartGameReq = (function() {

        /**
         * Properties of a StartGameReq.
         * @memberof PROTOCOLWAR
         * @interface IStartGameReq
         */

        /**
         * Constructs a new StartGameReq.
         * @memberof PROTOCOLWAR
         * @classdesc Represents a StartGameReq.
         * @implements IStartGameReq
         * @constructor
         * @param {PROTOCOLWAR.IStartGameReq=} [properties] Properties to set
         */
        function StartGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StartGameReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {PROTOCOLWAR.IStartGameReq=} [properties] Properties to set
         * @returns {PROTOCOLWAR.StartGameReq} StartGameReq instance
         */
        StartGameReq.create = function create(properties) {
            return new StartGameReq(properties);
        };

        /**
         * Encodes the specified StartGameReq message. Does not implicitly {@link PROTOCOLWAR.StartGameReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {PROTOCOLWAR.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link PROTOCOLWAR.StartGameReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {PROTOCOLWAR.IStartGameReq} message StartGameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.StartGameReq();
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
         * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.StartGameReq} StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameReq message.
         * @function verify
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.StartGameReq} StartGameReq
         */
        StartGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.StartGameReq)
                return object;
            return new $root.PROTOCOLWAR.StartGameReq();
        };

        /**
         * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.StartGameReq
         * @static
         * @param {PROTOCOLWAR.StartGameReq} message StartGameReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StartGameReq to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.StartGameReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartGameReq;
    })();

    PROTOCOLWAR.StartGameRsp = (function() {

        /**
         * Properties of a StartGameRsp.
         * @memberof PROTOCOLWAR
         * @interface IStartGameRsp
         * @property {PROTOCOLCOMMON.IRoomInfo|null} [RoomInfo] StartGameRsp RoomInfo
         */

        /**
         * Constructs a new StartGameRsp.
         * @memberof PROTOCOLWAR
         * @classdesc Represents a StartGameRsp.
         * @implements IStartGameRsp
         * @constructor
         * @param {PROTOCOLWAR.IStartGameRsp=} [properties] Properties to set
         */
        function StartGameRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartGameRsp RoomInfo.
         * @member {PROTOCOLCOMMON.IRoomInfo|null|undefined} RoomInfo
         * @memberof PROTOCOLWAR.StartGameRsp
         * @instance
         */
        StartGameRsp.prototype.RoomInfo = null;

        /**
         * Creates a new StartGameRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {PROTOCOLWAR.IStartGameRsp=} [properties] Properties to set
         * @returns {PROTOCOLWAR.StartGameRsp} StartGameRsp instance
         */
        StartGameRsp.create = function create(properties) {
            return new StartGameRsp(properties);
        };

        /**
         * Encodes the specified StartGameRsp message. Does not implicitly {@link PROTOCOLWAR.StartGameRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {PROTOCOLWAR.IStartGameRsp} message StartGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                $root.PROTOCOLCOMMON.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartGameRsp message, length delimited. Does not implicitly {@link PROTOCOLWAR.StartGameRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {PROTOCOLWAR.IStartGameRsp} message StartGameRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartGameRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.StartGameRsp} StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.StartGameRsp();
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
         * Decodes a StartGameRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.StartGameRsp} StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartGameRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartGameRsp message.
         * @function verify
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartGameRsp.verify = function verify(message) {
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
         * Creates a StartGameRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.StartGameRsp} StartGameRsp
         */
        StartGameRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.StartGameRsp)
                return object;
            var message = new $root.PROTOCOLWAR.StartGameRsp();
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".PROTOCOLWAR.StartGameRsp.RoomInfo: object expected");
                message.RoomInfo = $root.PROTOCOLCOMMON.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartGameRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.StartGameRsp
         * @static
         * @param {PROTOCOLWAR.StartGameRsp} message StartGameRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartGameRsp.toObject = function toObject(message, options) {
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
         * Converts this StartGameRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.StartGameRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartGameRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartGameRsp;
    })();

    PROTOCOLWAR.WarMove = (function() {

        /**
         * Properties of a WarMove.
         * @memberof PROTOCOLWAR
         * @interface IWarMove
         * @property {number|null} [Seat] WarMove Seat
         * @property {number|null} [MoveX] WarMove MoveX
         * @property {number|null} [MoveY] WarMove MoveY
         */

        /**
         * Constructs a new WarMove.
         * @memberof PROTOCOLWAR
         * @classdesc Represents a WarMove.
         * @implements IWarMove
         * @constructor
         * @param {PROTOCOLWAR.IWarMove=} [properties] Properties to set
         */
        function WarMove(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WarMove Seat.
         * @member {number} Seat
         * @memberof PROTOCOLWAR.WarMove
         * @instance
         */
        WarMove.prototype.Seat = 0;

        /**
         * WarMove MoveX.
         * @member {number} MoveX
         * @memberof PROTOCOLWAR.WarMove
         * @instance
         */
        WarMove.prototype.MoveX = 0;

        /**
         * WarMove MoveY.
         * @member {number} MoveY
         * @memberof PROTOCOLWAR.WarMove
         * @instance
         */
        WarMove.prototype.MoveY = 0;

        /**
         * Creates a new WarMove instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {PROTOCOLWAR.IWarMove=} [properties] Properties to set
         * @returns {PROTOCOLWAR.WarMove} WarMove instance
         */
        WarMove.create = function create(properties) {
            return new WarMove(properties);
        };

        /**
         * Encodes the specified WarMove message. Does not implicitly {@link PROTOCOLWAR.WarMove.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {PROTOCOLWAR.IWarMove} message WarMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WarMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Seat != null && message.hasOwnProperty("Seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Seat);
            if (message.MoveX != null && message.hasOwnProperty("MoveX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.MoveX);
            if (message.MoveY != null && message.hasOwnProperty("MoveY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.MoveY);
            return writer;
        };

        /**
         * Encodes the specified WarMove message, length delimited. Does not implicitly {@link PROTOCOLWAR.WarMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {PROTOCOLWAR.IWarMove} message WarMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WarMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WarMove message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.WarMove} WarMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WarMove.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.WarMove();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Seat = reader.int32();
                    break;
                case 2:
                    message.MoveX = reader.float();
                    break;
                case 3:
                    message.MoveY = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WarMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.WarMove} WarMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WarMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WarMove message.
         * @function verify
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WarMove.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Seat != null && message.hasOwnProperty("Seat"))
                if (!$util.isInteger(message.Seat))
                    return "Seat: integer expected";
            if (message.MoveX != null && message.hasOwnProperty("MoveX"))
                if (typeof message.MoveX !== "number")
                    return "MoveX: number expected";
            if (message.MoveY != null && message.hasOwnProperty("MoveY"))
                if (typeof message.MoveY !== "number")
                    return "MoveY: number expected";
            return null;
        };

        /**
         * Creates a WarMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.WarMove} WarMove
         */
        WarMove.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.WarMove)
                return object;
            var message = new $root.PROTOCOLWAR.WarMove();
            if (object.Seat != null)
                message.Seat = object.Seat | 0;
            if (object.MoveX != null)
                message.MoveX = Number(object.MoveX);
            if (object.MoveY != null)
                message.MoveY = Number(object.MoveY);
            return message;
        };

        /**
         * Creates a plain object from a WarMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.WarMove
         * @static
         * @param {PROTOCOLWAR.WarMove} message WarMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WarMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Seat = 0;
                object.MoveX = 0;
                object.MoveY = 0;
            }
            if (message.Seat != null && message.hasOwnProperty("Seat"))
                object.Seat = message.Seat;
            if (message.MoveX != null && message.hasOwnProperty("MoveX"))
                object.MoveX = options.json && !isFinite(message.MoveX) ? String(message.MoveX) : message.MoveX;
            if (message.MoveY != null && message.hasOwnProperty("MoveY"))
                object.MoveY = options.json && !isFinite(message.MoveY) ? String(message.MoveY) : message.MoveY;
            return object;
        };

        /**
         * Converts this WarMove to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.WarMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WarMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WarMove;
    })();

    PROTOCOLWAR.WarSequenceNotice = (function() {

        /**
         * Properties of a WarSequenceNotice.
         * @memberof PROTOCOLWAR
         * @interface IWarSequenceNotice
         * @property {number|null} [Sequence] WarSequenceNotice Sequence
         */

        /**
         * Constructs a new WarSequenceNotice.
         * @memberof PROTOCOLWAR
         * @classdesc Represents a WarSequenceNotice.
         * @implements IWarSequenceNotice
         * @constructor
         * @param {PROTOCOLWAR.IWarSequenceNotice=} [properties] Properties to set
         */
        function WarSequenceNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WarSequenceNotice Sequence.
         * @member {number} Sequence
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @instance
         */
        WarSequenceNotice.prototype.Sequence = 0;

        /**
         * Creates a new WarSequenceNotice instance using the specified properties.
         * @function create
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {PROTOCOLWAR.IWarSequenceNotice=} [properties] Properties to set
         * @returns {PROTOCOLWAR.WarSequenceNotice} WarSequenceNotice instance
         */
        WarSequenceNotice.create = function create(properties) {
            return new WarSequenceNotice(properties);
        };

        /**
         * Encodes the specified WarSequenceNotice message. Does not implicitly {@link PROTOCOLWAR.WarSequenceNotice.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {PROTOCOLWAR.IWarSequenceNotice} message WarSequenceNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WarSequenceNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Sequence != null && message.hasOwnProperty("Sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Sequence);
            return writer;
        };

        /**
         * Encodes the specified WarSequenceNotice message, length delimited. Does not implicitly {@link PROTOCOLWAR.WarSequenceNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {PROTOCOLWAR.IWarSequenceNotice} message WarSequenceNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WarSequenceNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WarSequenceNotice message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOLWAR.WarSequenceNotice} WarSequenceNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WarSequenceNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOLWAR.WarSequenceNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Sequence = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WarSequenceNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOLWAR.WarSequenceNotice} WarSequenceNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WarSequenceNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WarSequenceNotice message.
         * @function verify
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WarSequenceNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Sequence != null && message.hasOwnProperty("Sequence"))
                if (!$util.isInteger(message.Sequence))
                    return "Sequence: integer expected";
            return null;
        };

        /**
         * Creates a WarSequenceNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOLWAR.WarSequenceNotice} WarSequenceNotice
         */
        WarSequenceNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOLWAR.WarSequenceNotice)
                return object;
            var message = new $root.PROTOCOLWAR.WarSequenceNotice();
            if (object.Sequence != null)
                message.Sequence = object.Sequence | 0;
            return message;
        };

        /**
         * Creates a plain object from a WarSequenceNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @static
         * @param {PROTOCOLWAR.WarSequenceNotice} message WarSequenceNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WarSequenceNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Sequence = 0;
            if (message.Sequence != null && message.hasOwnProperty("Sequence"))
                object.Sequence = message.Sequence;
            return object;
        };

        /**
         * Converts this WarSequenceNotice to JSON.
         * @function toJSON
         * @memberof PROTOCOLWAR.WarSequenceNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WarSequenceNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WarSequenceNotice;
    })();

    return PROTOCOLWAR;
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
