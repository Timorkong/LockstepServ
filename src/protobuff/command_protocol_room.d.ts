import * as $protobuf from "protobufjs";
/** Namespace PROTOCOLROOM. */
export namespace PROTOCOLROOM {

    /** Properties of a RoomListReq. */
    interface IRoomListReq {
    }

    /** Represents a RoomListReq. */
    class RoomListReq implements IRoomListReq {

        /**
         * Constructs a new RoomListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.IRoomListReq);

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListReq instance
         */
        public static create(properties?: PROTOCOLROOM.IRoomListReq): PROTOCOLROOM.RoomListReq;

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link PROTOCOLROOM.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.IRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.RoomListReq;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.RoomListReq;

        /**
         * Verifies a RoomListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.RoomListReq;

        /**
         * Creates a plain object from a RoomListReq message. Also converts values to other types if specified.
         * @param message RoomListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.RoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListRsp. */
    interface IRoomListRsp {

        /** RoomListRsp RoomList */
        RoomList?: (PROTOCOLCOMMON.IRoomInfo[]|null);
    }

    /** Represents a RoomListRsp. */
    class RoomListRsp implements IRoomListRsp {

        /**
         * Constructs a new RoomListRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.IRoomListRsp);

        /** RoomListRsp RoomList. */
        public RoomList: PROTOCOLCOMMON.IRoomInfo[];

        /**
         * Creates a new RoomListRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListRsp instance
         */
        public static create(properties?: PROTOCOLROOM.IRoomListRsp): PROTOCOLROOM.RoomListRsp;

        /**
         * Encodes the specified RoomListRsp message. Does not implicitly {@link PROTOCOLROOM.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.RoomListRsp.verify|verify} messages.
         * @param message RoomListRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.IRoomListRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.RoomListRsp;

        /**
         * Decodes a RoomListRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.RoomListRsp;

        /**
         * Verifies a RoomListRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.RoomListRsp;

        /**
         * Creates a plain object from a RoomListRsp message. Also converts values to other types if specified.
         * @param message RoomListRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.RoomListRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomReq. */
    interface ICreateRoomReq {

        /** CreateRoomReq RoomName */
        RoomName?: (string|null);
    }

    /** Represents a CreateRoomReq. */
    class CreateRoomReq implements ICreateRoomReq {

        /**
         * Constructs a new CreateRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.ICreateRoomReq);

        /** CreateRoomReq RoomName. */
        public RoomName: string;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomReq instance
         */
        public static create(properties?: PROTOCOLROOM.ICreateRoomReq): PROTOCOLROOM.CreateRoomReq;

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link PROTOCOLROOM.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.CreateRoomReq.verify|verify} messages.
         * @param message CreateRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.ICreateRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.CreateRoomReq;

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.CreateRoomReq;

        /**
         * Verifies a CreateRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.CreateRoomReq;

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @param message CreateRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.CreateRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateRoomRsp. */
    interface ICreateRoomRsp {

        /** CreateRoomRsp PlayerSeat */
        PlayerSeat?: (number|null);

        /** CreateRoomRsp RoomInfo */
        RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);
    }

    /** Represents a CreateRoomRsp. */
    class CreateRoomRsp implements ICreateRoomRsp {

        /**
         * Constructs a new CreateRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.ICreateRoomRsp);

        /** CreateRoomRsp PlayerSeat. */
        public PlayerSeat: number;

        /** CreateRoomRsp RoomInfo. */
        public RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);

        /**
         * Creates a new CreateRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoomRsp instance
         */
        public static create(properties?: PROTOCOLROOM.ICreateRoomRsp): PROTOCOLROOM.CreateRoomRsp;

        /**
         * Encodes the specified CreateRoomRsp message. Does not implicitly {@link PROTOCOLROOM.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.CreateRoomRsp.verify|verify} messages.
         * @param message CreateRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.ICreateRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.CreateRoomRsp;

        /**
         * Decodes a CreateRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.CreateRoomRsp;

        /**
         * Verifies a CreateRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.CreateRoomRsp;

        /**
         * Creates a plain object from a CreateRoomRsp message. Also converts values to other types if specified.
         * @param message CreateRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.CreateRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LeaveRoomReq. */
    interface ILeaveRoomReq {
    }

    /** Represents a LeaveRoomReq. */
    class LeaveRoomReq implements ILeaveRoomReq {

        /**
         * Constructs a new LeaveRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.ILeaveRoomReq);

        /**
         * Creates a new LeaveRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomReq instance
         */
        public static create(properties?: PROTOCOLROOM.ILeaveRoomReq): PROTOCOLROOM.LeaveRoomReq;

        /**
         * Encodes the specified LeaveRoomReq message. Does not implicitly {@link PROTOCOLROOM.LeaveRoomReq.verify|verify} messages.
         * @param message LeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.LeaveRoomReq.verify|verify} messages.
         * @param message LeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.ILeaveRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.LeaveRoomReq;

        /**
         * Decodes a LeaveRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.LeaveRoomReq;

        /**
         * Verifies a LeaveRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.LeaveRoomReq;

        /**
         * Creates a plain object from a LeaveRoomReq message. Also converts values to other types if specified.
         * @param message LeaveRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.LeaveRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LeaveRoomRsp. */
    interface ILeaveRoomRsp {

        /** LeaveRoomRsp RoomList */
        RoomList?: (PROTOCOLCOMMON.IRoomInfo[]|null);
    }

    /** Represents a LeaveRoomRsp. */
    class LeaveRoomRsp implements ILeaveRoomRsp {

        /**
         * Constructs a new LeaveRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.ILeaveRoomRsp);

        /** LeaveRoomRsp RoomList. */
        public RoomList: PROTOCOLCOMMON.IRoomInfo[];

        /**
         * Creates a new LeaveRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveRoomRsp instance
         */
        public static create(properties?: PROTOCOLROOM.ILeaveRoomRsp): PROTOCOLROOM.LeaveRoomRsp;

        /**
         * Encodes the specified LeaveRoomRsp message. Does not implicitly {@link PROTOCOLROOM.LeaveRoomRsp.verify|verify} messages.
         * @param message LeaveRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.ILeaveRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.LeaveRoomRsp.verify|verify} messages.
         * @param message LeaveRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.ILeaveRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.LeaveRoomRsp;

        /**
         * Decodes a LeaveRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.LeaveRoomRsp;

        /**
         * Verifies a LeaveRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.LeaveRoomRsp;

        /**
         * Creates a plain object from a LeaveRoomRsp message. Also converts values to other types if specified.
         * @param message LeaveRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.LeaveRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateRoomInfoNotice. */
    interface IUpdateRoomInfoNotice {

        /** UpdateRoomInfoNotice RoomInfo */
        RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);
    }

    /** Represents an UpdateRoomInfoNotice. */
    class UpdateRoomInfoNotice implements IUpdateRoomInfoNotice {

        /**
         * Constructs a new UpdateRoomInfoNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.IUpdateRoomInfoNotice);

        /** UpdateRoomInfoNotice RoomInfo. */
        public RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);

        /**
         * Creates a new UpdateRoomInfoNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRoomInfoNotice instance
         */
        public static create(properties?: PROTOCOLROOM.IUpdateRoomInfoNotice): PROTOCOLROOM.UpdateRoomInfoNotice;

        /**
         * Encodes the specified UpdateRoomInfoNotice message. Does not implicitly {@link PROTOCOLROOM.UpdateRoomInfoNotice.verify|verify} messages.
         * @param message UpdateRoomInfoNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.IUpdateRoomInfoNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRoomInfoNotice message, length delimited. Does not implicitly {@link PROTOCOLROOM.UpdateRoomInfoNotice.verify|verify} messages.
         * @param message UpdateRoomInfoNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.IUpdateRoomInfoNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRoomInfoNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRoomInfoNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.UpdateRoomInfoNotice;

        /**
         * Decodes an UpdateRoomInfoNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRoomInfoNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.UpdateRoomInfoNotice;

        /**
         * Verifies an UpdateRoomInfoNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRoomInfoNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRoomInfoNotice
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.UpdateRoomInfoNotice;

        /**
         * Creates a plain object from an UpdateRoomInfoNotice message. Also converts values to other types if specified.
         * @param message UpdateRoomInfoNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.UpdateRoomInfoNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRoomInfoNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomReq. */
    interface IJoinRoomReq {

        /** JoinRoomReq RoomUnquieId */
        RoomUnquieId?: (number|null);
    }

    /** Represents a JoinRoomReq. */
    class JoinRoomReq implements IJoinRoomReq {

        /**
         * Constructs a new JoinRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.IJoinRoomReq);

        /** JoinRoomReq RoomUnquieId. */
        public RoomUnquieId: number;

        /**
         * Creates a new JoinRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomReq instance
         */
        public static create(properties?: PROTOCOLROOM.IJoinRoomReq): PROTOCOLROOM.JoinRoomReq;

        /**
         * Encodes the specified JoinRoomReq message. Does not implicitly {@link PROTOCOLROOM.JoinRoomReq.verify|verify} messages.
         * @param message JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomReq message, length delimited. Does not implicitly {@link PROTOCOLROOM.JoinRoomReq.verify|verify} messages.
         * @param message JoinRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.IJoinRoomReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.JoinRoomReq;

        /**
         * Decodes a JoinRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.JoinRoomReq;

        /**
         * Verifies a JoinRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.JoinRoomReq;

        /**
         * Creates a plain object from a JoinRoomReq message. Also converts values to other types if specified.
         * @param message JoinRoomReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.JoinRoomReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRoomRsp. */
    interface IJoinRoomRsp {

        /** JoinRoomRsp PlayerSeat */
        PlayerSeat?: (number|null);

        /** JoinRoomRsp RoomInfo */
        RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);
    }

    /** Represents a JoinRoomRsp. */
    class JoinRoomRsp implements IJoinRoomRsp {

        /**
         * Constructs a new JoinRoomRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLROOM.IJoinRoomRsp);

        /** JoinRoomRsp PlayerSeat. */
        public PlayerSeat: number;

        /** JoinRoomRsp RoomInfo. */
        public RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);

        /**
         * Creates a new JoinRoomRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomRsp instance
         */
        public static create(properties?: PROTOCOLROOM.IJoinRoomRsp): PROTOCOLROOM.JoinRoomRsp;

        /**
         * Encodes the specified JoinRoomRsp message. Does not implicitly {@link PROTOCOLROOM.JoinRoomRsp.verify|verify} messages.
         * @param message JoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLROOM.IJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRoomRsp message, length delimited. Does not implicitly {@link PROTOCOLROOM.JoinRoomRsp.verify|verify} messages.
         * @param message JoinRoomRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLROOM.IJoinRoomRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLROOM.JoinRoomRsp;

        /**
         * Decodes a JoinRoomRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLROOM.JoinRoomRsp;

        /**
         * Verifies a JoinRoomRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRoomRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRoomRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLROOM.JoinRoomRsp;

        /**
         * Creates a plain object from a JoinRoomRsp message. Also converts values to other types if specified.
         * @param message JoinRoomRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLROOM.JoinRoomRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRoomRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace PROTOCOLCOMMON. */
export namespace PROTOCOLCOMMON {

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo UserName */
        UserName?: (string|null);

        /** UserInfo UserSeat */
        UserSeat?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLCOMMON.IUserInfo);

        /** UserInfo UserName. */
        public UserName: string;

        /** UserInfo UserSeat. */
        public UserSeat: number;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: PROTOCOLCOMMON.IUserInfo): PROTOCOLCOMMON.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link PROTOCOLCOMMON.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLCOMMON.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLCOMMON.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLCOMMON.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLCOMMON.UserInfo;

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
        public static fromObject(object: { [k: string]: any }): PROTOCOLCOMMON.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLCOMMON.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomName */
        RoomName?: (string|null);

        /** RoomInfo UserList */
        UserList?: (PROTOCOLCOMMON.IUserInfo[]|null);

        /** RoomInfo RoomUniqueId */
        RoomUniqueId?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLCOMMON.IRoomInfo);

        /** RoomInfo RoomName. */
        public RoomName: string;

        /** RoomInfo UserList. */
        public UserList: PROTOCOLCOMMON.IUserInfo[];

        /** RoomInfo RoomUniqueId. */
        public RoomUniqueId: number;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: PROTOCOLCOMMON.IRoomInfo): PROTOCOLCOMMON.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link PROTOCOLCOMMON.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLCOMMON.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLCOMMON.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLCOMMON.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLCOMMON.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): PROTOCOLCOMMON.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLCOMMON.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreBattleData. */
    interface IPreBattleData {

        /** PreBattleData LevelName */
        LevelName?: (string|null);
    }

    /** Represents a PreBattleData. */
    class PreBattleData implements IPreBattleData {

        /**
         * Constructs a new PreBattleData.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLCOMMON.IPreBattleData);

        /** PreBattleData LevelName. */
        public LevelName: string;

        /**
         * Creates a new PreBattleData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreBattleData instance
         */
        public static create(properties?: PROTOCOLCOMMON.IPreBattleData): PROTOCOLCOMMON.PreBattleData;

        /**
         * Encodes the specified PreBattleData message. Does not implicitly {@link PROTOCOLCOMMON.PreBattleData.verify|verify} messages.
         * @param message PreBattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLCOMMON.IPreBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreBattleData message, length delimited. Does not implicitly {@link PROTOCOLCOMMON.PreBattleData.verify|verify} messages.
         * @param message PreBattleData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLCOMMON.IPreBattleData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreBattleData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreBattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLCOMMON.PreBattleData;

        /**
         * Decodes a PreBattleData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreBattleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLCOMMON.PreBattleData;

        /**
         * Verifies a PreBattleData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreBattleData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreBattleData
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLCOMMON.PreBattleData;

        /**
         * Creates a plain object from a PreBattleData message. Also converts values to other types if specified.
         * @param message PreBattleData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLCOMMON.PreBattleData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreBattleData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
