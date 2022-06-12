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

    PROTOCOL.HeartBeatReq = (function() {

        /**
         * Properties of a HeartBeatReq.
         * @memberof PROTOCOL
         * @interface IHeartBeatReq
         * @property {number|null} [Id] HeartBeatReq Id
         * @property {string|null} [Name] HeartBeatReq Name
         */

        /**
         * Constructs a new HeartBeatReq.
         * @memberof PROTOCOL
         * @classdesc Represents a HeartBeatReq.
         * @implements IHeartBeatReq
         * @constructor
         * @param {PROTOCOL.IHeartBeatReq=} [properties] Properties to set
         */
        function HeartBeatReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatReq Id.
         * @member {number} Id
         * @memberof PROTOCOL.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.Id = 0;

        /**
         * HeartBeatReq Name.
         * @member {string} Name
         * @memberof PROTOCOL.HeartBeatReq
         * @instance
         */
        HeartBeatReq.prototype.Name = "";

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @function create
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {PROTOCOL.IHeartBeatReq=} [properties] Properties to set
         * @returns {PROTOCOL.HeartBeatReq} HeartBeatReq instance
         */
        HeartBeatReq.create = function create(properties) {
            return new HeartBeatReq(properties);
        };

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link PROTOCOL.HeartBeatReq.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {PROTOCOL.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link PROTOCOL.HeartBeatReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {PROTOCOL.IHeartBeatReq} message HeartBeatReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL.HeartBeatReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL.HeartBeatReq} HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatReq message.
         * @function verify
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL.HeartBeatReq} HeartBeatReq
         */
        HeartBeatReq.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL.HeartBeatReq)
                return object;
            var message = new $root.PROTOCOL.HeartBeatReq();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL.HeartBeatReq
         * @static
         * @param {PROTOCOL.HeartBeatReq} message HeartBeatReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Name = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this HeartBeatReq to JSON.
         * @function toJSON
         * @memberof PROTOCOL.HeartBeatReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatReq;
    })();

    PROTOCOL.HeartBeatRsp = (function() {

        /**
         * Properties of a HeartBeatRsp.
         * @memberof PROTOCOL
         * @interface IHeartBeatRsp
         * @property {number|null} [Id] HeartBeatRsp Id
         * @property {string|null} [Name] HeartBeatRsp Name
         */

        /**
         * Constructs a new HeartBeatRsp.
         * @memberof PROTOCOL
         * @classdesc Represents a HeartBeatRsp.
         * @implements IHeartBeatRsp
         * @constructor
         * @param {PROTOCOL.IHeartBeatRsp=} [properties] Properties to set
         */
        function HeartBeatRsp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatRsp Id.
         * @member {number} Id
         * @memberof PROTOCOL.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.Id = 0;

        /**
         * HeartBeatRsp Name.
         * @member {string} Name
         * @memberof PROTOCOL.HeartBeatRsp
         * @instance
         */
        HeartBeatRsp.prototype.Name = "";

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @function create
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {PROTOCOL.IHeartBeatRsp=} [properties] Properties to set
         * @returns {PROTOCOL.HeartBeatRsp} HeartBeatRsp instance
         */
        HeartBeatRsp.create = function create(properties) {
            return new HeartBeatRsp(properties);
        };

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link PROTOCOL.HeartBeatRsp.verify|verify} messages.
         * @function encode
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {PROTOCOL.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link PROTOCOL.HeartBeatRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {PROTOCOL.IHeartBeatRsp} message HeartBeatRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @function decode
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PROTOCOL.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PROTOCOL.HeartBeatRsp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PROTOCOL.HeartBeatRsp} HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatRsp message.
         * @function verify
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PROTOCOL.HeartBeatRsp} HeartBeatRsp
         */
        HeartBeatRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.PROTOCOL.HeartBeatRsp)
                return object;
            var message = new $root.PROTOCOL.HeartBeatRsp();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PROTOCOL.HeartBeatRsp
         * @static
         * @param {PROTOCOL.HeartBeatRsp} message HeartBeatRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Name = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @function toJSON
         * @memberof PROTOCOL.HeartBeatRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatRsp;
    })();

    return PROTOCOL;
})();

module.exports = $root;
