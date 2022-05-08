import * as $protobuf from "protobufjs";
/** Namespace PROTOCOL_WAR. */
export namespace PROTOCOL_WAR {

    /** Properties of a CMD_ENTER_GAME_REQ. */
    interface ICMD_ENTER_GAME_REQ {
    }

    /** Represents a CMD_ENTER_GAME_REQ. */
    class CMD_ENTER_GAME_REQ implements ICMD_ENTER_GAME_REQ {

        /**
         * Constructs a new CMD_ENTER_GAME_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_ENTER_GAME_REQ);

        /**
         * Creates a new CMD_ENTER_GAME_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_ENTER_GAME_REQ instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_ENTER_GAME_REQ): PROTOCOL_WAR.CMD_ENTER_GAME_REQ;

        /**
         * Encodes the specified CMD_ENTER_GAME_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_REQ.verify|verify} messages.
         * @param message CMD_ENTER_GAME_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_ENTER_GAME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_ENTER_GAME_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_REQ.verify|verify} messages.
         * @param message CMD_ENTER_GAME_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_ENTER_GAME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_ENTER_GAME_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_ENTER_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_ENTER_GAME_REQ;

        /**
         * Decodes a CMD_ENTER_GAME_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_ENTER_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_ENTER_GAME_REQ;

        /**
         * Verifies a CMD_ENTER_GAME_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_ENTER_GAME_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_ENTER_GAME_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_ENTER_GAME_REQ;

        /**
         * Creates a plain object from a CMD_ENTER_GAME_REQ message. Also converts values to other types if specified.
         * @param message CMD_ENTER_GAME_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_ENTER_GAME_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_ENTER_GAME_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_ENTER_GAME_RSP. */
    interface ICMD_ENTER_GAME_RSP {
    }

    /** Represents a CMD_ENTER_GAME_RSP. */
    class CMD_ENTER_GAME_RSP implements ICMD_ENTER_GAME_RSP {

        /**
         * Constructs a new CMD_ENTER_GAME_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_ENTER_GAME_RSP);

        /**
         * Creates a new CMD_ENTER_GAME_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_ENTER_GAME_RSP instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_ENTER_GAME_RSP): PROTOCOL_WAR.CMD_ENTER_GAME_RSP;

        /**
         * Encodes the specified CMD_ENTER_GAME_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_RSP.verify|verify} messages.
         * @param message CMD_ENTER_GAME_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_ENTER_GAME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_ENTER_GAME_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_ENTER_GAME_RSP.verify|verify} messages.
         * @param message CMD_ENTER_GAME_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_ENTER_GAME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_ENTER_GAME_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_ENTER_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_ENTER_GAME_RSP;

        /**
         * Decodes a CMD_ENTER_GAME_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_ENTER_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_ENTER_GAME_RSP;

        /**
         * Verifies a CMD_ENTER_GAME_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_ENTER_GAME_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_ENTER_GAME_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_ENTER_GAME_RSP;

        /**
         * Creates a plain object from a CMD_ENTER_GAME_RSP message. Also converts values to other types if specified.
         * @param message CMD_ENTER_GAME_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_ENTER_GAME_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_ENTER_GAME_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_START_GAME_REQ. */
    interface ICMD_START_GAME_REQ {
    }

    /** Represents a CMD_START_GAME_REQ. */
    class CMD_START_GAME_REQ implements ICMD_START_GAME_REQ {

        /**
         * Constructs a new CMD_START_GAME_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_START_GAME_REQ);

        /**
         * Creates a new CMD_START_GAME_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_START_GAME_REQ instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_START_GAME_REQ): PROTOCOL_WAR.CMD_START_GAME_REQ;

        /**
         * Encodes the specified CMD_START_GAME_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_REQ.verify|verify} messages.
         * @param message CMD_START_GAME_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_START_GAME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_START_GAME_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_REQ.verify|verify} messages.
         * @param message CMD_START_GAME_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_START_GAME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_START_GAME_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_START_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_START_GAME_REQ;

        /**
         * Decodes a CMD_START_GAME_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_START_GAME_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_START_GAME_REQ;

        /**
         * Verifies a CMD_START_GAME_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_START_GAME_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_START_GAME_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_START_GAME_REQ;

        /**
         * Creates a plain object from a CMD_START_GAME_REQ message. Also converts values to other types if specified.
         * @param message CMD_START_GAME_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_START_GAME_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_START_GAME_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_START_GAME_RSP. */
    interface ICMD_START_GAME_RSP {
    }

    /** Represents a CMD_START_GAME_RSP. */
    class CMD_START_GAME_RSP implements ICMD_START_GAME_RSP {

        /**
         * Constructs a new CMD_START_GAME_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_START_GAME_RSP);

        /**
         * Creates a new CMD_START_GAME_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_START_GAME_RSP instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_START_GAME_RSP): PROTOCOL_WAR.CMD_START_GAME_RSP;

        /**
         * Encodes the specified CMD_START_GAME_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_RSP.verify|verify} messages.
         * @param message CMD_START_GAME_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_START_GAME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_START_GAME_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_START_GAME_RSP.verify|verify} messages.
         * @param message CMD_START_GAME_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_START_GAME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_START_GAME_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_START_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_START_GAME_RSP;

        /**
         * Decodes a CMD_START_GAME_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_START_GAME_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_START_GAME_RSP;

        /**
         * Verifies a CMD_START_GAME_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_START_GAME_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_START_GAME_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_START_GAME_RSP;

        /**
         * Creates a plain object from a CMD_START_GAME_RSP message. Also converts values to other types if specified.
         * @param message CMD_START_GAME_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_START_GAME_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_START_GAME_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_WAR_MOVE_REQ. */
    interface ICMD_WAR_MOVE_REQ {

        /** CMD_WAR_MOVE_REQ isDown */
        isDown?: (boolean|null);

        /** CMD_WAR_MOVE_REQ degree */
        degree?: (number|null);
    }

    /** Represents a CMD_WAR_MOVE_REQ. */
    class CMD_WAR_MOVE_REQ implements ICMD_WAR_MOVE_REQ {

        /**
         * Constructs a new CMD_WAR_MOVE_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_WAR_MOVE_REQ);

        /** CMD_WAR_MOVE_REQ isDown. */
        public isDown?: (boolean|null);

        /** CMD_WAR_MOVE_REQ degree. */
        public degree?: (number|null);

        /** CMD_WAR_MOVE_REQ _isDown. */
        public _isDown?: "isDown";

        /** CMD_WAR_MOVE_REQ _degree. */
        public _degree?: "degree";

        /**
         * Creates a new CMD_WAR_MOVE_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_WAR_MOVE_REQ instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_WAR_MOVE_REQ): PROTOCOL_WAR.CMD_WAR_MOVE_REQ;

        /**
         * Encodes the specified CMD_WAR_MOVE_REQ message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_REQ.verify|verify} messages.
         * @param message CMD_WAR_MOVE_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_WAR_MOVE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_WAR_MOVE_REQ message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_REQ.verify|verify} messages.
         * @param message CMD_WAR_MOVE_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_WAR_MOVE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_WAR_MOVE_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_WAR_MOVE_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_WAR_MOVE_REQ;

        /**
         * Decodes a CMD_WAR_MOVE_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_WAR_MOVE_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_WAR_MOVE_REQ;

        /**
         * Verifies a CMD_WAR_MOVE_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_WAR_MOVE_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_WAR_MOVE_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_WAR_MOVE_REQ;

        /**
         * Creates a plain object from a CMD_WAR_MOVE_REQ message. Also converts values to other types if specified.
         * @param message CMD_WAR_MOVE_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_WAR_MOVE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_WAR_MOVE_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_WAR_MOVE_RSP. */
    interface ICMD_WAR_MOVE_RSP {

        /** CMD_WAR_MOVE_RSP seat */
        seat?: (number|null);

        /** CMD_WAR_MOVE_RSP isDown */
        isDown?: (boolean|null);

        /** CMD_WAR_MOVE_RSP degree */
        degree?: (number|null);
    }

    /** Represents a CMD_WAR_MOVE_RSP. */
    class CMD_WAR_MOVE_RSP implements ICMD_WAR_MOVE_RSP {

        /**
         * Constructs a new CMD_WAR_MOVE_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_WAR_MOVE_RSP);

        /** CMD_WAR_MOVE_RSP seat. */
        public seat?: (number|null);

        /** CMD_WAR_MOVE_RSP isDown. */
        public isDown?: (boolean|null);

        /** CMD_WAR_MOVE_RSP degree. */
        public degree?: (number|null);

        /** CMD_WAR_MOVE_RSP _seat. */
        public _seat?: "seat";

        /** CMD_WAR_MOVE_RSP _isDown. */
        public _isDown?: "isDown";

        /** CMD_WAR_MOVE_RSP _degree. */
        public _degree?: "degree";

        /**
         * Creates a new CMD_WAR_MOVE_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_WAR_MOVE_RSP instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_WAR_MOVE_RSP): PROTOCOL_WAR.CMD_WAR_MOVE_RSP;

        /**
         * Encodes the specified CMD_WAR_MOVE_RSP message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_RSP.verify|verify} messages.
         * @param message CMD_WAR_MOVE_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_WAR_MOVE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_WAR_MOVE_RSP message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_MOVE_RSP.verify|verify} messages.
         * @param message CMD_WAR_MOVE_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_WAR_MOVE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_WAR_MOVE_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_WAR_MOVE_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_WAR_MOVE_RSP;

        /**
         * Decodes a CMD_WAR_MOVE_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_WAR_MOVE_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_WAR_MOVE_RSP;

        /**
         * Verifies a CMD_WAR_MOVE_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_WAR_MOVE_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_WAR_MOVE_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_WAR_MOVE_RSP;

        /**
         * Creates a plain object from a CMD_WAR_MOVE_RSP message. Also converts values to other types if specified.
         * @param message CMD_WAR_MOVE_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_WAR_MOVE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_WAR_MOVE_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_WAR_COMMAND_NOTICE. */
    interface ICMD_WAR_COMMAND_NOTICE {

        /** CMD_WAR_COMMAND_NOTICE sequence */
        sequence?: (number|null);

        /** CMD_WAR_COMMAND_NOTICE commands */
        commands?: (Uint8Array|null);
    }

    /** Represents a CMD_WAR_COMMAND_NOTICE. */
    class CMD_WAR_COMMAND_NOTICE implements ICMD_WAR_COMMAND_NOTICE {

        /**
         * Constructs a new CMD_WAR_COMMAND_NOTICE.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE);

        /** CMD_WAR_COMMAND_NOTICE sequence. */
        public sequence?: (number|null);

        /** CMD_WAR_COMMAND_NOTICE commands. */
        public commands?: (Uint8Array|null);

        /** CMD_WAR_COMMAND_NOTICE _sequence. */
        public _sequence?: "sequence";

        /** CMD_WAR_COMMAND_NOTICE _commands. */
        public _commands?: "commands";

        /**
         * Creates a new CMD_WAR_COMMAND_NOTICE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_WAR_COMMAND_NOTICE instance
         */
        public static create(properties?: PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE): PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE;

        /**
         * Encodes the specified CMD_WAR_COMMAND_NOTICE message. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE.verify|verify} messages.
         * @param message CMD_WAR_COMMAND_NOTICE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_WAR_COMMAND_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE.verify|verify} messages.
         * @param message CMD_WAR_COMMAND_NOTICE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_WAR.ICMD_WAR_COMMAND_NOTICE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_WAR_COMMAND_NOTICE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_WAR_COMMAND_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE;

        /**
         * Decodes a CMD_WAR_COMMAND_NOTICE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_WAR_COMMAND_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE;

        /**
         * Verifies a CMD_WAR_COMMAND_NOTICE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_WAR_COMMAND_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_WAR_COMMAND_NOTICE
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE;

        /**
         * Creates a plain object from a CMD_WAR_COMMAND_NOTICE message. Also converts values to other types if specified.
         * @param message CMD_WAR_COMMAND_NOTICE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_WAR.CMD_WAR_COMMAND_NOTICE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_WAR_COMMAND_NOTICE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
