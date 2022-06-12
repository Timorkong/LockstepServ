import * as $protobuf from "protobufjs";
/** Namespace PROTOCOL. */
export namespace PROTOCOL {

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq Id */
        Id?: (number|null);

        /** HeartBeatReq Name */
        Name?: (string|null);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL.IHeartBeatReq);

        /** HeartBeatReq Id. */
        public Id: number;

        /** HeartBeatReq Name. */
        public Name: string;

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: PROTOCOL.IHeartBeatReq): PROTOCOL.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link PROTOCOL.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link PROTOCOL.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL.IHeartBeatReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartBeatReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL.HeartBeatReq;

        /**
         * Creates a plain object from a HeartBeatReq message. Also converts values to other types if specified.
         * @param message HeartBeatReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL.HeartBeatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatRsp. */
    interface IHeartBeatRsp {

        /** HeartBeatRsp Id */
        Id?: (number|null);

        /** HeartBeatRsp Name */
        Name?: (string|null);
    }

    /** Represents a HeartBeatRsp. */
    class HeartBeatRsp implements IHeartBeatRsp {

        /**
         * Constructs a new HeartBeatRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL.IHeartBeatRsp);

        /** HeartBeatRsp Id. */
        public Id: number;

        /** HeartBeatRsp Name. */
        public Name: string;

        /**
         * Creates a new HeartBeatRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatRsp instance
         */
        public static create(properties?: PROTOCOL.IHeartBeatRsp): PROTOCOL.HeartBeatRsp;

        /**
         * Encodes the specified HeartBeatRsp message. Does not implicitly {@link PROTOCOL.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatRsp message, length delimited. Does not implicitly {@link PROTOCOL.HeartBeatRsp.verify|verify} messages.
         * @param message HeartBeatRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL.IHeartBeatRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL.HeartBeatRsp;

        /**
         * Decodes a HeartBeatRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL.HeartBeatRsp;

        /**
         * Verifies a HeartBeatRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartBeatRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL.HeartBeatRsp;

        /**
         * Creates a plain object from a HeartBeatRsp message. Also converts values to other types if specified.
         * @param message HeartBeatRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL.HeartBeatRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
