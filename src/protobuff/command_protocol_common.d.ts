import * as $protobuf from "protobufjs";
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
