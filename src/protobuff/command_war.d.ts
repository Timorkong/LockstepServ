import * as $protobuf from "protobufjs";
/** Namespace War. */
export namespace War {

    /** Properties of a war_frame. */
    interface Iwar_frame {

        /** war_frame id */
        id?: (number|null);

        /** war_frame frame */
        frame?: (number|null);

        /** war_frame sequence */
        sequence?: (number|null);
    }

    /** Represents a war_frame. */
    class war_frame implements Iwar_frame {

        /**
         * Constructs a new war_frame.
         * @param [properties] Properties to set
         */
        constructor(properties?: War.Iwar_frame);

        /** war_frame id. */
        public id: number;

        /** war_frame frame. */
        public frame: number;

        /** war_frame sequence. */
        public sequence: number;

        /**
         * Creates a new war_frame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns war_frame instance
         */
        public static create(properties?: War.Iwar_frame): War.war_frame;

        /**
         * Encodes the specified war_frame message. Does not implicitly {@link War.war_frame.verify|verify} messages.
         * @param message war_frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: War.Iwar_frame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified war_frame message, length delimited. Does not implicitly {@link War.war_frame.verify|verify} messages.
         * @param message war_frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: War.Iwar_frame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a war_frame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns war_frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): War.war_frame;

        /**
         * Decodes a war_frame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns war_frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): War.war_frame;

        /**
         * Verifies a war_frame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a war_frame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns war_frame
         */
        public static fromObject(object: { [k: string]: any }): War.war_frame;

        /**
         * Creates a plain object from a war_frame message. Also converts values to other types if specified.
         * @param message war_frame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: War.war_frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this war_frame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
