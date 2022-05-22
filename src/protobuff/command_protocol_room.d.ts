import * as $protobuf from "protobufjs";
/** Namespace PROTOCOL_ROOM. */
export namespace PROTOCOL_ROOM {

    /** Properties of a CMD_ROOM_LIST_REQ. */
    interface ICMD_ROOM_LIST_REQ {
    }

    /** Represents a CMD_ROOM_LIST_REQ. */
    class CMD_ROOM_LIST_REQ implements ICMD_ROOM_LIST_REQ {

        /**
         * Constructs a new CMD_ROOM_LIST_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ);

        /**
         * Creates a new CMD_ROOM_LIST_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_ROOM_LIST_REQ instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ): PROTOCOL_ROOM.CMD_ROOM_LIST_REQ;

        /**
         * Encodes the specified CMD_ROOM_LIST_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_REQ.verify|verify} messages.
         * @param message CMD_ROOM_LIST_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_ROOM_LIST_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_REQ.verify|verify} messages.
         * @param message CMD_ROOM_LIST_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_ROOM_LIST_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_ROOM_LIST_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_ROOM_LIST_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_ROOM_LIST_REQ;

        /**
         * Decodes a CMD_ROOM_LIST_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_ROOM_LIST_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_ROOM_LIST_REQ;

        /**
         * Verifies a CMD_ROOM_LIST_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_ROOM_LIST_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_ROOM_LIST_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_ROOM_LIST_REQ;

        /**
         * Creates a plain object from a CMD_ROOM_LIST_REQ message. Also converts values to other types if specified.
         * @param message CMD_ROOM_LIST_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_ROOM_LIST_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_ROOM_LIST_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_ROOM_LIST_RSP. */
    interface ICMD_ROOM_LIST_RSP {

        /** CMD_ROOM_LIST_RSP roomList */
        roomList?: (PROTOCOL_COMMON.IRoomInfo[]|null);
    }

    /** Represents a CMD_ROOM_LIST_RSP. */
    class CMD_ROOM_LIST_RSP implements ICMD_ROOM_LIST_RSP {

        /**
         * Constructs a new CMD_ROOM_LIST_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP);

        /** CMD_ROOM_LIST_RSP roomList. */
        public roomList: PROTOCOL_COMMON.IRoomInfo[];

        /**
         * Creates a new CMD_ROOM_LIST_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_ROOM_LIST_RSP instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP): PROTOCOL_ROOM.CMD_ROOM_LIST_RSP;

        /**
         * Encodes the specified CMD_ROOM_LIST_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.verify|verify} messages.
         * @param message CMD_ROOM_LIST_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_ROOM_LIST_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_ROOM_LIST_RSP.verify|verify} messages.
         * @param message CMD_ROOM_LIST_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_ROOM_LIST_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_ROOM_LIST_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_ROOM_LIST_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_ROOM_LIST_RSP;

        /**
         * Decodes a CMD_ROOM_LIST_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_ROOM_LIST_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_ROOM_LIST_RSP;

        /**
         * Verifies a CMD_ROOM_LIST_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_ROOM_LIST_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_ROOM_LIST_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_ROOM_LIST_RSP;

        /**
         * Creates a plain object from a CMD_ROOM_LIST_RSP message. Also converts values to other types if specified.
         * @param message CMD_ROOM_LIST_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_ROOM_LIST_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_ROOM_LIST_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_CREATE_ROOM_REQ. */
    interface ICMD_CREATE_ROOM_REQ {

        /** CMD_CREATE_ROOM_REQ roomName */
        roomName?: (string|null);
    }

    /** Represents a CMD_CREATE_ROOM_REQ. */
    class CMD_CREATE_ROOM_REQ implements ICMD_CREATE_ROOM_REQ {

        /**
         * Constructs a new CMD_CREATE_ROOM_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ);

        /** CMD_CREATE_ROOM_REQ roomName. */
        public roomName?: (string|null);

        /** CMD_CREATE_ROOM_REQ _roomName. */
        public _roomName?: "roomName";

        /**
         * Creates a new CMD_CREATE_ROOM_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_CREATE_ROOM_REQ instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ): PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ;

        /**
         * Encodes the specified CMD_CREATE_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ.verify|verify} messages.
         * @param message CMD_CREATE_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_CREATE_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ.verify|verify} messages.
         * @param message CMD_CREATE_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_CREATE_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_CREATE_ROOM_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_CREATE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ;

        /**
         * Decodes a CMD_CREATE_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_CREATE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ;

        /**
         * Verifies a CMD_CREATE_ROOM_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_CREATE_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_CREATE_ROOM_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ;

        /**
         * Creates a plain object from a CMD_CREATE_ROOM_REQ message. Also converts values to other types if specified.
         * @param message CMD_CREATE_ROOM_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_CREATE_ROOM_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_CREATE_ROOM_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_CREATE_ROOM_RSP. */
    interface ICMD_CREATE_ROOM_RSP {

        /** CMD_CREATE_ROOM_RSP playerSeat */
        playerSeat?: (number|null);

        /** CMD_CREATE_ROOM_RSP roomInfo */
        roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);
    }

    /** Represents a CMD_CREATE_ROOM_RSP. */
    class CMD_CREATE_ROOM_RSP implements ICMD_CREATE_ROOM_RSP {

        /**
         * Constructs a new CMD_CREATE_ROOM_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP);

        /** CMD_CREATE_ROOM_RSP playerSeat. */
        public playerSeat?: (number|null);

        /** CMD_CREATE_ROOM_RSP roomInfo. */
        public roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);

        /** CMD_CREATE_ROOM_RSP _playerSeat. */
        public _playerSeat?: "playerSeat";

        /** CMD_CREATE_ROOM_RSP _roomInfo. */
        public _roomInfo?: "roomInfo";

        /**
         * Creates a new CMD_CREATE_ROOM_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_CREATE_ROOM_RSP instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP): PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP;

        /**
         * Encodes the specified CMD_CREATE_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.verify|verify} messages.
         * @param message CMD_CREATE_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_CREATE_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP.verify|verify} messages.
         * @param message CMD_CREATE_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_CREATE_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_CREATE_ROOM_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_CREATE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP;

        /**
         * Decodes a CMD_CREATE_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_CREATE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP;

        /**
         * Verifies a CMD_CREATE_ROOM_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_CREATE_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_CREATE_ROOM_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP;

        /**
         * Creates a plain object from a CMD_CREATE_ROOM_RSP message. Also converts values to other types if specified.
         * @param message CMD_CREATE_ROOM_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_CREATE_ROOM_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_CREATE_ROOM_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_LEAVE_ROOM_REQ. */
    interface ICMD_LEAVE_ROOM_REQ {
    }

    /** Represents a CMD_LEAVE_ROOM_REQ. */
    class CMD_LEAVE_ROOM_REQ implements ICMD_LEAVE_ROOM_REQ {

        /**
         * Constructs a new CMD_LEAVE_ROOM_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ);

        /**
         * Creates a new CMD_LEAVE_ROOM_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_LEAVE_ROOM_REQ instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ): PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ;

        /**
         * Encodes the specified CMD_LEAVE_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ.verify|verify} messages.
         * @param message CMD_LEAVE_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_LEAVE_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ.verify|verify} messages.
         * @param message CMD_LEAVE_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_LEAVE_ROOM_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_LEAVE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ;

        /**
         * Decodes a CMD_LEAVE_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_LEAVE_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ;

        /**
         * Verifies a CMD_LEAVE_ROOM_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_LEAVE_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_LEAVE_ROOM_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ;

        /**
         * Creates a plain object from a CMD_LEAVE_ROOM_REQ message. Also converts values to other types if specified.
         * @param message CMD_LEAVE_ROOM_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_LEAVE_ROOM_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_LEAVE_ROOM_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_LEAVE_ROOM_RSP. */
    interface ICMD_LEAVE_ROOM_RSP {

        /** CMD_LEAVE_ROOM_RSP roomList */
        roomList?: (PROTOCOL_COMMON.IRoomInfo[]|null);
    }

    /** Represents a CMD_LEAVE_ROOM_RSP. */
    class CMD_LEAVE_ROOM_RSP implements ICMD_LEAVE_ROOM_RSP {

        /**
         * Constructs a new CMD_LEAVE_ROOM_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP);

        /** CMD_LEAVE_ROOM_RSP roomList. */
        public roomList: PROTOCOL_COMMON.IRoomInfo[];

        /**
         * Creates a new CMD_LEAVE_ROOM_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_LEAVE_ROOM_RSP instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP): PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP;

        /**
         * Encodes the specified CMD_LEAVE_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.verify|verify} messages.
         * @param message CMD_LEAVE_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_LEAVE_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP.verify|verify} messages.
         * @param message CMD_LEAVE_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_LEAVE_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_LEAVE_ROOM_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_LEAVE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP;

        /**
         * Decodes a CMD_LEAVE_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_LEAVE_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP;

        /**
         * Verifies a CMD_LEAVE_ROOM_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_LEAVE_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_LEAVE_ROOM_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP;

        /**
         * Creates a plain object from a CMD_LEAVE_ROOM_RSP message. Also converts values to other types if specified.
         * @param message CMD_LEAVE_ROOM_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_LEAVE_ROOM_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_LEAVE_ROOM_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_UPDATE_ROOM_INFO_NOTICE. */
    interface ICMD_UPDATE_ROOM_INFO_NOTICE {

        /** CMD_UPDATE_ROOM_INFO_NOTICE roomInfo */
        roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);
    }

    /** Represents a CMD_UPDATE_ROOM_INFO_NOTICE. */
    class CMD_UPDATE_ROOM_INFO_NOTICE implements ICMD_UPDATE_ROOM_INFO_NOTICE {

        /**
         * Constructs a new CMD_UPDATE_ROOM_INFO_NOTICE.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE);

        /** CMD_UPDATE_ROOM_INFO_NOTICE roomInfo. */
        public roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);

        /** CMD_UPDATE_ROOM_INFO_NOTICE _roomInfo. */
        public _roomInfo?: "roomInfo";

        /**
         * Creates a new CMD_UPDATE_ROOM_INFO_NOTICE instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_UPDATE_ROOM_INFO_NOTICE instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE): PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE;

        /**
         * Encodes the specified CMD_UPDATE_ROOM_INFO_NOTICE message. Does not implicitly {@link PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.verify|verify} messages.
         * @param message CMD_UPDATE_ROOM_INFO_NOTICE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_UPDATE_ROOM_INFO_NOTICE message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE.verify|verify} messages.
         * @param message CMD_UPDATE_ROOM_INFO_NOTICE message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_UPDATE_ROOM_INFO_NOTICE, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_UPDATE_ROOM_INFO_NOTICE message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_UPDATE_ROOM_INFO_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE;

        /**
         * Decodes a CMD_UPDATE_ROOM_INFO_NOTICE message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_UPDATE_ROOM_INFO_NOTICE
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE;

        /**
         * Verifies a CMD_UPDATE_ROOM_INFO_NOTICE message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_UPDATE_ROOM_INFO_NOTICE message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_UPDATE_ROOM_INFO_NOTICE
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE;

        /**
         * Creates a plain object from a CMD_UPDATE_ROOM_INFO_NOTICE message. Also converts values to other types if specified.
         * @param message CMD_UPDATE_ROOM_INFO_NOTICE
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_UPDATE_ROOM_INFO_NOTICE, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_UPDATE_ROOM_INFO_NOTICE to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_JOIN_ROOM_REQ. */
    interface ICMD_JOIN_ROOM_REQ {

        /** CMD_JOIN_ROOM_REQ roomUnquieId */
        roomUnquieId?: (number|null);
    }

    /** Represents a CMD_JOIN_ROOM_REQ. */
    class CMD_JOIN_ROOM_REQ implements ICMD_JOIN_ROOM_REQ {

        /**
         * Constructs a new CMD_JOIN_ROOM_REQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ);

        /** CMD_JOIN_ROOM_REQ roomUnquieId. */
        public roomUnquieId?: (number|null);

        /** CMD_JOIN_ROOM_REQ _roomUnquieId. */
        public _roomUnquieId?: "roomUnquieId";

        /**
         * Creates a new CMD_JOIN_ROOM_REQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_JOIN_ROOM_REQ instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ): PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ;

        /**
         * Encodes the specified CMD_JOIN_ROOM_REQ message. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ.verify|verify} messages.
         * @param message CMD_JOIN_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_JOIN_ROOM_REQ message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ.verify|verify} messages.
         * @param message CMD_JOIN_ROOM_REQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_JOIN_ROOM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_JOIN_ROOM_REQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_JOIN_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ;

        /**
         * Decodes a CMD_JOIN_ROOM_REQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_JOIN_ROOM_REQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ;

        /**
         * Verifies a CMD_JOIN_ROOM_REQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_JOIN_ROOM_REQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_JOIN_ROOM_REQ
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ;

        /**
         * Creates a plain object from a CMD_JOIN_ROOM_REQ message. Also converts values to other types if specified.
         * @param message CMD_JOIN_ROOM_REQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_JOIN_ROOM_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_JOIN_ROOM_REQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CMD_JOIN_ROOM_RSP. */
    interface ICMD_JOIN_ROOM_RSP {

        /** CMD_JOIN_ROOM_RSP playerSeat */
        playerSeat?: (number|null);

        /** CMD_JOIN_ROOM_RSP roomInfo */
        roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);
    }

    /** Represents a CMD_JOIN_ROOM_RSP. */
    class CMD_JOIN_ROOM_RSP implements ICMD_JOIN_ROOM_RSP {

        /**
         * Constructs a new CMD_JOIN_ROOM_RSP.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP);

        /** CMD_JOIN_ROOM_RSP playerSeat. */
        public playerSeat?: (number|null);

        /** CMD_JOIN_ROOM_RSP roomInfo. */
        public roomInfo?: (PROTOCOL_COMMON.IRoomInfo|null);

        /** CMD_JOIN_ROOM_RSP _playerSeat. */
        public _playerSeat?: "playerSeat";

        /** CMD_JOIN_ROOM_RSP _roomInfo. */
        public _roomInfo?: "roomInfo";

        /**
         * Creates a new CMD_JOIN_ROOM_RSP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD_JOIN_ROOM_RSP instance
         */
        public static create(properties?: PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP): PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP;

        /**
         * Encodes the specified CMD_JOIN_ROOM_RSP message. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.verify|verify} messages.
         * @param message CMD_JOIN_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CMD_JOIN_ROOM_RSP message, length delimited. Does not implicitly {@link PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP.verify|verify} messages.
         * @param message CMD_JOIN_ROOM_RSP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_ROOM.ICMD_JOIN_ROOM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CMD_JOIN_ROOM_RSP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD_JOIN_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP;

        /**
         * Decodes a CMD_JOIN_ROOM_RSP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD_JOIN_ROOM_RSP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP;

        /**
         * Verifies a CMD_JOIN_ROOM_RSP message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CMD_JOIN_ROOM_RSP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CMD_JOIN_ROOM_RSP
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP;

        /**
         * Creates a plain object from a CMD_JOIN_ROOM_RSP message. Also converts values to other types if specified.
         * @param message CMD_JOIN_ROOM_RSP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_ROOM.CMD_JOIN_ROOM_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CMD_JOIN_ROOM_RSP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace PROTOCOL_COMMON. */
export namespace PROTOCOL_COMMON {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo userName */
        userName?: (string|null);

        /** UserInfo userSeat */
        userSeat?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_COMMON.IUserInfo);

        /** UserInfo userName. */
        public userName?: (string|null);

        /** UserInfo userSeat. */
        public userSeat?: (number|null);

        /** UserInfo _userName. */
        public _userName?: "userName";

        /** UserInfo _userSeat. */
        public _userSeat?: "userSeat";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: PROTOCOL_COMMON.IUserInfo): PROTOCOL_COMMON.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PROTOCOL_COMMON.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_COMMON.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_COMMON.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_COMMON.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_COMMON.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_COMMON.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_COMMON.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomName */
        roomName?: (string|null);

        /** RoomInfo userList */
        userList?: (PROTOCOL_COMMON.IUserInfo[]|null);

        /** RoomInfo roomUniqueId */
        roomUniqueId?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_COMMON.IRoomInfo);

        /** RoomInfo roomName. */
        public roomName?: (string|null);

        /** RoomInfo userList. */
        public userList: PROTOCOL_COMMON.IUserInfo[];

        /** RoomInfo roomUniqueId. */
        public roomUniqueId?: (number|null);

        /** RoomInfo _roomName. */
        public _roomName?: "roomName";

        /** RoomInfo _roomUniqueId. */
        public _roomUniqueId?: "roomUniqueId";

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: PROTOCOL_COMMON.IRoomInfo): PROTOCOL_COMMON.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link PROTOCOL_COMMON.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_COMMON.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_COMMON.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_COMMON.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_COMMON.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_COMMON.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_COMMON.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pre_battle_data. */
    interface Ipre_battle_data {

        /** pre_battle_data levelName */
        levelName?: (string|null);
    }

    /** Represents a pre_battle_data. */
    class pre_battle_data implements Ipre_battle_data {

        /**
         * Constructs a new pre_battle_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOL_COMMON.Ipre_battle_data);

        /** pre_battle_data levelName. */
        public levelName?: (string|null);

        /** pre_battle_data _levelName. */
        public _levelName?: "levelName";

        /**
         * Creates a new pre_battle_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pre_battle_data instance
         */
        public static create(properties?: PROTOCOL_COMMON.Ipre_battle_data): PROTOCOL_COMMON.pre_battle_data;

        /**
         * Encodes the specified pre_battle_data message. Does not implicitly {@link PROTOCOL_COMMON.pre_battle_data.verify|verify} messages.
         * @param message pre_battle_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOL_COMMON.Ipre_battle_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pre_battle_data message, length delimited. Does not implicitly {@link PROTOCOL_COMMON.pre_battle_data.verify|verify} messages.
         * @param message pre_battle_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOL_COMMON.Ipre_battle_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pre_battle_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pre_battle_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOL_COMMON.pre_battle_data;

        /**
         * Decodes a pre_battle_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pre_battle_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOL_COMMON.pre_battle_data;

        /**
         * Verifies a pre_battle_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pre_battle_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pre_battle_data
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOL_COMMON.pre_battle_data;

        /**
         * Creates a plain object from a pre_battle_data message. Also converts values to other types if specified.
         * @param message pre_battle_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOL_COMMON.pre_battle_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pre_battle_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
