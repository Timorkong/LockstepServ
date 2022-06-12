import * as $protobuf from "protobufjs";
/** Namespace PROTOCOLWAR. */
export namespace PROTOCOLWAR {

    /** Properties of an EnterGameReq. */
    interface IEnterGameReq {

        /** EnterGameReq Data */
        Data?: (PROTOCOLCOMMON.IPreBattleData|null);
    }

    /** Represents an EnterGameReq. */
    class EnterGameReq implements IEnterGameReq {

        /**
         * Constructs a new EnterGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IEnterGameReq);

        /** EnterGameReq Data. */
        public Data?: (PROTOCOLCOMMON.IPreBattleData|null);

        /**
         * Creates a new EnterGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameReq instance
         */
        public static create(properties?: PROTOCOLWAR.IEnterGameReq): PROTOCOLWAR.EnterGameReq;

        /**
         * Encodes the specified EnterGameReq message. Does not implicitly {@link PROTOCOLWAR.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameReq message, length delimited. Does not implicitly {@link PROTOCOLWAR.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.EnterGameReq;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.EnterGameReq;

        /**
         * Verifies an EnterGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.EnterGameReq;

        /**
         * Creates a plain object from an EnterGameReq message. Also converts values to other types if specified.
         * @param message EnterGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.EnterGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterGameRsp. */
    interface IEnterGameRsp {

        /** EnterGameRsp Data */
        Data?: (PROTOCOLCOMMON.IPreBattleData|null);
    }

    /** Represents an EnterGameRsp. */
    class EnterGameRsp implements IEnterGameRsp {

        /**
         * Constructs a new EnterGameRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IEnterGameRsp);

        /** EnterGameRsp Data. */
        public Data?: (PROTOCOLCOMMON.IPreBattleData|null);

        /**
         * Creates a new EnterGameRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameRsp instance
         */
        public static create(properties?: PROTOCOLWAR.IEnterGameRsp): PROTOCOLWAR.EnterGameRsp;

        /**
         * Encodes the specified EnterGameRsp message. Does not implicitly {@link PROTOCOLWAR.EnterGameRsp.verify|verify} messages.
         * @param message EnterGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IEnterGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameRsp message, length delimited. Does not implicitly {@link PROTOCOLWAR.EnterGameRsp.verify|verify} messages.
         * @param message EnterGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IEnterGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.EnterGameRsp;

        /**
         * Decodes an EnterGameRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.EnterGameRsp;

        /**
         * Verifies an EnterGameRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.EnterGameRsp;

        /**
         * Creates a plain object from an EnterGameRsp message. Also converts values to other types if specified.
         * @param message EnterGameRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.EnterGameRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartGameReq. */
    interface IStartGameReq {
    }

    /** Represents a StartGameReq. */
    class StartGameReq implements IStartGameReq {

        /**
         * Constructs a new StartGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IStartGameReq);

        /**
         * Creates a new StartGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameReq instance
         */
        public static create(properties?: PROTOCOLWAR.IStartGameReq): PROTOCOLWAR.StartGameReq;

        /**
         * Encodes the specified StartGameReq message. Does not implicitly {@link PROTOCOLWAR.StartGameReq.verify|verify} messages.
         * @param message StartGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGameReq message, length delimited. Does not implicitly {@link PROTOCOLWAR.StartGameReq.verify|verify} messages.
         * @param message StartGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IStartGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.StartGameReq;

        /**
         * Decodes a StartGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.StartGameReq;

        /**
         * Verifies a StartGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameReq
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.StartGameReq;

        /**
         * Creates a plain object from a StartGameReq message. Also converts values to other types if specified.
         * @param message StartGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.StartGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartGameRsp. */
    interface IStartGameRsp {

        /** StartGameRsp RoomInfo */
        RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);
    }

    /** Represents a StartGameRsp. */
    class StartGameRsp implements IStartGameRsp {

        /**
         * Constructs a new StartGameRsp.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IStartGameRsp);

        /** StartGameRsp RoomInfo. */
        public RoomInfo?: (PROTOCOLCOMMON.IRoomInfo|null);

        /**
         * Creates a new StartGameRsp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartGameRsp instance
         */
        public static create(properties?: PROTOCOLWAR.IStartGameRsp): PROTOCOLWAR.StartGameRsp;

        /**
         * Encodes the specified StartGameRsp message. Does not implicitly {@link PROTOCOLWAR.StartGameRsp.verify|verify} messages.
         * @param message StartGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IStartGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartGameRsp message, length delimited. Does not implicitly {@link PROTOCOLWAR.StartGameRsp.verify|verify} messages.
         * @param message StartGameRsp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IStartGameRsp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.StartGameRsp;

        /**
         * Decodes a StartGameRsp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.StartGameRsp;

        /**
         * Verifies a StartGameRsp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartGameRsp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartGameRsp
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.StartGameRsp;

        /**
         * Creates a plain object from a StartGameRsp message. Also converts values to other types if specified.
         * @param message StartGameRsp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.StartGameRsp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartGameRsp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WarMove. */
    interface IWarMove {

        /** WarMove Seat */
        Seat?: (number|null);

        /** WarMove MoveX */
        MoveX?: (number|null);

        /** WarMove MoveY */
        MoveY?: (number|null);
    }

    /** Represents a WarMove. */
    class WarMove implements IWarMove {

        /**
         * Constructs a new WarMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IWarMove);

        /** WarMove Seat. */
        public Seat: number;

        /** WarMove MoveX. */
        public MoveX: number;

        /** WarMove MoveY. */
        public MoveY: number;

        /**
         * Creates a new WarMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarMove instance
         */
        public static create(properties?: PROTOCOLWAR.IWarMove): PROTOCOLWAR.WarMove;

        /**
         * Encodes the specified WarMove message. Does not implicitly {@link PROTOCOLWAR.WarMove.verify|verify} messages.
         * @param message WarMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IWarMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarMove message, length delimited. Does not implicitly {@link PROTOCOLWAR.WarMove.verify|verify} messages.
         * @param message WarMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IWarMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.WarMove;

        /**
         * Decodes a WarMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.WarMove;

        /**
         * Verifies a WarMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarMove
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.WarMove;

        /**
         * Creates a plain object from a WarMove message. Also converts values to other types if specified.
         * @param message WarMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.WarMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WarSequenceNotice. */
    interface IWarSequenceNotice {

        /** WarSequenceNotice Sequence */
        Sequence?: (number|null);
    }

    /** Represents a WarSequenceNotice. */
    class WarSequenceNotice implements IWarSequenceNotice {

        /**
         * Constructs a new WarSequenceNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: PROTOCOLWAR.IWarSequenceNotice);

        /** WarSequenceNotice Sequence. */
        public Sequence: number;

        /**
         * Creates a new WarSequenceNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WarSequenceNotice instance
         */
        public static create(properties?: PROTOCOLWAR.IWarSequenceNotice): PROTOCOLWAR.WarSequenceNotice;

        /**
         * Encodes the specified WarSequenceNotice message. Does not implicitly {@link PROTOCOLWAR.WarSequenceNotice.verify|verify} messages.
         * @param message WarSequenceNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PROTOCOLWAR.IWarSequenceNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WarSequenceNotice message, length delimited. Does not implicitly {@link PROTOCOLWAR.WarSequenceNotice.verify|verify} messages.
         * @param message WarSequenceNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PROTOCOLWAR.IWarSequenceNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WarSequenceNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WarSequenceNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PROTOCOLWAR.WarSequenceNotice;

        /**
         * Decodes a WarSequenceNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WarSequenceNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PROTOCOLWAR.WarSequenceNotice;

        /**
         * Verifies a WarSequenceNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WarSequenceNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WarSequenceNotice
         */
        public static fromObject(object: { [k: string]: any }): PROTOCOLWAR.WarSequenceNotice;

        /**
         * Creates a plain object from a WarSequenceNotice message. Also converts values to other types if specified.
         * @param message WarSequenceNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PROTOCOLWAR.WarSequenceNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WarSequenceNotice to JSON.
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
