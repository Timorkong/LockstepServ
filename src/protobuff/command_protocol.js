/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PROTOCOL = (function() {

    /**
     * Namespace PROTOCOL.
     * @exports PROTOCOL
     * @namespace
     */
    var PROTOCOL = {};

    PROTOCOL.CMD_HEART_BEAT_REQ = (function() {

        /**
         * Properties of a CMD_HEART_BEAT_REQ.
         * @memberof PROTOCOL
         * @interface ICMD_HEART_BEAT_REQ
         * @property {number|null} [id] CMD_HEART_BEAT_REQ id
         */

        /**
         * Constructs a new CMD_HEART_BEAT_REQ.
         * @memberof PROTOCOL
         * @classdesc Represents a CMD_HEART_BEAT_REQ.
         * @implements ICMD_HEART_BEAT_REQ
         * @constructor
         * @param {PROTOCOL.ICMD_HEART_BEAT_REQ=} [properties] Properties to set
         */
        function CMD_HEART_BEAT_REQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_HEART_BEAT_REQ id.
         * @member {number|null|undefined} id
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @instance
         */
        CMD_HEART_BEAT_REQ.prototype.id = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_HEART_BEAT_REQ _id.
         * @member {"id"|undefined} _id
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @instance
         */
        Object.defineProperty(CMD_HEART_BEAT_REQ.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_HEART_BEAT_REQ instance using the specified properties.
         * @function create
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_REQ=} [properties] Properties to set
         * @returns {PROTOCOL.CMD_HEART_BEAT_REQ} CMD_HEART_BEAT_REQ instance
         */
        CMD_HEART_BEAT_REQ.create = function create(properties) {
            return new CMD_HEART_BEAT_REQ(properties);
        };

        /**
         * Encodes the specified CMD_HEART_BEAT_REQ message. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_REQ.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_REQ} message CMD_HEART_BEAT_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_HEART_BEAT_REQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified CMD_HEART_BEAT_REQ message, length delimited. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_REQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_REQ} message CMD_HEART_BEAT_REQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_HEART_BEAT_REQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_HEART_BEAT_REQ message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL.CMD_HEART_BEAT_REQ} CMD_HEART_BEAT_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_HEART_BEAT_REQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL.CMD_HEART_BEAT_REQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_HEART_BEAT_REQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL.CMD_HEART_BEAT_REQ} CMD_HEART_BEAT_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_HEART_BEAT_REQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_HEART_BEAT_REQ message.
         * @function verify
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_HEART_BEAT_REQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_HEART_BEAT_REQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL.CMD_HEART_BEAT_REQ} CMD_HEART_BEAT_REQ
         */
        CMD_HEART_BEAT_REQ.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL.CMD_HEART_BEAT_REQ)
                return object;
            var message = new $root.PROTOCOL.CMD_HEART_BEAT_REQ();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_HEART_BEAT_REQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @static
         * @param {PROTOCOL.CMD_HEART_BEAT_REQ} message CMD_HEART_BEAT_REQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_HEART_BEAT_REQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            return object;
        };

        /**
         * Converts this CMD_HEART_BEAT_REQ to JSON.
         * @function toJSON
         * @memberof PROTOCOL.CMD_HEART_BEAT_REQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_HEART_BEAT_REQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_HEART_BEAT_REQ;
    })();

    PROTOCOL.CMD_HEART_BEAT_RSP = (function() {

        /**
         * Properties of a CMD_HEART_BEAT_RSP.
         * @memberof PROTOCOL
         * @interface ICMD_HEART_BEAT_RSP
         * @property {number|null} [id] CMD_HEART_BEAT_RSP id
         */

        /**
         * Constructs a new CMD_HEART_BEAT_RSP.
         * @memberof PROTOCOL
         * @classdesc Represents a CMD_HEART_BEAT_RSP.
         * @implements ICMD_HEART_BEAT_RSP
         * @constructor
         * @param {PROTOCOL.ICMD_HEART_BEAT_RSP=} [properties] Properties to set
         */
        function CMD_HEART_BEAT_RSP(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD_HEART_BEAT_RSP id.
         * @member {number|null|undefined} id
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @instance
         */
        CMD_HEART_BEAT_RSP.prototype.id = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CMD_HEART_BEAT_RSP _id.
         * @member {"id"|undefined} _id
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @instance
         */
        Object.defineProperty(CMD_HEART_BEAT_RSP.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CMD_HEART_BEAT_RSP instance using the specified properties.
         * @function create
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_RSP=} [properties] Properties to set
         * @returns {PROTOCOL.CMD_HEART_BEAT_RSP} CMD_HEART_BEAT_RSP instance
         */
        CMD_HEART_BEAT_RSP.create = function create(properties) {
            return new CMD_HEART_BEAT_RSP(properties);
        };

        /**
         * Encodes the specified CMD_HEART_BEAT_RSP message. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_RSP.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_RSP} message CMD_HEART_BEAT_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_HEART_BEAT_RSP.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified CMD_HEART_BEAT_RSP message, length delimited. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_RSP.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {PROTOCOL.ICMD_HEART_BEAT_RSP} message CMD_HEART_BEAT_RSP message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD_HEART_BEAT_RSP.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD_HEART_BEAT_RSP message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL.CMD_HEART_BEAT_RSP} CMD_HEART_BEAT_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_HEART_BEAT_RSP.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL.CMD_HEART_BEAT_RSP();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD_HEART_BEAT_RSP message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL.CMD_HEART_BEAT_RSP} CMD_HEART_BEAT_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD_HEART_BEAT_RSP.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD_HEART_BEAT_RSP message.
         * @function verify
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD_HEART_BEAT_RSP.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            return null;
        };

        /**
         * Creates a CMD_HEART_BEAT_RSP message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL.CMD_HEART_BEAT_RSP} CMD_HEART_BEAT_RSP
         */
        CMD_HEART_BEAT_RSP.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL.CMD_HEART_BEAT_RSP)
                return object;
            var message = new $root.PROTOCOL.CMD_HEART_BEAT_RSP();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a CMD_HEART_BEAT_RSP message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @static
         * @param {PROTOCOL.CMD_HEART_BEAT_RSP} message CMD_HEART_BEAT_RSP
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CMD_HEART_BEAT_RSP.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            return object;
        };

        /**
         * Converts this CMD_HEART_BEAT_RSP to JSON.
         * @function toJSON
         * @memberof PROTOCOL.CMD_HEART_BEAT_RSP
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CMD_HEART_BEAT_RSP.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CMD_HEART_BEAT_RSP;
    })();

    return PROTOCOL;
})();

module.exports = $root;
