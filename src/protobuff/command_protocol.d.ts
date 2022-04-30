import * as $protobuf from "protobufjs";
/** Namespace PROTOCOL. */
export namespace PROTOCOL {

    /** Properties of a CMD_HEART_BEAT_REQ. */
    interface ICMD_HEART_BEAT_REQ {

        /** CMD_HEART_BEAT_REQ id */
        id?: (number|null);
    }

    /** Represents a CMD_HEART_BEAT_REQ. */
    class CMD_HEART_BEAT_REQ implements ICMD_HEART_BEAT_REQ {

        /**
         * Constructs a new CMD_HEART_BEAT_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL.ICMD_HEART_BEAT_REQ);

        /** CMD_HEART_BEAT_REQ id. */
        public id?: (number|null);

        /** CMD_HEART_BEAT_REQ _id. */
        public _id?: "id";

        /**
         * Creates a new CMD_HEART_BEAT_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_HEART_BEAT_REQ instance
         */
        public static create(properties?: PROTOCOL.ICMD_HEART_BEAT_REQ): PROTOCOL.CMD_HEART_BEAT_REQ;

        /**
         * Encodes the specified CMD_HEART_BEAT_REQ message. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_REQ.verify|verify} messages.
         * @param message CMD_HEART_BEAT_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL.ICMD_HEART_BEAT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_HEART_BEAT_REQ message, length delimited. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_REQ.verify|verify} messages.
         * @param message CMD_HEART_BEAT_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL.ICMD_HEART_BEAT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_HEART_BEAT_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_HEART_BEAT_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL.CMD_HEART_BEAT_REQ;

        /**
         * Decodes a CMD_HEART_BEAT_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_HEART_BEAT_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL.CMD_HEART_BEAT_REQ;

        /**
         * Verifies a CMD_HEART_BEAT_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_HEART_BEAT_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_HEART_BEAT_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL.CMD_HEART_BEAT_REQ;

        /**
         * Creates a plain object from a CMD_HEART_BEAT_REQ message. Also converts values to other types if specified.
         * @param message CMD_HEART_BEAT_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL.CMD_HEART_BEAT_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_HEART_BEAT_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_HEART_BEAT_RSP. */
    interface ICMD_HEART_BEAT_RSP {

        /** CMD_HEART_BEAT_RSP id */
        id?: (number|null);
    }

    /** Represents a CMD_HEART_BEAT_RSP. */
    class CMD_HEART_BEAT_RSP implements ICMD_HEART_BEAT_RSP {

        /**
         * Constructs a new CMD_HEART_BEAT_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL.ICMD_HEART_BEAT_RSP);

        /** CMD_HEART_BEAT_RSP id. */
        public id?: (number|null);

        /** CMD_HEART_BEAT_RSP _id. */
        public _id?: "id";

        /**
         * Creates a new CMD_HEART_BEAT_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_HEART_BEAT_RSP instance
         */
        public static create(properties?: PROTOCOL.ICMD_HEART_BEAT_RSP): PROTOCOL.CMD_HEART_BEAT_RSP;

        /**
         * Encodes the specified CMD_HEART_BEAT_RSP message. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_RSP.verify|verify} messages.
         * @param message CMD_HEART_BEAT_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL.ICMD_HEART_BEAT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_HEART_BEAT_RSP message, length delimited. Does not implicitly {@link PROTOCOL.CMD_HEART_BEAT_RSP.verify|verify} messages.
         * @param message CMD_HEART_BEAT_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL.ICMD_HEART_BEAT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_HEART_BEAT_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_HEART_BEAT_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL.CMD_HEART_BEAT_RSP;

        /**
         * Decodes a CMD_HEART_BEAT_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_HEART_BEAT_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL.CMD_HEART_BEAT_RSP;

        /**
         * Verifies a CMD_HEART_BEAT_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_HEART_BEAT_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_HEART_BEAT_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL.CMD_HEART_BEAT_RSP;

        /**
         * Creates a plain object from a CMD_HEART_BEAT_RSP message. Also converts values to other types if specified.
         * @param message CMD_HEART_BEAT_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL.CMD_HEART_BEAT_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_HEART_BEAT_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
