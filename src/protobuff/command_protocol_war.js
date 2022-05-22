/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOL_WAR = (function() {

    /**
     * Namespace PROTOCOL_WAR.
     * @exports PROTOCOL_WAR
     * @namespace
     */
    var PROTOCOL_WAR = {};

    PROTOCOL_WAR.CMD_ENTER_GAME_REQ = (function() {

        /**
         * Properties of a CMD_ENTER_GAME_REQ.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_ENTER_GAME_REQ
         * @property {PROTOCOL_COMMON.Ipre_battle_data|null} [data] CMD_ENTER_GAME_REQ data
         */

        /**
         * Constructs a new CMD_ENTER_GAME_REQ.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_ENTER_GAME_REQ.
         * @implements ICMD_ENTER_GAME_REQ
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_REQ=} [properties] Properties to set
         */
        function CMD_ENTER_GAME_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_ENTER_GAME_REQ data.
         * @member {PROTOCOL_COMMON.Ipre_battle_data|null|undefined} data
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @instance
         */
        CMD_ENTER_GAME_REQ.prototype.data = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_ENTER_GAME_REQ _data.
         * @member {"data"|undefined} _data
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @instance
         */
        Object.defineProperty(CMD_ENTER_GAME_REQ.prototype, "_data", {
            get: $util.oneOfGetter($oneOfFields = ["data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_ENTER_GAME_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_REQ} CMD_ENTER_GAME_REQ instance
         */
        CMD_ENTER_GAME_REQ.create = function create(properties) {
            return new CMD_ENTER_GAME_REQ(properties);
        };

        /**
         * Encodes the specified CMD_ENTER_GAME_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_REQ} message CMD_ENTER_GAME_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ENTER_GAME_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.PROTOCOL_COMMON.pre_battle_data.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_ENTER_GAME_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_REQ} message CMD_ENTER_GAME_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ENTER_GAME_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_ENTER_GAME_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_REQ} CMD_ENTER_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ENTER_GAME_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_ENTER_GAME_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = $root.PROTOCOL_COMMON.pre_battle_data.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_ENTER_GAME_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_REQ} CMD_ENTER_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ENTER_GAME_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_ENTER_GAME_REQ message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_ENTER_GAME_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.data != null && message.hasOwnProperty("data")) {
                properties._data = 1;
                {
                    var error = $root.PROTOCOL_COMMON.pre_battle_data.verify(message.data);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_ENTER_GAME_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_REQ} CMD_ENTER_GAME_REQ
         */
        CMD_ENTER_GAME_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_ENTER_GAME_REQ)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_ENTER_GAME_REQ();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".PROTOCOL_WAR.CMD_ENTER_GAME_REQ.data: object expected");
                message.data = $root.PROTOCOL_COMMON.pre_battle_data.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_ENTER_GAME_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.CMD_ENTER_GAME_REQ} message CMD_ENTER_GAME_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_ENTER_GAME_REQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.data != null && message.hasOwnProperty("data")) {
                object.data = $root.PROTOCOL_COMMON.pre_battle_data.toObject(message.data, options);
                if (options.oneofs)
                    object._data = "data";
            }
            return object;
        };

        /**
         * Converts this CMD_ENTER_GAME_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_ENTER_GAME_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_ENTER_GAME_REQ;
    })();

    PROTOCOL_WAR.CMD_ENTER_GAME_RSP = (function() {

        /**
         * Properties of a CMD_ENTER_GAME_RSP.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_ENTER_GAME_RSP
         * @property {PROTOCOL_COMMON.Ipre_battle_data|null} [data] CMD_ENTER_GAME_RSP data
         */

        /**
         * Constructs a new CMD_ENTER_GAME_RSP.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_ENTER_GAME_RSP.
         * @implements ICMD_ENTER_GAME_RSP
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_RSP=} [properties] Properties to set
         */
        function CMD_ENTER_GAME_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_ENTER_GAME_RSP data.
         * @member {PROTOCOL_COMMON.Ipre_battle_data|null|undefined} data
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @instance
         */
        CMD_ENTER_GAME_RSP.prototype.data = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_ENTER_GAME_RSP _data.
         * @member {"data"|undefined} _data
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @instance
         */
        Object.defineProperty(CMD_ENTER_GAME_RSP.prototype, "_data", {
            get: $util.oneOfGetter($oneOfFields = ["data"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_ENTER_GAME_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_RSP} CMD_ENTER_GAME_RSP instance
         */
        CMD_ENTER_GAME_RSP.create = function create(properties) {
            return new CMD_ENTER_GAME_RSP(properties);
        };

        /**
         * Encodes the specified CMD_ENTER_GAME_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_RSP} message CMD_ENTER_GAME_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ENTER_GAME_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.PROTOCOL_COMMON.pre_battle_data.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_ENTER_GAME_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_ENTER_GAME_RSP} message CMD_ENTER_GAME_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_ENTER_GAME_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_ENTER_GAME_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_RSP} CMD_ENTER_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ENTER_GAME_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_ENTER_GAME_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = $root.PROTOCOL_COMMON.pre_battle_data.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_ENTER_GAME_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_RSP} CMD_ENTER_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_ENTER_GAME_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_ENTER_GAME_RSP message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_ENTER_GAME_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.data != null && message.hasOwnProperty("data")) {
                properties._data = 1;
                {
                    var error = $root.PROTOCOL_COMMON.pre_battle_data.verify(message.data);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CMD_ENTER_GAME_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_ENTER_GAME_RSP} CMD_ENTER_GAME_RSP
         */
        CMD_ENTER_GAME_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_ENTER_GAME_RSP)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_ENTER_GAME_RSP();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".PROTOCOL_WAR.CMD_ENTER_GAME_RSP.data: object expected");
                message.data = $root.PROTOCOL_COMMON.pre_battle_data.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_ENTER_GAME_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.CMD_ENTER_GAME_RSP} message CMD_ENTER_GAME_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_ENTER_GAME_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.data != null && message.hasOwnProperty("data")) {
                object.data = $root.PROTOCOL_COMMON.pre_battle_data.toObject(message.data, options);
                if (options.oneofs)
                    object._data = "data";
            }
            return object;
        };

        /**
         * Converts this CMD_ENTER_GAME_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_ENTER_GAME_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_ENTER_GAME_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_ENTER_GAME_RSP;
    })();

    PROTOCOL_WAR.CMD_START_GAME_REQ = (function() {

        /**
         * Properties of a CMD_START_GAME_REQ.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_START_GAME_REQ
         */

        /**
         * Constructs a new CMD_START_GAME_REQ.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_START_GAME_REQ.
         * @implements ICMD_START_GAME_REQ
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_START_GAME_REQ=} [properties] Properties to set
         */
        function CMD_START_GAME_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CMD_START_GAME_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_START_GAME_REQ} CMD_START_GAME_REQ instance
         */
        CMD_START_GAME_REQ.create = function create(properties) {
            return new CMD_START_GAME_REQ(properties);
        };

        /**
         * Encodes the specified CMD_START_GAME_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_REQ} message CMD_START_GAME_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_START_GAME_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CMD_START_GAME_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_REQ} message CMD_START_GAME_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_START_GAME_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_START_GAME_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_START_GAME_REQ} CMD_START_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_START_GAME_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_START_GAME_REQ();
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
         * Decodes a CMD_START_GAME_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_START_GAME_REQ} CMD_START_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_START_GAME_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_START_GAME_REQ message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_START_GAME_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CMD_START_GAME_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_START_GAME_REQ} CMD_START_GAME_REQ
         */
        CMD_START_GAME_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_START_GAME_REQ)
                return object;
            return new $root.PROTOCOL_WAR.CMD_START_GAME_REQ();
        };

        /**
         * Creates a plain object from a CMD_START_GAME_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @static
         * @param {PROTOCOL_WAR.CMD_START_GAME_REQ} message CMD_START_GAME_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_START_GAME_REQ.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CMD_START_GAME_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_START_GAME_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_START_GAME_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_START_GAME_REQ;
    })();

    PROTOCOL_WAR.CMD_START_GAME_RSP = (function() {

        /**
         * Properties of a CMD_START_GAME_RSP.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_START_GAME_RSP
         * @property {PROTOCOL_COMMON.IRoomInfo|null} [roomInfo] CMD_START_GAME_RSP roomInfo
         */

        /**
         * Constructs a new CMD_START_GAME_RSP.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_START_GAME_RSP.
         * @implements ICMD_START_GAME_RSP
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_START_GAME_RSP=} [properties] Properties to set
         */
        function CMD_START_GAME_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_START_GAME_RSP roomInfo.
         * @member {PROTOCOL_COMMON.IRoomInfo|null|undefined} roomInfo
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @instance
         */
        CMD_START_GAME_RSP.prototype.roomInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_START_GAME_RSP _roomInfo.
         * @member {"roomInfo"|undefined} _roomInfo
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @instance
         */
        Object.defineProperty(CMD_START_GAME_RSP.prototype, "_roomInfo", {
            get: $util.oneOfGetter($oneOfFields = ["roomInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_START_GAME_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_START_GAME_RSP} CMD_START_GAME_RSP instance
         */
        CMD_START_GAME_RSP.create = function create(properties) {
            return new CMD_START_GAME_RSP(properties);
        };

        /**
         * Encodes the specified CMD_START_GAME_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_RSP} message CMD_START_GAME_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_START_GAME_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.PROTOCOL_COMMON.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CMD_START_GAME_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_START_GAME_RSP} message CMD_START_GAME_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_START_GAME_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_START_GAME_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_START_GAME_RSP} CMD_START_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_START_GAME_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_START_GAME_RSP();
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
         * Decodes a CMD_START_GAME_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_START_GAME_RSP} CMD_START_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_START_GAME_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_START_GAME_RSP message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_START_GAME_RSP.verify = function verify(message) {
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
         * Creates a CMD_START_GAME_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_START_GAME_RSP} CMD_START_GAME_RSP
         */
        CMD_START_GAME_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_START_GAME_RSP)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_START_GAME_RSP();
            if (object.roomInfo != null) {
                if (typeof object.roomInfo !== "object")
                    throw TypeError(".PROTOCOL_WAR.CMD_START_GAME_RSP.roomInfo: object expected");
                message.roomInfo = $root.PROTOCOL_COMMON.RoomInfo.fromObject(object.roomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a CMD_START_GAME_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @static
         * @param {PROTOCOL_WAR.CMD_START_GAME_RSP} message CMD_START_GAME_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_START_GAME_RSP.toObject = function toObject(message, options) {
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
         * Converts this CMD_START_GAME_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_START_GAME_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_START_GAME_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_START_GAME_RSP;
    })();

    PROTOCOL_WAR.CMD_WAR_MOVE = (function() {

        /**
         * Properties of a CMD_WAR_MOVE.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_WAR_MOVE
         * @property {number|null} [seat] CMD_WAR_MOVE seat
         * @property {number|null} [moveX] CMD_WAR_MOVE moveX
         * @property {number|null} [moveY] CMD_WAR_MOVE moveY
         */

        /**
         * Constructs a new CMD_WAR_MOVE.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_WAR_MOVE.
         * @implements ICMD_WAR_MOVE
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE=} [properties] Properties to set
         */
        function CMD_WAR_MOVE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_WAR_MOVE seat.
         * @member {number|null|undefined} seat
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        CMD_WAR_MOVE.prototype.seat = null;

        /**
         * CMD_WAR_MOVE moveX.
         * @member {number|null|undefined} moveX
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        CMD_WAR_MOVE.prototype.moveX = null;

        /**
         * CMD_WAR_MOVE moveY.
         * @member {number|null|undefined} moveY
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        CMD_WAR_MOVE.prototype.moveY = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_WAR_MOVE _seat.
         * @member {"seat"|undefined} _seat
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE.prototype, "_seat", {
            get: $util.oneOfGetter($oneOfFields = ["seat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_MOVE _moveX.
         * @member {"moveX"|undefined} _moveX
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE.prototype, "_moveX", {
            get: $util.oneOfGetter($oneOfFields = ["moveX"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_MOVE _moveY.
         * @member {"moveY"|undefined} _moveY
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE.prototype, "_moveY", {
            get: $util.oneOfGetter($oneOfFields = ["moveY"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_WAR_MOVE instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE} CMD_WAR_MOVE instance
         */
        CMD_WAR_MOVE.create = function create(properties) {
            return new CMD_WAR_MOVE(properties);
        };

        /**
         * Encodes the specified CMD_WAR_MOVE message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE} message CMD_WAR_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.moveX != null && Object.hasOwnProperty.call(message, "moveX"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.moveX);
            if (message.moveY != null && Object.hasOwnProperty.call(message, "moveY"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.moveY);
            return writer;
        };

        /**
         * Encodes the specified CMD_WAR_MOVE message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE} message CMD_WAR_MOVE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_WAR_MOVE message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE} CMD_WAR_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.moveX = reader.float();
                    break;
                case 3:
                    message.moveY = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_WAR_MOVE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE} CMD_WAR_MOVE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_WAR_MOVE message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_WAR_MOVE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.seat != null && message.hasOwnProperty("seat")) {
                properties._seat = 1;
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            }
            if (message.moveX != null && message.hasOwnProperty("moveX")) {
                properties._moveX = 1;
                if (typeof message.moveX !== "number")
                    return "moveX: number expected";
            }
            if (message.moveY != null && message.hasOwnProperty("moveY")) {
                properties._moveY = 1;
                if (typeof message.moveY !== "number")
                    return "moveY: number expected";
            }
            return null;
        };

        /**
         * Creates a CMD_WAR_MOVE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE} CMD_WAR_MOVE
         */
        CMD_WAR_MOVE.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_WAR_MOVE)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE();
            if (object.seat != null)
                message.seat = object.seat | 0;
            if (object.moveX != null)
                message.moveX = Number(object.moveX);
            if (object.moveY != null)
                message.moveY = Number(object.moveY);
            return message;
        };

        /**
         * Creates a plain object from a CMD_WAR_MOVE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @static
         * @param {PROTOCOL_WAR.CMD_WAR_MOVE} message CMD_WAR_MOVE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_WAR_MOVE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.seat != null && message.hasOwnProperty("seat")) {
                object.seat = message.seat;
                if (options.oneofs)
                    object._seat = "seat";
            }
            if (message.moveX != null && message.hasOwnProperty("moveX")) {
                object.moveX = options.json && !isFinite(message.moveX) ? String(message.moveX) : message.moveX;
                if (options.oneofs)
                    object._moveX = "moveX";
            }
            if (message.moveY != null && message.hasOwnProperty("moveY")) {
                object.moveY = options.json && !isFinite(message.moveY) ? String(message.moveY) : message.moveY;
                if (options.oneofs)
                    object._moveY = "moveY";
            }
            return object;
        };

        /**
         * Converts this CMD_WAR_MOVE to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_WAR_MOVE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_WAR_MOVE;
    })();

    PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE = (function() {

        /**
         * Properties of a CMD_WAR_SEQUENCE_NOTICE.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_WAR_SEQUENCE_NOTICE
         * @property {number|null} [sequence] CMD_WAR_SEQUENCE_NOTICE sequence
         */

        /**
         * Constructs a new CMD_WAR_SEQUENCE_NOTICE.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_WAR_SEQUENCE_NOTICE.
         * @implements ICMD_WAR_SEQUENCE_NOTICE
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_WAR_SEQUENCE_NOTICE=} [properties] Properties to set
         */
        function CMD_WAR_SEQUENCE_NOTICE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_WAR_SEQUENCE_NOTICE sequence.
         * @member {number|null|undefined} sequence
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @instance
         */
        CMD_WAR_SEQUENCE_NOTICE.prototype.sequence = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_WAR_SEQUENCE_NOTICE _sequence.
         * @member {"sequence"|undefined} _sequence
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @instance
         */
        Object.defineProperty(CMD_WAR_SEQUENCE_NOTICE.prototype, "_sequence", {
            get: $util.oneOfGetter($oneOfFields = ["sequence"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_WAR_SEQUENCE_NOTICE instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_SEQUENCE_NOTICE=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE} CMD_WAR_SEQUENCE_NOTICE instance
         */
        CMD_WAR_SEQUENCE_NOTICE.create = function create(properties) {
            return new CMD_WAR_SEQUENCE_NOTICE(properties);
        };

        /**
         * Encodes the specified CMD_WAR_SEQUENCE_NOTICE message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_SEQUENCE_NOTICE} message CMD_WAR_SEQUENCE_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_SEQUENCE_NOTICE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sequence);
            return writer;
        };

        /**
         * Encodes the specified CMD_WAR_SEQUENCE_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_SEQUENCE_NOTICE} message CMD_WAR_SEQUENCE_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_SEQUENCE_NOTICE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_WAR_SEQUENCE_NOTICE message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE} CMD_WAR_SEQUENCE_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_SEQUENCE_NOTICE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_WAR_SEQUENCE_NOTICE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE} CMD_WAR_SEQUENCE_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_SEQUENCE_NOTICE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_WAR_SEQUENCE_NOTICE message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_WAR_SEQUENCE_NOTICE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                properties._sequence = 1;
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_WAR_SEQUENCE_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE} CMD_WAR_SEQUENCE_NOTICE
         */
        CMD_WAR_SEQUENCE_NOTICE.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE();
            if (object.sequence != null)
                message.sequence = object.sequence | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_WAR_SEQUENCE_NOTICE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @static
         * @param {PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE} message CMD_WAR_SEQUENCE_NOTICE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_WAR_SEQUENCE_NOTICE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                object.sequence = message.sequence;
                if (options.oneofs)
                    object._sequence = "sequence";
            }
            return object;
        };

        /**
         * Converts this CMD_WAR_SEQUENCE_NOTICE to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_WAR_SEQUENCE_NOTICE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_WAR_SEQUENCE_NOTICE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_WAR_SEQUENCE_NOTICE;
    })();

    return PROTOCOL_WAR;
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
