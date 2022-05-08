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
            return new $root.PROTOCOL_WAR.CMD_ENTER_GAME_REQ();
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
        CMD_ENTER_GAME_REQ.toObject = function toObject() {
            return {};
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
            return new $root.PROTOCOL_WAR.CMD_ENTER_GAME_RSP();
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
        CMD_ENTER_GAME_RSP.toObject = function toObject() {
            return {};
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
            return new $root.PROTOCOL_WAR.CMD_START_GAME_RSP();
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
        CMD_START_GAME_RSP.toObject = function toObject() {
            return {};
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

    PROTOCOL_WAR.CMD_WAR_MOVE_REQ = (function() {

        /**
         * Properties of a CMD_WAR_MOVE_REQ.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_WAR_MOVE_REQ
         * @property {boolean|null} [isDown] CMD_WAR_MOVE_REQ isDown
         * @property {number|null} [degree] CMD_WAR_MOVE_REQ degree
         */

        /**
         * Constructs a new CMD_WAR_MOVE_REQ.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_WAR_MOVE_REQ.
         * @implements ICMD_WAR_MOVE_REQ
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_REQ=} [properties] Properties to set
         */
        function CMD_WAR_MOVE_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_WAR_MOVE_REQ isDown.
         * @member {boolean|null|undefined} isDown
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @instance
         */
        CMD_WAR_MOVE_REQ.prototype.isDown = null;

        /**
         * CMD_WAR_MOVE_REQ degree.
         * @member {number|null|undefined} degree
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @instance
         */
        CMD_WAR_MOVE_REQ.prototype.degree = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_WAR_MOVE_REQ _isDown.
         * @member {"isDown"|undefined} _isDown
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE_REQ.prototype, "_isDown", {
            get: $util.oneOfGetter($oneOfFields = ["isDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_MOVE_REQ _degree.
         * @member {"degree"|undefined} _degree
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE_REQ.prototype, "_degree", {
            get: $util.oneOfGetter($oneOfFields = ["degree"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_WAR_MOVE_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_REQ=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_REQ} CMD_WAR_MOVE_REQ instance
         */
        CMD_WAR_MOVE_REQ.create = function create(properties) {
            return new CMD_WAR_MOVE_REQ(properties);
        };

        /**
         * Encodes the specified CMD_WAR_MOVE_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_REQ} message CMD_WAR_MOVE_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isDown != null && Object.hasOwnProperty.call(message, "isDown"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isDown);
            if (message.degree != null && Object.hasOwnProperty.call(message, "degree"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.degree);
            return writer;
        };

        /**
         * Encodes the specified CMD_WAR_MOVE_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_REQ} message CMD_WAR_MOVE_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_WAR_MOVE_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_REQ} CMD_WAR_MOVE_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isDown = reader.bool();
                    break;
                case 2:
                    message.degree = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_WAR_MOVE_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_REQ} CMD_WAR_MOVE_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_WAR_MOVE_REQ message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_WAR_MOVE_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.isDown != null && message.hasOwnProperty("isDown")) {
                properties._isDown = 1;
                if (typeof message.isDown !== "boolean")
                    return "isDown: boolean expected";
            }
            if (message.degree != null && message.hasOwnProperty("degree")) {
                properties._degree = 1;
                if (!$util.isInteger(message.degree))
                    return "degree: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_WAR_MOVE_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_REQ} CMD_WAR_MOVE_REQ
         */
        CMD_WAR_MOVE_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_WAR_MOVE_REQ)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE_REQ();
            if (object.isDown != null)
                message.isDown = Boolean(object.isDown);
            if (object.degree != null)
                message.degree = object.degree | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_WAR_MOVE_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @static
         * @param {PROTOCOL_WAR.CMD_WAR_MOVE_REQ} message CMD_WAR_MOVE_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_WAR_MOVE_REQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.isDown != null && message.hasOwnProperty("isDown")) {
                object.isDown = message.isDown;
                if (options.oneofs)
                    object._isDown = "isDown";
            }
            if (message.degree != null && message.hasOwnProperty("degree")) {
                object.degree = message.degree;
                if (options.oneofs)
                    object._degree = "degree";
            }
            return object;
        };

        /**
         * Converts this CMD_WAR_MOVE_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_WAR_MOVE_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_WAR_MOVE_REQ;
    })();

    PROTOCOL_WAR.CMD_WAR_MOVE_RSP = (function() {

        /**
         * Properties of a CMD_WAR_MOVE_RSP.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_WAR_MOVE_RSP
         * @property {number|null} [seat] CMD_WAR_MOVE_RSP seat
         * @property {boolean|null} [isDown] CMD_WAR_MOVE_RSP isDown
         * @property {number|null} [degree] CMD_WAR_MOVE_RSP degree
         */

        /**
         * Constructs a new CMD_WAR_MOVE_RSP.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_WAR_MOVE_RSP.
         * @implements ICMD_WAR_MOVE_RSP
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_RSP=} [properties] Properties to set
         */
        function CMD_WAR_MOVE_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_WAR_MOVE_RSP seat.
         * @member {number|null|undefined} seat
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        CMD_WAR_MOVE_RSP.prototype.seat = null;

        /**
         * CMD_WAR_MOVE_RSP isDown.
         * @member {boolean|null|undefined} isDown
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        CMD_WAR_MOVE_RSP.prototype.isDown = null;

        /**
         * CMD_WAR_MOVE_RSP degree.
         * @member {number|null|undefined} degree
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        CMD_WAR_MOVE_RSP.prototype.degree = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_WAR_MOVE_RSP _seat.
         * @member {"seat"|undefined} _seat
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE_RSP.prototype, "_seat", {
            get: $util.oneOfGetter($oneOfFields = ["seat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_MOVE_RSP _isDown.
         * @member {"isDown"|undefined} _isDown
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE_RSP.prototype, "_isDown", {
            get: $util.oneOfGetter($oneOfFields = ["isDown"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_MOVE_RSP _degree.
         * @member {"degree"|undefined} _degree
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         */
        Object.defineProperty(CMD_WAR_MOVE_RSP.prototype, "_degree", {
            get: $util.oneOfGetter($oneOfFields = ["degree"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_WAR_MOVE_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_RSP=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_RSP} CMD_WAR_MOVE_RSP instance
         */
        CMD_WAR_MOVE_RSP.create = function create(properties) {
            return new CMD_WAR_MOVE_RSP(properties);
        };

        /**
         * Encodes the specified CMD_WAR_MOVE_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_RSP} message CMD_WAR_MOVE_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seat != null && Object.hasOwnProperty.call(message, "seat"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.seat);
            if (message.isDown != null && Object.hasOwnProperty.call(message, "isDown"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isDown);
            if (message.degree != null && Object.hasOwnProperty.call(message, "degree"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.degree);
            return writer;
        };

        /**
         * Encodes the specified CMD_WAR_MOVE_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_MOVE_RSP} message CMD_WAR_MOVE_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_MOVE_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_WAR_MOVE_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_RSP} CMD_WAR_MOVE_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.seat = reader.int32();
                    break;
                case 2:
                    message.isDown = reader.bool();
                    break;
                case 3:
                    message.degree = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_WAR_MOVE_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_RSP} CMD_WAR_MOVE_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_MOVE_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_WAR_MOVE_RSP message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_WAR_MOVE_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.seat != null && message.hasOwnProperty("seat")) {
                properties._seat = 1;
                if (!$util.isInteger(message.seat))
                    return "seat: integer expected";
            }
            if (message.isDown != null && message.hasOwnProperty("isDown")) {
                properties._isDown = 1;
                if (typeof message.isDown !== "boolean")
                    return "isDown: boolean expected";
            }
            if (message.degree != null && message.hasOwnProperty("degree")) {
                properties._degree = 1;
                if (!$util.isInteger(message.degree))
                    return "degree: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_WAR_MOVE_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_WAR_MOVE_RSP} CMD_WAR_MOVE_RSP
         */
        CMD_WAR_MOVE_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_WAR_MOVE_RSP)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_WAR_MOVE_RSP();
            if (object.seat != null)
                message.seat = object.seat | 0;
            if (object.isDown != null)
                message.isDown = Boolean(object.isDown);
            if (object.degree != null)
                message.degree = object.degree | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_WAR_MOVE_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @static
         * @param {PROTOCOL_WAR.CMD_WAR_MOVE_RSP} message CMD_WAR_MOVE_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_WAR_MOVE_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.seat != null && message.hasOwnProperty("seat")) {
                object.seat = message.seat;
                if (options.oneofs)
                    object._seat = "seat";
            }
            if (message.isDown != null && message.hasOwnProperty("isDown")) {
                object.isDown = message.isDown;
                if (options.oneofs)
                    object._isDown = "isDown";
            }
            if (message.degree != null && message.hasOwnProperty("degree")) {
                object.degree = message.degree;
                if (options.oneofs)
                    object._degree = "degree";
            }
            return object;
        };

        /**
         * Converts this CMD_WAR_MOVE_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_WAR_MOVE_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_WAR_MOVE_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_WAR_MOVE_RSP;
    })();

    PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE = (function() {

        /**
         * Properties of a CMD_WAR_COMMAND_NOTICE.
         * @memberof PROTOCOL_WAR
         * @interface ICMD_WAR_COMMAND_NOTICE
         * @property {number|null} [sequence] CMD_WAR_COMMAND_NOTICE sequence
         * @property {Uint8Array|null} [commands] CMD_WAR_COMMAND_NOTICE commands
         */

        /**
         * Constructs a new CMD_WAR_COMMAND_NOTICE.
         * @memberof PROTOCOL_WAR
         * @classdesc Represents a CMD_WAR_COMMAND_NOTICE.
         * @implements ICMD_WAR_COMMAND_NOTICE
         * @constructor
         * @param {PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE=} [properties] Properties to set
         */
        function CMD_WAR_COMMAND_NOTICE(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_WAR_COMMAND_NOTICE sequence.
         * @member {number|null|undefined} sequence
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @instance
         */
        CMD_WAR_COMMAND_NOTICE.prototype.sequence = null;

        /**
         * CMD_WAR_COMMAND_NOTICE commands.
         * @member {Uint8Array|null|undefined} commands
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @instance
         */
        CMD_WAR_COMMAND_NOTICE.prototype.commands = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_WAR_COMMAND_NOTICE _sequence.
         * @member {"sequence"|undefined} _sequence
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @instance
         */
        Object.defineProperty(CMD_WAR_COMMAND_NOTICE.prototype, "_sequence", {
            get: $util.oneOfGetter($oneOfFields = ["sequence"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * CMD_WAR_COMMAND_NOTICE _commands.
         * @member {"commands"|undefined} _commands
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @instance
         */
        Object.defineProperty(CMD_WAR_COMMAND_NOTICE.prototype, "_commands", {
            get: $util.oneOfGetter($oneOfFields = ["commands"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_WAR_COMMAND_NOTICE instance using the specified properties.
         * @function create
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE=} [properties] Properties to set
         * @returns {PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE} CMD_WAR_COMMAND_NOTICE instance
         */
        CMD_WAR_COMMAND_NOTICE.create = function create(properties) {
            return new CMD_WAR_COMMAND_NOTICE(properties);
        };

        /**
         * Encodes the specified CMD_WAR_COMMAND_NOTICE message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE} message CMD_WAR_COMMAND_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_COMMAND_NOTICE.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sequence);
            if (message.commands != null && Object.hasOwnProperty.call(message, "commands"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.commands);
            return writer;
        };

        /**
         * Encodes the specified CMD_WAR_COMMAND_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE} message CMD_WAR_COMMAND_NOTICE message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_WAR_COMMAND_NOTICE.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_WAR_COMMAND_NOTICE message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE} CMD_WAR_COMMAND_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_COMMAND_NOTICE.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.int32();
                    break;
                case 2:
                    message.commands = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_WAR_COMMAND_NOTICE message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE} CMD_WAR_COMMAND_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_WAR_COMMAND_NOTICE.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_WAR_COMMAND_NOTICE message.
         * @function verify
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_WAR_COMMAND_NOTICE.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                properties._sequence = 1;
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            }
            if (message.commands != null && message.hasOwnProperty("commands")) {
                properties._commands = 1;
                if (!(message.commands && typeof message.commands.length === "number" || $util.isString(message.commands)))
                    return "commands: buffer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_WAR_COMMAND_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE} CMD_WAR_COMMAND_NOTICE
         */
        CMD_WAR_COMMAND_NOTICE.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE)
                return object;
            var message = new $root.PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE();
            if (object.sequence != null)
                message.sequence = object.sequence | 0;
            if (object.commands != null)
                if (typeof object.commands === "string")
                    $util.base64.decode(object.commands, message.commands = $util.newBuffer($util.base64.length(object.commands)), 0);
                else if (object.commands.length)
                    message.commands = object.commands;
            return message;
        };

        /**
         * Creates a plain object from a CMD_WAR_COMMAND_NOTICE message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @static
         * @param {PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE} message CMD_WAR_COMMAND_NOTICE
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_WAR_COMMAND_NOTICE.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.sequence != null && message.hasOwnProperty("sequence")) {
                object.sequence = message.sequence;
                if (options.oneofs)
                    object._sequence = "sequence";
            }
            if (message.commands != null && message.hasOwnProperty("commands")) {
                object.commands = options.bytes === String ? $util.base64.encode(message.commands, 0, message.commands.length) : options.bytes === Array ? Array.prototype.slice.call(message.commands) : message.commands;
                if (options.oneofs)
                    object._commands = "commands";
            }
            return object;
        };

        /**
         * Converts this CMD_WAR_COMMAND_NOTICE to JSON.
         * @function toJSON
         * @memberof PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_WAR_COMMAND_NOTICE.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_WAR_COMMAND_NOTICE;
    })();

    return PROTOCOL_WAR;
})();

module.exports = $root;
