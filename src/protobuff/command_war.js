/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.War = (function() {

    /**
     * Namespace War.
     * @exports War
     * @namespace
     */
    var War = {};

    War.war_frame = (function() {

        /**
         * Properties of a war_frame.
         * @memberof War
         * @interface Iwar_frame
         * @property {number|null} [id] war_frame id
         * @property {number|null} [frame] war_frame frame
         * @property {number|null} [sequence] war_frame sequence
         */

        /**
         * Constructs a new war_frame.
         * @memberof War
         * @classdesc Represents a war_frame.
         * @implements Iwar_frame
         * @constructor
         * @param {War.Iwar_frame=} [properties] Properties to set
         */
        function war_frame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * war_frame id.
         * @member {number} id
         * @memberof War.war_frame
         * @instance
         */
        war_frame.prototype.id = 0;

        /**
         * war_frame frame.
         * @member {number} frame
         * @memberof War.war_frame
         * @instance
         */
        war_frame.prototype.frame = 0;

        /**
         * war_frame sequence.
         * @member {number} sequence
         * @memberof War.war_frame
         * @instance
         */
        war_frame.prototype.sequence = 0;

        /**
         * Creates a new war_frame instance using the specified properties.
         * @function create
         * @memberof War.war_frame
         * @static
         * @param {War.Iwar_frame=} [properties] Properties to set
         * @returns {War.war_frame} war_frame instance
         */
        war_frame.create = function create(properties) {
            return new war_frame(properties);
        };

        /**
         * Encodes the specified war_frame message. Does not implicitly {@link War.war_frame.verify|verify} messages.
         * @function encode
         * @memberof War.war_frame
         * @static
         * @param {War.Iwar_frame} message war_frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        war_frame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.frame != null && Object.hasOwnProperty.call(message, "frame"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.frame);
            if (message.sequence != null && Object.hasOwnProperty.call(message, "sequence"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sequence);
            return writer;
        };

        /**
         * Encodes the specified war_frame message, length delimited. Does not implicitly {@link War.war_frame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof War.war_frame
         * @static
         * @param {War.Iwar_frame} message war_frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        war_frame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a war_frame message from the specified reader or buffer.
         * @function decode
         * @memberof War.war_frame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {War.war_frame} war_frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        war_frame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.War.war_frame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.frame = reader.uint32();
                    break;
                case 3:
                    message.sequence = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a war_frame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof War.war_frame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {War.war_frame} war_frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        war_frame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a war_frame message.
         * @function verify
         * @memberof War.war_frame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        war_frame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.frame != null && message.hasOwnProperty("frame"))
                if (!$util.isInteger(message.frame))
                    return "frame: integer expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            return null;
        };

        /**
         * Creates a war_frame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof War.war_frame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {War.war_frame} war_frame
         */
        war_frame.fromObject = function fromObject(object) {
            if (object instanceof $root.War.war_frame)
                return object;
            var message = new $root.War.war_frame();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.frame != null)
                message.frame = object.frame >>> 0;
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a war_frame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof War.war_frame
         * @static
         * @param {War.war_frame} message war_frame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        war_frame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.frame = 0;
                object.sequence = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.frame != null && message.hasOwnProperty("frame"))
                object.frame = message.frame;
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            return object;
        };

        /**
         * Converts this war_frame to JSON.
         * @function toJSON
         * @memberof War.war_frame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        war_frame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return war_frame;
    })();

    return War;
})();

module.exports = $root;
