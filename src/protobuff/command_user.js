/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Cmd = (function() {

    /**
     * Namespace Cmd.
     * @exports Cmd
     * @namespace
     */
    var Cmd = {};

    Cmd.User = (function() {

        /**
         * Namespace User.
         * @memberof Cmd
         * @namespace
         */
        var User = {};

        /**
         * CMD enum.
         * @name Cmd.User.CMD
         * @enum {number}
         * @property {number} CMD_INVALID=65535 CMD_INVALID value
         * @property {number} CMD_HEART_BEAT_REQ=4096 CMD_HEART_BEAT_REQ value
         * @property {number} CMD_HEART_BEAT_RSP=4097 CMD_HEART_BEAT_RSP value
         * @property {number} CMD_GM_COMMAND_REQ=4098 CMD_GM_COMMAND_REQ value
         * @property {number} CMD_GM_COMMAND_RSP=4099 CMD_GM_COMMAND_RSP value
         * @property {number} CMD_TRANSMIT_REQ=4100 CMD_TRANSMIT_REQ value
         * @property {number} CMD_TRANSMIT_NOTICE=4101 CMD_TRANSMIT_NOTICE value
         * @property {number} CMD_MESSAGE_BOX_NOTICE=4103 CMD_MESSAGE_BOX_NOTICE value
         * @property {number} CMD_EVENT_NOTICE=4107 CMD_EVENT_NOTICE value
         * @property {number} CMD_KEEP_ALIVE_REQ=4108 CMD_KEEP_ALIVE_REQ value
         * @property {number} CMD_KEEP_ALIVE_RSP=4109 CMD_KEEP_ALIVE_RSP value
         * @property {number} CMD_SEND_FRMAE_DATA_REQ=4112 CMD_SEND_FRMAE_DATA_REQ value
         * @property {number} CMD_SYNC_FRAME_NOTICE=4113 CMD_SYNC_FRAME_NOTICE value
         * @property {number} CMD_LOGIN_REQ=4352 CMD_LOGIN_REQ value
         * @property {number} CMD_LOGIN_RSP=4353 CMD_LOGIN_RSP value
         * @property {number} CMD_KICK_NOTICE=4355 CMD_KICK_NOTICE value
         * @property {number} CMD_AUTH_FAIL_NOTICE=4357 CMD_AUTH_FAIL_NOTICE value
         * @property {number} CMD_CHANGE_SCENE_REQ=4624 CMD_CHANGE_SCENE_REQ value
         * @property {number} CMD_CHANGE_SCENE_RSP=4625 CMD_CHANGE_SCENE_RSP value
         * @property {number} CMD_QUERY_INSTANCE_LIST_REQ=4640 CMD_QUERY_INSTANCE_LIST_REQ value
         * @property {number} CMD_QUERY_INSTANCE_LIST_RSP=4641 CMD_QUERY_INSTANCE_LIST_RSP value
         * @property {number} CMD_ENTER_INSTANCE_REQ=4642 CMD_ENTER_INSTANCE_REQ value
         * @property {number} CMD_ENTER_INSTANCE_RSP=4643 CMD_ENTER_INSTANCE_RSP value
         * @property {number} CMD_LEAVE_INSTANCE_REQ=4644 CMD_LEAVE_INSTANCE_REQ value
         * @property {number} CMD_LEAVE_INSTANCE_RSP=4645 CMD_LEAVE_INSTANCE_RSP value
         * @property {number} CMD_PASS_INSTANCE_REQ=4646 CMD_PASS_INSTANCE_REQ value
         * @property {number} CMD_PASS_INSTANCE_RSP=4647 CMD_PASS_INSTANCE_RSP value
         * @property {number} CMD_REFRESH_TODAY_CHALL_HISTORY_REQ=4648 CMD_REFRESH_TODAY_CHALL_HISTORY_REQ value
         * @property {number} CMD_REFRESH_TODAY_CHALL_HISTORY_RSP=4649 CMD_REFRESH_TODAY_CHALL_HISTORY_RSP value
         * @property {number} CMD_SWEEP_INSTANCE_REQ=4650 CMD_SWEEP_INSTANCE_REQ value
         * @property {number} CMD_SWEEP_INSTANCE_RSP=4651 CMD_SWEEP_INSTANCE_RSP value
         * @property {number} CMD_CHANGE_SCENE_NOTICE=4769 CMD_CHANGE_SCENE_NOTICE value
         * @property {number} CMD_UPDATE_SCENE_NOTICE=4771 CMD_UPDATE_SCENE_NOTICE value
         * @property {number} CMD_MOVE_REQ=4784 CMD_MOVE_REQ value
         * @property {number} CMD_MOVE_NOTICE=4785 CMD_MOVE_NOTICE value
         * @property {number} CMD_QUERY_PACK_REQ=4864 CMD_QUERY_PACK_REQ value
         * @property {number} CMD_QUERY_PACK_RSP=4865 CMD_QUERY_PACK_RSP value
         * @property {number} CMD_TIDY_PACK_REQ=4878 CMD_TIDY_PACK_REQ value
         * @property {number} CMD_TIDY_PACK_RSP=4879 CMD_TIDY_PACK_RSP value
         * @property {number} CMD_USE_ITEM_REQ=4898 CMD_USE_ITEM_REQ value
         * @property {number} CMD_USE_ITEM_RSP=4899 CMD_USE_ITEM_RSP value
         * @property {number} CMD_SELL_ITEM_REQ=4900 CMD_SELL_ITEM_REQ value
         * @property {number} CMD_SELL_ITEM_RSP=4901 CMD_SELL_ITEM_RSP value
         * @property {number} CMD_BUY_ITEM_REQ=4902 CMD_BUY_ITEM_REQ value
         * @property {number} CMD_BUY_ITEM_RSP=4903 CMD_BUY_ITEM_RSP value
         * @property {number} CMD_COMPOSITE_ALL_ITEM_REQ=4904 CMD_COMPOSITE_ALL_ITEM_REQ value
         * @property {number} CMD_COMPOSITE_ALL_ITEM_RSP=4905 CMD_COMPOSITE_ALL_ITEM_RSP value
         * @property {number} CMD_USE_MULTIPLE_ITEM_REQ=4912 CMD_USE_MULTIPLE_ITEM_REQ value
         * @property {number} CMD_USE_MULTIPLE_ITEM_RSP=4913 CMD_USE_MULTIPLE_ITEM_RSP value
         * @property {number} CMD_QUERY_MULTIPLE_ITEM_STATE_REQ=4914 CMD_QUERY_MULTIPLE_ITEM_STATE_REQ value
         * @property {number} CMD_QUERY_MULTIPLE_ITEM_STATE_RSP=4915 CMD_QUERY_MULTIPLE_ITEM_STATE_RSP value
         * @property {number} CMD_QUERY_COLLECTION_LIST_REQ=4928 CMD_QUERY_COLLECTION_LIST_REQ value
         * @property {number} CMD_QUERY_COLLECTION_LIST_RSP=4929 CMD_QUERY_COLLECTION_LIST_RSP value
         * @property {number} CMD_EXCHANGE_TREASURE_REQ=4930 CMD_EXCHANGE_TREASURE_REQ value
         * @property {number} CMD_EXCHANGE_TREASURE_RSP=4931 CMD_EXCHANGE_TREASURE_RSP value
         * @property {number} CMD_QUERY_COLLECTION_SHOP_REQ=4944 CMD_QUERY_COLLECTION_SHOP_REQ value
         * @property {number} CMD_QUERY_COLLECTION_SHOP_RSP=4945 CMD_QUERY_COLLECTION_SHOP_RSP value
         * @property {number} CMD_BUY_COLLECTION_SHOP_GOODS_REQ=4946 CMD_BUY_COLLECTION_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_COLLECTION_SHOP_GOODS_RSP=4947 CMD_BUY_COLLECTION_SHOP_GOODS_RSP value
         * @property {number} CMD_REFRESH_COLLECTION_SHOP_REQ=4948 CMD_REFRESH_COLLECTION_SHOP_REQ value
         * @property {number} CMD_REFRESH_COLLECTION_SHOP_RSP=4949 CMD_REFRESH_COLLECTION_SHOP_RSP value
         * @property {number} CMD_COLLECTION_DATA_REQ=4960 CMD_COLLECTION_DATA_REQ value
         * @property {number} CMD_COLLECTION_DATA_RSP=4961 CMD_COLLECTION_DATA_RSP value
         * @property {number} CMD_UPGRADE_EQUIP_REQ=5024 CMD_UPGRADE_EQUIP_REQ value
         * @property {number} CMD_UPGRADE_EQUIP_RSP=5025 CMD_UPGRADE_EQUIP_RSP value
         * @property {number} CMD_INLAY_GEM_REQ=5026 CMD_INLAY_GEM_REQ value
         * @property {number} CMD_INLAY_GEM_RSP=5027 CMD_INLAY_GEM_RSP value
         * @property {number} CMD_ADD_EQUIP_STAR_REQ=5028 CMD_ADD_EQUIP_STAR_REQ value
         * @property {number} CMD_ADD_EQUIP_STAR_RSP=5029 CMD_ADD_EQUIP_STAR_RSP value
         * @property {number} CMD_PUT_ON_EQUIP_REQ=5040 CMD_PUT_ON_EQUIP_REQ value
         * @property {number} CMD_PUT_ON_EQUIP_RSP=5041 CMD_PUT_ON_EQUIP_RSP value
         * @property {number} CMD_TAKE_OFF_EQUIP_REQ=5042 CMD_TAKE_OFF_EQUIP_REQ value
         * @property {number} CMD_TAKE_OFF_EQUIP_RSP=5043 CMD_TAKE_OFF_EQUIP_RSP value
         * @property {number} CMD_ADVANCED_EQUIP_REQ=5044 CMD_ADVANCED_EQUIP_REQ value
         * @property {number} CMD_ADVANCED_EQUIP_RSP=5045 CMD_ADVANCED_EQUIP_RSP value
         * @property {number} CMD_UPGRADE_GEM_REQ=5046 CMD_UPGRADE_GEM_REQ value
         * @property {number} CMD_UPGRADE_GEM_RSP=5047 CMD_UPGRADE_GEM_RSP value
         * @property {number} CMD_EXCHANGE_ITEM_REQ=5048 CMD_EXCHANGE_ITEM_REQ value
         * @property {number} CMD_EXCHANGE_ITEM_RSP=5049 CMD_EXCHANGE_ITEM_RSP value
         * @property {number} CMD_CHECK_PACK_FULL_REQ=5050 CMD_CHECK_PACK_FULL_REQ value
         * @property {number} CMD_CHECK_PACK_FULL_RSP=5051 CMD_CHECK_PACK_FULL_RSP value
         * @property {number} CMD_DECOMPOSITION_ITEM_REQ=5052 CMD_DECOMPOSITION_ITEM_REQ value
         * @property {number} CMD_DECOMPOSITION_ITEM_RSP=5053 CMD_DECOMPOSITION_ITEM_RSP value
         * @property {number} CMD_ROLE_DIE_NOTICE_REQ=5120 CMD_ROLE_DIE_NOTICE_REQ value
         * @property {number} CMD_ROLE_DIE_NOTICE_RSP=5121 CMD_ROLE_DIE_NOTICE_RSP value
         * @property {number} CMD_QUERY_HERO_INFO_REQ=5122 CMD_QUERY_HERO_INFO_REQ value
         * @property {number} CMD_QUERY_HERO_INFO_RSP=5123 CMD_QUERY_HERO_INFO_RSP value
         * @property {number} CMD_UPGRADE_SKILL_REQ=5378 CMD_UPGRADE_SKILL_REQ value
         * @property {number} CMD_UPGRADE_SKILL_RSP=5379 CMD_UPGRADE_SKILL_RSP value
         * @property {number} CMD_ADVANCED_SKILL_REQ=5380 CMD_ADVANCED_SKILL_REQ value
         * @property {number} CMD_ADVANCED_SKILL_RSP=5381 CMD_ADVANCED_SKILL_RSP value
         * @property {number} CMD_QUERY_SKILL_POINT_REQ=5382 CMD_QUERY_SKILL_POINT_REQ value
         * @property {number} CMD_QUERY_SKILL_POINT_RSP=5383 CMD_QUERY_SKILL_POINT_RSP value
         * @property {number} CMD_BUY_SKILL_POINT_REQ=5384 CMD_BUY_SKILL_POINT_REQ value
         * @property {number} CMD_BUY_SKILL_POINT_RSP=5385 CMD_BUY_SKILL_POINT_RSP value
         * @property {number} CMD_QUERY_ARENA_INFO_REQ=5888 竞技场相关协议 //////////
         * @property {number} CMD_QUERY_ARENA_INFO_RSP=5889 CMD_QUERY_ARENA_INFO_RSP value
         * @property {number} CMD_ARENA_FIGHT_REQ=5890 CMD_ARENA_FIGHT_REQ value
         * @property {number} CMD_ARENA_FIGHT_RSP=5891 CMD_ARENA_FIGHT_RSP value
         * @property {number} CMD_CLEAR_ARENA_CD_REQ=5892 CMD_CLEAR_ARENA_CD_REQ value
         * @property {number} CMD_CLEAR_ARENA_CD_RSP=5893 CMD_CLEAR_ARENA_CD_RSP value
         * @property {number} CMD_RESET_ARENA_CHANLLENGE_REQ=5894 CMD_RESET_ARENA_CHANLLENGE_REQ value
         * @property {number} CMD_RESET_ARENA_CHANLLENGE_RSP=5895 CMD_RESET_ARENA_CHANLLENGE_RSP value
         * @property {number} CMD_QUERY_TOURNAMENT_INFO_REQ=5904 武道会相关协议 //////////
         * @property {number} CMD_QUERY_TOURNAMENT_INFO_RSP=5905 CMD_QUERY_TOURNAMENT_INFO_RSP value
         * @property {number} CMD_OCCUPY_TOURNAMENT_RANK_REQ=5906 CMD_OCCUPY_TOURNAMENT_RANK_REQ value
         * @property {number} CMD_OCCUPY_TOURNAMENT_RANK_RSP=5907 CMD_OCCUPY_TOURNAMENT_RANK_RSP value
         * @property {number} CMD_QUERY_HEROS_FORMATIONS_REQ=5920 打劫 //////////
         * @property {number} CMD_QUERY_HEROS_FORMATIONS_RSP=5921 CMD_QUERY_HEROS_FORMATIONS_RSP value
         * @property {number} CMD_ROB_AWARD_REQ=5922 CMD_ROB_AWARD_REQ value
         * @property {number} CMD_ROB_AWARD_RSP=5923 CMD_ROB_AWARD_RSP value
         * @property {number} CMD_QUERY_NEARBY_PLAYERS_REQ=5924 CMD_QUERY_NEARBY_PLAYERS_REQ value
         * @property {number} CMD_QUERY_NEARBY_PLAYERS_RSP=5925 CMD_QUERY_NEARBY_PLAYERS_RSP value
         * @property {number} CMD_REFRESH_NEARBY_PLAYERS_REQ=5926 CMD_REFRESH_NEARBY_PLAYERS_REQ value
         * @property {number} CMD_REFRESH_NEARBY_PLAYERS_RSP=5927 CMD_REFRESH_NEARBY_PLAYERS_RSP value
         * @property {number} CMD_QUERY_FRIEND_LIST_REQ=6144 社会关系相关协议 //////////
         * @property {number} CMD_QUERY_FRIEND_LIST_RSP=6145 CMD_QUERY_FRIEND_LIST_RSP value
         * @property {number} CMD_ADD_FRIEND_REQ=6146 CMD_ADD_FRIEND_REQ value
         * @property {number} CMD_ADD_FRIEND_RSP=6147 CMD_ADD_FRIEND_RSP value
         * @property {number} CMD_REMOVE_FRIEND_REQ=6148 CMD_REMOVE_FRIEND_REQ value
         * @property {number} CMD_REMOVE_FRIEND_RSP=6149 CMD_REMOVE_FRIEND_RSP value
         * @property {number} CMD_CHECK_FRIEND_ADDED_REQ=6150 CMD_CHECK_FRIEND_ADDED_REQ value
         * @property {number} CMD_CHECK_FRIEND_ADDED_RSP=6151 CMD_CHECK_FRIEND_ADDED_RSP value
         * @property {number} CMD_QUERY_MOMO_COUNT_REQ=6160 CMD_QUERY_MOMO_COUNT_REQ value
         * @property {number} CMD_QUERY_MOMO_COUNT_RSP=6161 CMD_QUERY_MOMO_COUNT_RSP value
         * @property {number} CMD_MOMO_FRIEND_REQ=6162 CMD_MOMO_FRIEND_REQ value
         * @property {number} CMD_MOMO_FRIEND_RSP=6163 CMD_MOMO_FRIEND_RSP value
         * @property {number} CMD_MOMO_AWARD_REQ=6164 CMD_MOMO_AWARD_REQ value
         * @property {number} CMD_MOMO_AWARD_RSP=6165 CMD_MOMO_AWARD_RSP value
         * @property {number} CMD_MOMO_AWARD_NOTICE=6166 CMD_MOMO_AWARD_NOTICE value
         * @property {number} CMD_REMOVE_FRIEND_LIST_REQ=6167 CMD_REMOVE_FRIEND_LIST_REQ value
         * @property {number} CMD_REMOVE_FRIEND_LIST_RSP=6168 CMD_REMOVE_FRIEND_LIST_RSP value
         * @property {number} CMD_MISSION_ACCEPT_REQ=6400 任务相关协议 //////////
         * @property {number} CMD_MISSION_ACCEPT_RSP=6401 CMD_MISSION_ACCEPT_RSP value
         * @property {number} CMD_MISSION_AWARD_REQ=6402 CMD_MISSION_AWARD_REQ value
         * @property {number} CMD_MISSION_AWARD_RSP=6403 CMD_MISSION_AWARD_RSP value
         * @property {number} CMD_QUERY_CHALL_MISSION_REQ=6404 CMD_QUERY_CHALL_MISSION_REQ value
         * @property {number} CMD_QUERY_CHALL_MISSION_RSP=6405 CMD_QUERY_CHALL_MISSION_RSP value
         * @property {number} CMD_ACCEPT_DAILY_MISSION_REQ=6464 日常任务相关协议 //////////
         * @property {number} CMD_ACCEPT_DAILY_MISSION_RSP=6465 CMD_ACCEPT_DAILY_MISSION_RSP value
         * @property {number} CMD_QUERY_DAILY_MISSION_REQ=6468 CMD_QUERY_DAILY_MISSION_REQ value
         * @property {number} CMD_QUERY_DAILY_MISSION_RSP=6469 CMD_QUERY_DAILY_MISSION_RSP value
         * @property {number} CMD_AWARD_DAILY_MISSION_REQ=6470 CMD_AWARD_DAILY_MISSION_REQ value
         * @property {number} CMD_AWARD_DAILY_MISSION_RSP=6471 CMD_AWARD_DAILY_MISSION_RSP value
         * @property {number} CMD_RESET_DAILY_MISSION_REQ=6472 CMD_RESET_DAILY_MISSION_REQ value
         * @property {number} CMD_RESET_DAILY_MISSION_RSP=6473 CMD_RESET_DAILY_MISSION_RSP value
         * @property {number} CMD_QUERY_ACTIVITY_REQ=6496 活跃度 //////////
         * @property {number} CMD_QUERY_ACTIVITY_RSP=6497 CMD_QUERY_ACTIVITY_RSP value
         * @property {number} CMD_AWARD_ACTIVITY_REQ=6498 CMD_AWARD_ACTIVITY_REQ value
         * @property {number} CMD_AWARD_ACTIVITY_RSP=6499 CMD_AWARD_ACTIVITY_RSP value
         * @property {number} CMD_QUERY_TERRITORY_REQ=6656 地盘相关协议 //////////
         * @property {number} CMD_QUERY_TERRITORY_RSP=6657 CMD_QUERY_TERRITORY_RSP value
         * @property {number} CMD_UNLOCK_TERRITORY_CELL_REQ=6658 CMD_UNLOCK_TERRITORY_CELL_REQ value
         * @property {number} CMD_UNLOCK_TERRITORY_CELL_RSP=6659 CMD_UNLOCK_TERRITORY_CELL_RSP value
         * @property {number} CMD_COLLECT_TERRITORY_REQ=6660 CMD_COLLECT_TERRITORY_REQ value
         * @property {number} CMD_COLLECT_TERRITORY_RSP=6661 CMD_COLLECT_TERRITORY_RSP value
         * @property {number} CMD_COLLECT_CELL_REQ=6662 CMD_COLLECT_CELL_REQ value
         * @property {number} CMD_COLLECT_CELL_RSP=6663 CMD_COLLECT_CELL_RSP value
         * @property {number} CMD_JUMP_FORWARD_REQ=6664 CMD_JUMP_FORWARD_REQ value
         * @property {number} CMD_JUMP_FORWARD_RSP=6665 CMD_JUMP_FORWARD_RSP value
         * @property {number} CMD_UPGRADE_TERRITORY_CELL_REQ=6672 CMD_UPGRADE_TERRITORY_CELL_REQ value
         * @property {number} CMD_UPGRADE_TERRITORY_CELL_RSP=6673 CMD_UPGRADE_TERRITORY_CELL_RSP value
         * @property {number} CMD_OCCUPY_TERRITORY_HERO_CELL_REQ=6674 CMD_OCCUPY_TERRITORY_HERO_CELL_REQ value
         * @property {number} CMD_OCCUPY_TERRITORY_HERO_CELL_RSP=6675 CMD_OCCUPY_TERRITORY_HERO_CELL_RSP value
         * @property {number} CMD_COLLECT_SUPPER_CELL_REQ=6678 CMD_COLLECT_SUPPER_CELL_REQ value
         * @property {number} CMD_COLLECT_SUPPER_CELL_RSP=6679 CMD_COLLECT_SUPPER_CELL_RSP value
         * @property {number} CMD_SUPPER_TERR_FIGHT_REQ=6680 CMD_SUPPER_TERR_FIGHT_REQ value
         * @property {number} CMD_SUPPER_TERR_FIGHT_RSP=6681 CMD_SUPPER_TERR_FIGHT_RSP value
         * @property {number} CMD_QUERY_SUPPER_TERR_REQ=6682 CMD_QUERY_SUPPER_TERR_REQ value
         * @property {number} CMD_QUERY_SUPPER_TERR_RSP=6683 CMD_QUERY_SUPPER_TERR_RSP value
         * @property {number} CMD_UNOCCUPY_TERRITORY_HERO_CELL_REQ=6684 CMD_UNOCCUPY_TERRITORY_HERO_CELL_REQ value
         * @property {number} CMD_UNOCCUPY_TERRITORY_HERO_CELL_RSP=6685 CMD_UNOCCUPY_TERRITORY_HERO_CELL_RSP value
         * @property {number} CMD_CHANGE_TERR_HERO_OCCUPANT_REQ=6686 CMD_CHANGE_TERR_HERO_OCCUPANT_REQ value
         * @property {number} CMD_CHANGE_TERR_HERO_OCCUPANT_RSP=6687 CMD_CHANGE_TERR_HERO_OCCUPANT_RSP value
         * @property {number} CMD_TERR_ROB_AWARD_REQ=6688 CMD_TERR_ROB_AWARD_REQ value
         * @property {number} CMD_TERR_ROB_AWARD_RSP=6689 CMD_TERR_ROB_AWARD_RSP value
         * @property {number} CMD_LOCK_TERR_STALL_REQ=6690 CMD_LOCK_TERR_STALL_REQ value
         * @property {number} CMD_LOCK_TERR_STALL_RSP=6691 CMD_LOCK_TERR_STALL_RSP value
         * @property {number} CMD_FRESH_TERR_STALL_QUALITY_REQ=6692 CMD_FRESH_TERR_STALL_QUALITY_REQ value
         * @property {number} CMD_FRESH_TERR_STALL_QUALITY_RSP=6693 CMD_FRESH_TERR_STALL_QUALITY_RSP value
         * @property {number} CMD_OCCUPY_TERR_STALL_REQ=6694 CMD_OCCUPY_TERR_STALL_REQ value
         * @property {number} CMD_OCCUPY_TERR_STALL_RSP=6695 CMD_OCCUPY_TERR_STALL_RSP value
         * @property {number} CMD_QUERY_GROUP_STALL_REQ=6696 CMD_QUERY_GROUP_STALL_REQ value
         * @property {number} CMD_QUERY_GROUP_STALL_RSP=6697 CMD_QUERY_GROUP_STALL_RSP value
         * @property {number} CMD_INVITE_TERR_STALL_DEFENDER_REQ=6698 CMD_INVITE_TERR_STALL_DEFENDER_REQ value
         * @property {number} CMD_INVITE_TERR_STALL_DEFENDER_RSP=6699 CMD_INVITE_TERR_STALL_DEFENDER_RSP value
         * @property {number} CMD_QUERY_TERR_STALL_INFO_REQ=6700 CMD_QUERY_TERR_STALL_INFO_REQ value
         * @property {number} CMD_QUERY_TERR_STALL_INFO_RSP=6701 CMD_QUERY_TERR_STALL_INFO_RSP value
         * @property {number} CMD_QUERY_TERR_STALL_INVITE_INFO_REQ=6702 CMD_QUERY_TERR_STALL_INVITE_INFO_REQ value
         * @property {number} CMD_QUERY_TERR_STALL_INVITE_INFO_RSP=6703 CMD_QUERY_TERR_STALL_INVITE_INFO_RSP value
         * @property {number} CMD_RESPONSE_TERR_STALL_DEFENDER_REQ=6704 CMD_RESPONSE_TERR_STALL_DEFENDER_REQ value
         * @property {number} CMD_RESPONSE_TERR_STALL_DEFENDER_RSP=6705 CMD_RESPONSE_TERR_STALL_DEFENDER_RSP value
         * @property {number} CMD_ROB_TERR_STALL_REQ=6706 CMD_ROB_TERR_STALL_REQ value
         * @property {number} CMD_ROB_TERR_STALL_RSP=6707 CMD_ROB_TERR_STALL_RSP value
         * @property {number} CMD_QUERY_ROBBED_TERR_STALL_LOG_REQ=6708 CMD_QUERY_ROBBED_TERR_STALL_LOG_REQ value
         * @property {number} CMD_QUERY_ROBBED_TERR_STALL_LOG_RSP=6709 CMD_QUERY_ROBBED_TERR_STALL_LOG_RSP value
         * @property {number} CMD_RESPONSE_TERR_STALL_HELP_REQ=6710 CMD_RESPONSE_TERR_STALL_HELP_REQ value
         * @property {number} CMD_RESPONSE_TERR_STALL_HELP_RSP=6711 CMD_RESPONSE_TERR_STALL_HELP_RSP value
         * @property {number} CMD_BUY_TERR_STALL_COUNT_REQ=6712 CMD_BUY_TERR_STALL_COUNT_REQ value
         * @property {number} CMD_BUY_TERR_STALL_COUNT_RSP=6713 CMD_BUY_TERR_STALL_COUNT_RSP value
         * @property {number} CMD_INVITE_INFO_NOTICE=6715 CMD_INVITE_INFO_NOTICE value
         * @property {number} CMD_QUERY_ALL_TERR_STALL_STATE_REQ=6716 CMD_QUERY_ALL_TERR_STALL_STATE_REQ value
         * @property {number} CMD_QUERY_ALL_TERR_STALL_STATE_RSP=6717 CMD_QUERY_ALL_TERR_STALL_STATE_RSP value
         * @property {number} CMD_CANCEL_TERR_STALL_HELP_REQ=6718 CMD_CANCEL_TERR_STALL_HELP_REQ value
         * @property {number} CMD_CANCEL_TERR_STALL_HELP_RSP=6719 CMD_CANCEL_TERR_STALL_HELP_RSP value
         * @property {number} CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_REQ=6720 CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_REQ value
         * @property {number} CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_RSP=6721 CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_RSP value
         * @property {number} CMD_RESPONSE_DEFEND_INFO_NOTICE=6723 CMD_RESPONSE_DEFEND_INFO_NOTICE value
         * @property {number} CMD_RESPONSE_HELP_INFO_NOTICE=6725 CMD_RESPONSE_HELP_INFO_NOTICE value
         * @property {number} CMD_QUERY_ALL_TERR_COUNT_REQ=6726 CMD_QUERY_ALL_TERR_COUNT_REQ value
         * @property {number} CMD_QUERY_ALL_TERR_COUNT_RSP=6727 CMD_QUERY_ALL_TERR_COUNT_RSP value
         * @property {number} CMD_CHECK_TERR_STALL_INVITE_INFO_REQ=6728 CMD_CHECK_TERR_STALL_INVITE_INFO_REQ value
         * @property {number} CMD_CHECK_TERR_STALL_INVITE_INFO_RSP=6729 CMD_CHECK_TERR_STALL_INVITE_INFO_RSP value
         * @property {number} CMD_ROB_NOTICE=6737 CMD_ROB_NOTICE value
         * @property {number} CMD_STALL_FINISH_BY_ROBBED_NOTICE=6739 CMD_STALL_FINISH_BY_ROBBED_NOTICE value
         * @property {number} CMD_CHAT_NOTICE=6915 CMD_CHAT_NOTICE value
         * @property {number} CMD_QUERY_RANK_TABLE_REQ=7425 排行榜 //////////
         * @property {number} CMD_QUERY_RANK_TABLE_RSP=7426 CMD_QUERY_RANK_TABLE_RSP value
         * @property {number} CMD_QUERY_EGG_RANK_CONFIG_REQ=7427 CMD_QUERY_EGG_RANK_CONFIG_REQ value
         * @property {number} CMD_QUERY_EGG_RANK_CONFIG_RSP=7428 CMD_QUERY_EGG_RANK_CONFIG_RSP value
         * @property {number} CMD_QUERY_EGG_ROBOT_RANK_REQ=7429 CMD_QUERY_EGG_ROBOT_RANK_REQ value
         * @property {number} CMD_QUERY_EGG_ROBOT_RANK_RSP=7430 CMD_QUERY_EGG_ROBOT_RANK_RSP value
         * @property {number} CMD_QUERY_HERO_REQ=7680 英雄转职 //////////
         * @property {number} CMD_QUERY_HERO_RSP=7681 CMD_QUERY_HERO_RSP value
         * @property {number} CMD_UNLOCK_HERO_REQ=7682 CMD_UNLOCK_HERO_REQ value
         * @property {number} CMD_UNLOCK_HERO_RSP=7683 CMD_UNLOCK_HERO_RSP value
         * @property {number} CMD_TRANSFORM_HERO_REQ=7684 CMD_TRANSFORM_HERO_REQ value
         * @property {number} CMD_TRANSFORM_HERO_RSP=7685 CMD_TRANSFORM_HERO_RSP value
         * @property {number} CMD_CLEAR_TRANSFORM_CD_REQ=7686 CMD_CLEAR_TRANSFORM_CD_REQ value
         * @property {number} CMD_CLEAR_TRANSFORM_CD_RSP=7687 CMD_CLEAR_TRANSFORM_CD_RSP value
         * @property {number} CMD_TRANSFORM_HERO_BY_CARD_REQ=7688 CMD_TRANSFORM_HERO_BY_CARD_REQ value
         * @property {number} CMD_TRANSFORM_HERO_BY_CARD_RSP=7689 CMD_TRANSFORM_HERO_BY_CARD_RSP value
         * @property {number} CMD_ADVANCED_HERO_REQ=7696 CMD_ADVANCED_HERO_REQ value
         * @property {number} CMD_ADVANCED_HERO_RSP=7697 CMD_ADVANCED_HERO_RSP value
         * @property {number} CMD_ADD_HERO_STAR_REQ=7698 CMD_ADD_HERO_STAR_REQ value
         * @property {number} CMD_ADD_HERO_STAR_RSP=7699 CMD_ADD_HERO_STAR_RSP value
         * @property {number} CMD_QUERY_HERO_COMBINATION_REQ=7700 CMD_QUERY_HERO_COMBINATION_REQ value
         * @property {number} CMD_QUERY_HERO_COMBINATION_RSP=7701 CMD_QUERY_HERO_COMBINATION_RSP value
         * @property {number} CMD_ACTIVE_HERO_COMBINATION_REQ=7702 CMD_ACTIVE_HERO_COMBINATION_REQ value
         * @property {number} CMD_ACTIVE_HERO_COMBINATION_RSP=7703 CMD_ACTIVE_HERO_COMBINATION_RSP value
         * @property {number} CMD_LEVUP_HERO_COMBINATION_REQ=7704 CMD_LEVUP_HERO_COMBINATION_REQ value
         * @property {number} CMD_LEVUP_HERO_COMBINATION_RSP=7705 CMD_LEVUP_HERO_COMBINATION_RSP value
         * @property {number} CMD_QUERY_FELLOW_REQ=7712 CMD_QUERY_FELLOW_REQ value
         * @property {number} CMD_QUERY_FELLOW_RSP=7713 CMD_QUERY_FELLOW_RSP value
         * @property {number} CMD_SET_FELLOW_REQ=7714 CMD_SET_FELLOW_REQ value
         * @property {number} CMD_SET_FELLOW_RSP=7715 CMD_SET_FELLOW_RSP value
         * @property {number} CMD_UNLOCK_FELLOW_CELL_REQ=7716 CMD_UNLOCK_FELLOW_CELL_REQ value
         * @property {number} CMD_UNLOCK_FELLOW_CELL_RSP=7717 CMD_UNLOCK_FELLOW_CELL_RSP value
         * @property {number} CMD_TAKE_OFF_FELLOW_REQ=7718 CMD_TAKE_OFF_FELLOW_REQ value
         * @property {number} CMD_TAKE_OFF_FELLOW_RSP=7719 CMD_TAKE_OFF_FELLOW_RSP value
         * @property {number} CMD_TRANSFER_HERO_EXP_REQ=7728 CMD_TRANSFER_HERO_EXP_REQ value
         * @property {number} CMD_TRANSFER_HERO_EXP_RSP=7729 CMD_TRANSFER_HERO_EXP_RSP value
         * @property {number} CMD_QUERY_HERO_NUMERIC_REQ=7744 CMD_QUERY_HERO_NUMERIC_REQ value
         * @property {number} CMD_QUERY_HERO_NUMERIC_RSP=7745 CMD_QUERY_HERO_NUMERIC_RSP value
         * @property {number} CMD_REVERT_HERO_ADVANCED_REQ=7746 CMD_REVERT_HERO_ADVANCED_REQ value
         * @property {number} CMD_REVERT_HERO_ADVANCED_RSP=7747 CMD_REVERT_HERO_ADVANCED_RSP value
         * @property {number} CMD_AWAKE_LEV_UP_REQ=7748 CMD_AWAKE_LEV_UP_REQ value
         * @property {number} CMD_AWAKE_LEV_UP_RSP=7749 CMD_AWAKE_LEV_UP_RSP value
         * @property {number} CMD_AWAKE_HERO_REQ=7750 CMD_AWAKE_HERO_REQ value
         * @property {number} CMD_AWAKE_HERO_RSP=7751 CMD_AWAKE_HERO_RSP value
         * @property {number} CMD_CONSTELLATION_LEV_UP_REQ=7752 CMD_CONSTELLATION_LEV_UP_REQ value
         * @property {number} CMD_CONSTELLATION_LEV_UP_RSP=7753 CMD_CONSTELLATION_LEV_UP_RSP value
         * @property {number} CMD_QUERY_CONSTELLATION_INFO_REQ=7754 CMD_QUERY_CONSTELLATION_INFO_REQ value
         * @property {number} CMD_QUERY_CONSTELLATION_INFO_RSP=7755 CMD_QUERY_CONSTELLATION_INFO_RSP value
         * @property {number} CMD_INSTALL_CONSTELLATION_HERO_REQ=7756 CMD_INSTALL_CONSTELLATION_HERO_REQ value
         * @property {number} CMD_INSTALL_CONSTELLATION_HERO_RSP=7757 CMD_INSTALL_CONSTELLATION_HERO_RSP value
         * @property {number} CMD_SET_HERO_BUFFER_ID_REQ=7758 CMD_SET_HERO_BUFFER_ID_REQ value
         * @property {number} CMD_SET_HERO_BUFFER_ID_RSP=7759 CMD_SET_HERO_BUFFER_ID_RSP value
         * @property {number} CMD_UNINSTALL_CONSTELLATION_HERO_REQ=7760 CMD_UNINSTALL_CONSTELLATION_HERO_REQ value
         * @property {number} CMD_UNINSTALL_CONSTELLATION_HERO_RSP=7761 CMD_UNINSTALL_CONSTELLATION_HERO_RSP value
         * @property {number} CMD_REBORN_HERO_REQ=7762 CMD_REBORN_HERO_REQ value
         * @property {number} CMD_REBORN_HERO_RSP=7763 CMD_REBORN_HERO_RSP value
         * @property {number} CMD_QUERY_DIVINE_SOUL_SHOP_REQ=7764 CMD_QUERY_DIVINE_SOUL_SHOP_REQ value
         * @property {number} CMD_QUERY_DIVINE_SOUL_SHOP_RSP=7765 CMD_QUERY_DIVINE_SOUL_SHOP_RSP value
         * @property {number} CMD_BUY_DIVINE_SOUL_SHOP_REQ=7766 CMD_BUY_DIVINE_SOUL_SHOP_REQ value
         * @property {number} CMD_BUY_DIVINE_SOUL_SHOP_RSP=7767 CMD_BUY_DIVINE_SOUL_SHOP_RSP value
         * @property {number} CMD_FRESH_DIVINE_SOUL_SHOP_REQ=7768 CMD_FRESH_DIVINE_SOUL_SHOP_REQ value
         * @property {number} CMD_FRESH_DIVINE_SOUL_SHOP_RSP=7769 CMD_FRESH_DIVINE_SOUL_SHOP_RSP value
         * @property {number} CMD_BUY_SP_REQ=7936 体力相关协议 //////////
         * @property {number} CMD_BUY_SP_RSP=7937 CMD_BUY_SP_RSP value
         * @property {number} CMD_QUERY_SP_UPDATE_CD_REQ=7938 CMD_QUERY_SP_UPDATE_CD_REQ value
         * @property {number} CMD_QUERY_SP_UPDATE_CD_RSP=7939 CMD_QUERY_SP_UPDATE_CD_RSP value
         * @property {number} CMD_AWARD_DAILY_LOGIN_REQ=8192 留存活动相关协议 /////////
         * @property {number} CMD_AWARD_DAILY_LOGIN_RSP=8193 CMD_AWARD_DAILY_LOGIN_RSP value
         * @property {number} CMD_QUERY_DAILY_AWARD_INFO_REQ=8194 CMD_QUERY_DAILY_AWARD_INFO_REQ value
         * @property {number} CMD_QUERY_DAILY_AWARD_INFO_RSP=8195 CMD_QUERY_DAILY_AWARD_INFO_RSP value
         * @property {number} CMD_AWARD_ONLINE_REQ=8196 CMD_AWARD_ONLINE_REQ value
         * @property {number} CMD_AWARD_ONLINE_RSP=8197 CMD_AWARD_ONLINE_RSP value
         * @property {number} CMD_QUERY_ONLINE_REQ=8198 CMD_QUERY_ONLINE_REQ value
         * @property {number} CMD_QUERY_ONLINE_RSP=8199 CMD_QUERY_ONLINE_RSP value
         * @property {number} CMD_UNLOCK_ONLINE_NOTICE=8200 CMD_UNLOCK_ONLINE_NOTICE value
         * @property {number} CMD_QUERY_SIGN_AWARD_INFO_REQ=8208 CMD_QUERY_SIGN_AWARD_INFO_REQ value
         * @property {number} CMD_QUERY_SIGN_AWARD_INFO_RSP=8209 CMD_QUERY_SIGN_AWARD_INFO_RSP value
         * @property {number} CMD_AWARD_SIGN_REQ=8210 CMD_AWARD_SIGN_REQ value
         * @property {number} CMD_AWARD_SIGN_RSP=8211 CMD_AWARD_SIGN_RSP value
         * @property {number} CMD_SUPPLEMENT_SIGN_AWARD_REQ=8212 CMD_SUPPLEMENT_SIGN_AWARD_REQ value
         * @property {number} CMD_SUPPLEMENT_SIGN_AWARD_RSP=8213 CMD_SUPPLEMENT_SIGN_AWARD_RSP value
         * @property {number} CMD_CUMULATIVE_SIGN_AWARD_REQ=8214 CMD_CUMULATIVE_SIGN_AWARD_REQ value
         * @property {number} CMD_CUMULATIVE_SIGN_AWARD_RSP=8215 CMD_CUMULATIVE_SIGN_AWARD_RSP value
         * @property {number} CMD_OPEN_MOCK_EXAM_REQ=8448 模拟考试 ///////////////
         * @property {number} CMD_OPEN_MOCK_EXAM_RSP=8449 CMD_OPEN_MOCK_EXAM_RSP value
         * @property {number} CMD_OPEN_CURRENT_PROBLEM_REQ=8450 CMD_OPEN_CURRENT_PROBLEM_REQ value
         * @property {number} CMD_OPEN_CURRENT_PROBLEM_RSP=8451 CMD_OPEN_CURRENT_PROBLEM_RSP value
         * @property {number} CMD_SUBMIT_PROBLEM_ANWSER_REQ=8452 CMD_SUBMIT_PROBLEM_ANWSER_REQ value
         * @property {number} CMD_SUBMIT_PROBLEM_ANWSER_RSP=8453 CMD_SUBMIT_PROBLEM_ANWSER_RSP value
         * @property {number} CMD_AWARD_MOCK_EXAM_REQ=8456 CMD_AWARD_MOCK_EXAM_REQ value
         * @property {number} CMD_AWARD_MOCK_EXAM_RSP=8457 CMD_AWARD_MOCK_EXAM_RSP value
         * @property {number} CMD_AWARD_RECHARGE_REQ=8704 充值奖励 //////////////
         * @property {number} CMD_AWARD_RECHARGE_RSP=8705 CMD_AWARD_RECHARGE_RSP value
         * @property {number} CMD_QUERY_RECHARGE_AWARDED_LIST_REQ=8706 CMD_QUERY_RECHARGE_AWARDED_LIST_REQ value
         * @property {number} CMD_QUERY_RECHARGE_AWARDED_LIST_RSP=8707 CMD_QUERY_RECHARGE_AWARDED_LIST_RSP value
         * @property {number} CMD_QUERY_RECHARGE_AWARD_INFO_REQ=8708 CMD_QUERY_RECHARGE_AWARD_INFO_REQ value
         * @property {number} CMD_QUERY_RECHARGE_AWARD_INFO_RSP=8709 CMD_QUERY_RECHARGE_AWARD_INFO_RSP value
         * @property {number} CMD_QUERY_RECHARGE_INFO_REQ=8710 CMD_QUERY_RECHARGE_INFO_REQ value
         * @property {number} CMD_QUERY_RECHARGE_INFO_RSP=8711 CMD_QUERY_RECHARGE_INFO_RSP value
         * @property {number} CMD_RECHARGE_NOTICE=8713 CMD_RECHARGE_NOTICE value
         * @property {number} CMD_OPEN_SANDBAGS_WAR_REQ=8720 沙包大战 //////////////
         * @property {number} CMD_OPEN_SANDBAGS_WAR_RSP=8721 CMD_OPEN_SANDBAGS_WAR_RSP value
         * @property {number} CMD_FINISH_SANDBAGS_WAR_REQ=8724 CMD_FINISH_SANDBAGS_WAR_REQ value
         * @property {number} CMD_FINISH_SANDBAGS_WAR_RSP=8725 CMD_FINISH_SANDBAGS_WAR_RSP value
         * @property {number} CMD_QUERY_EVERY_ACTIVITY_STATE_REQ=8736 所有每日活动状态 ///////
         * @property {number} CMD_QUERY_EVERY_ACTIVITY_STATE_RSP=8737 CMD_QUERY_EVERY_ACTIVITY_STATE_RSP value
         * @property {number} CMD_USE_PRINTING_PRESS_REQ=8752 印钞机 /////////////////
         * @property {number} CMD_USE_PRINTING_PRESS_RSP=8753 CMD_USE_PRINTING_PRESS_RSP value
         * @property {number} CMD_QUERY_PRINTING_PRESS_REQ=8754 CMD_QUERY_PRINTING_PRESS_REQ value
         * @property {number} CMD_QUERY_PRINTING_PRESS_RSP=8755 CMD_QUERY_PRINTING_PRESS_RSP value
         * @property {number} CMD_QUERY_DM_COUNT_REQ=8768 弹幕 //////////////////
         * @property {number} CMD_QUERY_DM_COUNT_RSP=8769 CMD_QUERY_DM_COUNT_RSP value
         * @property {number} CMD_SEND_DM_MESSAGE_REQ=8770 CMD_SEND_DM_MESSAGE_REQ value
         * @property {number} CMD_SEND_DM_MESSAGE_RSP=8771 CMD_SEND_DM_MESSAGE_RSP value
         * @property {number} CMD_QUERY_CLIMB_TOWER_INFO_REQ=8800 爬塔 //////////////////
         * @property {number} CMD_QUERY_CLIMB_TOWER_INFO_RSP=8801 CMD_QUERY_CLIMB_TOWER_INFO_RSP value
         * @property {number} CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_REQ=8802 CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_REQ value
         * @property {number} CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_RSP=8803 CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_RSP value
         * @property {number} CMD_INTO_CLIMB_TOWER_INSTANCE_REQ=8804 CMD_INTO_CLIMB_TOWER_INSTANCE_REQ value
         * @property {number} CMD_INTO_CLIMB_TOWER_INSTANCE_RSP=8805 CMD_INTO_CLIMB_TOWER_INSTANCE_RSP value
         * @property {number} CMD_LEAVE_CLIMB_TOWER_INSTANCE_REQ=8806 CMD_LEAVE_CLIMB_TOWER_INSTANCE_REQ value
         * @property {number} CMD_LEAVE_CLIMB_TOWER_INSTANCE_RSP=8807 CMD_LEAVE_CLIMB_TOWER_INSTANCE_RSP value
         * @property {number} CMD_BUY_CLIMB_TOWER_COUNT_REQ=8816 CMD_BUY_CLIMB_TOWER_COUNT_REQ value
         * @property {number} CMD_BUY_CLIMB_TOWER_COUNT_RSP=8817 CMD_BUY_CLIMB_TOWER_COUNT_RSP value
         * @property {number} CMD_RECORD_HERO_DEATH_REQ=8818 CMD_RECORD_HERO_DEATH_REQ value
         * @property {number} CMD_RECORD_HERO_DEATH_RSP=8819 CMD_RECORD_HERO_DEATH_RSP value
         * @property {number} CMD_AWARD_CLIMB_TOWER_ITEM_DROP_REQ=8820 CMD_AWARD_CLIMB_TOWER_ITEM_DROP_REQ value
         * @property {number} CMD_AWARD_CLIMB_TOWER_ITEM_DROP_RSP=8821 CMD_AWARD_CLIMB_TOWER_ITEM_DROP_RSP value
         * @property {number} CMD_QUERY_LAYER_MONSTER_REQ=8822 CMD_QUERY_LAYER_MONSTER_REQ value
         * @property {number} CMD_QUERY_LAYER_MONSTER_RSP=8823 CMD_QUERY_LAYER_MONSTER_RSP value
         * @property {number} CMD_QUERY_AWARD_MSG_REQ=8848 消息中心 ///////////////
         * @property {number} CMD_QUERY_AWARD_MSG_RSP=8849 CMD_QUERY_AWARD_MSG_RSP value
         * @property {number} CMD_DO_MSG_AWARD_REQ=8850 CMD_DO_MSG_AWARD_REQ value
         * @property {number} CMD_DO_MSG_AWARD_RSP=8851 CMD_DO_MSG_AWARD_RSP value
         * @property {number} CMD_AWARD_MSG_NOTICE=8852 CMD_AWARD_MSG_NOTICE value
         * @property {number} CMD_QUERY_INTER_MSG_REQ=8864 CMD_QUERY_INTER_MSG_REQ value
         * @property {number} CMD_QUERY_INTER_MSG_RSP=8865 CMD_QUERY_INTER_MSG_RSP value
         * @property {number} CMD_DEL_TOP_INTER_MSG_REQ=8866 CMD_DEL_TOP_INTER_MSG_REQ value
         * @property {number} CMD_DEL_TOP_INTER_MSG_RSP=8867 CMD_DEL_TOP_INTER_MSG_RSP value
         * @property {number} CMD_INTER_MSG_NOTICE=8868 CMD_INTER_MSG_NOTICE value
         * @property {number} CMD_ROLL_MSG_NOTICE=8880 CMD_ROLL_MSG_NOTICE value
         * @property {number} CMD_QUERY_ROLE_ACTION_REMAIN_CD_REQ=8898 CMD_QUERY_ROLE_ACTION_REMAIN_CD_REQ value
         * @property {number} CMD_QUERY_ROLE_ACTION_REMAIN_CD_RSP=8899 CMD_QUERY_ROLE_ACTION_REMAIN_CD_RSP value
         * @property {number} CMD_QUERY_ACTIVITY_BULLETIN_MSG_REQ=8900 CMD_QUERY_ACTIVITY_BULLETIN_MSG_REQ value
         * @property {number} CMD_QUERY_ACTIVITY_BULLETIN_MSG_RSP=8901 CMD_QUERY_ACTIVITY_BULLETIN_MSG_RSP value
         * @property {number} CMD_REVIVE_IN_INSTANCE_REQ=8912 副本内复活 ///////////////
         * @property {number} CMD_REVIVE_IN_INSTANCE_RSP=8913 CMD_REVIVE_IN_INSTANCE_RSP value
         * @property {number} CMD_QUERY_ROLE_INFO_REQ=8928 查看角色信息 /////////////
         * @property {number} CMD_QUERY_ROLE_INFO_RSP=8929 CMD_QUERY_ROLE_INFO_RSP value
         * @property {number} CMD_UPDATE_ROLE_INFO_NOTICE=8930 CMD_UPDATE_ROLE_INFO_NOTICE value
         * @property {number} CMD_QUERY_PVP_HERO_LIST_REQ=8944 PVP /////////////
         * @property {number} CMD_QUERY_PVP_HERO_LIST_RSP=8945 CMD_QUERY_PVP_HERO_LIST_RSP value
         * @property {number} CMD_EXCHANGE_FIGHT_HERO_REQ=8948 CMD_EXCHANGE_FIGHT_HERO_REQ value
         * @property {number} CMD_EXCHANGE_FIGHT_HERO_RSP=8949 CMD_EXCHANGE_FIGHT_HERO_RSP value
         * @property {number} CMD_PVP_FIGHT_START_REQ=8950 CMD_PVP_FIGHT_START_REQ value
         * @property {number} CMD_PVP_FIGHT_START_RSP=8951 CMD_PVP_FIGHT_START_RSP value
         * @property {number} CMD_REVIVE_PVP_HERO_REQ=8952 CMD_REVIVE_PVP_HERO_REQ value
         * @property {number} CMD_REVIVE_PVP_HERO_RSP=8953 CMD_REVIVE_PVP_HERO_RSP value
         * @property {number} CMD_BUY_LOTTERY_SPECIAL_GOODS_REQ=8960 CMD_BUY_LOTTERY_SPECIAL_GOODS_REQ value
         * @property {number} CMD_BUY_LOTTERY_SPECIAL_GOODS_RSP=8961 CMD_BUY_LOTTERY_SPECIAL_GOODS_RSP value
         * @property {number} CMD_QUERY_LOTTERY_SPECIAL_GOODS_REQ=8962 CMD_QUERY_LOTTERY_SPECIAL_GOODS_REQ value
         * @property {number} CMD_QUERY_LOTTERY_SPECIAL_GOODS_RSP=8963 CMD_QUERY_LOTTERY_SPECIAL_GOODS_RSP value
         * @property {number} CMD_BUY_LOTTERY_REQ=8976 CMD_BUY_LOTTERY_REQ value
         * @property {number} CMD_BUY_LOTTERY_RSP=8977 CMD_BUY_LOTTERY_RSP value
         * @property {number} CMD_QUERY_LOTTERY_SHOP_REQ=8978 CMD_QUERY_LOTTERY_SHOP_REQ value
         * @property {number} CMD_QUERY_LOTTERY_SHOP_RSP=8979 CMD_QUERY_LOTTERY_SHOP_RSP value
         * @property {number} CMD_EXCHANGE_LOTTERY_SHOP_GOODS_REQ=8980 CMD_EXCHANGE_LOTTERY_SHOP_GOODS_REQ value
         * @property {number} CMD_EXCHANGE_LOTTERY_SHOP_GOODS_RSP=8981 CMD_EXCHANGE_LOTTERY_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_LOTTERY_INFO_REQ=8982 神龙抽奖 /////////
         * @property {number} CMD_QUERY_LOTTERY_INFO_RSP=8983 CMD_QUERY_LOTTERY_INFO_RSP value
         * @property {number} CMD_LOTTERY_LUCKY_DRAGON_REQ=8984 CMD_LOTTERY_LUCKY_DRAGON_REQ value
         * @property {number} CMD_LOTTERY_LUCKY_DRAGON_RSP=8985 CMD_LOTTERY_LUCKY_DRAGON_RSP value
         * @property {number} CMD_QUERY_LUCKY_DRAGON_REQ=8992 CMD_QUERY_LUCKY_DRAGON_REQ value
         * @property {number} CMD_QUERY_LUCKY_DRAGON_RSP=8993 CMD_QUERY_LUCKY_DRAGON_RSP value
         * @property {number} CMD_LOTTERY_DRAGON_BALL_REQ=8994 CMD_LOTTERY_DRAGON_BALL_REQ value
         * @property {number} CMD_LOTTERY_DRAGON_BALL_RSP=8995 CMD_LOTTERY_DRAGON_BALL_RSP value
         * @property {number} CMD_QUERY_SCHOOL_LOTTERY_REQ=8996 校园庆典抽奖/////////
         * @property {number} CMD_QUERY_SCHOOL_LOTTERY_RSP=8997 CMD_QUERY_SCHOOL_LOTTERY_RSP value
         * @property {number} CMD_LOTTERY_SCHOOL_REQ=8998 CMD_LOTTERY_SCHOOL_REQ value
         * @property {number} CMD_LOTTERY_SCHOOL_RSP=8999 CMD_LOTTERY_SCHOOL_RSP value
         * @property {number} CMD_OPEN_WHICH_LOTTERY_REQ=9000 CMD_OPEN_WHICH_LOTTERY_REQ value
         * @property {number} CMD_OPEN_WHICH_LOTTERY_RSP=9001 CMD_OPEN_WHICH_LOTTERY_RSP value
         * @property {number} CMD_QUERY_LOTTERY_TABLE_REQ=9002 CMD_QUERY_LOTTERY_TABLE_REQ value
         * @property {number} CMD_QUERY_LOTTERY_TABLE_RSP=9003 CMD_QUERY_LOTTERY_TABLE_RSP value
         * @property {number} CMD_QUERY_DEGREE_PACK_REQ=9024 学霸 //////////////
         * @property {number} CMD_QUERY_DEGREE_PACK_RSP=9025 CMD_QUERY_DEGREE_PACK_RSP value
         * @property {number} CMD_PUT_ON_DEGREE_REQ=9026 CMD_PUT_ON_DEGREE_REQ value
         * @property {number} CMD_PUT_ON_DEGREE_RSP=9027 CMD_PUT_ON_DEGREE_RSP value
         * @property {number} CMD_TAKE_OFF_DEGREE_REQ=9028 CMD_TAKE_OFF_DEGREE_REQ value
         * @property {number} CMD_TAKE_OFF_DEGREE_RSP=9029 CMD_TAKE_OFF_DEGREE_RSP value
         * @property {number} CMD_DEVOUR_DEGREE_EXP_REQ=9030 CMD_DEVOUR_DEGREE_EXP_REQ value
         * @property {number} CMD_DEVOUR_DEGREE_EXP_RSP=9031 CMD_DEVOUR_DEGREE_EXP_RSP value
         * @property {number} CMD_DEVOUR_ALL_DEGREE_REQ=9032 CMD_DEVOUR_ALL_DEGREE_REQ value
         * @property {number} CMD_DEVOUR_ALL_DEGREE_RSP=9033 CMD_DEVOUR_ALL_DEGREE_RSP value
         * @property {number} CMD_DECOMPOSITION_DEGREE_REQ=9040 CMD_DECOMPOSITION_DEGREE_REQ value
         * @property {number} CMD_DECOMPOSITION_DEGREE_RSP=9041 CMD_DECOMPOSITION_DEGREE_RSP value
         * @property {number} CMD_ADVANCED_DEGREE_REQ=9042 CMD_ADVANCED_DEGREE_REQ value
         * @property {number} CMD_ADVANCED_DEGREE_RSP=9043 CMD_ADVANCED_DEGREE_RSP value
         * @property {number} CMD_ENTER_WORLD_BOSS_INSTANCE_REQ=9216 世界BOSS //////////////
         * @property {number} CMD_ENTER_WORLD_BOSS_INSTANCE_RSP=9217 CMD_ENTER_WORLD_BOSS_INSTANCE_RSP value
         * @property {number} CMD_LEAVE_WORLD_BOSS_INSTANCE_REQ=9218 CMD_LEAVE_WORLD_BOSS_INSTANCE_REQ value
         * @property {number} CMD_LEAVE_WORLD_BOSS_INSTANCE_RSP=9219 CMD_LEAVE_WORLD_BOSS_INSTANCE_RSP value
         * @property {number} CMD_KICK_WORLD_BOSS_ASS_REQ=9220 CMD_KICK_WORLD_BOSS_ASS_REQ value
         * @property {number} CMD_KICK_WORLD_BOSS_ASS_RSP=9221 CMD_KICK_WORLD_BOSS_ASS_RSP value
         * @property {number} CMD_QUERY_LEV_AWARD_REQ=9472 等级奖励 /////////////
         * @property {number} CMD_QUERY_LEV_AWARD_RSP=9473 CMD_QUERY_LEV_AWARD_RSP value
         * @property {number} CMD_LEV_AWARD_REQ=9474 CMD_LEV_AWARD_REQ value
         * @property {number} CMD_LEV_AWARD_RSP=9475 CMD_LEV_AWARD_RSP value
         * @property {number} CMD_QUERY_JOIN_APPLY_LIST_REQ=9632 社团基本 /////////////
         * @property {number} CMD_QUERY_JOIN_APPLY_LIST_RSP=9633 CMD_QUERY_JOIN_APPLY_LIST_RSP value
         * @property {number} CMD_CHECK_JOIN_APPLY_REQ=9634 CMD_CHECK_JOIN_APPLY_REQ value
         * @property {number} CMD_CHECK_JOIN_APPLY_RSP=9635 CMD_CHECK_JOIN_APPLY_RSP value
         * @property {number} CMD_QUERY_GROUP_LOG_REQ=9636 CMD_QUERY_GROUP_LOG_REQ value
         * @property {number} CMD_QUERY_GROUP_LOG_RSP=9637 CMD_QUERY_GROUP_LOG_RSP value
         * @property {number} CMD_SEND_GROUP_MAIL_REQ=9638 CMD_SEND_GROUP_MAIL_REQ value
         * @property {number} CMD_SEND_GROUP_MAIL_RSP=9639 CMD_SEND_GROUP_MAIL_RSP value
         * @property {number} CMD_GROUP_JOIN_APPLY_NOTICE=9640 CMD_GROUP_JOIN_APPLY_NOTICE value
         * @property {number} CMD_QUERY_GROUP_INFO_REQ=9728 CMD_QUERY_GROUP_INFO_REQ value
         * @property {number} CMD_QUERY_GROUP_INFO_RSP=9729 CMD_QUERY_GROUP_INFO_RSP value
         * @property {number} CMD_CREATE_GROUP_REQ=9730 CMD_CREATE_GROUP_REQ value
         * @property {number} CMD_CREATE_GROUP_RSP=9731 CMD_CREATE_GROUP_RSP value
         * @property {number} CMD_JOIN_GROUP_REQ=9734 CMD_JOIN_GROUP_REQ value
         * @property {number} CMD_JOIN_GROUP_RSP=9735 CMD_JOIN_GROUP_RSP value
         * @property {number} CMD_LEAVE_GROUP_REQ=9736 CMD_LEAVE_GROUP_REQ value
         * @property {number} CMD_LEAVE_GROUP_RSP=9737 CMD_LEAVE_GROUP_RSP value
         * @property {number} CMD_FIRE_GROUP_MEMBER_REQ=9738 CMD_FIRE_GROUP_MEMBER_REQ value
         * @property {number} CMD_FIRE_GROUP_MEMBER_RSP=9739 CMD_FIRE_GROUP_MEMBER_RSP value
         * @property {number} CMD_TRANSFER_GROUP_REQ=9740 CMD_TRANSFER_GROUP_REQ value
         * @property {number} CMD_TRANSFER_GROUP_RSP=9741 CMD_TRANSFER_GROUP_RSP value
         * @property {number} CMD_FIRE_GROUP_CAPTAIN_REQ=9742 CMD_FIRE_GROUP_CAPTAIN_REQ value
         * @property {number} CMD_FIRE_GROUP_CAPTAIN_RSP=9743 CMD_FIRE_GROUP_CAPTAIN_RSP value
         * @property {number} CMD_SEARCH_GROUP_BY_NAME_REQ=9744 CMD_SEARCH_GROUP_BY_NAME_REQ value
         * @property {number} CMD_SEARCH_GROUP_BY_NAME_RSP=9745 CMD_SEARCH_GROUP_BY_NAME_RSP value
         * @property {number} CMD_SET_GROUP_BULLETIN_REQ=9746 CMD_SET_GROUP_BULLETIN_REQ value
         * @property {number} CMD_SET_GROUP_BULLETIN_RSP=9747 CMD_SET_GROUP_BULLETIN_RSP value
         * @property {number} CMD_SET_GROUP_NOTICE_REQ=9748 CMD_SET_GROUP_NOTICE_REQ value
         * @property {number} CMD_SET_GROUP_NOTICE_RSP=9749 CMD_SET_GROUP_NOTICE_RSP value
         * @property {number} CMD_SET_GROUP_ADMIN_REQ=9750 CMD_SET_GROUP_ADMIN_REQ value
         * @property {number} CMD_SET_GROUP_ADMIN_RSP=9751 CMD_SET_GROUP_ADMIN_RSP value
         * @property {number} CMD_CANCEL_GROUP_ADMIN_REQ=9752 CMD_CANCEL_GROUP_ADMIN_REQ value
         * @property {number} CMD_CANCEL_GROUP_ADMIN_RSP=9753 CMD_CANCEL_GROUP_ADMIN_RSP value
         * @property {number} CMD_QUERY_GROUP_ICON_LIST_REQ=9754 CMD_QUERY_GROUP_ICON_LIST_REQ value
         * @property {number} CMD_QUERY_GROUP_ICON_LIST_RSP=9755 CMD_QUERY_GROUP_ICON_LIST_RSP value
         * @property {number} CMD_SET_GROUP_OPTION_REQ=9756 CMD_SET_GROUP_OPTION_REQ value
         * @property {number} CMD_SET_GROUP_OPTION_RSP=9757 CMD_SET_GROUP_OPTION_RSP value
         * @property {number} CMD_QUERY_GROUP_GYM_INFO_REQ=9760 健身房 /////////////
         * @property {number} CMD_QUERY_GROUP_GYM_INFO_RSP=9761 CMD_QUERY_GROUP_GYM_INFO_RSP value
         * @property {number} CMD_PUSH_GROUP_GYM_HERO_REQ=9762 CMD_PUSH_GROUP_GYM_HERO_REQ value
         * @property {number} CMD_PUSH_GROUP_GYM_HERO_RSP=9763 CMD_PUSH_GROUP_GYM_HERO_RSP value
         * @property {number} CMD_LEASE_GROUP_GYM_HERO_REQ=9764 CMD_LEASE_GROUP_GYM_HERO_REQ value
         * @property {number} CMD_LEASE_GROUP_GYM_HERO_RSP=9765 CMD_LEASE_GROUP_GYM_HERO_RSP value
         * @property {number} CMD_QUERY_GROUP_BUILDING_REQ=9776 社团建筑 /////////////
         * @property {number} CMD_QUERY_GROUP_BUILDING_RSP=9777 CMD_QUERY_GROUP_BUILDING_RSP value
         * @property {number} CMD_LEVUP_GROUP_BUILDING_REQ=9778 CMD_LEVUP_GROUP_BUILDING_REQ value
         * @property {number} CMD_LEVUP_GROUP_BUILDING_RSP=9779 CMD_LEVUP_GROUP_BUILDING_RSP value
         * @property {number} CMD_DO_GROUP_BUILD_REQ=9780 CMD_DO_GROUP_BUILD_REQ value
         * @property {number} CMD_DO_GROUP_BUILD_RSP=9781 CMD_DO_GROUP_BUILD_RSP value
         * @property {number} CMD_QUERY_BUILDING_OUTPUT_REQ=9782 CMD_QUERY_BUILDING_OUTPUT_REQ value
         * @property {number} CMD_QUERY_BUILDING_OUTPUT_RSP=9783 CMD_QUERY_BUILDING_OUTPUT_RSP value
         * @property {number} CMD_GET_BUILDING_OUTPUT_REQ=9784 CMD_GET_BUILDING_OUTPUT_REQ value
         * @property {number} CMD_GET_BUILDING_OUTPUT_RSP=9785 CMD_GET_BUILDING_OUTPUT_RSP value
         * @property {number} CMD_QUERY_ANTIQUE_SHOP_REQ=9786 CMD_QUERY_ANTIQUE_SHOP_REQ value
         * @property {number} CMD_QUERY_ANTIQUE_SHOP_RSP=9787 CMD_QUERY_ANTIQUE_SHOP_RSP value
         * @property {number} CMD_BUY_ANTIQUE_SHOP_REQ=9788 CMD_BUY_ANTIQUE_SHOP_REQ value
         * @property {number} CMD_BUY_ANTIQUE_SHOP_RSP=9789 CMD_BUY_ANTIQUE_SHOP_RSP value
         * @property {number} CMD_REFRESH_ANTIQUE_SHOP_REQ=9790 CMD_REFRESH_ANTIQUE_SHOP_REQ value
         * @property {number} CMD_REFRESH_ANTIQUE_SHOP_RSP=9791 CMD_REFRESH_ANTIQUE_SHOP_RSP value
         * @property {number} CMD_QUERY_GROUP_WELFARE_REQ=9792 社团相关功能 /////////////
         * @property {number} CMD_QUERY_GROUP_WELFARE_RSP=9793 CMD_QUERY_GROUP_WELFARE_RSP value
         * @property {number} CMD_BUY_GROUP_SP_WELFARE_REQ=9794 CMD_BUY_GROUP_SP_WELFARE_REQ value
         * @property {number} CMD_BUY_GROUP_SP_WELFARE_RSP=9795 CMD_BUY_GROUP_SP_WELFARE_RSP value
         * @property {number} CMD_AWARD_GROUP_SP_WELFARE_REQ=9796 CMD_AWARD_GROUP_SP_WELFARE_REQ value
         * @property {number} CMD_AWARD_GROUP_SP_WELFARE_RSP=9797 CMD_AWARD_GROUP_SP_WELFARE_RSP value
         * @property {number} CMD_QUERY_GROUP_EQUIP_REQ=9798 CMD_QUERY_GROUP_EQUIP_REQ value
         * @property {number} CMD_QUERY_GROUP_EQUIP_RSP=9799 CMD_QUERY_GROUP_EQUIP_RSP value
         * @property {number} CMD_OPEN_GROUP_EQUIP_REQ=9800 CMD_OPEN_GROUP_EQUIP_REQ value
         * @property {number} CMD_OPEN_GROUP_EQUIP_RSP=9801 CMD_OPEN_GROUP_EQUIP_RSP value
         * @property {number} CMD_LEVUP_GROUP_EQUIP_REQ=9802 CMD_LEVUP_GROUP_EQUIP_REQ value
         * @property {number} CMD_LEVUP_GROUP_EQUIP_RSP=9803 CMD_LEVUP_GROUP_EQUIP_RSP value
         * @property {number} CMD_QUERY_GROUP_MISSION_REQ=9804 CMD_QUERY_GROUP_MISSION_REQ value
         * @property {number} CMD_QUERY_GROUP_MISSION_RSP=9805 CMD_QUERY_GROUP_MISSION_RSP value
         * @property {number} CMD_FINISH_GROUP_MISSION_REQ=9806 CMD_FINISH_GROUP_MISSION_REQ value
         * @property {number} CMD_FINISH_GROUP_MISSION_RSP=9807 CMD_FINISH_GROUP_MISSION_RSP value
         * @property {number} CMD_RESET_GROUP_MISSION_REQ=9808 CMD_RESET_GROUP_MISSION_REQ value
         * @property {number} CMD_RESET_GROUP_MISSION_RSP=9809 CMD_RESET_GROUP_MISSION_RSP value
         * @property {number} CMD_BUY_GROUP_MISSION_REQ=9810 CMD_BUY_GROUP_MISSION_REQ value
         * @property {number} CMD_BUY_GROUP_MISSION_RSP=9811 CMD_BUY_GROUP_MISSION_RSP value
         * @property {number} CMD_QUERY_GROUP_INSTANCE_REQ=9824 CMD_QUERY_GROUP_INSTANCE_REQ value
         * @property {number} CMD_QUERY_GROUP_INSTANCE_RSP=9825 CMD_QUERY_GROUP_INSTANCE_RSP value
         * @property {number} CMD_OPEN_GROUP_INSTANCE_REQ=9826 CMD_OPEN_GROUP_INSTANCE_REQ value
         * @property {number} CMD_OPEN_GROUP_INSTANCE_RSP=9827 CMD_OPEN_GROUP_INSTANCE_RSP value
         * @property {number} CMD_RESET_GROUP_INSTANCE_REQ=9828 CMD_RESET_GROUP_INSTANCE_REQ value
         * @property {number} CMD_RESET_GROUP_INSTANCE_RSP=9829 CMD_RESET_GROUP_INSTANCE_RSP value
         * @property {number} CMD_ENTER_GROUP_INSTANCE_REQ=9830 CMD_ENTER_GROUP_INSTANCE_REQ value
         * @property {number} CMD_ENTER_GROUP_INSTANCE_RSP=9831 CMD_ENTER_GROUP_INSTANCE_RSP value
         * @property {number} CMD_KICK_GROUP_BOSS_ASS_REQ=9832 CMD_KICK_GROUP_BOSS_ASS_REQ value
         * @property {number} CMD_KICK_GROUP_BOSS_ASS_RSP=9833 CMD_KICK_GROUP_BOSS_ASS_RSP value
         * @property {number} CMD_LEAVE_GROUP_INSTANCE_REQ=9834 CMD_LEAVE_GROUP_INSTANCE_REQ value
         * @property {number} CMD_LEAVE_GROUP_INSTANCE_RSP=9835 CMD_LEAVE_GROUP_INSTANCE_RSP value
         * @property {number} CMD_QUERY_GROUP_AWARD_POOL_REQ=9836 CMD_QUERY_GROUP_AWARD_POOL_REQ value
         * @property {number} CMD_QUERY_GROUP_AWARD_POOL_RSP=9837 CMD_QUERY_GROUP_AWARD_POOL_RSP value
         * @property {number} CMD_APPLY_GROUP_AWARD_REQ=9838 CMD_APPLY_GROUP_AWARD_REQ value
         * @property {number} CMD_APPLY_GROUP_AWARD_RSP=9839 CMD_APPLY_GROUP_AWARD_RSP value
         * @property {number} CMD_QUERY_GROUP_INSTANCE_LIST_REQ=9840 CMD_QUERY_GROUP_INSTANCE_LIST_REQ value
         * @property {number} CMD_QUERY_GROUP_INSTANCE_LIST_RSP=9841 CMD_QUERY_GROUP_INSTANCE_LIST_RSP value
         * @property {number} CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_REQ=9842 CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_REQ value
         * @property {number} CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_RSP=9843 CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_RSP value
         * @property {number} CMD_NUMERIC_CHANGE_NOTICE=9872 属性相关协议 //////////////
         * @property {number} CMD_PVP_FRAME_NOTICE=9984 PVP 协议补充 //////////////
         * @property {number} CMD_PVP_HERO_GOTO_BATTLE_REQ=9985 CMD_PVP_HERO_GOTO_BATTLE_REQ value
         * @property {number} CMD_PVP_HERO_GOTO_BATTLE_RSP=9986 CMD_PVP_HERO_GOTO_BATTLE_RSP value
         * @property {number} CMD_PVP_FIGHT_EXIT_REQ=9987 CMD_PVP_FIGHT_EXIT_REQ value
         * @property {number} CMD_PVP_FIGHT_EXIT_RSP=9988 CMD_PVP_FIGHT_EXIT_RSP value
         * @property {number} CMD_PVP_FIGHT_AWARD_NOTICE=9989 CMD_PVP_FIGHT_AWARD_NOTICE value
         * @property {number} CMD_QUERY_GROUP_BATTLE_STATE_REQ=9990 CMD_QUERY_GROUP_BATTLE_STATE_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_STATE_RSP=9991 CMD_QUERY_GROUP_BATTLE_STATE_RSP value
         * @property {number} CMD_QUERY_STREET_WAR_STATE_REQ=10240 街头争霸 //////////////
         * @property {number} CMD_QUERY_STREET_WAR_STATE_RSP=10241 CMD_QUERY_STREET_WAR_STATE_RSP value
         * @property {number} CMD_READY_STREET_WAR_REQ=10242 CMD_READY_STREET_WAR_REQ value
         * @property {number} CMD_READY_STREET_WAR_RSP=10243 CMD_READY_STREET_WAR_RSP value
         * @property {number} CMD_PASS_STREET_WAR_REQ=10244 CMD_PASS_STREET_WAR_REQ value
         * @property {number} CMD_PASS_STREET_WAR_RSP=10245 CMD_PASS_STREET_WAR_RSP value
         * @property {number} CMD_BUY_STREET_WAR_CHALLENGE_COUNT_REQ=10246 CMD_BUY_STREET_WAR_CHALLENGE_COUNT_REQ value
         * @property {number} CMD_BUY_STREET_WAR_CHALLENGE_COUNT_RSP=10247 CMD_BUY_STREET_WAR_CHALLENGE_COUNT_RSP value
         * @property {number} CMD_REFRESH_STREET_WAR_REQ=10248 CMD_REFRESH_STREET_WAR_REQ value
         * @property {number} CMD_REFRESH_STREET_WAR_RSP=8329 CMD_REFRESH_STREET_WAR_RSP value
         * @property {number} CMD_QUERY_DAILY_NORMAL_GIFTBAG_REQ=10496 每日礼包 //////////////
         * @property {number} CMD_QUERY_DAILY_NORMAL_GIFTBAG_RSP=10497 CMD_QUERY_DAILY_NORMAL_GIFTBAG_RSP value
         * @property {number} CMD_BUY_DAILY_NORMAL_GIFTBAG_REQ=10498 CMD_BUY_DAILY_NORMAL_GIFTBAG_REQ value
         * @property {number} CMD_BUY_DAILY_NORMAL_GIFTBAG_RSP=10499 CMD_BUY_DAILY_NORMAL_GIFTBAG_RSP value
         * @property {number} CMD_QUERY_DAILY_VIP_GIFTBAG_REQ=10500 CMD_QUERY_DAILY_VIP_GIFTBAG_REQ value
         * @property {number} CMD_QUERY_DAILY_VIP_GIFTBAG_RSP=10501 CMD_QUERY_DAILY_VIP_GIFTBAG_RSP value
         * @property {number} CMD_BUY_DAILY_VIP_GIFTBAG_REQ=10502 CMD_BUY_DAILY_VIP_GIFTBAG_REQ value
         * @property {number} CMD_BUY_DAILY_VIP_GIFTBAG_RSP=10503 CMD_BUY_DAILY_VIP_GIFTBAG_RSP value
         * @property {number} CMD_AWARD_FULL_STAR_REQ=10528 星级奖励 //////////////
         * @property {number} CMD_AWARD_FULL_STAR_RSP=10529 CMD_AWARD_FULL_STAR_RSP value
         * @property {number} CMD_QUERY_CLOTHES_REQ=10592 时装 //////////////
         * @property {number} CMD_QUERY_CLOTHES_RSP=10593 CMD_QUERY_CLOTHES_RSP value
         * @property {number} CMD_COLLECT_CLOTHES_REQ=10594 CMD_COLLECT_CLOTHES_REQ value
         * @property {number} CMD_COLLECT_CLOTHES_RSP=10595 CMD_COLLECT_CLOTHES_RSP value
         * @property {number} CMD_ADVANCED_CLOTHES_REQ=10596 CMD_ADVANCED_CLOTHES_REQ value
         * @property {number} CMD_ADVANCED_CLOTHES_RSP=10597 CMD_ADVANCED_CLOTHES_RSP value
         * @property {number} CMD_PUT_ON_CLOTHES_REQ=10598 CMD_PUT_ON_CLOTHES_REQ value
         * @property {number} CMD_PUT_ON_CLOTHES_RSP=10599 CMD_PUT_ON_CLOTHES_RSP value
         * @property {number} CMD_QUERY_CLOTHES_ATTR_REQ=10600 CMD_QUERY_CLOTHES_ATTR_REQ value
         * @property {number} CMD_QUERY_CLOTHES_ATTR_RSP=10601 CMD_QUERY_CLOTHES_ATTR_RSP value
         * @property {number} CMD_QUERY_ARENA_SHOP_REQ=10624 竞技商店 //////////////
         * @property {number} CMD_QUERY_ARENA_SHOP_RSP=10625 CMD_QUERY_ARENA_SHOP_RSP value
         * @property {number} CMD_BUY_ARENA_SHOP_GOODS_REQ=10626 CMD_BUY_ARENA_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_ARENA_SHOP_GOODS_RSP=10627 CMD_BUY_ARENA_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_TOURNAMENT_SHOP_REQ=10629 武道会商店 //////////////
         * @property {number} CMD_QUERY_TOURNAMENT_SHOP_RSP=10630 CMD_QUERY_TOURNAMENT_SHOP_RSP value
         * @property {number} CMD_BUY_TOURNAMENT_SHOP_GOODS_REQ=10631 CMD_BUY_TOURNAMENT_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_TOURNAMENT_SHOP_GOODS_RSP=10632 CMD_BUY_TOURNAMENT_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_TERRITORY_SHOP_REQ=10633 地盘商店 //////////////
         * @property {number} CMD_QUERY_TERRITORY_SHOP_RSP=10634 CMD_QUERY_TERRITORY_SHOP_RSP value
         * @property {number} CMD_BUY_TERRITORY_SHOP_GOODS_REQ=10635 CMD_BUY_TERRITORY_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_TERRITORY_SHOP_GOODS_RSP=10636 CMD_BUY_TERRITORY_SHOP_GOODS_RSP value
         * @property {number} CMD_REFRESH_TERRITORY_SHOP_GOODS_REQ=10637 CMD_REFRESH_TERRITORY_SHOP_GOODS_REQ value
         * @property {number} CMD_REFRESH_TERRITORY_SHOP_GOODS_RSP=10638 CMD_REFRESH_TERRITORY_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_FIRST_RECHARGE_AWARD_REQ=10656 首充奖励 //////////////
         * @property {number} CMD_QUERY_FIRST_RECHARGE_AWARD_RSP=10657 CMD_QUERY_FIRST_RECHARGE_AWARD_RSP value
         * @property {number} CMD_AWARD_FIRST_RECHARGE_REQ=10658 CMD_AWARD_FIRST_RECHARGE_REQ value
         * @property {number} CMD_AWARD_FIRST_RECHARGE_RSP=10659 CMD_AWARD_FIRST_RECHARGE_RSP value
         * @property {number} CMD_QUERY_STREET_SHOP_REQ=10688 街霸商店 //////////////
         * @property {number} CMD_QUERY_STREET_SHOP_RSP=10689 CMD_QUERY_STREET_SHOP_RSP value
         * @property {number} CMD_BUY_STREET_SHOP_GOODS_REQ=10690 CMD_BUY_STREET_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_STREET_SHOP_GOODS_RSP=10691 CMD_BUY_STREET_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_DEGREE_SHOP_REQ=10704 学霸商店 //////////////
         * @property {number} CMD_QUERY_DEGREE_SHOP_RSP=10705 CMD_QUERY_DEGREE_SHOP_RSP value
         * @property {number} CMD_BUY_DEGREE_SHOP_GOODS_REQ=10706 CMD_BUY_DEGREE_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_DEGREE_SHOP_GOODS_RSP=10707 CMD_BUY_DEGREE_SHOP_GOODS_RSP value
         * @property {number} CMD_QUERY_OPERATION_LIST_REQ=10720 运营活动 //////////////
         * @property {number} CMD_QUERY_OPERATION_LIST_RSP=10721 CMD_QUERY_OPERATION_LIST_RSP value
         * @property {number} CMD_FETCH_OPERATION_AWARD_REQ=10722 CMD_FETCH_OPERATION_AWARD_REQ value
         * @property {number} CMD_FETCH_OPERATION_AWARD_RSP=10723 CMD_FETCH_OPERATION_AWARD_RSP value
         * @property {number} CMD_QUERY_COEFFICIENT_REQ=10730 CMD_QUERY_COEFFICIENT_REQ value
         * @property {number} CMD_QUERY_COEFFICIENT_RSP=10731 CMD_QUERY_COEFFICIENT_RSP value
         * @property {number} CMD_QUERY_GOLD_INVEST_REQ=10736 钻石理财 //////////////
         * @property {number} CMD_QUERY_GOLD_INVEST_RSP=10737 CMD_QUERY_GOLD_INVEST_RSP value
         * @property {number} CMD_BUY_GOLD_INVEST_REQ=10738 CMD_BUY_GOLD_INVEST_REQ value
         * @property {number} CMD_BUY_GOLD_INVEST_RSP=10739 CMD_BUY_GOLD_INVEST_RSP value
         * @property {number} CMD_AWARD_GOLD_INVEST_REQ=10740 CMD_AWARD_GOLD_INVEST_REQ value
         * @property {number} CMD_AWARD_GOLD_INVEST_RSP=10741 CMD_AWARD_GOLD_INVEST_RSP value
         * @property {number} CMD_QUERY_WEEK_AWARD_REQ=10768 七日奖励 //////////////
         * @property {number} CMD_QUERY_WEEK_AWARD_RSP=10769 CMD_QUERY_WEEK_AWARD_RSP value
         * @property {number} CMD_AWARD_WEEK_LOGIN_REQ=10770 CMD_AWARD_WEEK_LOGIN_REQ value
         * @property {number} CMD_AWARD_WEEK_LOGIN_RSP=10771 CMD_AWARD_WEEK_LOGIN_RSP value
         * @property {number} CMD_AWARD_WEEK_RECHAGE_REQ=10772 CMD_AWARD_WEEK_RECHAGE_REQ value
         * @property {number} CMD_AWARD_WEEK_RECHAGE_RSP=10773 CMD_AWARD_WEEK_RECHAGE_RSP value
         * @property {number} CMD_AWARD_WEEK_RUSH_PURCHASE_REQ=10774 CMD_AWARD_WEEK_RUSH_PURCHASE_REQ value
         * @property {number} CMD_AWARD_WEEK_RUSH_PURCHASE_RSP=10775 CMD_AWARD_WEEK_RUSH_PURCHASE_RSP value
         * @property {number} CMD_QUERY_TEAM_PVE_SCHEDULE_REQ=11008 组队PVE(2B系列) //////////////
         * @property {number} CMD_QUERY_TEAM_PVE_SCHEDULE_RSP=11009 CMD_QUERY_TEAM_PVE_SCHEDULE_RSP value
         * @property {number} CMD_QUERY_TEAM_PVE_ROOM_LIST_REQ=11010 CMD_QUERY_TEAM_PVE_ROOM_LIST_REQ value
         * @property {number} CMD_QUERY_TEAM_PVE_ROOM_LIST_RSP=11011 CMD_QUERY_TEAM_PVE_ROOM_LIST_RSP value
         * @property {number} CMD_JOIN_TEAM_PVE_ROOM_REQ=11012 CMD_JOIN_TEAM_PVE_ROOM_REQ value
         * @property {number} CMD_JOIN_TEAM_PVE_ROOM_RSP=11013 CMD_JOIN_TEAM_PVE_ROOM_RSP value
         * @property {number} CMD_LEAVE_TEAM_PVE_ROOM_REQ=11014 CMD_LEAVE_TEAM_PVE_ROOM_REQ value
         * @property {number} CMD_LEAVE_TEAM_PVE_ROOM_RSP=11015 CMD_LEAVE_TEAM_PVE_ROOM_RSP value
         * @property {number} CMD_CREATE_TEAM_PVE_ROOM_REQ=11016 CMD_CREATE_TEAM_PVE_ROOM_REQ value
         * @property {number} CMD_CREATE_TEAM_PVE_ROOM_RSP=11017 CMD_CREATE_TEAM_PVE_ROOM_RSP value
         * @property {number} CMD_KICK_TEAM_PVE_ROOM_MEMBER_REQ=11018 CMD_KICK_TEAM_PVE_ROOM_MEMBER_REQ value
         * @property {number} CMD_KICK_TEAM_PVE_ROOM_MEMBER_RSP=11019 CMD_KICK_TEAM_PVE_ROOM_MEMBER_RSP value
         * @property {number} CMD_INVITE_TEAM_PVE_ROOM_MEMBER_REQ=11020 CMD_INVITE_TEAM_PVE_ROOM_MEMBER_REQ value
         * @property {number} CMD_INVITE_TEAM_PVE_ROOM_MEMBER_RSP=11021 CMD_INVITE_TEAM_PVE_ROOM_MEMBER_RSP value
         * @property {number} CMD_QUICK_JOIN_TEAM_PVE_ROOM_REQ=11022 CMD_QUICK_JOIN_TEAM_PVE_ROOM_REQ value
         * @property {number} CMD_QUICK_JOIN_TEAM_PVE_ROOM_RSP=11023 CMD_QUICK_JOIN_TEAM_PVE_ROOM_RSP value
         * @property {number} CMD_START_TEAM_PVE_REQ=11024 CMD_START_TEAM_PVE_REQ value
         * @property {number} CMD_START_TEAM_PVE_RSP=11025 CMD_START_TEAM_PVE_RSP value
         * @property {number} CMD_PASS_TEAM_PVE_REQ=11026 CMD_PASS_TEAM_PVE_REQ value
         * @property {number} CMD_PASS_TEAM_PVE_RSP=11027 CMD_PASS_TEAM_PVE_RSP value
         * @property {number} CMD_TEAM_PVE_ROOM_INFO_NOTICE=11029 CMD_TEAM_PVE_ROOM_INFO_NOTICE value
         * @property {number} CMD_QUIT_TEAM_PVE_REQ=11030 CMD_QUIT_TEAM_PVE_REQ value
         * @property {number} CMD_QUIT_TEAM_PVE_RSP=11031 CMD_QUIT_TEAM_PVE_RSP value
         * @property {number} CMD_QUERY_FC_RACE_REQ=11136 CMD_QUERY_FC_RACE_REQ value
         * @property {number} CMD_QUERY_FC_RACE_RSP=11137 CMD_QUERY_FC_RACE_RSP value
         * @property {number} CMD_AWARD_FC_RACE_REQ=11138 CMD_AWARD_FC_RACE_REQ value
         * @property {number} CMD_AWARD_FC_RACE_RSP=11139 CMD_AWARD_FC_RACE_RSP value
         * @property {number} CMD_QUERY_PASS_RACE_REQ=11140 CMD_QUERY_PASS_RACE_REQ value
         * @property {number} CMD_QUERY_PASS_RACE_RSP=11141 CMD_QUERY_PASS_RACE_RSP value
         * @property {number} CMD_AWARD_PASS_RACE_REQ=11142 CMD_AWARD_PASS_RACE_REQ value
         * @property {number} CMD_AWARD_PASS_RACE_RSP=11143 CMD_AWARD_PASS_RACE_RSP value
         * @property {number} CMD_QUERY_RECRUIT_PAOJIE_REQ=11144 CMD_QUERY_RECRUIT_PAOJIE_REQ value
         * @property {number} CMD_QUERY_RECRUIT_PAOJIE_RSP=11145 CMD_QUERY_RECRUIT_PAOJIE_RSP value
         * @property {number} CMD_AWARD_RECRUIT_PAOJIE_REQ=11152 CMD_AWARD_RECRUIT_PAOJIE_REQ value
         * @property {number} CMD_AWARD_RECRUIT_PAOJIE_RSP=11153 CMD_AWARD_RECRUIT_PAOJIE_RSP value
         * @property {number} CMD_QUERY_COLLECT_HERO_REQ=11154 CMD_QUERY_COLLECT_HERO_REQ value
         * @property {number} CMD_QUERY_COLLECT_HERO_RSP=11155 CMD_QUERY_COLLECT_HERO_RSP value
         * @property {number} CMD_AWARD_COLLECT_HERO_REQ=11156 CMD_AWARD_COLLECT_HERO_REQ value
         * @property {number} CMD_AWARD_COLLECT_HERO_RSP=11157 CMD_AWARD_COLLECT_HERO_RSP value
         * @property {number} CMD_QUERY_ADVANCED_CHUNLI_REQ=11158 CMD_QUERY_ADVANCED_CHUNLI_REQ value
         * @property {number} CMD_QUERY_ADVANCED_CHUNLI_RSP=11159 CMD_QUERY_ADVANCED_CHUNLI_RSP value
         * @property {number} CMD_AWARD_ADVANCED_CHUNLI_REQ=11160 CMD_AWARD_ADVANCED_CHUNLI_REQ value
         * @property {number} CMD_AWARD_ADVANCED_CHUNLI_RSP=11161 CMD_AWARD_ADVANCED_CHUNLI_RSP value
         * @property {number} CMD_QUERY_COLLECT_GEM_REQ=11162 CMD_QUERY_COLLECT_GEM_REQ value
         * @property {number} CMD_QUERY_COLLECT_GEM_RSP=11163 CMD_QUERY_COLLECT_GEM_RSP value
         * @property {number} CMD_AWARD_COLLECT_GEM_REQ=11164 CMD_AWARD_COLLECT_GEM_REQ value
         * @property {number} CMD_AWARD_COLLECT_GEM_RSP=11165 CMD_AWARD_COLLECT_GEM_RSP value
         * @property {number} CMD_QUERY_COLLECT_DEGREE_REQ=11166 CMD_QUERY_COLLECT_DEGREE_REQ value
         * @property {number} CMD_QUERY_COLLECT_DEGREE_RSP=11167 CMD_QUERY_COLLECT_DEGREE_RSP value
         * @property {number} CMD_AWARD_COLLECT_DEGREE_REQ=11168 CMD_AWARD_COLLECT_DEGREE_REQ value
         * @property {number} CMD_AWARD_COLLECT_DEGREE_RSP=11169 CMD_AWARD_COLLECT_DEGREE_RSP value
         * @property {number} CMD_QUERY_EQUIP_PURPLE_REQ=11170 CMD_QUERY_EQUIP_PURPLE_REQ value
         * @property {number} CMD_QUERY_EQUIP_PURPLE_RSP=11171 CMD_QUERY_EQUIP_PURPLE_RSP value
         * @property {number} CMD_AWARD_EQUIP_PURPLE_REQ=11172 CMD_AWARD_EQUIP_PURPLE_REQ value
         * @property {number} CMD_AWARD_EQUIP_PURPLE_RSP=11173 CMD_AWARD_EQUIP_PURPLE_RSP value
         * @property {number} CMD_QUERY_RANK_AWARD_REQ=11174 CMD_QUERY_RANK_AWARD_REQ value
         * @property {number} CMD_QUERY_RANK_AWARD_RSP=11175 CMD_QUERY_RANK_AWARD_RSP value
         * @property {number} CMD_AWARD_RANK_AWARD_REQ=11176 CMD_AWARD_RANK_AWARD_REQ value
         * @property {number} CMD_AWARD_RANK_AWARD_RSP=11177 CMD_AWARD_RANK_AWARD_RSP value
         * @property {number} CMD_QUERY_MAGIC_REFINE_REQ=11200 附魔修炼 /////////////
         * @property {number} CMD_QUERY_MAGIC_REFINE_RSP=11201 CMD_QUERY_MAGIC_REFINE_RSP value
         * @property {number} CMD_REFINE_MAGIC_GOODS_REQ=11202 CMD_REFINE_MAGIC_GOODS_REQ value
         * @property {number} CMD_REFINE_MAGIC_GOODS_RSP=11203 CMD_REFINE_MAGIC_GOODS_RSP value
         * @property {number} CMD_FINISH_MAGIC_GOODS_REQ=11204 CMD_FINISH_MAGIC_GOODS_REQ value
         * @property {number} CMD_FINISH_MAGIC_GOODS_RSP=11205 CMD_FINISH_MAGIC_GOODS_RSP value
         * @property {number} CMD_EXCHANGE_ARTIFACT_REQ=11216 神器 //////////////
         * @property {number} CMD_EXCHANGE_ARTIFACT_RSP=11217 CMD_EXCHANGE_ARTIFACT_RSP value
         * @property {number} CMD_PUT_ON_ARTIFACT_REQ=11218 CMD_PUT_ON_ARTIFACT_REQ value
         * @property {number} CMD_PUT_ON_ARTIFACT_RSP=11219 CMD_PUT_ON_ARTIFACT_RSP value
         * @property {number} CMD_UPGRADE_ARTIFACT_REQ=11220 CMD_UPGRADE_ARTIFACT_REQ value
         * @property {number} CMD_UPGRADE_ARTIFACT_RSP=11221 CMD_UPGRADE_ARTIFACT_RSP value
         * @property {number} CMD_ADVANCE_ARTIFACT_REQ=11222 CMD_ADVANCE_ARTIFACT_REQ value
         * @property {number} CMD_ADVANCE_ARTIFACT_RSP=11223 CMD_ADVANCE_ARTIFACT_RSP value
         * @property {number} CMD_INLAY_ARTIFACT_REQ=11224 CMD_INLAY_ARTIFACT_REQ value
         * @property {number} CMD_INLAY_ARTIFACT_RSP=11225 CMD_INLAY_ARTIFACT_RSP value
         * @property {number} CMD_UPGRADE_GEM_ARTIFACT_REQ=11226 CMD_UPGRADE_GEM_ARTIFACT_REQ value
         * @property {number} CMD_UPGRADE_GEM_ARTIFACT_RSP=11227 CMD_UPGRADE_GEM_ARTIFACT_RSP value
         * @property {number} CMD_DECOMPOSE_ARTIFACT_REQ=11228 CMD_DECOMPOSE_ARTIFACT_REQ value
         * @property {number} CMD_DECOMPOSE_ARTIFACT_RSP=11229 CMD_DECOMPOSE_ARTIFACT_RSP value
         * @property {number} CMD_SET_ARTIFACT_BUFF_REQ=11230 CMD_SET_ARTIFACT_BUFF_REQ value
         * @property {number} CMD_SET_ARTIFACT_BUFF_RSP=11231 CMD_SET_ARTIFACT_BUFF_RSP value
         * @property {number} CMD_GEM_EXCHANGE_REQ=11232 宝石兑换商店 ////////////
         * @property {number} CMD_GEM_EXCHANGE_RSP=11233 CMD_GEM_EXCHANGE_RSP value
         * @property {number} CMD_QUERY_TITLE_LIST_REQ=11264 称号系统 ///////////////
         * @property {number} CMD_QUERY_TITLE_LIST_RSP=11265 CMD_QUERY_TITLE_LIST_RSP value
         * @property {number} CMD_ACTIVE_TITLE_REQ=11266 CMD_ACTIVE_TITLE_REQ value
         * @property {number} CMD_ACTIVE_TITLE_RSP=11267 CMD_ACTIVE_TITLE_RSP value
         * @property {number} CMD_PUT_ON_TITLE_REQ=11268 CMD_PUT_ON_TITLE_REQ value
         * @property {number} CMD_PUT_ON_TITLE_RSP=11269 CMD_PUT_ON_TITLE_RSP value
         * @property {number} CMD_PUT_OFF_TITLE_REQ=11270 CMD_PUT_OFF_TITLE_REQ value
         * @property {number} CMD_PUT_OFF_TITLE_RSP=11271 CMD_PUT_OFF_TITLE_RSP value
         * @property {number} CMD_TITIE_EXPIRE_NOTICE=11272 CMD_TITIE_EXPIRE_NOTICE value
         * @property {number} CMD_QUERY_INNER_ACTIVITY_REQ=11520 CMD_QUERY_INNER_ACTIVITY_REQ value
         * @property {number} CMD_QUERY_INNER_ACTIVITY_RSP=11521 CMD_QUERY_INNER_ACTIVITY_RSP value
         * @property {number} CMD_AWARD_INNER_ACTIVITY_REQ=11522 CMD_AWARD_INNER_ACTIVITY_REQ value
         * @property {number} CMD_AWARD_INNER_ACTIVITY_RSP=11523 CMD_AWARD_INNER_ACTIVITY_RSP value
         * @property {number} CMD_QUERY_LEV_SHOP_BUY_LIST_REQ=11777 CMD_QUERY_LEV_SHOP_BUY_LIST_REQ value
         * @property {number} CMD_QUERY_LEV_SHOP_BUY_LIST_RSP=11778 CMD_QUERY_LEV_SHOP_BUY_LIST_RSP value
         * @property {number} CMD_BUY_LEV_SHOP_GOODS_REQ=11779 CMD_BUY_LEV_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_LEV_SHOP_GOODS_RSP=11780 CMD_BUY_LEV_SHOP_GOODS_RSP value
         * @property {number} CMD_LOGIN_TRANSMIT_SERVER_REQ=12032 CMD_LOGIN_TRANSMIT_SERVER_REQ value
         * @property {number} CMD_LOGIN_TRANSMIT_SERVER_RSP=12033 CMD_LOGIN_TRANSMIT_SERVER_RSP value
         * @property {number} CMD_UPDATE_PK_SCENE_NOTICE=12034 CMD_UPDATE_PK_SCENE_NOTICE value
         * @property {number} CMD_READY_PK_REQ=12035 CMD_READY_PK_REQ value
         * @property {number} CMD_FINISH_READY_PK_NOTICE=12036 CMD_FINISH_READY_PK_NOTICE value
         * @property {number} CMD_QUERY_PK_INFO_REQ=12288 CMD_QUERY_PK_INFO_REQ value
         * @property {number} CMD_QUERY_PK_INFO_RSP=12289 CMD_QUERY_PK_INFO_RSP value
         * @property {number} CMD_SEARCH_PK_REQ=12290 CMD_SEARCH_PK_REQ value
         * @property {number} CMD_SEARCH_PK_RSP=12291 CMD_SEARCH_PK_RSP value
         * @property {number} CMD_CANCEL_SEARCH_PK_REQ=12292 CMD_CANCEL_SEARCH_PK_REQ value
         * @property {number} CMD_CANCEL_SEARCH_PK_RSP=12293 CMD_CANCEL_SEARCH_PK_RSP value
         * @property {number} CMD_START_PK_NOTICE=12294 CMD_START_PK_NOTICE value
         * @property {number} CMD_COMPLETE_PK_REQ=12295 CMD_COMPLETE_PK_REQ value
         * @property {number} CMD_COMPLETE_PK_RSP=12296 CMD_COMPLETE_PK_RSP value
         * @property {number} CMD_FINISH_PK_NOTICE=12297 CMD_FINISH_PK_NOTICE value
         * @property {number} CMD_SEASON_AWARD_NOTICE=12304 CMD_SEASON_AWARD_NOTICE value
         * @property {number} CMD_KICK_OUT_PK_ROLE_NOTICE=12305 CMD_KICK_OUT_PK_ROLE_NOTICE value
         * @property {number} CMD_QUERY_SEASON_AWARD_REQ=12306 CMD_QUERY_SEASON_AWARD_REQ value
         * @property {number} CMD_QUERY_SEASON_AWARD_RSP=12307 CMD_QUERY_SEASON_AWARD_RSP value
         * @property {number} CMD_AWARD_SEASON_AWARD_REQ=12308 CMD_AWARD_SEASON_AWARD_REQ value
         * @property {number} CMD_AWARD_SEASON_AWARD_RSP=12309 CMD_AWARD_SEASON_AWARD_RSP value
         * @property {number} CMD_GM_ADD_PK_SCORE_NOTICE=12310 CMD_GM_ADD_PK_SCORE_NOTICE value
         * @property {number} CMD_GM_REFRESH_SEASON=12311 CMD_GM_REFRESH_SEASON value
         * @property {number} CMD_CANCEL_PK_REQ=12312 CMD_CANCEL_PK_REQ value
         * @property {number} CMD_CANCEL_PK_RSP=12313 CMD_CANCEL_PK_RSP value
         * @property {number} CMD_CHECK_PK_EXIST_REQ=12314 CMD_CHECK_PK_EXIST_REQ value
         * @property {number} CMD_CHECK_PK_EXIST_RSP=12315 CMD_CHECK_PK_EXIST_RSP value
         * @property {number} CMD_CHECK_PK_STARTED_REQ=12316 CMD_CHECK_PK_STARTED_REQ value
         * @property {number} CMD_CHECK_PK_STARTED_RSP=12317 CMD_CHECK_PK_STARTED_RSP value
         * @property {number} CMD_QUERY_GROWUP_INFO_REQ=12320 CMD_QUERY_GROWUP_INFO_REQ value
         * @property {number} CMD_QUERY_GROWUP_INFO_RSP=12321 CMD_QUERY_GROWUP_INFO_RSP value
         * @property {number} CMD_FETCH_GROWUP_AWARD_REQ=12322 CMD_FETCH_GROWUP_AWARD_REQ value
         * @property {number} CMD_FETCH_GROWUP_AWARD_RSP=12323 CMD_FETCH_GROWUP_AWARD_RSP value
         * @property {number} CMD_QUERY_PET_LIST_REQ=12336 CMD_QUERY_PET_LIST_REQ value
         * @property {number} CMD_QUERY_PET_LIST_RSP=12337 CMD_QUERY_PET_LIST_RSP value
         * @property {number} CMD_HATCH_PET_REQ=12338 CMD_HATCH_PET_REQ value
         * @property {number} CMD_HATCH_PET_RSP=12339 CMD_HATCH_PET_RSP value
         * @property {number} CMD_PUT_ON_MAIN_PET_REQ=12340 CMD_PUT_ON_MAIN_PET_REQ value
         * @property {number} CMD_PUT_ON_MAIN_PET_RSP=12341 CMD_PUT_ON_MAIN_PET_RSP value
         * @property {number} CMD_PUT_ON_ASSIST_PET_REQ=12342 CMD_PUT_ON_ASSIST_PET_REQ value
         * @property {number} CMD_PUT_ON_ASSIST_PET_RSP=12343 CMD_PUT_ON_ASSIST_PET_RSP value
         * @property {number} CMD_PUT_OFF_ASSIST_PET_REQ=12344 CMD_PUT_OFF_ASSIST_PET_REQ value
         * @property {number} CMD_PUT_OFF_ASSIST_PET_RSP=12345 CMD_PUT_OFF_ASSIST_PET_RSP value
         * @property {number} CMD_LEVUP_PET_REQ=12346 CMD_LEVUP_PET_REQ value
         * @property {number} CMD_LEVUP_PET_RSP=12347 CMD_LEVUP_PET_RSP value
         * @property {number} CMD_ADVANCE_PET_REQ=12348 CMD_ADVANCE_PET_REQ value
         * @property {number} CMD_ADVANCE_PET_RSP=12349 CMD_ADVANCE_PET_RSP value
         * @property {number} CMD_FEEDING_PET_REQ=12350 CMD_FEEDING_PET_REQ value
         * @property {number} CMD_FEEDING_PET_RSP=12351 CMD_FEEDING_PET_RSP value
         * @property {number} CMD_QUERY_HATCH_CENTER_REQ=12352 CMD_QUERY_HATCH_CENTER_REQ value
         * @property {number} CMD_QUERY_HATCH_CENTER_RSP=12353 CMD_QUERY_HATCH_CENTER_RSP value
         * @property {number} CMD_QUERY_PET_MISSION_REQ=12354 CMD_QUERY_PET_MISSION_REQ value
         * @property {number} CMD_QUERY_PET_MISSION_RSP=12355 CMD_QUERY_PET_MISSION_RSP value
         * @property {number} CMD_START_PET_MISSION_REQ=12356 CMD_START_PET_MISSION_REQ value
         * @property {number} CMD_START_PET_MISSION_RSP=12357 CMD_START_PET_MISSION_RSP value
         * @property {number} CMD_AWARD_PET_MISSION_REQ=12358 CMD_AWARD_PET_MISSION_REQ value
         * @property {number} CMD_AWARD_PET_MISSION_RSP=12359 CMD_AWARD_PET_MISSION_RSP value
         * @property {number} CMD_FINISH_HATCH_REQ=12360 CMD_FINISH_HATCH_REQ value
         * @property {number} CMD_FINISH_HATCH_RSP=12361 CMD_FINISH_HATCH_RSP value
         * @property {number} CMD_GIVEUP_PET_MISSION_REQ=12362 CMD_GIVEUP_PET_MISSION_REQ value
         * @property {number} CMD_GIVEUP_PET_MISSION_RSP=12363 CMD_GIVEUP_PET_MISSION_RSP value
         * @property {number} CMD_QUERY_TURNTABLE_INFO_REQ=12368 CMD_QUERY_TURNTABLE_INFO_REQ value
         * @property {number} CMD_QUERY_TURNTABLE_INFO_RSP=12369 CMD_QUERY_TURNTABLE_INFO_RSP value
         * @property {number} CMD_USE_TURNTABLE_REQ=12370 CMD_USE_TURNTABLE_REQ value
         * @property {number} CMD_USE_TURNTABLE_RSP=12371 CMD_USE_TURNTABLE_RSP value
         * @property {number} CMD_RESET_TURNTABLE_REQ=12372 CMD_RESET_TURNTABLE_REQ value
         * @property {number} CMD_RESET_TURNTABLE_RSP=12373 CMD_RESET_TURNTABLE_RSP value
         * @property {number} CMD_QUERY_VIP_DAILY_AWARD_REQ=12400 CMD_QUERY_VIP_DAILY_AWARD_REQ value
         * @property {number} CMD_QUERY_VIP_DAILY_AWARD_RSP=12401 CMD_QUERY_VIP_DAILY_AWARD_RSP value
         * @property {number} CMD_AWARD_VIP_DAILY_AWARD_REQ=12402 CMD_AWARD_VIP_DAILY_AWARD_REQ value
         * @property {number} CMD_AWARD_VIP_DAILY_AWARD_RSP=12403 CMD_AWARD_VIP_DAILY_AWARD_RSP value
         * @property {number} CMD_AWARD_MEAT_BUN_REQ=12416 CMD_AWARD_MEAT_BUN_REQ value
         * @property {number} CMD_AWARD_MEAT_BUN_RSP=12417 CMD_AWARD_MEAT_BUN_RSP value
         * @property {number} CMD_QUERY_MEAT_BUN_AWARD_REQ=12418 CMD_QUERY_MEAT_BUN_AWARD_REQ value
         * @property {number} CMD_QUERY_MEAT_BUN_AWARD_RSP=12419 CMD_QUERY_MEAT_BUN_AWARD_RSP value
         * @property {number} CMD_QUERY_FULL_AWARD_REQ=12432 CMD_QUERY_FULL_AWARD_REQ value
         * @property {number} CMD_QUERY_FULL_AWARD_RSP=12433 CMD_QUERY_FULL_AWARD_RSP value
         * @property {number} CMD_AWARD_FULL_AWARD_REQ=12434 CMD_AWARD_FULL_AWARD_REQ value
         * @property {number} CMD_AWARD_FULL_AWARD_RSP=12435 CMD_AWARD_FULL_AWARD_RSP value
         * @property {number} CMD_QUERY_LIMITED_CHANLLENGE_REQ=12464 CMD_QUERY_LIMITED_CHANLLENGE_REQ value
         * @property {number} CMD_QUERY_LIMITED_CHANLLENGE_RSP=12465 CMD_QUERY_LIMITED_CHANLLENGE_RSP value
         * @property {number} CMD_AWARD_LIMITED_CHANLLENGE_REQ=12466 CMD_AWARD_LIMITED_CHANLLENGE_REQ value
         * @property {number} CMD_AWARD_LIMITED_CHANLLENGE_RSP=12467 CMD_AWARD_LIMITED_CHANLLENGE_RSP value
         * @property {number} CMD_QUERY_VIP_WEEK_AWARD_REQ=12480 CMD_QUERY_VIP_WEEK_AWARD_REQ value
         * @property {number} CMD_QUERY_VIP_WEEK_AWARD_RSP=12481 CMD_QUERY_VIP_WEEK_AWARD_RSP value
         * @property {number} CMD_AWARD_VIP_WEEK_AWARD_REQ=12482 CMD_AWARD_VIP_WEEK_AWARD_REQ value
         * @property {number} CMD_AWARD_VIP_WEEK_AWARD_RSP=12483 CMD_AWARD_VIP_WEEK_AWARD_RSP value
         * @property {number} CMD_DECOMPOSE_ARTIFACT_DEBRIS_REQ=12496 CMD_DECOMPOSE_ARTIFACT_DEBRIS_REQ value
         * @property {number} CMD_DECOMPOSE_ARTIFACT_DEBRIS_RSP=12497 CMD_DECOMPOSE_ARTIFACT_DEBRIS_RSP value
         * @property {number} CMD_QUERY_LIMITED_MISSION_REQ=12512 CMD_QUERY_LIMITED_MISSION_REQ value
         * @property {number} CMD_QUERY_LIMITED_MISSION_RSP=12513 CMD_QUERY_LIMITED_MISSION_RSP value
         * @property {number} CMD_AWARD_LIMITED_MISSION_REQ=12514 CMD_AWARD_LIMITED_MISSION_REQ value
         * @property {number} CMD_AWARD_LIMITED_MISSION_RSP=12515 CMD_AWARD_LIMITED_MISSION_RSP value
         * @property {number} CMD_OPEN_RUNNING_RACE_REQ=12528 CMD_OPEN_RUNNING_RACE_REQ value
         * @property {number} CMD_OPEN_RUNNING_RACE_RSP=12529 CMD_OPEN_RUNNING_RACE_RSP value
         * @property {number} CMD_BUY_RUNNING_RACE_COUNT_REQ=12530 CMD_BUY_RUNNING_RACE_COUNT_REQ value
         * @property {number} CMD_BUY_RUNNING_RACE_COUNT_RSP=12531 CMD_BUY_RUNNING_RACE_COUNT_RSP value
         * @property {number} CMD_FINISH_RUNNING_RACE_REQ=12532 CMD_FINISH_RUNNING_RACE_REQ value
         * @property {number} CMD_FINISH_RUNNING_RACE_RSP=12533 CMD_FINISH_RUNNING_RACE_RSP value
         * @property {number} CMD_QUIT_RUNNING_RACE_REQ=12534 CMD_QUIT_RUNNING_RACE_REQ value
         * @property {number} CMD_QUIT_RUNNING_RACE_RSP=12535 CMD_QUIT_RUNNING_RACE_RSP value
         * @property {number} CMD_PRACTICE_STONE_EXCHANGE_REQ=12544 CMD_PRACTICE_STONE_EXCHANGE_REQ value
         * @property {number} CMD_PRACTICE_STONE_EXCHANGE_RSP=12545 CMD_PRACTICE_STONE_EXCHANGE_RSP value
         * @property {number} CMD_PRACTICE_PROPERTY_REQ=12546 CMD_PRACTICE_PROPERTY_REQ value
         * @property {number} CMD_PRACTICE_PROPERTY_RSP=12547 CMD_PRACTICE_PROPERTY_RSP value
         * @property {number} CMD_REVERT_PRACTICE_PROPERTY_REQ=12548 CMD_REVERT_PRACTICE_PROPERTY_REQ value
         * @property {number} CMD_REVERT_PRACTICE_PROPERTY_RSP=12549 CMD_REVERT_PRACTICE_PROPERTY_RSP value
         * @property {number} CMD_FETCH_PK_SECTION_AWARD_REQ=12608 CMD_FETCH_PK_SECTION_AWARD_REQ value
         * @property {number} CMD_FETCH_PK_SECTION_AWARD_RSP=12609 CMD_FETCH_PK_SECTION_AWARD_RSP value
         * @property {number} CMD_QUERY_PK_DAILY_AWARD_REQ=12610 CMD_QUERY_PK_DAILY_AWARD_REQ value
         * @property {number} CMD_QUERY_PK_DAILY_AWARD_RSP=12611 CMD_QUERY_PK_DAILY_AWARD_RSP value
         * @property {number} CMD_FETCH_PK_DAILY_AWARD_REQ=12612 CMD_FETCH_PK_DAILY_AWARD_REQ value
         * @property {number} CMD_FETCH_PK_DAILY_AWARD_RSP=12613 CMD_FETCH_PK_DAILY_AWARD_RSP value
         * @property {number} CMD_START_PK_CHALLENGE_REQ=12800 CMD_START_PK_CHALLENGE_REQ value
         * @property {number} CMD_START_PK_CHALLENGE_RSP=12801 CMD_START_PK_CHALLENGE_RSP value
         * @property {number} CMD_CANCEL_PK_CHALLENGE_REQ=12802 CMD_CANCEL_PK_CHALLENGE_REQ value
         * @property {number} CMD_CANCEL_PK_CHALLENGE_RSP=12803 CMD_CANCEL_PK_CHALLENGE_RSP value
         * @property {number} CMD_CONFIRM_PK_CHALLENGE_REQ=12804 CMD_CONFIRM_PK_CHALLENGE_REQ value
         * @property {number} CMD_CONFIRM_PK_CHALLENGE_RSP=12805 CMD_CONFIRM_PK_CHALLENGE_RSP value
         * @property {number} CMD_FINISH_PK_CHALLENGE_REQ=12806 CMD_FINISH_PK_CHALLENGE_REQ value
         * @property {number} CMD_FINISH_PK_CHALLENGE_RSP=12807 CMD_FINISH_PK_CHALLENGE_RSP value
         * @property {number} CMD_CANCEL_PK_CHALLENGE_NOTICE=12833 CMD_CANCEL_PK_CHALLENGE_NOTICE value
         * @property {number} CMD_CONFIRM_PK_CHALLENGE_NOTICE=12835 CMD_CONFIRM_PK_CHALLENGE_NOTICE value
         * @property {number} CMD_START_PK_CHALLENGE_NOTICE=12837 CMD_START_PK_CHALLENGE_NOTICE value
         * @property {number} CMD_FINISH_PK_CHALLENGE_NOTICE=12839 CMD_FINISH_PK_CHALLENGE_NOTICE value
         * @property {number} CMD_SETTING_PK_CHALLENGE_REQ=12864 CMD_SETTING_PK_CHALLENGE_REQ value
         * @property {number} CMD_SETTING_PK_CHALLENGE_RSP=12865 CMD_SETTING_PK_CHALLENGE_RSP value
         * @property {number} CMD_GM_CONTROL_PK_REQ=12866 CMD_GM_CONTROL_PK_REQ value
         * @property {number} CMD_GM_CONTROL_PK_RSP=12867 CMD_GM_CONTROL_PK_RSP value
         * @property {number} CMD_QUERY_MAIL_REQ=13056 CMD_QUERY_MAIL_REQ value
         * @property {number} CMD_QUERY_MAIL_RSP=13057 CMD_QUERY_MAIL_RSP value
         * @property {number} CMD_SET_MAIL_READ_REQ=13058 CMD_SET_MAIL_READ_REQ value
         * @property {number} CMD_SET_MAIL_READ_RSP=13059 CMD_SET_MAIL_READ_RSP value
         * @property {number} CMD_FETCH_MAIL_AWARD_REQ=13060 CMD_FETCH_MAIL_AWARD_REQ value
         * @property {number} CMD_FETCH_MAIL_AWARD_RSP=13061 CMD_FETCH_MAIL_AWARD_RSP value
         * @property {number} CMD_DELETE_MAIL_REQ=13062 CMD_DELETE_MAIL_REQ value
         * @property {number} CMD_DELETE_MAIL_RSP=13063 CMD_DELETE_MAIL_RSP value
         * @property {number} CMD_NEW_MAIL_NOTICE=13065 CMD_NEW_MAIL_NOTICE value
         * @property {number} CMD_QUERY_FESTIVAL_REQ=13072 CMD_QUERY_FESTIVAL_REQ value
         * @property {number} CMD_QUERY_FESTIVAL_RSP=13073 CMD_QUERY_FESTIVAL_RSP value
         * @property {number} CMD_QUERY_FESTIVAL_SIGN_REQ=13074 CMD_QUERY_FESTIVAL_SIGN_REQ value
         * @property {number} CMD_QUERY_FESTIVAL_SIGN_RSP=13075 CMD_QUERY_FESTIVAL_SIGN_RSP value
         * @property {number} CMD_FESTIVAL_SIGN_REQ=13076 CMD_FESTIVAL_SIGN_REQ value
         * @property {number} CMD_FESTIVAL_SIGN_RSP=13077 CMD_FESTIVAL_SIGN_RSP value
         * @property {number} CMD_FESTIVAL_EXCHANGE_REQ=13078 CMD_FESTIVAL_EXCHANGE_REQ value
         * @property {number} CMD_FESTIVAL_EXCHANGE_RSP=13079 CMD_FESTIVAL_EXCHANGE_RSP value
         * @property {number} CMD_FESTIVAL_LOTTERY_REQ=13080 CMD_FESTIVAL_LOTTERY_REQ value
         * @property {number} CMD_FESTIVAL_LOTTERY_RSP=13081 CMD_FESTIVAL_LOTTERY_RSP value
         * @property {number} CMD_SIGN_UP_GROUP_BATTLE_REQ=13312 CMD_SIGN_UP_GROUP_BATTLE_REQ value
         * @property {number} CMD_SIGN_UP_GROUP_BATTLE_RSP=13313 CMD_SIGN_UP_GROUP_BATTLE_RSP value
         * @property {number} CMD_QUERY_SIGN_UP_INFO_REQ=13314 CMD_QUERY_SIGN_UP_INFO_REQ value
         * @property {number} CMD_QUERY_SIGN_UP_INFO_RSP=13315 CMD_QUERY_SIGN_UP_INFO_RSP value
         * @property {number} CMD_SET_GROUP_BATTLE_OPTION_REQ=13316 CMD_SET_GROUP_BATTLE_OPTION_REQ value
         * @property {number} CMD_SET_GROUP_BATTLE_OPTION_RSP=13317 CMD_SET_GROUP_BATTLE_OPTION_RSP value
         * @property {number} CMD_QUERY_GROUP_BATTLE_REQ=13318 CMD_QUERY_GROUP_BATTLE_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_RSP=13319 CMD_QUERY_GROUP_BATTLE_RSP value
         * @property {number} CMD_QUERY_HERO_BATTLE_ARRAY_REQ=13320 CMD_QUERY_HERO_BATTLE_ARRAY_REQ value
         * @property {number} CMD_QUERY_HERO_BATTLE_ARRAY_RSP=13321 CMD_QUERY_HERO_BATTLE_ARRAY_RSP value
         * @property {number} CMD_SET_HERO_BATTLE_ARRAY_REQ=13322 CMD_SET_HERO_BATTLE_ARRAY_REQ value
         * @property {number} CMD_SET_HERO_BATTLE_ARRAY_RSP=13323 CMD_SET_HERO_BATTLE_ARRAY_RSP value
         * @property {number} CMD_CHOOSE_GROUP_BATTLE_ROAD_REQ=13324 CMD_CHOOSE_GROUP_BATTLE_ROAD_REQ value
         * @property {number} CMD_CHOOSE_GROUP_BATTLE_ROAD_RSP=13325 CMD_CHOOSE_GROUP_BATTLE_ROAD_RSP value
         * @property {number} CMD_QUERY_CURRENT_BATTLE_INFO_REQ=13326 CMD_QUERY_CURRENT_BATTLE_INFO_REQ value
         * @property {number} CMD_QUERY_CURRENT_BATTLE_INFO_RSP=13327 CMD_QUERY_CURRENT_BATTLE_INFO_RSP value
         * @property {number} CMD_READY_GROUP_BATTLE_REQ=13328 CMD_READY_GROUP_BATTLE_REQ value
         * @property {number} CMD_READY_GROUP_BATTLE_RSP=13329 CMD_READY_GROUP_BATTLE_RSP value
         * @property {number} CMD_START_SINGLE_BATTLE_NOTICE=13330 CMD_START_SINGLE_BATTLE_NOTICE value
         * @property {number} CMD_COMPLETE_SINGLE_BATTLE_REQ=13331 CMD_COMPLETE_SINGLE_BATTLE_REQ value
         * @property {number} CMD_COMPLETE_SINGLE_BATTLE_RSP=13332 CMD_COMPLETE_SINGLE_BATTLE_RSP value
         * @property {number} CMD_FINISH_SINGLE_BATTLE_NOTICE=13333 CMD_FINISH_SINGLE_BATTLE_NOTICE value
         * @property {number} CMD_QUERY_GROUP_BATTLE_HISTORY_REQ=13334 CMD_QUERY_GROUP_BATTLE_HISTORY_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_HISTORY_RSP=13335 CMD_QUERY_GROUP_BATTLE_HISTORY_RSP value
         * @property {number} CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_REQ=13336 CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_REQ value
         * @property {number} CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_RSP=13337 CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_RSP value
         * @property {number} CMD_SEND_GROUP_BATTLE_AWARD_REQ=13338 CMD_SEND_GROUP_BATTLE_AWARD_REQ value
         * @property {number} CMD_SEND_GROUP_BATTLE_AWARD_RSP=13339 CMD_SEND_GROUP_BATTLE_AWARD_RSP value
         * @property {number} CMD_QUERY_GROUP_BATTLE_TACTIC_REQ=13340 CMD_QUERY_GROUP_BATTLE_TACTIC_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_TACTIC_RSP=13341 CMD_QUERY_GROUP_BATTLE_TACTIC_RSP value
         * @property {number} CMD_SET_GROUP_BATTLE_TACTIC_REQ=13342 CMD_SET_GROUP_BATTLE_TACTIC_REQ value
         * @property {number} CMD_SET_GROUP_BATTLE_TACTIC_RSP=13343 CMD_SET_GROUP_BATTLE_TACTIC_RSP value
         * @property {number} CMD_SYNC_GROUP_FIGHTER_INFO_REQ=13344 CMD_SYNC_GROUP_FIGHTER_INFO_REQ value
         * @property {number} CMD_SYNC_GROUP_FIGHTER_INFO_RSP=13345 CMD_SYNC_GROUP_FIGHTER_INFO_RSP value
         * @property {number} CMD_READY_GROUP_BATTLE_NOTICE=13346 CMD_READY_GROUP_BATTLE_NOTICE value
         * @property {number} CMD_REPORT_SINGLE_BATTLE_INFO_REQ=13348 CMD_REPORT_SINGLE_BATTLE_INFO_REQ value
         * @property {number} CMD_REPORT_SINGLE_BATTLE_INFO_RSP=13349 CMD_REPORT_SINGLE_BATTLE_INFO_RSP value
         * @property {number} CMD_START_GROUP_BATTLE_NOTICE=13350 CMD_START_GROUP_BATTLE_NOTICE value
         * @property {number} CMD_SEND_GROUP_BATTLE_ROLL_MSG_REQ=13351 CMD_SEND_GROUP_BATTLE_ROLL_MSG_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_BRIEF_REQ=13352 CMD_QUERY_GROUP_BATTLE_BRIEF_REQ value
         * @property {number} CMD_QUERY_GROUP_BATTLE_BRIEF_RSP=13353 CMD_QUERY_GROUP_BATTLE_BRIEF_RSP value
         * @property {number} CMD_QUERY_SHARE_AWARD_REQ=13408 CMD_QUERY_SHARE_AWARD_REQ value
         * @property {number} CMD_QUERY_SHARE_AWARD_RSP=13409 CMD_QUERY_SHARE_AWARD_RSP value
         * @property {number} CMD_FINISH_SHARE_REQ=13410 CMD_FINISH_SHARE_REQ value
         * @property {number} CMD_FINISH_SHARE_RSP=13411 CMD_FINISH_SHARE_RSP value
         * @property {number} CMD_AWARD_SHARE_AWARD_REQ=13412 CMD_AWARD_SHARE_AWARD_REQ value
         * @property {number} CMD_AWARD_SHARE_AWARD_RSP=13413 CMD_AWARD_SHARE_AWARD_RSP value
         * @property {number} CMD_QUERY_TRIAL_ROOM_LIST_REQ=13424 CMD_QUERY_TRIAL_ROOM_LIST_REQ value
         * @property {number} CMD_QUERY_TRIAL_ROOM_LIST_RSP=13425 CMD_QUERY_TRIAL_ROOM_LIST_RSP value
         * @property {number} CMD_CREATE_TRIAL_ROOM_REQ=13426 CMD_CREATE_TRIAL_ROOM_REQ value
         * @property {number} CMD_CREATE_TRIAL_ROOM_RSP=13427 CMD_CREATE_TRIAL_ROOM_RSP value
         * @property {number} CMD_JOIN_TRIAL_ROOM_REQ=13428 CMD_JOIN_TRIAL_ROOM_REQ value
         * @property {number} CMD_JOIN_TRIAL_ROOM_RSP=13429 CMD_JOIN_TRIAL_ROOM_RSP value
         * @property {number} CMD_RECOURSE_FRIEND_TRIAL_REQ=13430 CMD_RECOURSE_FRIEND_TRIAL_REQ value
         * @property {number} CMD_RECOURSE_FRIEND_TRIAL_RSP=13431 CMD_RECOURSE_FRIEND_TRIAL_RSP value
         * @property {number} CMD_KICK_TRIAL_ROOM_MEMBER_REQ=13432 CMD_KICK_TRIAL_ROOM_MEMBER_REQ value
         * @property {number} CMD_KICK_TRIAL_ROOM_MEMBER_RSP=13433 CMD_KICK_TRIAL_ROOM_MEMBER_RSP value
         * @property {number} CMD_INVITE_TRIAL_REQ=13450 CMD_INVITE_TRIAL_REQ value
         * @property {number} CMD_INVITE_TRIAL_RSP=13451 CMD_INVITE_TRIAL_RSP value
         * @property {number} CMD_START_TRIAL_REQ=13452 CMD_START_TRIAL_REQ value
         * @property {number} CMD_START_TRIAL_RSP=13453 CMD_START_TRIAL_RSP value
         * @property {number} CMD_PASS_TRIAL_INSTANCE_REQ=13454 CMD_PASS_TRIAL_INSTANCE_REQ value
         * @property {number} CMD_PASS_TRIAL_INSTANCE_RSP=13455 CMD_PASS_TRIAL_INSTANCE_RSP value
         * @property {number} CMD_QUIT_TRIAL_INSTANCE_REQ=13456 CMD_QUIT_TRIAL_INSTANCE_REQ value
         * @property {number} CMD_QUIT_TRIAL_INSTANCE_RSP=13457 CMD_QUIT_TRIAL_INSTANCE_RSP value
         * @property {number} CMD_TRIAL_ROOM_INFO_NOTICE=13458 CMD_TRIAL_ROOM_INFO_NOTICE value
         * @property {number} CMD_BUY_TRIAL_COUNT_REQ=13459 CMD_BUY_TRIAL_COUNT_REQ value
         * @property {number} CMD_BUY_TRIAL_COUNT_RSP=13460 CMD_BUY_TRIAL_COUNT_RSP value
         * @property {number} CMD_LEAVE_TRIAL_ROOM_REQ=13461 CMD_LEAVE_TRIAL_ROOM_REQ value
         * @property {number} CMD_LEAVE_TRIAL_ROOM_RSP=13462 CMD_LEAVE_TRIAL_ROOM_RSP value
         * @property {number} CMD_KICK_TRIAL_MEMBER_NOTICE=13463 CMD_KICK_TRIAL_MEMBER_NOTICE value
         * @property {number} CMD_INVITE_TRIAL_NOTICE=13464 CMD_INVITE_TRIAL_NOTICE value
         * @property {number} CMD_REPLY_TRIAL_INVITE_REQ=13465 CMD_REPLY_TRIAL_INVITE_REQ value
         * @property {number} CMD_REPLY_TRIAL_INVITE_RSP=13466 CMD_REPLY_TRIAL_INVITE_RSP value
         * @property {number} CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_REQ=13467 CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_REQ value
         * @property {number} CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_RSP=13468 CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_RSP value
         * @property {number} CMD_QUERY_TRIAL_RECOURSE_LIST_REQ=13469 CMD_QUERY_TRIAL_RECOURSE_LIST_REQ value
         * @property {number} CMD_QUERY_TRIAL_RECOURSE_LIST_RSP=13470 CMD_QUERY_TRIAL_RECOURSE_LIST_RSP value
         * @property {number} CMD_QUERY_TRIAL_LIST_REQ=13471 CMD_QUERY_TRIAL_LIST_REQ value
         * @property {number} CMD_QUERY_TRIAL_LIST_RSP=13472 CMD_QUERY_TRIAL_LIST_RSP value
         * @property {number} CMD_PASS_TRIAL_SCREEN_REQ=13473 CMD_PASS_TRIAL_SCREEN_REQ value
         * @property {number} CMD_PASS_TRIAL_SCREEN_RSP=13474 CMD_PASS_TRIAL_SCREEN_RSP value
         * @property {number} CMD_RENAME_TRIAL_ROOM_REQ=13475 CMD_RENAME_TRIAL_ROOM_REQ value
         * @property {number} CMD_RENAME_TRIAL_ROOM_RSP=13476 CMD_RENAME_TRIAL_ROOM_RSP value
         * @property {number} CMD_CHANGE_TRIAL_INSTANCE_REQ=13477 CMD_CHANGE_TRIAL_INSTANCE_REQ value
         * @property {number} CMD_CHANGE_TRIAL_INSTANCE_RSP=13478 CMD_CHANGE_TRIAL_INSTANCE_RSP value
         * @property {number} CMD_START_TRIAL_NOTICE=13479 CMD_START_TRIAL_NOTICE value
         * @property {number} CMD_SEND_TRIAL_ROBOT_AWARD_NOTICE=13480 CMD_SEND_TRIAL_ROBOT_AWARD_NOTICE value
         * @property {number} CMD_SYNC_TRIAL_ROLE_INFO_REQ=13481 CMD_SYNC_TRIAL_ROLE_INFO_REQ value
         * @property {number} CMD_ZONE_LEAVE_TRIAL_ROOM_REQ=13482 CMD_ZONE_LEAVE_TRIAL_ROOM_REQ value
         * @property {number} CMD_READY_TRIAL_REQ=13483 CMD_READY_TRIAL_REQ value
         * @property {number} CMD_READY_TRIAL_RSP=13484 CMD_READY_TRIAL_RSP value
         * @property {number} CMD_CANCEL_TRIAL_PRIVATE_ROOM_REQ=13485 CMD_CANCEL_TRIAL_PRIVATE_ROOM_REQ value
         * @property {number} CMD_CANCEL_TRIAL_PRIVATE_ROOM_RSP=13486 CMD_CANCEL_TRIAL_PRIVATE_ROOM_RSP value
         * @property {number} CMD_SIGN_UP_GROUP_BATTLE_FIGHTER_LIST_REQ=13487 CMD_SIGN_UP_GROUP_BATTLE_FIGHTER_LIST_REQ value
         * @property {number} CMD_QUERY_SCHOOL_TREASURE_SHOP_REQ=13505 CMD_QUERY_SCHOOL_TREASURE_SHOP_REQ value
         * @property {number} CMD_QUERY_SCHOOL_TREASURE_SHOP_RSP=13506 CMD_QUERY_SCHOOL_TREASURE_SHOP_RSP value
         * @property {number} CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_REQ=13507 CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_RSP=13508 CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_RSP value
         * @property {number} CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_REQ=13509 CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_REQ value
         * @property {number} CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_RSP=13510 CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_RSP value
         * @property {number} CMD_FRESH_SCHOOL_TREASURE_SHOP_REQ=13511 CMD_FRESH_SCHOOL_TREASURE_SHOP_REQ value
         * @property {number} CMD_FRESH_SCHOOL_TREASURE_SHOP_RSP=13512 CMD_FRESH_SCHOOL_TREASURE_SHOP_RSP value
         * @property {number} CMD_QUERY_VERSION_AWARD_REQ=13536 CMD_QUERY_VERSION_AWARD_REQ value
         * @property {number} CMD_QUERY_VERSION_AWARD_RSP=13537 CMD_QUERY_VERSION_AWARD_RSP value
         * @property {number} CMD_AWARD_VERSION_AWARD_REQ=13538 CMD_AWARD_VERSION_AWARD_REQ value
         * @property {number} CMD_AWARD_VERSION_AWARD_RSP=13539 CMD_AWARD_VERSION_AWARD_RSP value
         * @property {number} CMD_QUERY_RECALL_PLAYER_INFO_REQ=13568 CMD_QUERY_RECALL_PLAYER_INFO_REQ value
         * @property {number} CMD_QUERY_RECALL_PLAYER_INFO_RSP=13569 CMD_QUERY_RECALL_PLAYER_INFO_RSP value
         * @property {number} CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_REQ=13570 CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_REQ value
         * @property {number} CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_RSP=13571 CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_RSP value
         * @property {number} CMD_QUERY_WEEK_CHALLENGES_REQ=13584 CMD_QUERY_WEEK_CHALLENGES_REQ value
         * @property {number} CMD_QUERY_WEEK_CHALLENGES_RSP=13585 CMD_QUERY_WEEK_CHALLENGES_RSP value
         * @property {number} CMD_AWARD_WEEK_CHALLENGES_REQ=13586 CMD_AWARD_WEEK_CHALLENGES_REQ value
         * @property {number} CMD_AWARD_WEEK_CHALLENGES_RSP=13587 CMD_AWARD_WEEK_CHALLENGES_RSP value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_INFO_REQ=13600 CMD_QUERY_GROUP_HEGEMONY_INFO_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_INFO_RSP=13601 CMD_QUERY_GROUP_HEGEMONY_INFO_RSP value
         * @property {number} CMD_SIGN_UP_GROUP_HEGEMONY_REQ=13602 CMD_SIGN_UP_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_SIGN_UP_GROUP_HEGEMONY_RSP=13603 CMD_SIGN_UP_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_MATCH_GROUP_HEGEMONY_REQ=13604 CMD_MATCH_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_MATCH_GROUP_HEGEMONY_RSP=13605 CMD_MATCH_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_START_GROUP_HEGEMONY_NOTICE=13606 CMD_START_GROUP_HEGEMONY_NOTICE value
         * @property {number} CMD_COMPLETE_GROUP_HEGEMONY_REQ=13607 CMD_COMPLETE_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_COMPLETE_GROUP_HEGEMONY_RSP=13608 CMD_COMPLETE_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_SET_GROUP_HEGEMONY_MEMBER_REQ=13609 CMD_SET_GROUP_HEGEMONY_MEMBER_REQ value
         * @property {number} CMD_SET_GROUP_HEGEMONY_MEMBER_RSP=13610 CMD_SET_GROUP_HEGEMONY_MEMBER_RSP value
         * @property {number} CMD_READY_GROUP_HEGEMONY_NOTICE=13611 CMD_READY_GROUP_HEGEMONY_NOTICE value
         * @property {number} CMD_READY_GROUP_HEGEMONY_REQ=13612 CMD_READY_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_READY_GROUP_HEGEMONY_RSP=13613 CMD_READY_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_RANK_REQ=13614 CMD_QUERY_GROUP_HEGEMONY_RANK_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_RANK_RSP=13615 CMD_QUERY_GROUP_HEGEMONY_RANK_RSP value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_AWARD_REQ=13616 CMD_QUERY_GROUP_HEGEMONY_AWARD_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_AWARD_RSP=13617 CMD_QUERY_GROUP_HEGEMONY_AWARD_RSP value
         * @property {number} CMD_AWARD_GROUP_HEGEMONY_REQ=13618 CMD_AWARD_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_AWARD_GROUP_HEGEMONY_RSP=13619 CMD_AWARD_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_SHOP_REQ=13620 CMD_QUERY_GROUP_HEGEMONY_SHOP_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_SHOP_RSP=13621 CMD_QUERY_GROUP_HEGEMONY_SHOP_RSP value
         * @property {number} CMD_REFRESH_GROUP_HEGEMONY_SHOP_REQ=13622 CMD_REFRESH_GROUP_HEGEMONY_SHOP_REQ value
         * @property {number} CMD_REFRESH_GROUP_HEGEMONY_SHOP_RSP=13623 CMD_REFRESH_GROUP_HEGEMONY_SHOP_RSP value
         * @property {number} CMD_BUY_GROUP_HEGEMONY_SHOP_REQ=13624 CMD_BUY_GROUP_HEGEMONY_SHOP_REQ value
         * @property {number} CMD_BUY_GROUP_HEGEMONY_SHOP_RSP=13625 CMD_BUY_GROUP_HEGEMONY_SHOP_RSP value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_MEMBER_REQ=13626 CMD_QUERY_GROUP_HEGEMONY_MEMBER_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_MEMBER_RSP=13627 CMD_QUERY_GROUP_HEGEMONY_MEMBER_RSP value
         * @property {number} CMD_PARTICIPATE_GROUP_HEGEMONY_REQ=13628 CMD_PARTICIPATE_GROUP_HEGEMONY_REQ value
         * @property {number} CMD_PARTICIPATE_GROUP_HEGEMONY_RSP=13629 CMD_PARTICIPATE_GROUP_HEGEMONY_RSP value
         * @property {number} CMD_FINISH_GROUP_HEGEMONY_NOTICE=13630 CMD_FINISH_GROUP_HEGEMONY_NOTICE value
         * @property {number} CMD_GROUP_HEGEMONY_RANK_NOTICE=13631 CMD_GROUP_HEGEMONY_RANK_NOTICE value
         * @property {number} CMD_GROUP_HEGEMONY_TOP_GROUP_NOTICE=13632 CMD_GROUP_HEGEMONY_TOP_GROUP_NOTICE value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_REQ=13633 CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_REQ value
         * @property {number} CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_RSP=13634 CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_RSP value
         * @property {number} CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_REQ=13635 CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_REQ value
         * @property {number} CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_RSP=13636 CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_RSP value
         * @property {number} CMD_GROUP_HEGEMONY_ROLE_RANK_NOTICE=13637 CMD_GROUP_HEGEMONY_ROLE_RANK_NOTICE value
         * @property {number} CMD_CANCEL_GROUP_HEGEMONY_MATCH_REQ=13638 CMD_CANCEL_GROUP_HEGEMONY_MATCH_REQ value
         * @property {number} CMD_CANCEL_GROUP_HEGEMONY_MATCH_RSP=13639 CMD_CANCEL_GROUP_HEGEMONY_MATCH_RSP value
         * @property {number} CMD_QUERY_ANCHOR_RANK_REQ=13664 CMD_QUERY_ANCHOR_RANK_REQ value
         * @property {number} CMD_QUERY_ANCHOR_RANK_RSP=13665 CMD_QUERY_ANCHOR_RANK_RSP value
         * @property {number} CMD_PRAISE_ANCHOR_REQ=13666 CMD_PRAISE_ANCHOR_REQ value
         * @property {number} CMD_PRAISE_ANCHOR_RSP=13667 CMD_PRAISE_ANCHOR_RSP value
         * @property {number} CMD_SEND_ANCHOR_GIFT_REQ=13668 CMD_SEND_ANCHOR_GIFT_REQ value
         * @property {number} CMD_SEND_ANCHOR_GIFT_RSP=13669 CMD_SEND_ANCHOR_GIFT_RSP value
         * @property {number} CMD_QUERY_FANS_SCORE_AWARD_REQ=13670 CMD_QUERY_FANS_SCORE_AWARD_REQ value
         * @property {number} CMD_QUERY_FANS_SCORE_AWARD_RSP=13671 CMD_QUERY_FANS_SCORE_AWARD_RSP value
         * @property {number} CMD_AWARD_FANS_SCORE_REQ=13672 CMD_AWARD_FANS_SCORE_REQ value
         * @property {number} CMD_AWARD_FANS_SCORE_RSP=13673 CMD_AWARD_FANS_SCORE_RSP value
         * @property {number} CMD_QUERY_FANS_RANK_REQ=13674 CMD_QUERY_FANS_RANK_REQ value
         * @property {number} CMD_QUERY_FANS_RANK_RSP=13675 CMD_QUERY_FANS_RANK_RSP value
         * @property {number} CMD_QUERY_ANCHOR_ACTIVIY_INFO_REQ=13676 CMD_QUERY_ANCHOR_ACTIVIY_INFO_REQ value
         * @property {number} CMD_QUERY_ANCHOR_ACTIVIY_INFO_RSP=13677 CMD_QUERY_ANCHOR_ACTIVIY_INFO_RSP value
         * @property {number} CMD_QUERY_SUPER_EQUIPMENT_REQ=13696 CMD_QUERY_SUPER_EQUIPMENT_REQ value
         * @property {number} CMD_QUERY_SUPER_EQUIPMENT_RSP=13697 CMD_QUERY_SUPER_EQUIPMENT_RSP value
         * @property {number} CMD_PUT_ON_SUPER_EQUIPMENT_REQ=13698 CMD_PUT_ON_SUPER_EQUIPMENT_REQ value
         * @property {number} CMD_PUT_ON_SUPER_EQUIPMENT_RSP=13699 CMD_PUT_ON_SUPER_EQUIPMENT_RSP value
         * @property {number} CMD_LEV_UP_SUPER_EQUIPMENT_REQ=13700 CMD_LEV_UP_SUPER_EQUIPMENT_REQ value
         * @property {number} CMD_LEV_UP_SUPER_EQUIPMENT_RSP=13701 CMD_LEV_UP_SUPER_EQUIPMENT_RSP value
         * @property {number} CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_REQ=13702 CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_REQ value
         * @property {number} CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_RSP=13703 CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_RSP value
         * @property {number} CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_REQ=13704 CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_REQ value
         * @property {number} CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_RSP=13705 CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_RSP value
         * @property {number} CMD_QUERY_SCHOOL_TURNTABLE_SHOP_REQ=13728 CMD_QUERY_SCHOOL_TURNTABLE_SHOP_REQ value
         * @property {number} CMD_QUERY_SCHOOL_TURNTABLE_SHOP_RSP=13729 CMD_QUERY_SCHOOL_TURNTABLE_SHOP_RSP value
         * @property {number} CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_REQ=13730 CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_REQ value
         * @property {number} CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_RSP=13731 CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_RSP value
         * @property {number} CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_REQ=13732 CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_REQ value
         * @property {number} CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_RSP=13733 CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_RSP value
         * @property {number} CMD_FRESH_SCHOOL_TURNTABLE_SHOP_REQ=13734 CMD_FRESH_SCHOOL_TURNTABLE_SHOP_REQ value
         * @property {number} CMD_FRESH_SCHOOL_TURNTABLE_SHOP_RSP=13735 CMD_FRESH_SCHOOL_TURNTABLE_SHOP_RSP value
         * @property {number} CMD_GOD_AWARD_SHOP_NOTICE=13824 CMD_GOD_AWARD_SHOP_NOTICE value
         * @property {number} CMD_QUERY_GOD_AWARD_SHOP_GOODS_REQ=13826 CMD_QUERY_GOD_AWARD_SHOP_GOODS_REQ value
         * @property {number} CMD_QUERY_GOD_AWARD_SHOP_GOODS_RSP=13827 CMD_QUERY_GOD_AWARD_SHOP_GOODS_RSP value
         * @property {number} CMD_BUY_GOD_AWARD_SHOP_REQ=13828 CMD_BUY_GOD_AWARD_SHOP_REQ value
         * @property {number} CMD_BUY_GOD_AWARD_SHOP_RSP=13829 CMD_BUY_GOD_AWARD_SHOP_RSP value
         * @property {number} CMD_FRESH_GOD_AWARD_SHOP_REQ=13830 CMD_FRESH_GOD_AWARD_SHOP_REQ value
         * @property {number} CMD_FRESH_GOD_AWARD_SHOP_RSP=13831 CMD_FRESH_GOD_AWARD_SHOP_RSP value
         */
        User.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[65535] = "CMD_INVALID"] = 65535;
            values[valuesById[4096] = "CMD_HEART_BEAT_REQ"] = 4096;
            values[valuesById[4097] = "CMD_HEART_BEAT_RSP"] = 4097;
            values[valuesById[4098] = "CMD_GM_COMMAND_REQ"] = 4098;
            values[valuesById[4099] = "CMD_GM_COMMAND_RSP"] = 4099;
            values[valuesById[4100] = "CMD_TRANSMIT_REQ"] = 4100;
            values[valuesById[4101] = "CMD_TRANSMIT_NOTICE"] = 4101;
            values[valuesById[4103] = "CMD_MESSAGE_BOX_NOTICE"] = 4103;
            values[valuesById[4107] = "CMD_EVENT_NOTICE"] = 4107;
            values[valuesById[4108] = "CMD_KEEP_ALIVE_REQ"] = 4108;
            values[valuesById[4109] = "CMD_KEEP_ALIVE_RSP"] = 4109;
            values[valuesById[4112] = "CMD_SEND_FRMAE_DATA_REQ"] = 4112;
            values[valuesById[4113] = "CMD_SYNC_FRAME_NOTICE"] = 4113;
            values[valuesById[4352] = "CMD_LOGIN_REQ"] = 4352;
            values[valuesById[4353] = "CMD_LOGIN_RSP"] = 4353;
            values[valuesById[4355] = "CMD_KICK_NOTICE"] = 4355;
            values[valuesById[4357] = "CMD_AUTH_FAIL_NOTICE"] = 4357;
            values[valuesById[4624] = "CMD_CHANGE_SCENE_REQ"] = 4624;
            values[valuesById[4625] = "CMD_CHANGE_SCENE_RSP"] = 4625;
            values[valuesById[4640] = "CMD_QUERY_INSTANCE_LIST_REQ"] = 4640;
            values[valuesById[4641] = "CMD_QUERY_INSTANCE_LIST_RSP"] = 4641;
            values[valuesById[4642] = "CMD_ENTER_INSTANCE_REQ"] = 4642;
            values[valuesById[4643] = "CMD_ENTER_INSTANCE_RSP"] = 4643;
            values[valuesById[4644] = "CMD_LEAVE_INSTANCE_REQ"] = 4644;
            values[valuesById[4645] = "CMD_LEAVE_INSTANCE_RSP"] = 4645;
            values[valuesById[4646] = "CMD_PASS_INSTANCE_REQ"] = 4646;
            values[valuesById[4647] = "CMD_PASS_INSTANCE_RSP"] = 4647;
            values[valuesById[4648] = "CMD_REFRESH_TODAY_CHALL_HISTORY_REQ"] = 4648;
            values[valuesById[4649] = "CMD_REFRESH_TODAY_CHALL_HISTORY_RSP"] = 4649;
            values[valuesById[4650] = "CMD_SWEEP_INSTANCE_REQ"] = 4650;
            values[valuesById[4651] = "CMD_SWEEP_INSTANCE_RSP"] = 4651;
            values[valuesById[4769] = "CMD_CHANGE_SCENE_NOTICE"] = 4769;
            values[valuesById[4771] = "CMD_UPDATE_SCENE_NOTICE"] = 4771;
            values[valuesById[4784] = "CMD_MOVE_REQ"] = 4784;
            values[valuesById[4785] = "CMD_MOVE_NOTICE"] = 4785;
            values[valuesById[4864] = "CMD_QUERY_PACK_REQ"] = 4864;
            values[valuesById[4865] = "CMD_QUERY_PACK_RSP"] = 4865;
            values[valuesById[4878] = "CMD_TIDY_PACK_REQ"] = 4878;
            values[valuesById[4879] = "CMD_TIDY_PACK_RSP"] = 4879;
            values[valuesById[4898] = "CMD_USE_ITEM_REQ"] = 4898;
            values[valuesById[4899] = "CMD_USE_ITEM_RSP"] = 4899;
            values[valuesById[4900] = "CMD_SELL_ITEM_REQ"] = 4900;
            values[valuesById[4901] = "CMD_SELL_ITEM_RSP"] = 4901;
            values[valuesById[4902] = "CMD_BUY_ITEM_REQ"] = 4902;
            values[valuesById[4903] = "CMD_BUY_ITEM_RSP"] = 4903;
            values[valuesById[4904] = "CMD_COMPOSITE_ALL_ITEM_REQ"] = 4904;
            values[valuesById[4905] = "CMD_COMPOSITE_ALL_ITEM_RSP"] = 4905;
            values[valuesById[4912] = "CMD_USE_MULTIPLE_ITEM_REQ"] = 4912;
            values[valuesById[4913] = "CMD_USE_MULTIPLE_ITEM_RSP"] = 4913;
            values[valuesById[4914] = "CMD_QUERY_MULTIPLE_ITEM_STATE_REQ"] = 4914;
            values[valuesById[4915] = "CMD_QUERY_MULTIPLE_ITEM_STATE_RSP"] = 4915;
            values[valuesById[4928] = "CMD_QUERY_COLLECTION_LIST_REQ"] = 4928;
            values[valuesById[4929] = "CMD_QUERY_COLLECTION_LIST_RSP"] = 4929;
            values[valuesById[4930] = "CMD_EXCHANGE_TREASURE_REQ"] = 4930;
            values[valuesById[4931] = "CMD_EXCHANGE_TREASURE_RSP"] = 4931;
            values[valuesById[4944] = "CMD_QUERY_COLLECTION_SHOP_REQ"] = 4944;
            values[valuesById[4945] = "CMD_QUERY_COLLECTION_SHOP_RSP"] = 4945;
            values[valuesById[4946] = "CMD_BUY_COLLECTION_SHOP_GOODS_REQ"] = 4946;
            values[valuesById[4947] = "CMD_BUY_COLLECTION_SHOP_GOODS_RSP"] = 4947;
            values[valuesById[4948] = "CMD_REFRESH_COLLECTION_SHOP_REQ"] = 4948;
            values[valuesById[4949] = "CMD_REFRESH_COLLECTION_SHOP_RSP"] = 4949;
            values[valuesById[4960] = "CMD_COLLECTION_DATA_REQ"] = 4960;
            values[valuesById[4961] = "CMD_COLLECTION_DATA_RSP"] = 4961;
            values[valuesById[5024] = "CMD_UPGRADE_EQUIP_REQ"] = 5024;
            values[valuesById[5025] = "CMD_UPGRADE_EQUIP_RSP"] = 5025;
            values[valuesById[5026] = "CMD_INLAY_GEM_REQ"] = 5026;
            values[valuesById[5027] = "CMD_INLAY_GEM_RSP"] = 5027;
            values[valuesById[5028] = "CMD_ADD_EQUIP_STAR_REQ"] = 5028;
            values[valuesById[5029] = "CMD_ADD_EQUIP_STAR_RSP"] = 5029;
            values[valuesById[5040] = "CMD_PUT_ON_EQUIP_REQ"] = 5040;
            values[valuesById[5041] = "CMD_PUT_ON_EQUIP_RSP"] = 5041;
            values[valuesById[5042] = "CMD_TAKE_OFF_EQUIP_REQ"] = 5042;
            values[valuesById[5043] = "CMD_TAKE_OFF_EQUIP_RSP"] = 5043;
            values[valuesById[5044] = "CMD_ADVANCED_EQUIP_REQ"] = 5044;
            values[valuesById[5045] = "CMD_ADVANCED_EQUIP_RSP"] = 5045;
            values[valuesById[5046] = "CMD_UPGRADE_GEM_REQ"] = 5046;
            values[valuesById[5047] = "CMD_UPGRADE_GEM_RSP"] = 5047;
            values[valuesById[5048] = "CMD_EXCHANGE_ITEM_REQ"] = 5048;
            values[valuesById[5049] = "CMD_EXCHANGE_ITEM_RSP"] = 5049;
            values[valuesById[5050] = "CMD_CHECK_PACK_FULL_REQ"] = 5050;
            values[valuesById[5051] = "CMD_CHECK_PACK_FULL_RSP"] = 5051;
            values[valuesById[5052] = "CMD_DECOMPOSITION_ITEM_REQ"] = 5052;
            values[valuesById[5053] = "CMD_DECOMPOSITION_ITEM_RSP"] = 5053;
            values[valuesById[5120] = "CMD_ROLE_DIE_NOTICE_REQ"] = 5120;
            values[valuesById[5121] = "CMD_ROLE_DIE_NOTICE_RSP"] = 5121;
            values[valuesById[5122] = "CMD_QUERY_HERO_INFO_REQ"] = 5122;
            values[valuesById[5123] = "CMD_QUERY_HERO_INFO_RSP"] = 5123;
            values[valuesById[5378] = "CMD_UPGRADE_SKILL_REQ"] = 5378;
            values[valuesById[5379] = "CMD_UPGRADE_SKILL_RSP"] = 5379;
            values[valuesById[5380] = "CMD_ADVANCED_SKILL_REQ"] = 5380;
            values[valuesById[5381] = "CMD_ADVANCED_SKILL_RSP"] = 5381;
            values[valuesById[5382] = "CMD_QUERY_SKILL_POINT_REQ"] = 5382;
            values[valuesById[5383] = "CMD_QUERY_SKILL_POINT_RSP"] = 5383;
            values[valuesById[5384] = "CMD_BUY_SKILL_POINT_REQ"] = 5384;
            values[valuesById[5385] = "CMD_BUY_SKILL_POINT_RSP"] = 5385;
            values[valuesById[5888] = "CMD_QUERY_ARENA_INFO_REQ"] = 5888;
            values[valuesById[5889] = "CMD_QUERY_ARENA_INFO_RSP"] = 5889;
            values[valuesById[5890] = "CMD_ARENA_FIGHT_REQ"] = 5890;
            values[valuesById[5891] = "CMD_ARENA_FIGHT_RSP"] = 5891;
            values[valuesById[5892] = "CMD_CLEAR_ARENA_CD_REQ"] = 5892;
            values[valuesById[5893] = "CMD_CLEAR_ARENA_CD_RSP"] = 5893;
            values[valuesById[5894] = "CMD_RESET_ARENA_CHANLLENGE_REQ"] = 5894;
            values[valuesById[5895] = "CMD_RESET_ARENA_CHANLLENGE_RSP"] = 5895;
            values[valuesById[5904] = "CMD_QUERY_TOURNAMENT_INFO_REQ"] = 5904;
            values[valuesById[5905] = "CMD_QUERY_TOURNAMENT_INFO_RSP"] = 5905;
            values[valuesById[5906] = "CMD_OCCUPY_TOURNAMENT_RANK_REQ"] = 5906;
            values[valuesById[5907] = "CMD_OCCUPY_TOURNAMENT_RANK_RSP"] = 5907;
            values[valuesById[5920] = "CMD_QUERY_HEROS_FORMATIONS_REQ"] = 5920;
            values[valuesById[5921] = "CMD_QUERY_HEROS_FORMATIONS_RSP"] = 5921;
            values[valuesById[5922] = "CMD_ROB_AWARD_REQ"] = 5922;
            values[valuesById[5923] = "CMD_ROB_AWARD_RSP"] = 5923;
            values[valuesById[5924] = "CMD_QUERY_NEARBY_PLAYERS_REQ"] = 5924;
            values[valuesById[5925] = "CMD_QUERY_NEARBY_PLAYERS_RSP"] = 5925;
            values[valuesById[5926] = "CMD_REFRESH_NEARBY_PLAYERS_REQ"] = 5926;
            values[valuesById[5927] = "CMD_REFRESH_NEARBY_PLAYERS_RSP"] = 5927;
            values[valuesById[6144] = "CMD_QUERY_FRIEND_LIST_REQ"] = 6144;
            values[valuesById[6145] = "CMD_QUERY_FRIEND_LIST_RSP"] = 6145;
            values[valuesById[6146] = "CMD_ADD_FRIEND_REQ"] = 6146;
            values[valuesById[6147] = "CMD_ADD_FRIEND_RSP"] = 6147;
            values[valuesById[6148] = "CMD_REMOVE_FRIEND_REQ"] = 6148;
            values[valuesById[6149] = "CMD_REMOVE_FRIEND_RSP"] = 6149;
            values[valuesById[6150] = "CMD_CHECK_FRIEND_ADDED_REQ"] = 6150;
            values[valuesById[6151] = "CMD_CHECK_FRIEND_ADDED_RSP"] = 6151;
            values[valuesById[6160] = "CMD_QUERY_MOMO_COUNT_REQ"] = 6160;
            values[valuesById[6161] = "CMD_QUERY_MOMO_COUNT_RSP"] = 6161;
            values[valuesById[6162] = "CMD_MOMO_FRIEND_REQ"] = 6162;
            values[valuesById[6163] = "CMD_MOMO_FRIEND_RSP"] = 6163;
            values[valuesById[6164] = "CMD_MOMO_AWARD_REQ"] = 6164;
            values[valuesById[6165] = "CMD_MOMO_AWARD_RSP"] = 6165;
            values[valuesById[6166] = "CMD_MOMO_AWARD_NOTICE"] = 6166;
            values[valuesById[6167] = "CMD_REMOVE_FRIEND_LIST_REQ"] = 6167;
            values[valuesById[6168] = "CMD_REMOVE_FRIEND_LIST_RSP"] = 6168;
            values[valuesById[6400] = "CMD_MISSION_ACCEPT_REQ"] = 6400;
            values[valuesById[6401] = "CMD_MISSION_ACCEPT_RSP"] = 6401;
            values[valuesById[6402] = "CMD_MISSION_AWARD_REQ"] = 6402;
            values[valuesById[6403] = "CMD_MISSION_AWARD_RSP"] = 6403;
            values[valuesById[6404] = "CMD_QUERY_CHALL_MISSION_REQ"] = 6404;
            values[valuesById[6405] = "CMD_QUERY_CHALL_MISSION_RSP"] = 6405;
            values[valuesById[6464] = "CMD_ACCEPT_DAILY_MISSION_REQ"] = 6464;
            values[valuesById[6465] = "CMD_ACCEPT_DAILY_MISSION_RSP"] = 6465;
            values[valuesById[6468] = "CMD_QUERY_DAILY_MISSION_REQ"] = 6468;
            values[valuesById[6469] = "CMD_QUERY_DAILY_MISSION_RSP"] = 6469;
            values[valuesById[6470] = "CMD_AWARD_DAILY_MISSION_REQ"] = 6470;
            values[valuesById[6471] = "CMD_AWARD_DAILY_MISSION_RSP"] = 6471;
            values[valuesById[6472] = "CMD_RESET_DAILY_MISSION_REQ"] = 6472;
            values[valuesById[6473] = "CMD_RESET_DAILY_MISSION_RSP"] = 6473;
            values[valuesById[6496] = "CMD_QUERY_ACTIVITY_REQ"] = 6496;
            values[valuesById[6497] = "CMD_QUERY_ACTIVITY_RSP"] = 6497;
            values[valuesById[6498] = "CMD_AWARD_ACTIVITY_REQ"] = 6498;
            values[valuesById[6499] = "CMD_AWARD_ACTIVITY_RSP"] = 6499;
            values[valuesById[6656] = "CMD_QUERY_TERRITORY_REQ"] = 6656;
            values[valuesById[6657] = "CMD_QUERY_TERRITORY_RSP"] = 6657;
            values[valuesById[6658] = "CMD_UNLOCK_TERRITORY_CELL_REQ"] = 6658;
            values[valuesById[6659] = "CMD_UNLOCK_TERRITORY_CELL_RSP"] = 6659;
            values[valuesById[6660] = "CMD_COLLECT_TERRITORY_REQ"] = 6660;
            values[valuesById[6661] = "CMD_COLLECT_TERRITORY_RSP"] = 6661;
            values[valuesById[6662] = "CMD_COLLECT_CELL_REQ"] = 6662;
            values[valuesById[6663] = "CMD_COLLECT_CELL_RSP"] = 6663;
            values[valuesById[6664] = "CMD_JUMP_FORWARD_REQ"] = 6664;
            values[valuesById[6665] = "CMD_JUMP_FORWARD_RSP"] = 6665;
            values[valuesById[6672] = "CMD_UPGRADE_TERRITORY_CELL_REQ"] = 6672;
            values[valuesById[6673] = "CMD_UPGRADE_TERRITORY_CELL_RSP"] = 6673;
            values[valuesById[6674] = "CMD_OCCUPY_TERRITORY_HERO_CELL_REQ"] = 6674;
            values[valuesById[6675] = "CMD_OCCUPY_TERRITORY_HERO_CELL_RSP"] = 6675;
            values[valuesById[6678] = "CMD_COLLECT_SUPPER_CELL_REQ"] = 6678;
            values[valuesById[6679] = "CMD_COLLECT_SUPPER_CELL_RSP"] = 6679;
            values[valuesById[6680] = "CMD_SUPPER_TERR_FIGHT_REQ"] = 6680;
            values[valuesById[6681] = "CMD_SUPPER_TERR_FIGHT_RSP"] = 6681;
            values[valuesById[6682] = "CMD_QUERY_SUPPER_TERR_REQ"] = 6682;
            values[valuesById[6683] = "CMD_QUERY_SUPPER_TERR_RSP"] = 6683;
            values[valuesById[6684] = "CMD_UNOCCUPY_TERRITORY_HERO_CELL_REQ"] = 6684;
            values[valuesById[6685] = "CMD_UNOCCUPY_TERRITORY_HERO_CELL_RSP"] = 6685;
            values[valuesById[6686] = "CMD_CHANGE_TERR_HERO_OCCUPANT_REQ"] = 6686;
            values[valuesById[6687] = "CMD_CHANGE_TERR_HERO_OCCUPANT_RSP"] = 6687;
            values[valuesById[6688] = "CMD_TERR_ROB_AWARD_REQ"] = 6688;
            values[valuesById[6689] = "CMD_TERR_ROB_AWARD_RSP"] = 6689;
            values[valuesById[6690] = "CMD_LOCK_TERR_STALL_REQ"] = 6690;
            values[valuesById[6691] = "CMD_LOCK_TERR_STALL_RSP"] = 6691;
            values[valuesById[6692] = "CMD_FRESH_TERR_STALL_QUALITY_REQ"] = 6692;
            values[valuesById[6693] = "CMD_FRESH_TERR_STALL_QUALITY_RSP"] = 6693;
            values[valuesById[6694] = "CMD_OCCUPY_TERR_STALL_REQ"] = 6694;
            values[valuesById[6695] = "CMD_OCCUPY_TERR_STALL_RSP"] = 6695;
            values[valuesById[6696] = "CMD_QUERY_GROUP_STALL_REQ"] = 6696;
            values[valuesById[6697] = "CMD_QUERY_GROUP_STALL_RSP"] = 6697;
            values[valuesById[6698] = "CMD_INVITE_TERR_STALL_DEFENDER_REQ"] = 6698;
            values[valuesById[6699] = "CMD_INVITE_TERR_STALL_DEFENDER_RSP"] = 6699;
            values[valuesById[6700] = "CMD_QUERY_TERR_STALL_INFO_REQ"] = 6700;
            values[valuesById[6701] = "CMD_QUERY_TERR_STALL_INFO_RSP"] = 6701;
            values[valuesById[6702] = "CMD_QUERY_TERR_STALL_INVITE_INFO_REQ"] = 6702;
            values[valuesById[6703] = "CMD_QUERY_TERR_STALL_INVITE_INFO_RSP"] = 6703;
            values[valuesById[6704] = "CMD_RESPONSE_TERR_STALL_DEFENDER_REQ"] = 6704;
            values[valuesById[6705] = "CMD_RESPONSE_TERR_STALL_DEFENDER_RSP"] = 6705;
            values[valuesById[6706] = "CMD_ROB_TERR_STALL_REQ"] = 6706;
            values[valuesById[6707] = "CMD_ROB_TERR_STALL_RSP"] = 6707;
            values[valuesById[6708] = "CMD_QUERY_ROBBED_TERR_STALL_LOG_REQ"] = 6708;
            values[valuesById[6709] = "CMD_QUERY_ROBBED_TERR_STALL_LOG_RSP"] = 6709;
            values[valuesById[6710] = "CMD_RESPONSE_TERR_STALL_HELP_REQ"] = 6710;
            values[valuesById[6711] = "CMD_RESPONSE_TERR_STALL_HELP_RSP"] = 6711;
            values[valuesById[6712] = "CMD_BUY_TERR_STALL_COUNT_REQ"] = 6712;
            values[valuesById[6713] = "CMD_BUY_TERR_STALL_COUNT_RSP"] = 6713;
            values[valuesById[6715] = "CMD_INVITE_INFO_NOTICE"] = 6715;
            values[valuesById[6716] = "CMD_QUERY_ALL_TERR_STALL_STATE_REQ"] = 6716;
            values[valuesById[6717] = "CMD_QUERY_ALL_TERR_STALL_STATE_RSP"] = 6717;
            values[valuesById[6718] = "CMD_CANCEL_TERR_STALL_HELP_REQ"] = 6718;
            values[valuesById[6719] = "CMD_CANCEL_TERR_STALL_HELP_RSP"] = 6719;
            values[valuesById[6720] = "CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_REQ"] = 6720;
            values[valuesById[6721] = "CMD_QUERY_TERR_STALL_LEFT_BUY_COUNT_RSP"] = 6721;
            values[valuesById[6723] = "CMD_RESPONSE_DEFEND_INFO_NOTICE"] = 6723;
            values[valuesById[6725] = "CMD_RESPONSE_HELP_INFO_NOTICE"] = 6725;
            values[valuesById[6726] = "CMD_QUERY_ALL_TERR_COUNT_REQ"] = 6726;
            values[valuesById[6727] = "CMD_QUERY_ALL_TERR_COUNT_RSP"] = 6727;
            values[valuesById[6728] = "CMD_CHECK_TERR_STALL_INVITE_INFO_REQ"] = 6728;
            values[valuesById[6729] = "CMD_CHECK_TERR_STALL_INVITE_INFO_RSP"] = 6729;
            values[valuesById[6737] = "CMD_ROB_NOTICE"] = 6737;
            values[valuesById[6739] = "CMD_STALL_FINISH_BY_ROBBED_NOTICE"] = 6739;
            values[valuesById[6915] = "CMD_CHAT_NOTICE"] = 6915;
            values[valuesById[7425] = "CMD_QUERY_RANK_TABLE_REQ"] = 7425;
            values[valuesById[7426] = "CMD_QUERY_RANK_TABLE_RSP"] = 7426;
            values[valuesById[7427] = "CMD_QUERY_EGG_RANK_CONFIG_REQ"] = 7427;
            values[valuesById[7428] = "CMD_QUERY_EGG_RANK_CONFIG_RSP"] = 7428;
            values[valuesById[7429] = "CMD_QUERY_EGG_ROBOT_RANK_REQ"] = 7429;
            values[valuesById[7430] = "CMD_QUERY_EGG_ROBOT_RANK_RSP"] = 7430;
            values[valuesById[7680] = "CMD_QUERY_HERO_REQ"] = 7680;
            values[valuesById[7681] = "CMD_QUERY_HERO_RSP"] = 7681;
            values[valuesById[7682] = "CMD_UNLOCK_HERO_REQ"] = 7682;
            values[valuesById[7683] = "CMD_UNLOCK_HERO_RSP"] = 7683;
            values[valuesById[7684] = "CMD_TRANSFORM_HERO_REQ"] = 7684;
            values[valuesById[7685] = "CMD_TRANSFORM_HERO_RSP"] = 7685;
            values[valuesById[7686] = "CMD_CLEAR_TRANSFORM_CD_REQ"] = 7686;
            values[valuesById[7687] = "CMD_CLEAR_TRANSFORM_CD_RSP"] = 7687;
            values[valuesById[7688] = "CMD_TRANSFORM_HERO_BY_CARD_REQ"] = 7688;
            values[valuesById[7689] = "CMD_TRANSFORM_HERO_BY_CARD_RSP"] = 7689;
            values[valuesById[7696] = "CMD_ADVANCED_HERO_REQ"] = 7696;
            values[valuesById[7697] = "CMD_ADVANCED_HERO_RSP"] = 7697;
            values[valuesById[7698] = "CMD_ADD_HERO_STAR_REQ"] = 7698;
            values[valuesById[7699] = "CMD_ADD_HERO_STAR_RSP"] = 7699;
            values[valuesById[7700] = "CMD_QUERY_HERO_COMBINATION_REQ"] = 7700;
            values[valuesById[7701] = "CMD_QUERY_HERO_COMBINATION_RSP"] = 7701;
            values[valuesById[7702] = "CMD_ACTIVE_HERO_COMBINATION_REQ"] = 7702;
            values[valuesById[7703] = "CMD_ACTIVE_HERO_COMBINATION_RSP"] = 7703;
            values[valuesById[7704] = "CMD_LEVUP_HERO_COMBINATION_REQ"] = 7704;
            values[valuesById[7705] = "CMD_LEVUP_HERO_COMBINATION_RSP"] = 7705;
            values[valuesById[7712] = "CMD_QUERY_FELLOW_REQ"] = 7712;
            values[valuesById[7713] = "CMD_QUERY_FELLOW_RSP"] = 7713;
            values[valuesById[7714] = "CMD_SET_FELLOW_REQ"] = 7714;
            values[valuesById[7715] = "CMD_SET_FELLOW_RSP"] = 7715;
            values[valuesById[7716] = "CMD_UNLOCK_FELLOW_CELL_REQ"] = 7716;
            values[valuesById[7717] = "CMD_UNLOCK_FELLOW_CELL_RSP"] = 7717;
            values[valuesById[7718] = "CMD_TAKE_OFF_FELLOW_REQ"] = 7718;
            values[valuesById[7719] = "CMD_TAKE_OFF_FELLOW_RSP"] = 7719;
            values[valuesById[7728] = "CMD_TRANSFER_HERO_EXP_REQ"] = 7728;
            values[valuesById[7729] = "CMD_TRANSFER_HERO_EXP_RSP"] = 7729;
            values[valuesById[7744] = "CMD_QUERY_HERO_NUMERIC_REQ"] = 7744;
            values[valuesById[7745] = "CMD_QUERY_HERO_NUMERIC_RSP"] = 7745;
            values[valuesById[7746] = "CMD_REVERT_HERO_ADVANCED_REQ"] = 7746;
            values[valuesById[7747] = "CMD_REVERT_HERO_ADVANCED_RSP"] = 7747;
            values[valuesById[7748] = "CMD_AWAKE_LEV_UP_REQ"] = 7748;
            values[valuesById[7749] = "CMD_AWAKE_LEV_UP_RSP"] = 7749;
            values[valuesById[7750] = "CMD_AWAKE_HERO_REQ"] = 7750;
            values[valuesById[7751] = "CMD_AWAKE_HERO_RSP"] = 7751;
            values[valuesById[7752] = "CMD_CONSTELLATION_LEV_UP_REQ"] = 7752;
            values[valuesById[7753] = "CMD_CONSTELLATION_LEV_UP_RSP"] = 7753;
            values[valuesById[7754] = "CMD_QUERY_CONSTELLATION_INFO_REQ"] = 7754;
            values[valuesById[7755] = "CMD_QUERY_CONSTELLATION_INFO_RSP"] = 7755;
            values[valuesById[7756] = "CMD_INSTALL_CONSTELLATION_HERO_REQ"] = 7756;
            values[valuesById[7757] = "CMD_INSTALL_CONSTELLATION_HERO_RSP"] = 7757;
            values[valuesById[7758] = "CMD_SET_HERO_BUFFER_ID_REQ"] = 7758;
            values[valuesById[7759] = "CMD_SET_HERO_BUFFER_ID_RSP"] = 7759;
            values[valuesById[7760] = "CMD_UNINSTALL_CONSTELLATION_HERO_REQ"] = 7760;
            values[valuesById[7761] = "CMD_UNINSTALL_CONSTELLATION_HERO_RSP"] = 7761;
            values[valuesById[7762] = "CMD_REBORN_HERO_REQ"] = 7762;
            values[valuesById[7763] = "CMD_REBORN_HERO_RSP"] = 7763;
            values[valuesById[7764] = "CMD_QUERY_DIVINE_SOUL_SHOP_REQ"] = 7764;
            values[valuesById[7765] = "CMD_QUERY_DIVINE_SOUL_SHOP_RSP"] = 7765;
            values[valuesById[7766] = "CMD_BUY_DIVINE_SOUL_SHOP_REQ"] = 7766;
            values[valuesById[7767] = "CMD_BUY_DIVINE_SOUL_SHOP_RSP"] = 7767;
            values[valuesById[7768] = "CMD_FRESH_DIVINE_SOUL_SHOP_REQ"] = 7768;
            values[valuesById[7769] = "CMD_FRESH_DIVINE_SOUL_SHOP_RSP"] = 7769;
            values[valuesById[7936] = "CMD_BUY_SP_REQ"] = 7936;
            values[valuesById[7937] = "CMD_BUY_SP_RSP"] = 7937;
            values[valuesById[7938] = "CMD_QUERY_SP_UPDATE_CD_REQ"] = 7938;
            values[valuesById[7939] = "CMD_QUERY_SP_UPDATE_CD_RSP"] = 7939;
            values[valuesById[8192] = "CMD_AWARD_DAILY_LOGIN_REQ"] = 8192;
            values[valuesById[8193] = "CMD_AWARD_DAILY_LOGIN_RSP"] = 8193;
            values[valuesById[8194] = "CMD_QUERY_DAILY_AWARD_INFO_REQ"] = 8194;
            values[valuesById[8195] = "CMD_QUERY_DAILY_AWARD_INFO_RSP"] = 8195;
            values[valuesById[8196] = "CMD_AWARD_ONLINE_REQ"] = 8196;
            values[valuesById[8197] = "CMD_AWARD_ONLINE_RSP"] = 8197;
            values[valuesById[8198] = "CMD_QUERY_ONLINE_REQ"] = 8198;
            values[valuesById[8199] = "CMD_QUERY_ONLINE_RSP"] = 8199;
            values[valuesById[8200] = "CMD_UNLOCK_ONLINE_NOTICE"] = 8200;
            values[valuesById[8208] = "CMD_QUERY_SIGN_AWARD_INFO_REQ"] = 8208;
            values[valuesById[8209] = "CMD_QUERY_SIGN_AWARD_INFO_RSP"] = 8209;
            values[valuesById[8210] = "CMD_AWARD_SIGN_REQ"] = 8210;
            values[valuesById[8211] = "CMD_AWARD_SIGN_RSP"] = 8211;
            values[valuesById[8212] = "CMD_SUPPLEMENT_SIGN_AWARD_REQ"] = 8212;
            values[valuesById[8213] = "CMD_SUPPLEMENT_SIGN_AWARD_RSP"] = 8213;
            values[valuesById[8214] = "CMD_CUMULATIVE_SIGN_AWARD_REQ"] = 8214;
            values[valuesById[8215] = "CMD_CUMULATIVE_SIGN_AWARD_RSP"] = 8215;
            values[valuesById[8448] = "CMD_OPEN_MOCK_EXAM_REQ"] = 8448;
            values[valuesById[8449] = "CMD_OPEN_MOCK_EXAM_RSP"] = 8449;
            values[valuesById[8450] = "CMD_OPEN_CURRENT_PROBLEM_REQ"] = 8450;
            values[valuesById[8451] = "CMD_OPEN_CURRENT_PROBLEM_RSP"] = 8451;
            values[valuesById[8452] = "CMD_SUBMIT_PROBLEM_ANWSER_REQ"] = 8452;
            values[valuesById[8453] = "CMD_SUBMIT_PROBLEM_ANWSER_RSP"] = 8453;
            values[valuesById[8456] = "CMD_AWARD_MOCK_EXAM_REQ"] = 8456;
            values[valuesById[8457] = "CMD_AWARD_MOCK_EXAM_RSP"] = 8457;
            values[valuesById[8704] = "CMD_AWARD_RECHARGE_REQ"] = 8704;
            values[valuesById[8705] = "CMD_AWARD_RECHARGE_RSP"] = 8705;
            values[valuesById[8706] = "CMD_QUERY_RECHARGE_AWARDED_LIST_REQ"] = 8706;
            values[valuesById[8707] = "CMD_QUERY_RECHARGE_AWARDED_LIST_RSP"] = 8707;
            values[valuesById[8708] = "CMD_QUERY_RECHARGE_AWARD_INFO_REQ"] = 8708;
            values[valuesById[8709] = "CMD_QUERY_RECHARGE_AWARD_INFO_RSP"] = 8709;
            values[valuesById[8710] = "CMD_QUERY_RECHARGE_INFO_REQ"] = 8710;
            values[valuesById[8711] = "CMD_QUERY_RECHARGE_INFO_RSP"] = 8711;
            values[valuesById[8713] = "CMD_RECHARGE_NOTICE"] = 8713;
            values[valuesById[8720] = "CMD_OPEN_SANDBAGS_WAR_REQ"] = 8720;
            values[valuesById[8721] = "CMD_OPEN_SANDBAGS_WAR_RSP"] = 8721;
            values[valuesById[8724] = "CMD_FINISH_SANDBAGS_WAR_REQ"] = 8724;
            values[valuesById[8725] = "CMD_FINISH_SANDBAGS_WAR_RSP"] = 8725;
            values[valuesById[8736] = "CMD_QUERY_EVERY_ACTIVITY_STATE_REQ"] = 8736;
            values[valuesById[8737] = "CMD_QUERY_EVERY_ACTIVITY_STATE_RSP"] = 8737;
            values[valuesById[8752] = "CMD_USE_PRINTING_PRESS_REQ"] = 8752;
            values[valuesById[8753] = "CMD_USE_PRINTING_PRESS_RSP"] = 8753;
            values[valuesById[8754] = "CMD_QUERY_PRINTING_PRESS_REQ"] = 8754;
            values[valuesById[8755] = "CMD_QUERY_PRINTING_PRESS_RSP"] = 8755;
            values[valuesById[8768] = "CMD_QUERY_DM_COUNT_REQ"] = 8768;
            values[valuesById[8769] = "CMD_QUERY_DM_COUNT_RSP"] = 8769;
            values[valuesById[8770] = "CMD_SEND_DM_MESSAGE_REQ"] = 8770;
            values[valuesById[8771] = "CMD_SEND_DM_MESSAGE_RSP"] = 8771;
            values[valuesById[8800] = "CMD_QUERY_CLIMB_TOWER_INFO_REQ"] = 8800;
            values[valuesById[8801] = "CMD_QUERY_CLIMB_TOWER_INFO_RSP"] = 8801;
            values[valuesById[8802] = "CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_REQ"] = 8802;
            values[valuesById[8803] = "CMD_CHANGE_CLIMB_TOWER_HERO_ORDER_RSP"] = 8803;
            values[valuesById[8804] = "CMD_INTO_CLIMB_TOWER_INSTANCE_REQ"] = 8804;
            values[valuesById[8805] = "CMD_INTO_CLIMB_TOWER_INSTANCE_RSP"] = 8805;
            values[valuesById[8806] = "CMD_LEAVE_CLIMB_TOWER_INSTANCE_REQ"] = 8806;
            values[valuesById[8807] = "CMD_LEAVE_CLIMB_TOWER_INSTANCE_RSP"] = 8807;
            values[valuesById[8816] = "CMD_BUY_CLIMB_TOWER_COUNT_REQ"] = 8816;
            values[valuesById[8817] = "CMD_BUY_CLIMB_TOWER_COUNT_RSP"] = 8817;
            values[valuesById[8818] = "CMD_RECORD_HERO_DEATH_REQ"] = 8818;
            values[valuesById[8819] = "CMD_RECORD_HERO_DEATH_RSP"] = 8819;
            values[valuesById[8820] = "CMD_AWARD_CLIMB_TOWER_ITEM_DROP_REQ"] = 8820;
            values[valuesById[8821] = "CMD_AWARD_CLIMB_TOWER_ITEM_DROP_RSP"] = 8821;
            values[valuesById[8822] = "CMD_QUERY_LAYER_MONSTER_REQ"] = 8822;
            values[valuesById[8823] = "CMD_QUERY_LAYER_MONSTER_RSP"] = 8823;
            values[valuesById[8848] = "CMD_QUERY_AWARD_MSG_REQ"] = 8848;
            values[valuesById[8849] = "CMD_QUERY_AWARD_MSG_RSP"] = 8849;
            values[valuesById[8850] = "CMD_DO_MSG_AWARD_REQ"] = 8850;
            values[valuesById[8851] = "CMD_DO_MSG_AWARD_RSP"] = 8851;
            values[valuesById[8852] = "CMD_AWARD_MSG_NOTICE"] = 8852;
            values[valuesById[8864] = "CMD_QUERY_INTER_MSG_REQ"] = 8864;
            values[valuesById[8865] = "CMD_QUERY_INTER_MSG_RSP"] = 8865;
            values[valuesById[8866] = "CMD_DEL_TOP_INTER_MSG_REQ"] = 8866;
            values[valuesById[8867] = "CMD_DEL_TOP_INTER_MSG_RSP"] = 8867;
            values[valuesById[8868] = "CMD_INTER_MSG_NOTICE"] = 8868;
            values[valuesById[8880] = "CMD_ROLL_MSG_NOTICE"] = 8880;
            values[valuesById[8898] = "CMD_QUERY_ROLE_ACTION_REMAIN_CD_REQ"] = 8898;
            values[valuesById[8899] = "CMD_QUERY_ROLE_ACTION_REMAIN_CD_RSP"] = 8899;
            values[valuesById[8900] = "CMD_QUERY_ACTIVITY_BULLETIN_MSG_REQ"] = 8900;
            values[valuesById[8901] = "CMD_QUERY_ACTIVITY_BULLETIN_MSG_RSP"] = 8901;
            values[valuesById[8912] = "CMD_REVIVE_IN_INSTANCE_REQ"] = 8912;
            values[valuesById[8913] = "CMD_REVIVE_IN_INSTANCE_RSP"] = 8913;
            values[valuesById[8928] = "CMD_QUERY_ROLE_INFO_REQ"] = 8928;
            values[valuesById[8929] = "CMD_QUERY_ROLE_INFO_RSP"] = 8929;
            values[valuesById[8930] = "CMD_UPDATE_ROLE_INFO_NOTICE"] = 8930;
            values[valuesById[8944] = "CMD_QUERY_PVP_HERO_LIST_REQ"] = 8944;
            values[valuesById[8945] = "CMD_QUERY_PVP_HERO_LIST_RSP"] = 8945;
            values[valuesById[8948] = "CMD_EXCHANGE_FIGHT_HERO_REQ"] = 8948;
            values[valuesById[8949] = "CMD_EXCHANGE_FIGHT_HERO_RSP"] = 8949;
            values[valuesById[8950] = "CMD_PVP_FIGHT_START_REQ"] = 8950;
            values[valuesById[8951] = "CMD_PVP_FIGHT_START_RSP"] = 8951;
            values[valuesById[8952] = "CMD_REVIVE_PVP_HERO_REQ"] = 8952;
            values[valuesById[8953] = "CMD_REVIVE_PVP_HERO_RSP"] = 8953;
            values[valuesById[8960] = "CMD_BUY_LOTTERY_SPECIAL_GOODS_REQ"] = 8960;
            values[valuesById[8961] = "CMD_BUY_LOTTERY_SPECIAL_GOODS_RSP"] = 8961;
            values[valuesById[8962] = "CMD_QUERY_LOTTERY_SPECIAL_GOODS_REQ"] = 8962;
            values[valuesById[8963] = "CMD_QUERY_LOTTERY_SPECIAL_GOODS_RSP"] = 8963;
            values[valuesById[8976] = "CMD_BUY_LOTTERY_REQ"] = 8976;
            values[valuesById[8977] = "CMD_BUY_LOTTERY_RSP"] = 8977;
            values[valuesById[8978] = "CMD_QUERY_LOTTERY_SHOP_REQ"] = 8978;
            values[valuesById[8979] = "CMD_QUERY_LOTTERY_SHOP_RSP"] = 8979;
            values[valuesById[8980] = "CMD_EXCHANGE_LOTTERY_SHOP_GOODS_REQ"] = 8980;
            values[valuesById[8981] = "CMD_EXCHANGE_LOTTERY_SHOP_GOODS_RSP"] = 8981;
            values[valuesById[8982] = "CMD_QUERY_LOTTERY_INFO_REQ"] = 8982;
            values[valuesById[8983] = "CMD_QUERY_LOTTERY_INFO_RSP"] = 8983;
            values[valuesById[8984] = "CMD_LOTTERY_LUCKY_DRAGON_REQ"] = 8984;
            values[valuesById[8985] = "CMD_LOTTERY_LUCKY_DRAGON_RSP"] = 8985;
            values[valuesById[8992] = "CMD_QUERY_LUCKY_DRAGON_REQ"] = 8992;
            values[valuesById[8993] = "CMD_QUERY_LUCKY_DRAGON_RSP"] = 8993;
            values[valuesById[8994] = "CMD_LOTTERY_DRAGON_BALL_REQ"] = 8994;
            values[valuesById[8995] = "CMD_LOTTERY_DRAGON_BALL_RSP"] = 8995;
            values[valuesById[8996] = "CMD_QUERY_SCHOOL_LOTTERY_REQ"] = 8996;
            values[valuesById[8997] = "CMD_QUERY_SCHOOL_LOTTERY_RSP"] = 8997;
            values[valuesById[8998] = "CMD_LOTTERY_SCHOOL_REQ"] = 8998;
            values[valuesById[8999] = "CMD_LOTTERY_SCHOOL_RSP"] = 8999;
            values[valuesById[9000] = "CMD_OPEN_WHICH_LOTTERY_REQ"] = 9000;
            values[valuesById[9001] = "CMD_OPEN_WHICH_LOTTERY_RSP"] = 9001;
            values[valuesById[9002] = "CMD_QUERY_LOTTERY_TABLE_REQ"] = 9002;
            values[valuesById[9003] = "CMD_QUERY_LOTTERY_TABLE_RSP"] = 9003;
            values[valuesById[9024] = "CMD_QUERY_DEGREE_PACK_REQ"] = 9024;
            values[valuesById[9025] = "CMD_QUERY_DEGREE_PACK_RSP"] = 9025;
            values[valuesById[9026] = "CMD_PUT_ON_DEGREE_REQ"] = 9026;
            values[valuesById[9027] = "CMD_PUT_ON_DEGREE_RSP"] = 9027;
            values[valuesById[9028] = "CMD_TAKE_OFF_DEGREE_REQ"] = 9028;
            values[valuesById[9029] = "CMD_TAKE_OFF_DEGREE_RSP"] = 9029;
            values[valuesById[9030] = "CMD_DEVOUR_DEGREE_EXP_REQ"] = 9030;
            values[valuesById[9031] = "CMD_DEVOUR_DEGREE_EXP_RSP"] = 9031;
            values[valuesById[9032] = "CMD_DEVOUR_ALL_DEGREE_REQ"] = 9032;
            values[valuesById[9033] = "CMD_DEVOUR_ALL_DEGREE_RSP"] = 9033;
            values[valuesById[9040] = "CMD_DECOMPOSITION_DEGREE_REQ"] = 9040;
            values[valuesById[9041] = "CMD_DECOMPOSITION_DEGREE_RSP"] = 9041;
            values[valuesById[9042] = "CMD_ADVANCED_DEGREE_REQ"] = 9042;
            values[valuesById[9043] = "CMD_ADVANCED_DEGREE_RSP"] = 9043;
            values[valuesById[9216] = "CMD_ENTER_WORLD_BOSS_INSTANCE_REQ"] = 9216;
            values[valuesById[9217] = "CMD_ENTER_WORLD_BOSS_INSTANCE_RSP"] = 9217;
            values[valuesById[9218] = "CMD_LEAVE_WORLD_BOSS_INSTANCE_REQ"] = 9218;
            values[valuesById[9219] = "CMD_LEAVE_WORLD_BOSS_INSTANCE_RSP"] = 9219;
            values[valuesById[9220] = "CMD_KICK_WORLD_BOSS_ASS_REQ"] = 9220;
            values[valuesById[9221] = "CMD_KICK_WORLD_BOSS_ASS_RSP"] = 9221;
            values[valuesById[9472] = "CMD_QUERY_LEV_AWARD_REQ"] = 9472;
            values[valuesById[9473] = "CMD_QUERY_LEV_AWARD_RSP"] = 9473;
            values[valuesById[9474] = "CMD_LEV_AWARD_REQ"] = 9474;
            values[valuesById[9475] = "CMD_LEV_AWARD_RSP"] = 9475;
            values[valuesById[9632] = "CMD_QUERY_JOIN_APPLY_LIST_REQ"] = 9632;
            values[valuesById[9633] = "CMD_QUERY_JOIN_APPLY_LIST_RSP"] = 9633;
            values[valuesById[9634] = "CMD_CHECK_JOIN_APPLY_REQ"] = 9634;
            values[valuesById[9635] = "CMD_CHECK_JOIN_APPLY_RSP"] = 9635;
            values[valuesById[9636] = "CMD_QUERY_GROUP_LOG_REQ"] = 9636;
            values[valuesById[9637] = "CMD_QUERY_GROUP_LOG_RSP"] = 9637;
            values[valuesById[9638] = "CMD_SEND_GROUP_MAIL_REQ"] = 9638;
            values[valuesById[9639] = "CMD_SEND_GROUP_MAIL_RSP"] = 9639;
            values[valuesById[9640] = "CMD_GROUP_JOIN_APPLY_NOTICE"] = 9640;
            values[valuesById[9728] = "CMD_QUERY_GROUP_INFO_REQ"] = 9728;
            values[valuesById[9729] = "CMD_QUERY_GROUP_INFO_RSP"] = 9729;
            values[valuesById[9730] = "CMD_CREATE_GROUP_REQ"] = 9730;
            values[valuesById[9731] = "CMD_CREATE_GROUP_RSP"] = 9731;
            values[valuesById[9734] = "CMD_JOIN_GROUP_REQ"] = 9734;
            values[valuesById[9735] = "CMD_JOIN_GROUP_RSP"] = 9735;
            values[valuesById[9736] = "CMD_LEAVE_GROUP_REQ"] = 9736;
            values[valuesById[9737] = "CMD_LEAVE_GROUP_RSP"] = 9737;
            values[valuesById[9738] = "CMD_FIRE_GROUP_MEMBER_REQ"] = 9738;
            values[valuesById[9739] = "CMD_FIRE_GROUP_MEMBER_RSP"] = 9739;
            values[valuesById[9740] = "CMD_TRANSFER_GROUP_REQ"] = 9740;
            values[valuesById[9741] = "CMD_TRANSFER_GROUP_RSP"] = 9741;
            values[valuesById[9742] = "CMD_FIRE_GROUP_CAPTAIN_REQ"] = 9742;
            values[valuesById[9743] = "CMD_FIRE_GROUP_CAPTAIN_RSP"] = 9743;
            values[valuesById[9744] = "CMD_SEARCH_GROUP_BY_NAME_REQ"] = 9744;
            values[valuesById[9745] = "CMD_SEARCH_GROUP_BY_NAME_RSP"] = 9745;
            values[valuesById[9746] = "CMD_SET_GROUP_BULLETIN_REQ"] = 9746;
            values[valuesById[9747] = "CMD_SET_GROUP_BULLETIN_RSP"] = 9747;
            values[valuesById[9748] = "CMD_SET_GROUP_NOTICE_REQ"] = 9748;
            values[valuesById[9749] = "CMD_SET_GROUP_NOTICE_RSP"] = 9749;
            values[valuesById[9750] = "CMD_SET_GROUP_ADMIN_REQ"] = 9750;
            values[valuesById[9751] = "CMD_SET_GROUP_ADMIN_RSP"] = 9751;
            values[valuesById[9752] = "CMD_CANCEL_GROUP_ADMIN_REQ"] = 9752;
            values[valuesById[9753] = "CMD_CANCEL_GROUP_ADMIN_RSP"] = 9753;
            values[valuesById[9754] = "CMD_QUERY_GROUP_ICON_LIST_REQ"] = 9754;
            values[valuesById[9755] = "CMD_QUERY_GROUP_ICON_LIST_RSP"] = 9755;
            values[valuesById[9756] = "CMD_SET_GROUP_OPTION_REQ"] = 9756;
            values[valuesById[9757] = "CMD_SET_GROUP_OPTION_RSP"] = 9757;
            values[valuesById[9760] = "CMD_QUERY_GROUP_GYM_INFO_REQ"] = 9760;
            values[valuesById[9761] = "CMD_QUERY_GROUP_GYM_INFO_RSP"] = 9761;
            values[valuesById[9762] = "CMD_PUSH_GROUP_GYM_HERO_REQ"] = 9762;
            values[valuesById[9763] = "CMD_PUSH_GROUP_GYM_HERO_RSP"] = 9763;
            values[valuesById[9764] = "CMD_LEASE_GROUP_GYM_HERO_REQ"] = 9764;
            values[valuesById[9765] = "CMD_LEASE_GROUP_GYM_HERO_RSP"] = 9765;
            values[valuesById[9776] = "CMD_QUERY_GROUP_BUILDING_REQ"] = 9776;
            values[valuesById[9777] = "CMD_QUERY_GROUP_BUILDING_RSP"] = 9777;
            values[valuesById[9778] = "CMD_LEVUP_GROUP_BUILDING_REQ"] = 9778;
            values[valuesById[9779] = "CMD_LEVUP_GROUP_BUILDING_RSP"] = 9779;
            values[valuesById[9780] = "CMD_DO_GROUP_BUILD_REQ"] = 9780;
            values[valuesById[9781] = "CMD_DO_GROUP_BUILD_RSP"] = 9781;
            values[valuesById[9782] = "CMD_QUERY_BUILDING_OUTPUT_REQ"] = 9782;
            values[valuesById[9783] = "CMD_QUERY_BUILDING_OUTPUT_RSP"] = 9783;
            values[valuesById[9784] = "CMD_GET_BUILDING_OUTPUT_REQ"] = 9784;
            values[valuesById[9785] = "CMD_GET_BUILDING_OUTPUT_RSP"] = 9785;
            values[valuesById[9786] = "CMD_QUERY_ANTIQUE_SHOP_REQ"] = 9786;
            values[valuesById[9787] = "CMD_QUERY_ANTIQUE_SHOP_RSP"] = 9787;
            values[valuesById[9788] = "CMD_BUY_ANTIQUE_SHOP_REQ"] = 9788;
            values[valuesById[9789] = "CMD_BUY_ANTIQUE_SHOP_RSP"] = 9789;
            values[valuesById[9790] = "CMD_REFRESH_ANTIQUE_SHOP_REQ"] = 9790;
            values[valuesById[9791] = "CMD_REFRESH_ANTIQUE_SHOP_RSP"] = 9791;
            values[valuesById[9792] = "CMD_QUERY_GROUP_WELFARE_REQ"] = 9792;
            values[valuesById[9793] = "CMD_QUERY_GROUP_WELFARE_RSP"] = 9793;
            values[valuesById[9794] = "CMD_BUY_GROUP_SP_WELFARE_REQ"] = 9794;
            values[valuesById[9795] = "CMD_BUY_GROUP_SP_WELFARE_RSP"] = 9795;
            values[valuesById[9796] = "CMD_AWARD_GROUP_SP_WELFARE_REQ"] = 9796;
            values[valuesById[9797] = "CMD_AWARD_GROUP_SP_WELFARE_RSP"] = 9797;
            values[valuesById[9798] = "CMD_QUERY_GROUP_EQUIP_REQ"] = 9798;
            values[valuesById[9799] = "CMD_QUERY_GROUP_EQUIP_RSP"] = 9799;
            values[valuesById[9800] = "CMD_OPEN_GROUP_EQUIP_REQ"] = 9800;
            values[valuesById[9801] = "CMD_OPEN_GROUP_EQUIP_RSP"] = 9801;
            values[valuesById[9802] = "CMD_LEVUP_GROUP_EQUIP_REQ"] = 9802;
            values[valuesById[9803] = "CMD_LEVUP_GROUP_EQUIP_RSP"] = 9803;
            values[valuesById[9804] = "CMD_QUERY_GROUP_MISSION_REQ"] = 9804;
            values[valuesById[9805] = "CMD_QUERY_GROUP_MISSION_RSP"] = 9805;
            values[valuesById[9806] = "CMD_FINISH_GROUP_MISSION_REQ"] = 9806;
            values[valuesById[9807] = "CMD_FINISH_GROUP_MISSION_RSP"] = 9807;
            values[valuesById[9808] = "CMD_RESET_GROUP_MISSION_REQ"] = 9808;
            values[valuesById[9809] = "CMD_RESET_GROUP_MISSION_RSP"] = 9809;
            values[valuesById[9810] = "CMD_BUY_GROUP_MISSION_REQ"] = 9810;
            values[valuesById[9811] = "CMD_BUY_GROUP_MISSION_RSP"] = 9811;
            values[valuesById[9824] = "CMD_QUERY_GROUP_INSTANCE_REQ"] = 9824;
            values[valuesById[9825] = "CMD_QUERY_GROUP_INSTANCE_RSP"] = 9825;
            values[valuesById[9826] = "CMD_OPEN_GROUP_INSTANCE_REQ"] = 9826;
            values[valuesById[9827] = "CMD_OPEN_GROUP_INSTANCE_RSP"] = 9827;
            values[valuesById[9828] = "CMD_RESET_GROUP_INSTANCE_REQ"] = 9828;
            values[valuesById[9829] = "CMD_RESET_GROUP_INSTANCE_RSP"] = 9829;
            values[valuesById[9830] = "CMD_ENTER_GROUP_INSTANCE_REQ"] = 9830;
            values[valuesById[9831] = "CMD_ENTER_GROUP_INSTANCE_RSP"] = 9831;
            values[valuesById[9832] = "CMD_KICK_GROUP_BOSS_ASS_REQ"] = 9832;
            values[valuesById[9833] = "CMD_KICK_GROUP_BOSS_ASS_RSP"] = 9833;
            values[valuesById[9834] = "CMD_LEAVE_GROUP_INSTANCE_REQ"] = 9834;
            values[valuesById[9835] = "CMD_LEAVE_GROUP_INSTANCE_RSP"] = 9835;
            values[valuesById[9836] = "CMD_QUERY_GROUP_AWARD_POOL_REQ"] = 9836;
            values[valuesById[9837] = "CMD_QUERY_GROUP_AWARD_POOL_RSP"] = 9837;
            values[valuesById[9838] = "CMD_APPLY_GROUP_AWARD_REQ"] = 9838;
            values[valuesById[9839] = "CMD_APPLY_GROUP_AWARD_RSP"] = 9839;
            values[valuesById[9840] = "CMD_QUERY_GROUP_INSTANCE_LIST_REQ"] = 9840;
            values[valuesById[9841] = "CMD_QUERY_GROUP_INSTANCE_LIST_RSP"] = 9841;
            values[valuesById[9842] = "CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_REQ"] = 9842;
            values[valuesById[9843] = "CMD_QUERY_GROUP_AWARD_ASSIGN_RECORD_RSP"] = 9843;
            values[valuesById[9872] = "CMD_NUMERIC_CHANGE_NOTICE"] = 9872;
            values[valuesById[9984] = "CMD_PVP_FRAME_NOTICE"] = 9984;
            values[valuesById[9985] = "CMD_PVP_HERO_GOTO_BATTLE_REQ"] = 9985;
            values[valuesById[9986] = "CMD_PVP_HERO_GOTO_BATTLE_RSP"] = 9986;
            values[valuesById[9987] = "CMD_PVP_FIGHT_EXIT_REQ"] = 9987;
            values[valuesById[9988] = "CMD_PVP_FIGHT_EXIT_RSP"] = 9988;
            values[valuesById[9989] = "CMD_PVP_FIGHT_AWARD_NOTICE"] = 9989;
            values[valuesById[9990] = "CMD_QUERY_GROUP_BATTLE_STATE_REQ"] = 9990;
            values[valuesById[9991] = "CMD_QUERY_GROUP_BATTLE_STATE_RSP"] = 9991;
            values[valuesById[10240] = "CMD_QUERY_STREET_WAR_STATE_REQ"] = 10240;
            values[valuesById[10241] = "CMD_QUERY_STREET_WAR_STATE_RSP"] = 10241;
            values[valuesById[10242] = "CMD_READY_STREET_WAR_REQ"] = 10242;
            values[valuesById[10243] = "CMD_READY_STREET_WAR_RSP"] = 10243;
            values[valuesById[10244] = "CMD_PASS_STREET_WAR_REQ"] = 10244;
            values[valuesById[10245] = "CMD_PASS_STREET_WAR_RSP"] = 10245;
            values[valuesById[10246] = "CMD_BUY_STREET_WAR_CHALLENGE_COUNT_REQ"] = 10246;
            values[valuesById[10247] = "CMD_BUY_STREET_WAR_CHALLENGE_COUNT_RSP"] = 10247;
            values[valuesById[10248] = "CMD_REFRESH_STREET_WAR_REQ"] = 10248;
            values[valuesById[8329] = "CMD_REFRESH_STREET_WAR_RSP"] = 8329;
            values[valuesById[10496] = "CMD_QUERY_DAILY_NORMAL_GIFTBAG_REQ"] = 10496;
            values[valuesById[10497] = "CMD_QUERY_DAILY_NORMAL_GIFTBAG_RSP"] = 10497;
            values[valuesById[10498] = "CMD_BUY_DAILY_NORMAL_GIFTBAG_REQ"] = 10498;
            values[valuesById[10499] = "CMD_BUY_DAILY_NORMAL_GIFTBAG_RSP"] = 10499;
            values[valuesById[10500] = "CMD_QUERY_DAILY_VIP_GIFTBAG_REQ"] = 10500;
            values[valuesById[10501] = "CMD_QUERY_DAILY_VIP_GIFTBAG_RSP"] = 10501;
            values[valuesById[10502] = "CMD_BUY_DAILY_VIP_GIFTBAG_REQ"] = 10502;
            values[valuesById[10503] = "CMD_BUY_DAILY_VIP_GIFTBAG_RSP"] = 10503;
            values[valuesById[10528] = "CMD_AWARD_FULL_STAR_REQ"] = 10528;
            values[valuesById[10529] = "CMD_AWARD_FULL_STAR_RSP"] = 10529;
            values[valuesById[10592] = "CMD_QUERY_CLOTHES_REQ"] = 10592;
            values[valuesById[10593] = "CMD_QUERY_CLOTHES_RSP"] = 10593;
            values[valuesById[10594] = "CMD_COLLECT_CLOTHES_REQ"] = 10594;
            values[valuesById[10595] = "CMD_COLLECT_CLOTHES_RSP"] = 10595;
            values[valuesById[10596] = "CMD_ADVANCED_CLOTHES_REQ"] = 10596;
            values[valuesById[10597] = "CMD_ADVANCED_CLOTHES_RSP"] = 10597;
            values[valuesById[10598] = "CMD_PUT_ON_CLOTHES_REQ"] = 10598;
            values[valuesById[10599] = "CMD_PUT_ON_CLOTHES_RSP"] = 10599;
            values[valuesById[10600] = "CMD_QUERY_CLOTHES_ATTR_REQ"] = 10600;
            values[valuesById[10601] = "CMD_QUERY_CLOTHES_ATTR_RSP"] = 10601;
            values[valuesById[10624] = "CMD_QUERY_ARENA_SHOP_REQ"] = 10624;
            values[valuesById[10625] = "CMD_QUERY_ARENA_SHOP_RSP"] = 10625;
            values[valuesById[10626] = "CMD_BUY_ARENA_SHOP_GOODS_REQ"] = 10626;
            values[valuesById[10627] = "CMD_BUY_ARENA_SHOP_GOODS_RSP"] = 10627;
            values[valuesById[10629] = "CMD_QUERY_TOURNAMENT_SHOP_REQ"] = 10629;
            values[valuesById[10630] = "CMD_QUERY_TOURNAMENT_SHOP_RSP"] = 10630;
            values[valuesById[10631] = "CMD_BUY_TOURNAMENT_SHOP_GOODS_REQ"] = 10631;
            values[valuesById[10632] = "CMD_BUY_TOURNAMENT_SHOP_GOODS_RSP"] = 10632;
            values[valuesById[10633] = "CMD_QUERY_TERRITORY_SHOP_REQ"] = 10633;
            values[valuesById[10634] = "CMD_QUERY_TERRITORY_SHOP_RSP"] = 10634;
            values[valuesById[10635] = "CMD_BUY_TERRITORY_SHOP_GOODS_REQ"] = 10635;
            values[valuesById[10636] = "CMD_BUY_TERRITORY_SHOP_GOODS_RSP"] = 10636;
            values[valuesById[10637] = "CMD_REFRESH_TERRITORY_SHOP_GOODS_REQ"] = 10637;
            values[valuesById[10638] = "CMD_REFRESH_TERRITORY_SHOP_GOODS_RSP"] = 10638;
            values[valuesById[10656] = "CMD_QUERY_FIRST_RECHARGE_AWARD_REQ"] = 10656;
            values[valuesById[10657] = "CMD_QUERY_FIRST_RECHARGE_AWARD_RSP"] = 10657;
            values[valuesById[10658] = "CMD_AWARD_FIRST_RECHARGE_REQ"] = 10658;
            values[valuesById[10659] = "CMD_AWARD_FIRST_RECHARGE_RSP"] = 10659;
            values[valuesById[10688] = "CMD_QUERY_STREET_SHOP_REQ"] = 10688;
            values[valuesById[10689] = "CMD_QUERY_STREET_SHOP_RSP"] = 10689;
            values[valuesById[10690] = "CMD_BUY_STREET_SHOP_GOODS_REQ"] = 10690;
            values[valuesById[10691] = "CMD_BUY_STREET_SHOP_GOODS_RSP"] = 10691;
            values[valuesById[10704] = "CMD_QUERY_DEGREE_SHOP_REQ"] = 10704;
            values[valuesById[10705] = "CMD_QUERY_DEGREE_SHOP_RSP"] = 10705;
            values[valuesById[10706] = "CMD_BUY_DEGREE_SHOP_GOODS_REQ"] = 10706;
            values[valuesById[10707] = "CMD_BUY_DEGREE_SHOP_GOODS_RSP"] = 10707;
            values[valuesById[10720] = "CMD_QUERY_OPERATION_LIST_REQ"] = 10720;
            values[valuesById[10721] = "CMD_QUERY_OPERATION_LIST_RSP"] = 10721;
            values[valuesById[10722] = "CMD_FETCH_OPERATION_AWARD_REQ"] = 10722;
            values[valuesById[10723] = "CMD_FETCH_OPERATION_AWARD_RSP"] = 10723;
            values[valuesById[10730] = "CMD_QUERY_COEFFICIENT_REQ"] = 10730;
            values[valuesById[10731] = "CMD_QUERY_COEFFICIENT_RSP"] = 10731;
            values[valuesById[10736] = "CMD_QUERY_GOLD_INVEST_REQ"] = 10736;
            values[valuesById[10737] = "CMD_QUERY_GOLD_INVEST_RSP"] = 10737;
            values[valuesById[10738] = "CMD_BUY_GOLD_INVEST_REQ"] = 10738;
            values[valuesById[10739] = "CMD_BUY_GOLD_INVEST_RSP"] = 10739;
            values[valuesById[10740] = "CMD_AWARD_GOLD_INVEST_REQ"] = 10740;
            values[valuesById[10741] = "CMD_AWARD_GOLD_INVEST_RSP"] = 10741;
            values[valuesById[10768] = "CMD_QUERY_WEEK_AWARD_REQ"] = 10768;
            values[valuesById[10769] = "CMD_QUERY_WEEK_AWARD_RSP"] = 10769;
            values[valuesById[10770] = "CMD_AWARD_WEEK_LOGIN_REQ"] = 10770;
            values[valuesById[10771] = "CMD_AWARD_WEEK_LOGIN_RSP"] = 10771;
            values[valuesById[10772] = "CMD_AWARD_WEEK_RECHAGE_REQ"] = 10772;
            values[valuesById[10773] = "CMD_AWARD_WEEK_RECHAGE_RSP"] = 10773;
            values[valuesById[10774] = "CMD_AWARD_WEEK_RUSH_PURCHASE_REQ"] = 10774;
            values[valuesById[10775] = "CMD_AWARD_WEEK_RUSH_PURCHASE_RSP"] = 10775;
            values[valuesById[11008] = "CMD_QUERY_TEAM_PVE_SCHEDULE_REQ"] = 11008;
            values[valuesById[11009] = "CMD_QUERY_TEAM_PVE_SCHEDULE_RSP"] = 11009;
            values[valuesById[11010] = "CMD_QUERY_TEAM_PVE_ROOM_LIST_REQ"] = 11010;
            values[valuesById[11011] = "CMD_QUERY_TEAM_PVE_ROOM_LIST_RSP"] = 11011;
            values[valuesById[11012] = "CMD_JOIN_TEAM_PVE_ROOM_REQ"] = 11012;
            values[valuesById[11013] = "CMD_JOIN_TEAM_PVE_ROOM_RSP"] = 11013;
            values[valuesById[11014] = "CMD_LEAVE_TEAM_PVE_ROOM_REQ"] = 11014;
            values[valuesById[11015] = "CMD_LEAVE_TEAM_PVE_ROOM_RSP"] = 11015;
            values[valuesById[11016] = "CMD_CREATE_TEAM_PVE_ROOM_REQ"] = 11016;
            values[valuesById[11017] = "CMD_CREATE_TEAM_PVE_ROOM_RSP"] = 11017;
            values[valuesById[11018] = "CMD_KICK_TEAM_PVE_ROOM_MEMBER_REQ"] = 11018;
            values[valuesById[11019] = "CMD_KICK_TEAM_PVE_ROOM_MEMBER_RSP"] = 11019;
            values[valuesById[11020] = "CMD_INVITE_TEAM_PVE_ROOM_MEMBER_REQ"] = 11020;
            values[valuesById[11021] = "CMD_INVITE_TEAM_PVE_ROOM_MEMBER_RSP"] = 11021;
            values[valuesById[11022] = "CMD_QUICK_JOIN_TEAM_PVE_ROOM_REQ"] = 11022;
            values[valuesById[11023] = "CMD_QUICK_JOIN_TEAM_PVE_ROOM_RSP"] = 11023;
            values[valuesById[11024] = "CMD_START_TEAM_PVE_REQ"] = 11024;
            values[valuesById[11025] = "CMD_START_TEAM_PVE_RSP"] = 11025;
            values[valuesById[11026] = "CMD_PASS_TEAM_PVE_REQ"] = 11026;
            values[valuesById[11027] = "CMD_PASS_TEAM_PVE_RSP"] = 11027;
            values[valuesById[11029] = "CMD_TEAM_PVE_ROOM_INFO_NOTICE"] = 11029;
            values[valuesById[11030] = "CMD_QUIT_TEAM_PVE_REQ"] = 11030;
            values[valuesById[11031] = "CMD_QUIT_TEAM_PVE_RSP"] = 11031;
            values[valuesById[11136] = "CMD_QUERY_FC_RACE_REQ"] = 11136;
            values[valuesById[11137] = "CMD_QUERY_FC_RACE_RSP"] = 11137;
            values[valuesById[11138] = "CMD_AWARD_FC_RACE_REQ"] = 11138;
            values[valuesById[11139] = "CMD_AWARD_FC_RACE_RSP"] = 11139;
            values[valuesById[11140] = "CMD_QUERY_PASS_RACE_REQ"] = 11140;
            values[valuesById[11141] = "CMD_QUERY_PASS_RACE_RSP"] = 11141;
            values[valuesById[11142] = "CMD_AWARD_PASS_RACE_REQ"] = 11142;
            values[valuesById[11143] = "CMD_AWARD_PASS_RACE_RSP"] = 11143;
            values[valuesById[11144] = "CMD_QUERY_RECRUIT_PAOJIE_REQ"] = 11144;
            values[valuesById[11145] = "CMD_QUERY_RECRUIT_PAOJIE_RSP"] = 11145;
            values[valuesById[11152] = "CMD_AWARD_RECRUIT_PAOJIE_REQ"] = 11152;
            values[valuesById[11153] = "CMD_AWARD_RECRUIT_PAOJIE_RSP"] = 11153;
            values[valuesById[11154] = "CMD_QUERY_COLLECT_HERO_REQ"] = 11154;
            values[valuesById[11155] = "CMD_QUERY_COLLECT_HERO_RSP"] = 11155;
            values[valuesById[11156] = "CMD_AWARD_COLLECT_HERO_REQ"] = 11156;
            values[valuesById[11157] = "CMD_AWARD_COLLECT_HERO_RSP"] = 11157;
            values[valuesById[11158] = "CMD_QUERY_ADVANCED_CHUNLI_REQ"] = 11158;
            values[valuesById[11159] = "CMD_QUERY_ADVANCED_CHUNLI_RSP"] = 11159;
            values[valuesById[11160] = "CMD_AWARD_ADVANCED_CHUNLI_REQ"] = 11160;
            values[valuesById[11161] = "CMD_AWARD_ADVANCED_CHUNLI_RSP"] = 11161;
            values[valuesById[11162] = "CMD_QUERY_COLLECT_GEM_REQ"] = 11162;
            values[valuesById[11163] = "CMD_QUERY_COLLECT_GEM_RSP"] = 11163;
            values[valuesById[11164] = "CMD_AWARD_COLLECT_GEM_REQ"] = 11164;
            values[valuesById[11165] = "CMD_AWARD_COLLECT_GEM_RSP"] = 11165;
            values[valuesById[11166] = "CMD_QUERY_COLLECT_DEGREE_REQ"] = 11166;
            values[valuesById[11167] = "CMD_QUERY_COLLECT_DEGREE_RSP"] = 11167;
            values[valuesById[11168] = "CMD_AWARD_COLLECT_DEGREE_REQ"] = 11168;
            values[valuesById[11169] = "CMD_AWARD_COLLECT_DEGREE_RSP"] = 11169;
            values[valuesById[11170] = "CMD_QUERY_EQUIP_PURPLE_REQ"] = 11170;
            values[valuesById[11171] = "CMD_QUERY_EQUIP_PURPLE_RSP"] = 11171;
            values[valuesById[11172] = "CMD_AWARD_EQUIP_PURPLE_REQ"] = 11172;
            values[valuesById[11173] = "CMD_AWARD_EQUIP_PURPLE_RSP"] = 11173;
            values[valuesById[11174] = "CMD_QUERY_RANK_AWARD_REQ"] = 11174;
            values[valuesById[11175] = "CMD_QUERY_RANK_AWARD_RSP"] = 11175;
            values[valuesById[11176] = "CMD_AWARD_RANK_AWARD_REQ"] = 11176;
            values[valuesById[11177] = "CMD_AWARD_RANK_AWARD_RSP"] = 11177;
            values[valuesById[11200] = "CMD_QUERY_MAGIC_REFINE_REQ"] = 11200;
            values[valuesById[11201] = "CMD_QUERY_MAGIC_REFINE_RSP"] = 11201;
            values[valuesById[11202] = "CMD_REFINE_MAGIC_GOODS_REQ"] = 11202;
            values[valuesById[11203] = "CMD_REFINE_MAGIC_GOODS_RSP"] = 11203;
            values[valuesById[11204] = "CMD_FINISH_MAGIC_GOODS_REQ"] = 11204;
            values[valuesById[11205] = "CMD_FINISH_MAGIC_GOODS_RSP"] = 11205;
            values[valuesById[11216] = "CMD_EXCHANGE_ARTIFACT_REQ"] = 11216;
            values[valuesById[11217] = "CMD_EXCHANGE_ARTIFACT_RSP"] = 11217;
            values[valuesById[11218] = "CMD_PUT_ON_ARTIFACT_REQ"] = 11218;
            values[valuesById[11219] = "CMD_PUT_ON_ARTIFACT_RSP"] = 11219;
            values[valuesById[11220] = "CMD_UPGRADE_ARTIFACT_REQ"] = 11220;
            values[valuesById[11221] = "CMD_UPGRADE_ARTIFACT_RSP"] = 11221;
            values[valuesById[11222] = "CMD_ADVANCE_ARTIFACT_REQ"] = 11222;
            values[valuesById[11223] = "CMD_ADVANCE_ARTIFACT_RSP"] = 11223;
            values[valuesById[11224] = "CMD_INLAY_ARTIFACT_REQ"] = 11224;
            values[valuesById[11225] = "CMD_INLAY_ARTIFACT_RSP"] = 11225;
            values[valuesById[11226] = "CMD_UPGRADE_GEM_ARTIFACT_REQ"] = 11226;
            values[valuesById[11227] = "CMD_UPGRADE_GEM_ARTIFACT_RSP"] = 11227;
            values[valuesById[11228] = "CMD_DECOMPOSE_ARTIFACT_REQ"] = 11228;
            values[valuesById[11229] = "CMD_DECOMPOSE_ARTIFACT_RSP"] = 11229;
            values[valuesById[11230] = "CMD_SET_ARTIFACT_BUFF_REQ"] = 11230;
            values[valuesById[11231] = "CMD_SET_ARTIFACT_BUFF_RSP"] = 11231;
            values[valuesById[11232] = "CMD_GEM_EXCHANGE_REQ"] = 11232;
            values[valuesById[11233] = "CMD_GEM_EXCHANGE_RSP"] = 11233;
            values[valuesById[11264] = "CMD_QUERY_TITLE_LIST_REQ"] = 11264;
            values[valuesById[11265] = "CMD_QUERY_TITLE_LIST_RSP"] = 11265;
            values[valuesById[11266] = "CMD_ACTIVE_TITLE_REQ"] = 11266;
            values[valuesById[11267] = "CMD_ACTIVE_TITLE_RSP"] = 11267;
            values[valuesById[11268] = "CMD_PUT_ON_TITLE_REQ"] = 11268;
            values[valuesById[11269] = "CMD_PUT_ON_TITLE_RSP"] = 11269;
            values[valuesById[11270] = "CMD_PUT_OFF_TITLE_REQ"] = 11270;
            values[valuesById[11271] = "CMD_PUT_OFF_TITLE_RSP"] = 11271;
            values[valuesById[11272] = "CMD_TITIE_EXPIRE_NOTICE"] = 11272;
            values[valuesById[11520] = "CMD_QUERY_INNER_ACTIVITY_REQ"] = 11520;
            values[valuesById[11521] = "CMD_QUERY_INNER_ACTIVITY_RSP"] = 11521;
            values[valuesById[11522] = "CMD_AWARD_INNER_ACTIVITY_REQ"] = 11522;
            values[valuesById[11523] = "CMD_AWARD_INNER_ACTIVITY_RSP"] = 11523;
            values[valuesById[11777] = "CMD_QUERY_LEV_SHOP_BUY_LIST_REQ"] = 11777;
            values[valuesById[11778] = "CMD_QUERY_LEV_SHOP_BUY_LIST_RSP"] = 11778;
            values[valuesById[11779] = "CMD_BUY_LEV_SHOP_GOODS_REQ"] = 11779;
            values[valuesById[11780] = "CMD_BUY_LEV_SHOP_GOODS_RSP"] = 11780;
            values[valuesById[12032] = "CMD_LOGIN_TRANSMIT_SERVER_REQ"] = 12032;
            values[valuesById[12033] = "CMD_LOGIN_TRANSMIT_SERVER_RSP"] = 12033;
            values[valuesById[12034] = "CMD_UPDATE_PK_SCENE_NOTICE"] = 12034;
            values[valuesById[12035] = "CMD_READY_PK_REQ"] = 12035;
            values[valuesById[12036] = "CMD_FINISH_READY_PK_NOTICE"] = 12036;
            values[valuesById[12288] = "CMD_QUERY_PK_INFO_REQ"] = 12288;
            values[valuesById[12289] = "CMD_QUERY_PK_INFO_RSP"] = 12289;
            values[valuesById[12290] = "CMD_SEARCH_PK_REQ"] = 12290;
            values[valuesById[12291] = "CMD_SEARCH_PK_RSP"] = 12291;
            values[valuesById[12292] = "CMD_CANCEL_SEARCH_PK_REQ"] = 12292;
            values[valuesById[12293] = "CMD_CANCEL_SEARCH_PK_RSP"] = 12293;
            values[valuesById[12294] = "CMD_START_PK_NOTICE"] = 12294;
            values[valuesById[12295] = "CMD_COMPLETE_PK_REQ"] = 12295;
            values[valuesById[12296] = "CMD_COMPLETE_PK_RSP"] = 12296;
            values[valuesById[12297] = "CMD_FINISH_PK_NOTICE"] = 12297;
            values[valuesById[12304] = "CMD_SEASON_AWARD_NOTICE"] = 12304;
            values[valuesById[12305] = "CMD_KICK_OUT_PK_ROLE_NOTICE"] = 12305;
            values[valuesById[12306] = "CMD_QUERY_SEASON_AWARD_REQ"] = 12306;
            values[valuesById[12307] = "CMD_QUERY_SEASON_AWARD_RSP"] = 12307;
            values[valuesById[12308] = "CMD_AWARD_SEASON_AWARD_REQ"] = 12308;
            values[valuesById[12309] = "CMD_AWARD_SEASON_AWARD_RSP"] = 12309;
            values[valuesById[12310] = "CMD_GM_ADD_PK_SCORE_NOTICE"] = 12310;
            values[valuesById[12311] = "CMD_GM_REFRESH_SEASON"] = 12311;
            values[valuesById[12312] = "CMD_CANCEL_PK_REQ"] = 12312;
            values[valuesById[12313] = "CMD_CANCEL_PK_RSP"] = 12313;
            values[valuesById[12314] = "CMD_CHECK_PK_EXIST_REQ"] = 12314;
            values[valuesById[12315] = "CMD_CHECK_PK_EXIST_RSP"] = 12315;
            values[valuesById[12316] = "CMD_CHECK_PK_STARTED_REQ"] = 12316;
            values[valuesById[12317] = "CMD_CHECK_PK_STARTED_RSP"] = 12317;
            values[valuesById[12320] = "CMD_QUERY_GROWUP_INFO_REQ"] = 12320;
            values[valuesById[12321] = "CMD_QUERY_GROWUP_INFO_RSP"] = 12321;
            values[valuesById[12322] = "CMD_FETCH_GROWUP_AWARD_REQ"] = 12322;
            values[valuesById[12323] = "CMD_FETCH_GROWUP_AWARD_RSP"] = 12323;
            values[valuesById[12336] = "CMD_QUERY_PET_LIST_REQ"] = 12336;
            values[valuesById[12337] = "CMD_QUERY_PET_LIST_RSP"] = 12337;
            values[valuesById[12338] = "CMD_HATCH_PET_REQ"] = 12338;
            values[valuesById[12339] = "CMD_HATCH_PET_RSP"] = 12339;
            values[valuesById[12340] = "CMD_PUT_ON_MAIN_PET_REQ"] = 12340;
            values[valuesById[12341] = "CMD_PUT_ON_MAIN_PET_RSP"] = 12341;
            values[valuesById[12342] = "CMD_PUT_ON_ASSIST_PET_REQ"] = 12342;
            values[valuesById[12343] = "CMD_PUT_ON_ASSIST_PET_RSP"] = 12343;
            values[valuesById[12344] = "CMD_PUT_OFF_ASSIST_PET_REQ"] = 12344;
            values[valuesById[12345] = "CMD_PUT_OFF_ASSIST_PET_RSP"] = 12345;
            values[valuesById[12346] = "CMD_LEVUP_PET_REQ"] = 12346;
            values[valuesById[12347] = "CMD_LEVUP_PET_RSP"] = 12347;
            values[valuesById[12348] = "CMD_ADVANCE_PET_REQ"] = 12348;
            values[valuesById[12349] = "CMD_ADVANCE_PET_RSP"] = 12349;
            values[valuesById[12350] = "CMD_FEEDING_PET_REQ"] = 12350;
            values[valuesById[12351] = "CMD_FEEDING_PET_RSP"] = 12351;
            values[valuesById[12352] = "CMD_QUERY_HATCH_CENTER_REQ"] = 12352;
            values[valuesById[12353] = "CMD_QUERY_HATCH_CENTER_RSP"] = 12353;
            values[valuesById[12354] = "CMD_QUERY_PET_MISSION_REQ"] = 12354;
            values[valuesById[12355] = "CMD_QUERY_PET_MISSION_RSP"] = 12355;
            values[valuesById[12356] = "CMD_START_PET_MISSION_REQ"] = 12356;
            values[valuesById[12357] = "CMD_START_PET_MISSION_RSP"] = 12357;
            values[valuesById[12358] = "CMD_AWARD_PET_MISSION_REQ"] = 12358;
            values[valuesById[12359] = "CMD_AWARD_PET_MISSION_RSP"] = 12359;
            values[valuesById[12360] = "CMD_FINISH_HATCH_REQ"] = 12360;
            values[valuesById[12361] = "CMD_FINISH_HATCH_RSP"] = 12361;
            values[valuesById[12362] = "CMD_GIVEUP_PET_MISSION_REQ"] = 12362;
            values[valuesById[12363] = "CMD_GIVEUP_PET_MISSION_RSP"] = 12363;
            values[valuesById[12368] = "CMD_QUERY_TURNTABLE_INFO_REQ"] = 12368;
            values[valuesById[12369] = "CMD_QUERY_TURNTABLE_INFO_RSP"] = 12369;
            values[valuesById[12370] = "CMD_USE_TURNTABLE_REQ"] = 12370;
            values[valuesById[12371] = "CMD_USE_TURNTABLE_RSP"] = 12371;
            values[valuesById[12372] = "CMD_RESET_TURNTABLE_REQ"] = 12372;
            values[valuesById[12373] = "CMD_RESET_TURNTABLE_RSP"] = 12373;
            values[valuesById[12400] = "CMD_QUERY_VIP_DAILY_AWARD_REQ"] = 12400;
            values[valuesById[12401] = "CMD_QUERY_VIP_DAILY_AWARD_RSP"] = 12401;
            values[valuesById[12402] = "CMD_AWARD_VIP_DAILY_AWARD_REQ"] = 12402;
            values[valuesById[12403] = "CMD_AWARD_VIP_DAILY_AWARD_RSP"] = 12403;
            values[valuesById[12416] = "CMD_AWARD_MEAT_BUN_REQ"] = 12416;
            values[valuesById[12417] = "CMD_AWARD_MEAT_BUN_RSP"] = 12417;
            values[valuesById[12418] = "CMD_QUERY_MEAT_BUN_AWARD_REQ"] = 12418;
            values[valuesById[12419] = "CMD_QUERY_MEAT_BUN_AWARD_RSP"] = 12419;
            values[valuesById[12432] = "CMD_QUERY_FULL_AWARD_REQ"] = 12432;
            values[valuesById[12433] = "CMD_QUERY_FULL_AWARD_RSP"] = 12433;
            values[valuesById[12434] = "CMD_AWARD_FULL_AWARD_REQ"] = 12434;
            values[valuesById[12435] = "CMD_AWARD_FULL_AWARD_RSP"] = 12435;
            values[valuesById[12464] = "CMD_QUERY_LIMITED_CHANLLENGE_REQ"] = 12464;
            values[valuesById[12465] = "CMD_QUERY_LIMITED_CHANLLENGE_RSP"] = 12465;
            values[valuesById[12466] = "CMD_AWARD_LIMITED_CHANLLENGE_REQ"] = 12466;
            values[valuesById[12467] = "CMD_AWARD_LIMITED_CHANLLENGE_RSP"] = 12467;
            values[valuesById[12480] = "CMD_QUERY_VIP_WEEK_AWARD_REQ"] = 12480;
            values[valuesById[12481] = "CMD_QUERY_VIP_WEEK_AWARD_RSP"] = 12481;
            values[valuesById[12482] = "CMD_AWARD_VIP_WEEK_AWARD_REQ"] = 12482;
            values[valuesById[12483] = "CMD_AWARD_VIP_WEEK_AWARD_RSP"] = 12483;
            values[valuesById[12496] = "CMD_DECOMPOSE_ARTIFACT_DEBRIS_REQ"] = 12496;
            values[valuesById[12497] = "CMD_DECOMPOSE_ARTIFACT_DEBRIS_RSP"] = 12497;
            values[valuesById[12512] = "CMD_QUERY_LIMITED_MISSION_REQ"] = 12512;
            values[valuesById[12513] = "CMD_QUERY_LIMITED_MISSION_RSP"] = 12513;
            values[valuesById[12514] = "CMD_AWARD_LIMITED_MISSION_REQ"] = 12514;
            values[valuesById[12515] = "CMD_AWARD_LIMITED_MISSION_RSP"] = 12515;
            values[valuesById[12528] = "CMD_OPEN_RUNNING_RACE_REQ"] = 12528;
            values[valuesById[12529] = "CMD_OPEN_RUNNING_RACE_RSP"] = 12529;
            values[valuesById[12530] = "CMD_BUY_RUNNING_RACE_COUNT_REQ"] = 12530;
            values[valuesById[12531] = "CMD_BUY_RUNNING_RACE_COUNT_RSP"] = 12531;
            values[valuesById[12532] = "CMD_FINISH_RUNNING_RACE_REQ"] = 12532;
            values[valuesById[12533] = "CMD_FINISH_RUNNING_RACE_RSP"] = 12533;
            values[valuesById[12534] = "CMD_QUIT_RUNNING_RACE_REQ"] = 12534;
            values[valuesById[12535] = "CMD_QUIT_RUNNING_RACE_RSP"] = 12535;
            values[valuesById[12544] = "CMD_PRACTICE_STONE_EXCHANGE_REQ"] = 12544;
            values[valuesById[12545] = "CMD_PRACTICE_STONE_EXCHANGE_RSP"] = 12545;
            values[valuesById[12546] = "CMD_PRACTICE_PROPERTY_REQ"] = 12546;
            values[valuesById[12547] = "CMD_PRACTICE_PROPERTY_RSP"] = 12547;
            values[valuesById[12548] = "CMD_REVERT_PRACTICE_PROPERTY_REQ"] = 12548;
            values[valuesById[12549] = "CMD_REVERT_PRACTICE_PROPERTY_RSP"] = 12549;
            values[valuesById[12608] = "CMD_FETCH_PK_SECTION_AWARD_REQ"] = 12608;
            values[valuesById[12609] = "CMD_FETCH_PK_SECTION_AWARD_RSP"] = 12609;
            values[valuesById[12610] = "CMD_QUERY_PK_DAILY_AWARD_REQ"] = 12610;
            values[valuesById[12611] = "CMD_QUERY_PK_DAILY_AWARD_RSP"] = 12611;
            values[valuesById[12612] = "CMD_FETCH_PK_DAILY_AWARD_REQ"] = 12612;
            values[valuesById[12613] = "CMD_FETCH_PK_DAILY_AWARD_RSP"] = 12613;
            values[valuesById[12800] = "CMD_START_PK_CHALLENGE_REQ"] = 12800;
            values[valuesById[12801] = "CMD_START_PK_CHALLENGE_RSP"] = 12801;
            values[valuesById[12802] = "CMD_CANCEL_PK_CHALLENGE_REQ"] = 12802;
            values[valuesById[12803] = "CMD_CANCEL_PK_CHALLENGE_RSP"] = 12803;
            values[valuesById[12804] = "CMD_CONFIRM_PK_CHALLENGE_REQ"] = 12804;
            values[valuesById[12805] = "CMD_CONFIRM_PK_CHALLENGE_RSP"] = 12805;
            values[valuesById[12806] = "CMD_FINISH_PK_CHALLENGE_REQ"] = 12806;
            values[valuesById[12807] = "CMD_FINISH_PK_CHALLENGE_RSP"] = 12807;
            values[valuesById[12833] = "CMD_CANCEL_PK_CHALLENGE_NOTICE"] = 12833;
            values[valuesById[12835] = "CMD_CONFIRM_PK_CHALLENGE_NOTICE"] = 12835;
            values[valuesById[12837] = "CMD_START_PK_CHALLENGE_NOTICE"] = 12837;
            values[valuesById[12839] = "CMD_FINISH_PK_CHALLENGE_NOTICE"] = 12839;
            values[valuesById[12864] = "CMD_SETTING_PK_CHALLENGE_REQ"] = 12864;
            values[valuesById[12865] = "CMD_SETTING_PK_CHALLENGE_RSP"] = 12865;
            values[valuesById[12866] = "CMD_GM_CONTROL_PK_REQ"] = 12866;
            values[valuesById[12867] = "CMD_GM_CONTROL_PK_RSP"] = 12867;
            values[valuesById[13056] = "CMD_QUERY_MAIL_REQ"] = 13056;
            values[valuesById[13057] = "CMD_QUERY_MAIL_RSP"] = 13057;
            values[valuesById[13058] = "CMD_SET_MAIL_READ_REQ"] = 13058;
            values[valuesById[13059] = "CMD_SET_MAIL_READ_RSP"] = 13059;
            values[valuesById[13060] = "CMD_FETCH_MAIL_AWARD_REQ"] = 13060;
            values[valuesById[13061] = "CMD_FETCH_MAIL_AWARD_RSP"] = 13061;
            values[valuesById[13062] = "CMD_DELETE_MAIL_REQ"] = 13062;
            values[valuesById[13063] = "CMD_DELETE_MAIL_RSP"] = 13063;
            values[valuesById[13065] = "CMD_NEW_MAIL_NOTICE"] = 13065;
            values[valuesById[13072] = "CMD_QUERY_FESTIVAL_REQ"] = 13072;
            values[valuesById[13073] = "CMD_QUERY_FESTIVAL_RSP"] = 13073;
            values[valuesById[13074] = "CMD_QUERY_FESTIVAL_SIGN_REQ"] = 13074;
            values[valuesById[13075] = "CMD_QUERY_FESTIVAL_SIGN_RSP"] = 13075;
            values[valuesById[13076] = "CMD_FESTIVAL_SIGN_REQ"] = 13076;
            values[valuesById[13077] = "CMD_FESTIVAL_SIGN_RSP"] = 13077;
            values[valuesById[13078] = "CMD_FESTIVAL_EXCHANGE_REQ"] = 13078;
            values[valuesById[13079] = "CMD_FESTIVAL_EXCHANGE_RSP"] = 13079;
            values[valuesById[13080] = "CMD_FESTIVAL_LOTTERY_REQ"] = 13080;
            values[valuesById[13081] = "CMD_FESTIVAL_LOTTERY_RSP"] = 13081;
            values[valuesById[13312] = "CMD_SIGN_UP_GROUP_BATTLE_REQ"] = 13312;
            values[valuesById[13313] = "CMD_SIGN_UP_GROUP_BATTLE_RSP"] = 13313;
            values[valuesById[13314] = "CMD_QUERY_SIGN_UP_INFO_REQ"] = 13314;
            values[valuesById[13315] = "CMD_QUERY_SIGN_UP_INFO_RSP"] = 13315;
            values[valuesById[13316] = "CMD_SET_GROUP_BATTLE_OPTION_REQ"] = 13316;
            values[valuesById[13317] = "CMD_SET_GROUP_BATTLE_OPTION_RSP"] = 13317;
            values[valuesById[13318] = "CMD_QUERY_GROUP_BATTLE_REQ"] = 13318;
            values[valuesById[13319] = "CMD_QUERY_GROUP_BATTLE_RSP"] = 13319;
            values[valuesById[13320] = "CMD_QUERY_HERO_BATTLE_ARRAY_REQ"] = 13320;
            values[valuesById[13321] = "CMD_QUERY_HERO_BATTLE_ARRAY_RSP"] = 13321;
            values[valuesById[13322] = "CMD_SET_HERO_BATTLE_ARRAY_REQ"] = 13322;
            values[valuesById[13323] = "CMD_SET_HERO_BATTLE_ARRAY_RSP"] = 13323;
            values[valuesById[13324] = "CMD_CHOOSE_GROUP_BATTLE_ROAD_REQ"] = 13324;
            values[valuesById[13325] = "CMD_CHOOSE_GROUP_BATTLE_ROAD_RSP"] = 13325;
            values[valuesById[13326] = "CMD_QUERY_CURRENT_BATTLE_INFO_REQ"] = 13326;
            values[valuesById[13327] = "CMD_QUERY_CURRENT_BATTLE_INFO_RSP"] = 13327;
            values[valuesById[13328] = "CMD_READY_GROUP_BATTLE_REQ"] = 13328;
            values[valuesById[13329] = "CMD_READY_GROUP_BATTLE_RSP"] = 13329;
            values[valuesById[13330] = "CMD_START_SINGLE_BATTLE_NOTICE"] = 13330;
            values[valuesById[13331] = "CMD_COMPLETE_SINGLE_BATTLE_REQ"] = 13331;
            values[valuesById[13332] = "CMD_COMPLETE_SINGLE_BATTLE_RSP"] = 13332;
            values[valuesById[13333] = "CMD_FINISH_SINGLE_BATTLE_NOTICE"] = 13333;
            values[valuesById[13334] = "CMD_QUERY_GROUP_BATTLE_HISTORY_REQ"] = 13334;
            values[valuesById[13335] = "CMD_QUERY_GROUP_BATTLE_HISTORY_RSP"] = 13335;
            values[valuesById[13336] = "CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_REQ"] = 13336;
            values[valuesById[13337] = "CMD_QUERY_ONCE_GROUP_BATTLE_HISTORY_RSP"] = 13337;
            values[valuesById[13338] = "CMD_SEND_GROUP_BATTLE_AWARD_REQ"] = 13338;
            values[valuesById[13339] = "CMD_SEND_GROUP_BATTLE_AWARD_RSP"] = 13339;
            values[valuesById[13340] = "CMD_QUERY_GROUP_BATTLE_TACTIC_REQ"] = 13340;
            values[valuesById[13341] = "CMD_QUERY_GROUP_BATTLE_TACTIC_RSP"] = 13341;
            values[valuesById[13342] = "CMD_SET_GROUP_BATTLE_TACTIC_REQ"] = 13342;
            values[valuesById[13343] = "CMD_SET_GROUP_BATTLE_TACTIC_RSP"] = 13343;
            values[valuesById[13344] = "CMD_SYNC_GROUP_FIGHTER_INFO_REQ"] = 13344;
            values[valuesById[13345] = "CMD_SYNC_GROUP_FIGHTER_INFO_RSP"] = 13345;
            values[valuesById[13346] = "CMD_READY_GROUP_BATTLE_NOTICE"] = 13346;
            values[valuesById[13348] = "CMD_REPORT_SINGLE_BATTLE_INFO_REQ"] = 13348;
            values[valuesById[13349] = "CMD_REPORT_SINGLE_BATTLE_INFO_RSP"] = 13349;
            values[valuesById[13350] = "CMD_START_GROUP_BATTLE_NOTICE"] = 13350;
            values[valuesById[13351] = "CMD_SEND_GROUP_BATTLE_ROLL_MSG_REQ"] = 13351;
            values[valuesById[13352] = "CMD_QUERY_GROUP_BATTLE_BRIEF_REQ"] = 13352;
            values[valuesById[13353] = "CMD_QUERY_GROUP_BATTLE_BRIEF_RSP"] = 13353;
            values[valuesById[13408] = "CMD_QUERY_SHARE_AWARD_REQ"] = 13408;
            values[valuesById[13409] = "CMD_QUERY_SHARE_AWARD_RSP"] = 13409;
            values[valuesById[13410] = "CMD_FINISH_SHARE_REQ"] = 13410;
            values[valuesById[13411] = "CMD_FINISH_SHARE_RSP"] = 13411;
            values[valuesById[13412] = "CMD_AWARD_SHARE_AWARD_REQ"] = 13412;
            values[valuesById[13413] = "CMD_AWARD_SHARE_AWARD_RSP"] = 13413;
            values[valuesById[13424] = "CMD_QUERY_TRIAL_ROOM_LIST_REQ"] = 13424;
            values[valuesById[13425] = "CMD_QUERY_TRIAL_ROOM_LIST_RSP"] = 13425;
            values[valuesById[13426] = "CMD_CREATE_TRIAL_ROOM_REQ"] = 13426;
            values[valuesById[13427] = "CMD_CREATE_TRIAL_ROOM_RSP"] = 13427;
            values[valuesById[13428] = "CMD_JOIN_TRIAL_ROOM_REQ"] = 13428;
            values[valuesById[13429] = "CMD_JOIN_TRIAL_ROOM_RSP"] = 13429;
            values[valuesById[13430] = "CMD_RECOURSE_FRIEND_TRIAL_REQ"] = 13430;
            values[valuesById[13431] = "CMD_RECOURSE_FRIEND_TRIAL_RSP"] = 13431;
            values[valuesById[13432] = "CMD_KICK_TRIAL_ROOM_MEMBER_REQ"] = 13432;
            values[valuesById[13433] = "CMD_KICK_TRIAL_ROOM_MEMBER_RSP"] = 13433;
            values[valuesById[13450] = "CMD_INVITE_TRIAL_REQ"] = 13450;
            values[valuesById[13451] = "CMD_INVITE_TRIAL_RSP"] = 13451;
            values[valuesById[13452] = "CMD_START_TRIAL_REQ"] = 13452;
            values[valuesById[13453] = "CMD_START_TRIAL_RSP"] = 13453;
            values[valuesById[13454] = "CMD_PASS_TRIAL_INSTANCE_REQ"] = 13454;
            values[valuesById[13455] = "CMD_PASS_TRIAL_INSTANCE_RSP"] = 13455;
            values[valuesById[13456] = "CMD_QUIT_TRIAL_INSTANCE_REQ"] = 13456;
            values[valuesById[13457] = "CMD_QUIT_TRIAL_INSTANCE_RSP"] = 13457;
            values[valuesById[13458] = "CMD_TRIAL_ROOM_INFO_NOTICE"] = 13458;
            values[valuesById[13459] = "CMD_BUY_TRIAL_COUNT_REQ"] = 13459;
            values[valuesById[13460] = "CMD_BUY_TRIAL_COUNT_RSP"] = 13460;
            values[valuesById[13461] = "CMD_LEAVE_TRIAL_ROOM_REQ"] = 13461;
            values[valuesById[13462] = "CMD_LEAVE_TRIAL_ROOM_RSP"] = 13462;
            values[valuesById[13463] = "CMD_KICK_TRIAL_MEMBER_NOTICE"] = 13463;
            values[valuesById[13464] = "CMD_INVITE_TRIAL_NOTICE"] = 13464;
            values[valuesById[13465] = "CMD_REPLY_TRIAL_INVITE_REQ"] = 13465;
            values[valuesById[13466] = "CMD_REPLY_TRIAL_INVITE_RSP"] = 13466;
            values[valuesById[13467] = "CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_REQ"] = 13467;
            values[valuesById[13468] = "CMD_QUERY_TRIAL_ONLINE_ROLE_LIST_RSP"] = 13468;
            values[valuesById[13469] = "CMD_QUERY_TRIAL_RECOURSE_LIST_REQ"] = 13469;
            values[valuesById[13470] = "CMD_QUERY_TRIAL_RECOURSE_LIST_RSP"] = 13470;
            values[valuesById[13471] = "CMD_QUERY_TRIAL_LIST_REQ"] = 13471;
            values[valuesById[13472] = "CMD_QUERY_TRIAL_LIST_RSP"] = 13472;
            values[valuesById[13473] = "CMD_PASS_TRIAL_SCREEN_REQ"] = 13473;
            values[valuesById[13474] = "CMD_PASS_TRIAL_SCREEN_RSP"] = 13474;
            values[valuesById[13475] = "CMD_RENAME_TRIAL_ROOM_REQ"] = 13475;
            values[valuesById[13476] = "CMD_RENAME_TRIAL_ROOM_RSP"] = 13476;
            values[valuesById[13477] = "CMD_CHANGE_TRIAL_INSTANCE_REQ"] = 13477;
            values[valuesById[13478] = "CMD_CHANGE_TRIAL_INSTANCE_RSP"] = 13478;
            values[valuesById[13479] = "CMD_START_TRIAL_NOTICE"] = 13479;
            values[valuesById[13480] = "CMD_SEND_TRIAL_ROBOT_AWARD_NOTICE"] = 13480;
            values[valuesById[13481] = "CMD_SYNC_TRIAL_ROLE_INFO_REQ"] = 13481;
            values[valuesById[13482] = "CMD_ZONE_LEAVE_TRIAL_ROOM_REQ"] = 13482;
            values[valuesById[13483] = "CMD_READY_TRIAL_REQ"] = 13483;
            values[valuesById[13484] = "CMD_READY_TRIAL_RSP"] = 13484;
            values[valuesById[13485] = "CMD_CANCEL_TRIAL_PRIVATE_ROOM_REQ"] = 13485;
            values[valuesById[13486] = "CMD_CANCEL_TRIAL_PRIVATE_ROOM_RSP"] = 13486;
            values[valuesById[13487] = "CMD_SIGN_UP_GROUP_BATTLE_FIGHTER_LIST_REQ"] = 13487;
            values[valuesById[13505] = "CMD_QUERY_SCHOOL_TREASURE_SHOP_REQ"] = 13505;
            values[valuesById[13506] = "CMD_QUERY_SCHOOL_TREASURE_SHOP_RSP"] = 13506;
            values[valuesById[13507] = "CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_REQ"] = 13507;
            values[valuesById[13508] = "CMD_BUY_SCHOOL_TREASURE_SHOP_GOODS_RSP"] = 13508;
            values[valuesById[13509] = "CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_REQ"] = 13509;
            values[valuesById[13510] = "CMD_LOTTERY_SCHOOL_TREASURE_SHOP_GOODS_RSP"] = 13510;
            values[valuesById[13511] = "CMD_FRESH_SCHOOL_TREASURE_SHOP_REQ"] = 13511;
            values[valuesById[13512] = "CMD_FRESH_SCHOOL_TREASURE_SHOP_RSP"] = 13512;
            values[valuesById[13536] = "CMD_QUERY_VERSION_AWARD_REQ"] = 13536;
            values[valuesById[13537] = "CMD_QUERY_VERSION_AWARD_RSP"] = 13537;
            values[valuesById[13538] = "CMD_AWARD_VERSION_AWARD_REQ"] = 13538;
            values[valuesById[13539] = "CMD_AWARD_VERSION_AWARD_RSP"] = 13539;
            values[valuesById[13568] = "CMD_QUERY_RECALL_PLAYER_INFO_REQ"] = 13568;
            values[valuesById[13569] = "CMD_QUERY_RECALL_PLAYER_INFO_RSP"] = 13569;
            values[valuesById[13570] = "CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_REQ"] = 13570;
            values[valuesById[13571] = "CMD_AWARD_RECALL_PLAYER_LOGIN_AWARD_RSP"] = 13571;
            values[valuesById[13584] = "CMD_QUERY_WEEK_CHALLENGES_REQ"] = 13584;
            values[valuesById[13585] = "CMD_QUERY_WEEK_CHALLENGES_RSP"] = 13585;
            values[valuesById[13586] = "CMD_AWARD_WEEK_CHALLENGES_REQ"] = 13586;
            values[valuesById[13587] = "CMD_AWARD_WEEK_CHALLENGES_RSP"] = 13587;
            values[valuesById[13600] = "CMD_QUERY_GROUP_HEGEMONY_INFO_REQ"] = 13600;
            values[valuesById[13601] = "CMD_QUERY_GROUP_HEGEMONY_INFO_RSP"] = 13601;
            values[valuesById[13602] = "CMD_SIGN_UP_GROUP_HEGEMONY_REQ"] = 13602;
            values[valuesById[13603] = "CMD_SIGN_UP_GROUP_HEGEMONY_RSP"] = 13603;
            values[valuesById[13604] = "CMD_MATCH_GROUP_HEGEMONY_REQ"] = 13604;
            values[valuesById[13605] = "CMD_MATCH_GROUP_HEGEMONY_RSP"] = 13605;
            values[valuesById[13606] = "CMD_START_GROUP_HEGEMONY_NOTICE"] = 13606;
            values[valuesById[13607] = "CMD_COMPLETE_GROUP_HEGEMONY_REQ"] = 13607;
            values[valuesById[13608] = "CMD_COMPLETE_GROUP_HEGEMONY_RSP"] = 13608;
            values[valuesById[13609] = "CMD_SET_GROUP_HEGEMONY_MEMBER_REQ"] = 13609;
            values[valuesById[13610] = "CMD_SET_GROUP_HEGEMONY_MEMBER_RSP"] = 13610;
            values[valuesById[13611] = "CMD_READY_GROUP_HEGEMONY_NOTICE"] = 13611;
            values[valuesById[13612] = "CMD_READY_GROUP_HEGEMONY_REQ"] = 13612;
            values[valuesById[13613] = "CMD_READY_GROUP_HEGEMONY_RSP"] = 13613;
            values[valuesById[13614] = "CMD_QUERY_GROUP_HEGEMONY_RANK_REQ"] = 13614;
            values[valuesById[13615] = "CMD_QUERY_GROUP_HEGEMONY_RANK_RSP"] = 13615;
            values[valuesById[13616] = "CMD_QUERY_GROUP_HEGEMONY_AWARD_REQ"] = 13616;
            values[valuesById[13617] = "CMD_QUERY_GROUP_HEGEMONY_AWARD_RSP"] = 13617;
            values[valuesById[13618] = "CMD_AWARD_GROUP_HEGEMONY_REQ"] = 13618;
            values[valuesById[13619] = "CMD_AWARD_GROUP_HEGEMONY_RSP"] = 13619;
            values[valuesById[13620] = "CMD_QUERY_GROUP_HEGEMONY_SHOP_REQ"] = 13620;
            values[valuesById[13621] = "CMD_QUERY_GROUP_HEGEMONY_SHOP_RSP"] = 13621;
            values[valuesById[13622] = "CMD_REFRESH_GROUP_HEGEMONY_SHOP_REQ"] = 13622;
            values[valuesById[13623] = "CMD_REFRESH_GROUP_HEGEMONY_SHOP_RSP"] = 13623;
            values[valuesById[13624] = "CMD_BUY_GROUP_HEGEMONY_SHOP_REQ"] = 13624;
            values[valuesById[13625] = "CMD_BUY_GROUP_HEGEMONY_SHOP_RSP"] = 13625;
            values[valuesById[13626] = "CMD_QUERY_GROUP_HEGEMONY_MEMBER_REQ"] = 13626;
            values[valuesById[13627] = "CMD_QUERY_GROUP_HEGEMONY_MEMBER_RSP"] = 13627;
            values[valuesById[13628] = "CMD_PARTICIPATE_GROUP_HEGEMONY_REQ"] = 13628;
            values[valuesById[13629] = "CMD_PARTICIPATE_GROUP_HEGEMONY_RSP"] = 13629;
            values[valuesById[13630] = "CMD_FINISH_GROUP_HEGEMONY_NOTICE"] = 13630;
            values[valuesById[13631] = "CMD_GROUP_HEGEMONY_RANK_NOTICE"] = 13631;
            values[valuesById[13632] = "CMD_GROUP_HEGEMONY_TOP_GROUP_NOTICE"] = 13632;
            values[valuesById[13633] = "CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_REQ"] = 13633;
            values[valuesById[13634] = "CMD_QUERY_GROUP_HEGEMONY_HISTORY_RANK_RSP"] = 13634;
            values[valuesById[13635] = "CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_REQ"] = 13635;
            values[valuesById[13636] = "CMD_QUERY_GROUP_ROLE_HEGEMONY_SCORE_RSP"] = 13636;
            values[valuesById[13637] = "CMD_GROUP_HEGEMONY_ROLE_RANK_NOTICE"] = 13637;
            values[valuesById[13638] = "CMD_CANCEL_GROUP_HEGEMONY_MATCH_REQ"] = 13638;
            values[valuesById[13639] = "CMD_CANCEL_GROUP_HEGEMONY_MATCH_RSP"] = 13639;
            values[valuesById[13664] = "CMD_QUERY_ANCHOR_RANK_REQ"] = 13664;
            values[valuesById[13665] = "CMD_QUERY_ANCHOR_RANK_RSP"] = 13665;
            values[valuesById[13666] = "CMD_PRAISE_ANCHOR_REQ"] = 13666;
            values[valuesById[13667] = "CMD_PRAISE_ANCHOR_RSP"] = 13667;
            values[valuesById[13668] = "CMD_SEND_ANCHOR_GIFT_REQ"] = 13668;
            values[valuesById[13669] = "CMD_SEND_ANCHOR_GIFT_RSP"] = 13669;
            values[valuesById[13670] = "CMD_QUERY_FANS_SCORE_AWARD_REQ"] = 13670;
            values[valuesById[13671] = "CMD_QUERY_FANS_SCORE_AWARD_RSP"] = 13671;
            values[valuesById[13672] = "CMD_AWARD_FANS_SCORE_REQ"] = 13672;
            values[valuesById[13673] = "CMD_AWARD_FANS_SCORE_RSP"] = 13673;
            values[valuesById[13674] = "CMD_QUERY_FANS_RANK_REQ"] = 13674;
            values[valuesById[13675] = "CMD_QUERY_FANS_RANK_RSP"] = 13675;
            values[valuesById[13676] = "CMD_QUERY_ANCHOR_ACTIVIY_INFO_REQ"] = 13676;
            values[valuesById[13677] = "CMD_QUERY_ANCHOR_ACTIVIY_INFO_RSP"] = 13677;
            values[valuesById[13696] = "CMD_QUERY_SUPER_EQUIPMENT_REQ"] = 13696;
            values[valuesById[13697] = "CMD_QUERY_SUPER_EQUIPMENT_RSP"] = 13697;
            values[valuesById[13698] = "CMD_PUT_ON_SUPER_EQUIPMENT_REQ"] = 13698;
            values[valuesById[13699] = "CMD_PUT_ON_SUPER_EQUIPMENT_RSP"] = 13699;
            values[valuesById[13700] = "CMD_LEV_UP_SUPER_EQUIPMENT_REQ"] = 13700;
            values[valuesById[13701] = "CMD_LEV_UP_SUPER_EQUIPMENT_RSP"] = 13701;
            values[valuesById[13702] = "CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_REQ"] = 13702;
            values[valuesById[13703] = "CMD_DECOMPOSE_SUPER_EQUIPMENT_PART_RSP"] = 13703;
            values[valuesById[13704] = "CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_REQ"] = 13704;
            values[valuesById[13705] = "CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_RSP"] = 13705;
            values[valuesById[13728] = "CMD_QUERY_SCHOOL_TURNTABLE_SHOP_REQ"] = 13728;
            values[valuesById[13729] = "CMD_QUERY_SCHOOL_TURNTABLE_SHOP_RSP"] = 13729;
            values[valuesById[13730] = "CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_REQ"] = 13730;
            values[valuesById[13731] = "CMD_ROTATE_SCHOOL_TURNTABLE_SHOP_GOODS_RSP"] = 13731;
            values[valuesById[13732] = "CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_REQ"] = 13732;
            values[valuesById[13733] = "CMD_BUY_SCHOOL_TURNTABLE_SHOP_GOODS_RSP"] = 13733;
            values[valuesById[13734] = "CMD_FRESH_SCHOOL_TURNTABLE_SHOP_REQ"] = 13734;
            values[valuesById[13735] = "CMD_FRESH_SCHOOL_TURNTABLE_SHOP_RSP"] = 13735;
            values[valuesById[13824] = "CMD_GOD_AWARD_SHOP_NOTICE"] = 13824;
            values[valuesById[13826] = "CMD_QUERY_GOD_AWARD_SHOP_GOODS_REQ"] = 13826;
            values[valuesById[13827] = "CMD_QUERY_GOD_AWARD_SHOP_GOODS_RSP"] = 13827;
            values[valuesById[13828] = "CMD_BUY_GOD_AWARD_SHOP_REQ"] = 13828;
            values[valuesById[13829] = "CMD_BUY_GOD_AWARD_SHOP_RSP"] = 13829;
            values[valuesById[13830] = "CMD_FRESH_GOD_AWARD_SHOP_REQ"] = 13830;
            values[valuesById[13831] = "CMD_FRESH_GOD_AWARD_SHOP_RSP"] = 13831;
            return values;
        })();

        /**
         * RET enum.
         * @name Cmd.User.RET
         * @enum {number}
         * @property {number} RET_SYS_ERR=-1 RET_SYS_ERR value
         * @property {number} RET_SUCCESS=0 RET_SUCCESS value
         * @property {number} RET_MODULE_SWITCH_OFF=256 RET_MODULE_SWITCH_OFF value
         * @property {number} RET_NEED_RELOGIN=4097 RET_NEED_RELOGIN value
         * @property {number} RET_ROLE_NOT_EXISTS=4112 RET_ROLE_NOT_EXISTS value
         * @property {number} RET_ROLE_NOT_ONLINE=4113 RET_ROLE_NOT_ONLINE value
         * @property {number} RET_AUTH_FAIL=4129 RET_AUTH_FAIL value
         * @property {number} RET_INSUFFICIENT_COIN=4352 RET_INSUFFICIENT_COIN value
         * @property {number} RET_INSUFFICIENT_GOLD=4353 RET_INSUFFICIENT_GOLD value
         * @property {number} RET_INSUFFICIENT_HONOUR=4354 RET_INSUFFICIENT_HONOUR value
         * @property {number} RET_INSUFFICIENT_ITEM=4355 RET_INSUFFICIENT_ITEM value
         * @property {number} RET_INSUFFICIENT_SP=4356 RET_INSUFFICIENT_SP value
         * @property {number} RET_INSUFFICIENT_SPIRIT=4357 RET_INSUFFICIENT_SPIRIT value
         * @property {number} RET_INSUFFICIENT_FAME=4358 RET_INSUFFICIENT_FAME value
         * @property {number} RET_INSUFFICIENT_VIP_POINT=4359 RET_INSUFFICIENT_VIP_POINT value
         * @property {number} RET_INSUFFICIENT_SKILL_POINT=4360 RET_INSUFFICIENT_SKILL_POINT value
         * @property {number} RET_PACK_FULL=4416 RET_PACK_FULL value
         * @property {number} RET_DEGREE_PACK_FULL=4417 RET_DEGREE_PACK_FULL value
         * @property {number} RET_CDING=4608 RET_CDING value
         * @property {number} RET_PROB_FAIL=4609 RET_PROB_FAIL value
         * @property {number} RET_OUT_OF_DATE=4610 RET_OUT_OF_DATE value
         * @property {number} RET_QUALITY_IS_MAX=4624 RET_QUALITY_IS_MAX value
         * @property {number} RET_LIMITED_LEV=4864 RET_LIMITED_LEV value
         * @property {number} RET_LIMITED_FAME_LEV=4865 RET_LIMITED_FAME_LEV value
         * @property {number} RET_LIMITED_VIP_LEV=4866 RET_LIMITED_VIP_LEV value
         * @property {number} RET_LIMITED_SP_BUY_COUNT=4867 RET_LIMITED_SP_BUY_COUNT value
         * @property {number} RET_INVALID_SCENE_ID=5120 RET_INVALID_SCENE_ID value
         * @property {number} RET_HERO_INSTANCE_HAS_PASSED=5121 RET_HERO_INSTANCE_HAS_PASSED value
         * @property {number} RET_VIP_OR_LEV_NOT_ENOUGH=5122 RET_VIP_OR_LEV_NOT_ENOUGH value
         * @property {number} RET_NOT_IN_INSTANCE=5123 RET_NOT_IN_INSTANCE value
         * @property {number} RET_ACTIVITY_INVALID_SCORE=5136 RET_ACTIVITY_INVALID_SCORE value
         * @property {number} RET_ACTIVITY_INSUFFICIENT_SCORE=5137 RET_ACTIVITY_INSUFFICIENT_SCORE value
         * @property {number} RET_ACTIVITY_HAS_AWARDED=5138 RET_ACTIVITY_HAS_AWARDED value
         * @property {number} RET_FRIEND_REPEAT_ADD=5152 RET_FRIEND_REPEAT_ADD value
         * @property {number} RET_FRIEND_NO_FRIEND=5153 RET_FRIEND_NO_FRIEND value
         * @property {number} RET_FRIEND_COUNT_LIMIT=5154 RET_FRIEND_COUNT_LIMIT value
         * @property {number} RET_MOMO_NO_FRIEND=5184 RET_MOMO_NO_FRIEND value
         * @property {number} RET_MOMO_HAS_MOMOED=5185 RET_MOMO_HAS_MOMOED value
         * @property {number} RET_MOMO_INSUFFICIENT_COUNT=5186 RET_MOMO_INSUFFICIENT_COUNT value
         * @property {number} RET_DM_UNFINISHED=5216 RET_DM_UNFINISHED value
         * @property {number} RET_DM_NO_ITEM_IN_PACK=5217 RET_DM_NO_ITEM_IN_PACK value
         * @property {number} RET_DM_SYS_CLOSED=5218 RET_DM_SYS_CLOSED value
         * @property {number} RET_DM_ALL_FINISHED=5219 RET_DM_ALL_FINISHED value
         * @property {number} RET_EQUIP_INVALID_ID=5249 RET_EQUIP_INVALID_ID value
         * @property {number} RET_EQUIP_NO_THIS_GEM=5250 RET_EQUIP_NO_THIS_GEM value
         * @property {number} RET_EQUIP_LEV_BIGGER_THAN_ROLE_LEV=5251 RET_EQUIP_LEV_BIGGER_THAN_ROLE_LEV value
         * @property {number} RET_EQUIP_WAIT_ADVANCED=5252 RET_EQUIP_WAIT_ADVANCED value
         * @property {number} RET_GEM_NO_THIS_ITEM=5265 RET_GEM_NO_THIS_ITEM value
         * @property {number} RET_GEM_ERR_LEV=5266 RET_GEM_ERR_LEV value
         * @property {number} RET_GEM_ERR_TYPE=5267 RET_GEM_ERR_TYPE value
         * @property {number} RET_GEM_REPEAT_INLAY=5268 RET_GEM_REPEAT_INLAY value
         * @property {number} RET_ITEM_INVALID_GUID=5392 RET_ITEM_INVALID_GUID value
         * @property {number} RET_ITEM_EXPIRE=5393 RET_ITEM_EXPIRE value
         * @property {number} RET_DAILY_AWARD_AWARDED=5408 RET_DAILY_AWARD_AWARDED value
         * @property {number} RET_DAILY_AWARD_DAYS=5409 RET_DAILY_AWARD_DAYS value
         * @property {number} RET_ONLINE_AWARD_LOCKED=5424 RET_ONLINE_AWARD_LOCKED value
         * @property {number} RET_ONLINE_AWARD_TIME=5425 RET_ONLINE_AWARD_TIME value
         * @property {number} RET_TERR_HAS_UNLOCKED=5456 RET_TERR_HAS_UNLOCKED value
         * @property {number} RET_TERR_INSUFFICIENT_STARS=5457 RET_TERR_INSUFFICIENT_STARS value
         * @property {number} RET_TERR_CELL_LOCKED=5458 RET_TERR_CELL_LOCKED value
         * @property {number} RET_TERR_HAS_COLLECTED=5459 RET_TERR_HAS_COLLECTED value
         * @property {number} RET_TERR_REFRESH_ROB_LIST_FAIL=5460 RET_TERR_REFRESH_ROB_LIST_FAIL value
         * @property {number} RET_TERR_STALL_HAS_UNLOCKED=5461 RET_TERR_STALL_HAS_UNLOCKED value
         * @property {number} RET_TERR_STALL_NOT_JOIN_GROUP=5462 RET_TERR_STALL_NOT_JOIN_GROUP value
         * @property {number} RET_TERR_STALL_HAS_END=5463 RET_TERR_STALL_HAS_END value
         * @property {number} RET_TERR_STALL_HAS_DEFENDED=5464 RET_TERR_STALL_HAS_DEFENDED value
         * @property {number} RET_TERR_STALL_NOT_HAS_COUNT=5465 RET_TERR_STALL_NOT_HAS_COUNT value
         * @property {number} RET_TERR_STALL_HAS_HELPED=5466 RET_TERR_STALL_HAS_HELPED value
         * @property {number} RET_EXAM_INVALID_OPTION=5488 RET_EXAM_INVALID_OPTION value
         * @property {number} RET_EXAM_AWARD_INVALID=5489 RET_EXAM_AWARD_INVALID value
         * @property {number} RET_EXAM_NOT_FINISHED=5490 RET_EXAM_NOT_FINISHED value
         * @property {number} RET_EXAM_HAS_FINISHED=5491 RET_EXAM_HAS_FINISHED value
         * @property {number} RET_RECHARGE_AWARDED=5648 RET_RECHARGE_AWARDED value
         * @property {number} RET_RECHARGE_AWARD_FAILE=5649 RET_RECHARGE_AWARD_FAILE value
         * @property {number} RET_RECHARGE_AWARD_BOOK_ERROR=5650 RET_RECHARGE_AWARD_BOOK_ERROR value
         * @property {number} RET_SANDBAGS_WAR_NUMBER_RUNOUT=5680 RET_SANDBAGS_WAR_NUMBER_RUNOUT value
         * @property {number} RET_SANDBAGS_WAR_HASCD=5681 RET_SANDBAGS_WAR_HASCD value
         * @property {number} RET_DM_INSUFFICIENT_COUNT=5712 RET_DM_INSUFFICIENT_COUNT value
         * @property {number} RET_INVALID_CLIMB_TOWER_HERO=5744 RET_INVALID_CLIMB_TOWER_HERO value
         * @property {number} RET_NOT_IN_TOWER_INSTANCE=5745 RET_NOT_IN_TOWER_INSTANCE value
         * @property {number} RET_TOWER_INSTANCE_UNBALE_JUMP=5746 RET_TOWER_INSTANCE_UNBALE_JUMP value
         * @property {number} RET_CLIMB_TOWER_AWARD_FAILE=5747 RET_CLIMB_TOWER_AWARD_FAILE value
         * @property {number} RET_INSUFFICIENT_REVIVE_COUNT=5776 RET_INSUFFICIENT_REVIVE_COUNT value
         * @property {number} RET_IN_TRANSFORM=5792 RET_IN_TRANSFORM value
         * @property {number} RET_INSUFFICIENT_TRANSFORM_CARD=5793 RET_INSUFFICIENT_TRANSFORM_CARD value
         * @property {number} RET_HERO_LOCKED=5794 RET_HERO_LOCKED value
         * @property {number} RET_HERO_STAR_FULL=5795 RET_HERO_STAR_FULL value
         * @property {number} RET_SKILL_WAIT_ADVANCED=5808 RET_SKILL_WAIT_ADVANCED value
         * @property {number} RET_SKILL_LEV_BIGGER_THAN_ROLE_LEV=5809 RET_SKILL_LEV_BIGGER_THAN_ROLE_LEV value
         * @property {number} RET_INVALID_LOTTERY_COUNT=5840 RET_INVALID_LOTTERY_COUNT value
         * @property {number} RET_INVALID_LOTTERY_TYPE=5841 RET_INVALID_LOTTERY_TYPE value
         * @property {number} RET_INVALID_GOODS_INDEX=5842 RET_INVALID_GOODS_INDEX value
         * @property {number} RET_INVALID_EXCHANGE_TYPE=5843 RET_INVALID_EXCHANGE_TYPE value
         * @property {number} RET_GOODS_HAS_EXCHANGED=5844 RET_GOODS_HAS_EXCHANGED value
         * @property {number} RET_INSUFFICIENT_LOTTERY_ITEM=5845 RET_INSUFFICIENT_LOTTERY_ITEM value
         * @property {number} RET_LOTTERY_HAS_CLOSEED=5846 RET_LOTTERY_HAS_CLOSEED value
         * @property {number} RET_WORLD_BOSS_DISABLED=5856 RET_WORLD_BOSS_DISABLED value
         * @property {number} RET_WORLD_BOSS_COUNT_RUNOUT=5857 RET_WORLD_BOSS_COUNT_RUNOUT value
         * @property {number} RET_PUT_SAME_TYPE_DEGREE=5904 RET_PUT_SAME_TYPE_DEGREE value
         * @property {number} RET_GROUP_DUP_NAME=5920 RET_GROUP_DUP_NAME value
         * @property {number} RET_GROUP_INVALID_NAME=5921 RET_GROUP_INVALID_NAME value
         * @property {number} RET_GROUP_CAPTAIN_CAN_NOT_LEAVE=5922 RET_GROUP_CAPTAIN_CAN_NOT_LEAVE value
         * @property {number} RET_GROUP_INVALID_PRIVILEGES=5923 RET_GROUP_INVALID_PRIVILEGES value
         * @property {number} RET_GROUP_INSUFFICIENT_WOOD=5924 RET_GROUP_INSUFFICIENT_WOOD value
         * @property {number} RET_GROUP_BUILDING_FULL_LEV=5925 RET_GROUP_BUILDING_FULL_LEV value
         * @property {number} RET_NOT_ALLOWED_EXCEED_BASE_LEV=5926 RET_NOT_ALLOWED_EXCEED_BASE_LEV value
         * @property {number} RET_BUILD_PARTICIPANTS_LIMIT=5927 RET_BUILD_PARTICIPANTS_LIMIT value
         * @property {number} RET_INSUFFICIENT_BUILD_COUNT=5928 RET_INSUFFICIENT_BUILD_COUNT value
         * @property {number} RET_GROUP_MEMBER_LIMIT=5929 RET_GROUP_MEMBER_LIMIT value
         * @property {number} RET_JOIN_GROUP_CD=5936 RET_JOIN_GROUP_CD value
         * @property {number} RET_GROUP_ADMIN_LIMIT=5937 RET_GROUP_ADMIN_LIMIT value
         * @property {number} RET_JOIN_ORIGIN_GROUP_CD=5938 RET_JOIN_ORIGIN_GROUP_CD value
         * @property {number} RET_JOIN_GROUP_COUNT_LIMIT=5939 RET_JOIN_GROUP_COUNT_LIMIT value
         * @property {number} RET_INSUFFICIENT_GROUP_FUND=5940 RET_INSUFFICIENT_GROUP_FUND value
         * @property {number} RET_INSUFFICIENT_GROUP_ACTIVE=5941 RET_INSUFFICIENT_GROUP_ACTIVE value
         * @property {number} RET_GROUP_BOSS_DIE=5942 RET_GROUP_BOSS_DIE value
         * @property {number} RET_NOT_IN_GROUP_BATTLE_ROLE_LIST=5943 RET_NOT_IN_GROUP_BATTLE_ROLE_LIST value
         * @property {number} RET_HERO_BATTLE_ARRAY_EMPTY=5944 RET_HERO_BATTLE_ARRAY_EMPTY value
         * @property {number} RET_GROUP_JOIN_APPLY_FAIL=5945 RET_GROUP_JOIN_APPLY_FAIL value
         * @property {number} RET_SINGLE_BATTLE_NOT_EXIST=5952 RET_SINGLE_BATTLE_NOT_EXIST value
         * @property {number} RET_GROUP_INVALID_STEERT_ID=5968 RET_GROUP_INVALID_STEERT_ID value
         * @property {number} RET_TEAM_PVE_NOT_ENABLED=5984 RET_TEAM_PVE_NOT_ENABLED value
         * @property {number} RET_TEAM_PVE_ROOM_NOT_EXISTS=5989 RET_TEAM_PVE_ROOM_NOT_EXISTS value
         * @property {number} RET_TEAM_PVE_ROOM_FULL=5990 RET_TEAM_PVE_ROOM_FULL value
         * @property {number} RET_TEAM_PVE_ROOM_NOT_FULL=5991 RET_TEAM_PVE_ROOM_NOT_FULL value
         * @property {number} RET_TEAM_PVE_ROOM_UNQUALIFIED=5992 RET_TEAM_PVE_ROOM_UNQUALIFIED value
         * @property {number} RET_TOURNAMENT_RANK_NOT_EMPTY=6000 RET_TOURNAMENT_RANK_NOT_EMPTY value
         * @property {number} RET_TITLE_HAS_ACTIVATION=6144 RET_TITLE_HAS_ACTIVATION value
         * @property {number} RET_PK_CLOSED=6176 RET_PK_CLOSED value
         * @property {number} RET_TURNTABLE_NOT_OPEN=6208 RET_TURNTABLE_NOT_OPEN value
         * @property {number} RET_PK_CHALLENGE_BAD_NAME_OR_NOT_ONLINE=6224 RET_PK_CHALLENGE_BAD_NAME_OR_NOT_ONLINE value
         * @property {number} RET_PK_CHALLENGE_REFUSE_CHALLENGED=6225 RET_PK_CHALLENGE_REFUSE_CHALLENGED value
         * @property {number} RET_PK_CHALLENGE_CANCELED_OR_TIMEOUT=6226 RET_PK_CHALLENGE_CANCELED_OR_TIMEOUT value
         * @property {number} RET_PK_CHALLENGE_IN_PROCESS=6227 RET_PK_CHALLENGE_IN_PROCESS value
         * @property {number} RET_RUNNING_RACE_FINISH=6256 RET_RUNNING_RACE_FINISH value
         * @property {number} RET_INSUFFICIENT_TRIAL_FC=6272 RET_INSUFFICIENT_TRIAL_FC value
         * @property {number} RET_INSUFFICIENT_TRIAL_COUNT=6273 RET_INSUFFICIENT_TRIAL_COUNT value
         * @property {number} RET_NOT_HAS_JOINABLE_ROOM=6274 RET_NOT_HAS_JOINABLE_ROOM value
         * @property {number} RET_INSUFFICIENT_TRIAL_SP=6275 RET_INSUFFICIENT_TRIAL_SP value
         * @property {number} RET_BUY_TRIAL_COUNT_LIMIT=6276 RET_BUY_TRIAL_COUNT_LIMIT value
         * @property {number} RET_TRIAL_LOCKED=6277 RET_TRIAL_LOCKED value
         * @property {number} RET_TRIAL_ROOM_PRIVATE=6278 RET_TRIAL_ROOM_PRIVATE value
         * @property {number} RET_TRIAL_MEMBER_NOT_READY=6279 RET_TRIAL_MEMBER_NOT_READY value
         * @property {number} RET_PLEASE_AWAKE=6288 RET_PLEASE_AWAKE value
         * @property {number} RET_HERO_LEV_LIMIT=6289 RET_HERO_LEV_LIMIT value
         * @property {number} RET_SCHOOL_TREASURE_CLOSED=6304 RET_SCHOOL_TREASURE_CLOSED value
         * @property {number} RET_SCHOOL_TURNTABLE_CLOSED=6320 RET_SCHOOL_TURNTABLE_CLOSED value
         * @property {number} RET_GROUP_HEGEMONY_MEMBER_FULL=6400 RET_GROUP_HEGEMONY_MEMBER_FULL value
         * @property {number} RET_GROUP_HEGEMONY_SET_MEMBER_CLOSED=6401 RET_GROUP_HEGEMONY_SET_MEMBER_CLOSED value
         * @property {number} RET_GOD_AWARD_SHOP_CLOSED=6464 RET_GOD_AWARD_SHOP_CLOSED value
         * @property {number} RET_MULTIPLE_ITEM_VALID=6480 RET_MULTIPLE_ITEM_VALID value
         */
        User.RET = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[-1] = "RET_SYS_ERR"] = -1;
            values[valuesById[0] = "RET_SUCCESS"] = 0;
            values[valuesById[256] = "RET_MODULE_SWITCH_OFF"] = 256;
            values[valuesById[4097] = "RET_NEED_RELOGIN"] = 4097;
            values[valuesById[4112] = "RET_ROLE_NOT_EXISTS"] = 4112;
            values[valuesById[4113] = "RET_ROLE_NOT_ONLINE"] = 4113;
            values[valuesById[4129] = "RET_AUTH_FAIL"] = 4129;
            values[valuesById[4352] = "RET_INSUFFICIENT_COIN"] = 4352;
            values[valuesById[4353] = "RET_INSUFFICIENT_GOLD"] = 4353;
            values[valuesById[4354] = "RET_INSUFFICIENT_HONOUR"] = 4354;
            values[valuesById[4355] = "RET_INSUFFICIENT_ITEM"] = 4355;
            values[valuesById[4356] = "RET_INSUFFICIENT_SP"] = 4356;
            values[valuesById[4357] = "RET_INSUFFICIENT_SPIRIT"] = 4357;
            values[valuesById[4358] = "RET_INSUFFICIENT_FAME"] = 4358;
            values[valuesById[4359] = "RET_INSUFFICIENT_VIP_POINT"] = 4359;
            values[valuesById[4360] = "RET_INSUFFICIENT_SKILL_POINT"] = 4360;
            values[valuesById[4416] = "RET_PACK_FULL"] = 4416;
            values[valuesById[4417] = "RET_DEGREE_PACK_FULL"] = 4417;
            values[valuesById[4608] = "RET_CDING"] = 4608;
            values[valuesById[4609] = "RET_PROB_FAIL"] = 4609;
            values[valuesById[4610] = "RET_OUT_OF_DATE"] = 4610;
            values[valuesById[4624] = "RET_QUALITY_IS_MAX"] = 4624;
            values[valuesById[4864] = "RET_LIMITED_LEV"] = 4864;
            values[valuesById[4865] = "RET_LIMITED_FAME_LEV"] = 4865;
            values[valuesById[4866] = "RET_LIMITED_VIP_LEV"] = 4866;
            values[valuesById[4867] = "RET_LIMITED_SP_BUY_COUNT"] = 4867;
            values[valuesById[5120] = "RET_INVALID_SCENE_ID"] = 5120;
            values[valuesById[5121] = "RET_HERO_INSTANCE_HAS_PASSED"] = 5121;
            values[valuesById[5122] = "RET_VIP_OR_LEV_NOT_ENOUGH"] = 5122;
            values[valuesById[5123] = "RET_NOT_IN_INSTANCE"] = 5123;
            values[valuesById[5136] = "RET_ACTIVITY_INVALID_SCORE"] = 5136;
            values[valuesById[5137] = "RET_ACTIVITY_INSUFFICIENT_SCORE"] = 5137;
            values[valuesById[5138] = "RET_ACTIVITY_HAS_AWARDED"] = 5138;
            values[valuesById[5152] = "RET_FRIEND_REPEAT_ADD"] = 5152;
            values[valuesById[5153] = "RET_FRIEND_NO_FRIEND"] = 5153;
            values[valuesById[5154] = "RET_FRIEND_COUNT_LIMIT"] = 5154;
            values[valuesById[5184] = "RET_MOMO_NO_FRIEND"] = 5184;
            values[valuesById[5185] = "RET_MOMO_HAS_MOMOED"] = 5185;
            values[valuesById[5186] = "RET_MOMO_INSUFFICIENT_COUNT"] = 5186;
            values[valuesById[5216] = "RET_DM_UNFINISHED"] = 5216;
            values[valuesById[5217] = "RET_DM_NO_ITEM_IN_PACK"] = 5217;
            values[valuesById[5218] = "RET_DM_SYS_CLOSED"] = 5218;
            values[valuesById[5219] = "RET_DM_ALL_FINISHED"] = 5219;
            values[valuesById[5249] = "RET_EQUIP_INVALID_ID"] = 5249;
            values[valuesById[5250] = "RET_EQUIP_NO_THIS_GEM"] = 5250;
            values[valuesById[5251] = "RET_EQUIP_LEV_BIGGER_THAN_ROLE_LEV"] = 5251;
            values[valuesById[5252] = "RET_EQUIP_WAIT_ADVANCED"] = 5252;
            values[valuesById[5265] = "RET_GEM_NO_THIS_ITEM"] = 5265;
            values[valuesById[5266] = "RET_GEM_ERR_LEV"] = 5266;
            values[valuesById[5267] = "RET_GEM_ERR_TYPE"] = 5267;
            values[valuesById[5268] = "RET_GEM_REPEAT_INLAY"] = 5268;
            values[valuesById[5392] = "RET_ITEM_INVALID_GUID"] = 5392;
            values[valuesById[5393] = "RET_ITEM_EXPIRE"] = 5393;
            values[valuesById[5408] = "RET_DAILY_AWARD_AWARDED"] = 5408;
            values[valuesById[5409] = "RET_DAILY_AWARD_DAYS"] = 5409;
            values[valuesById[5424] = "RET_ONLINE_AWARD_LOCKED"] = 5424;
            values[valuesById[5425] = "RET_ONLINE_AWARD_TIME"] = 5425;
            values[valuesById[5456] = "RET_TERR_HAS_UNLOCKED"] = 5456;
            values[valuesById[5457] = "RET_TERR_INSUFFICIENT_STARS"] = 5457;
            values[valuesById[5458] = "RET_TERR_CELL_LOCKED"] = 5458;
            values[valuesById[5459] = "RET_TERR_HAS_COLLECTED"] = 5459;
            values[valuesById[5460] = "RET_TERR_REFRESH_ROB_LIST_FAIL"] = 5460;
            values[valuesById[5461] = "RET_TERR_STALL_HAS_UNLOCKED"] = 5461;
            values[valuesById[5462] = "RET_TERR_STALL_NOT_JOIN_GROUP"] = 5462;
            values[valuesById[5463] = "RET_TERR_STALL_HAS_END"] = 5463;
            values[valuesById[5464] = "RET_TERR_STALL_HAS_DEFENDED"] = 5464;
            values[valuesById[5465] = "RET_TERR_STALL_NOT_HAS_COUNT"] = 5465;
            values[valuesById[5466] = "RET_TERR_STALL_HAS_HELPED"] = 5466;
            values[valuesById[5488] = "RET_EXAM_INVALID_OPTION"] = 5488;
            values[valuesById[5489] = "RET_EXAM_AWARD_INVALID"] = 5489;
            values[valuesById[5490] = "RET_EXAM_NOT_FINISHED"] = 5490;
            values[valuesById[5491] = "RET_EXAM_HAS_FINISHED"] = 5491;
            values[valuesById[5648] = "RET_RECHARGE_AWARDED"] = 5648;
            values[valuesById[5649] = "RET_RECHARGE_AWARD_FAILE"] = 5649;
            values[valuesById[5650] = "RET_RECHARGE_AWARD_BOOK_ERROR"] = 5650;
            values[valuesById[5680] = "RET_SANDBAGS_WAR_NUMBER_RUNOUT"] = 5680;
            values[valuesById[5681] = "RET_SANDBAGS_WAR_HASCD"] = 5681;
            values[valuesById[5712] = "RET_DM_INSUFFICIENT_COUNT"] = 5712;
            values[valuesById[5744] = "RET_INVALID_CLIMB_TOWER_HERO"] = 5744;
            values[valuesById[5745] = "RET_NOT_IN_TOWER_INSTANCE"] = 5745;
            values[valuesById[5746] = "RET_TOWER_INSTANCE_UNBALE_JUMP"] = 5746;
            values[valuesById[5747] = "RET_CLIMB_TOWER_AWARD_FAILE"] = 5747;
            values[valuesById[5776] = "RET_INSUFFICIENT_REVIVE_COUNT"] = 5776;
            values[valuesById[5792] = "RET_IN_TRANSFORM"] = 5792;
            values[valuesById[5793] = "RET_INSUFFICIENT_TRANSFORM_CARD"] = 5793;
            values[valuesById[5794] = "RET_HERO_LOCKED"] = 5794;
            values[valuesById[5795] = "RET_HERO_STAR_FULL"] = 5795;
            values[valuesById[5808] = "RET_SKILL_WAIT_ADVANCED"] = 5808;
            values[valuesById[5809] = "RET_SKILL_LEV_BIGGER_THAN_ROLE_LEV"] = 5809;
            values[valuesById[5840] = "RET_INVALID_LOTTERY_COUNT"] = 5840;
            values[valuesById[5841] = "RET_INVALID_LOTTERY_TYPE"] = 5841;
            values[valuesById[5842] = "RET_INVALID_GOODS_INDEX"] = 5842;
            values[valuesById[5843] = "RET_INVALID_EXCHANGE_TYPE"] = 5843;
            values[valuesById[5844] = "RET_GOODS_HAS_EXCHANGED"] = 5844;
            values[valuesById[5845] = "RET_INSUFFICIENT_LOTTERY_ITEM"] = 5845;
            values[valuesById[5846] = "RET_LOTTERY_HAS_CLOSEED"] = 5846;
            values[valuesById[5856] = "RET_WORLD_BOSS_DISABLED"] = 5856;
            values[valuesById[5857] = "RET_WORLD_BOSS_COUNT_RUNOUT"] = 5857;
            values[valuesById[5904] = "RET_PUT_SAME_TYPE_DEGREE"] = 5904;
            values[valuesById[5920] = "RET_GROUP_DUP_NAME"] = 5920;
            values[valuesById[5921] = "RET_GROUP_INVALID_NAME"] = 5921;
            values[valuesById[5922] = "RET_GROUP_CAPTAIN_CAN_NOT_LEAVE"] = 5922;
            values[valuesById[5923] = "RET_GROUP_INVALID_PRIVILEGES"] = 5923;
            values[valuesById[5924] = "RET_GROUP_INSUFFICIENT_WOOD"] = 5924;
            values[valuesById[5925] = "RET_GROUP_BUILDING_FULL_LEV"] = 5925;
            values[valuesById[5926] = "RET_NOT_ALLOWED_EXCEED_BASE_LEV"] = 5926;
            values[valuesById[5927] = "RET_BUILD_PARTICIPANTS_LIMIT"] = 5927;
            values[valuesById[5928] = "RET_INSUFFICIENT_BUILD_COUNT"] = 5928;
            values[valuesById[5929] = "RET_GROUP_MEMBER_LIMIT"] = 5929;
            values[valuesById[5936] = "RET_JOIN_GROUP_CD"] = 5936;
            values[valuesById[5937] = "RET_GROUP_ADMIN_LIMIT"] = 5937;
            values[valuesById[5938] = "RET_JOIN_ORIGIN_GROUP_CD"] = 5938;
            values[valuesById[5939] = "RET_JOIN_GROUP_COUNT_LIMIT"] = 5939;
            values[valuesById[5940] = "RET_INSUFFICIENT_GROUP_FUND"] = 5940;
            values[valuesById[5941] = "RET_INSUFFICIENT_GROUP_ACTIVE"] = 5941;
            values[valuesById[5942] = "RET_GROUP_BOSS_DIE"] = 5942;
            values[valuesById[5943] = "RET_NOT_IN_GROUP_BATTLE_ROLE_LIST"] = 5943;
            values[valuesById[5944] = "RET_HERO_BATTLE_ARRAY_EMPTY"] = 5944;
            values[valuesById[5945] = "RET_GROUP_JOIN_APPLY_FAIL"] = 5945;
            values[valuesById[5952] = "RET_SINGLE_BATTLE_NOT_EXIST"] = 5952;
            values[valuesById[5968] = "RET_GROUP_INVALID_STEERT_ID"] = 5968;
            values[valuesById[5984] = "RET_TEAM_PVE_NOT_ENABLED"] = 5984;
            values[valuesById[5989] = "RET_TEAM_PVE_ROOM_NOT_EXISTS"] = 5989;
            values[valuesById[5990] = "RET_TEAM_PVE_ROOM_FULL"] = 5990;
            values[valuesById[5991] = "RET_TEAM_PVE_ROOM_NOT_FULL"] = 5991;
            values[valuesById[5992] = "RET_TEAM_PVE_ROOM_UNQUALIFIED"] = 5992;
            values[valuesById[6000] = "RET_TOURNAMENT_RANK_NOT_EMPTY"] = 6000;
            values[valuesById[6144] = "RET_TITLE_HAS_ACTIVATION"] = 6144;
            values[valuesById[6176] = "RET_PK_CLOSED"] = 6176;
            values[valuesById[6208] = "RET_TURNTABLE_NOT_OPEN"] = 6208;
            values[valuesById[6224] = "RET_PK_CHALLENGE_BAD_NAME_OR_NOT_ONLINE"] = 6224;
            values[valuesById[6225] = "RET_PK_CHALLENGE_REFUSE_CHALLENGED"] = 6225;
            values[valuesById[6226] = "RET_PK_CHALLENGE_CANCELED_OR_TIMEOUT"] = 6226;
            values[valuesById[6227] = "RET_PK_CHALLENGE_IN_PROCESS"] = 6227;
            values[valuesById[6256] = "RET_RUNNING_RACE_FINISH"] = 6256;
            values[valuesById[6272] = "RET_INSUFFICIENT_TRIAL_FC"] = 6272;
            values[valuesById[6273] = "RET_INSUFFICIENT_TRIAL_COUNT"] = 6273;
            values[valuesById[6274] = "RET_NOT_HAS_JOINABLE_ROOM"] = 6274;
            values[valuesById[6275] = "RET_INSUFFICIENT_TRIAL_SP"] = 6275;
            values[valuesById[6276] = "RET_BUY_TRIAL_COUNT_LIMIT"] = 6276;
            values[valuesById[6277] = "RET_TRIAL_LOCKED"] = 6277;
            values[valuesById[6278] = "RET_TRIAL_ROOM_PRIVATE"] = 6278;
            values[valuesById[6279] = "RET_TRIAL_MEMBER_NOT_READY"] = 6279;
            values[valuesById[6288] = "RET_PLEASE_AWAKE"] = 6288;
            values[valuesById[6289] = "RET_HERO_LEV_LIMIT"] = 6289;
            values[valuesById[6304] = "RET_SCHOOL_TREASURE_CLOSED"] = 6304;
            values[valuesById[6320] = "RET_SCHOOL_TURNTABLE_CLOSED"] = 6320;
            values[valuesById[6400] = "RET_GROUP_HEGEMONY_MEMBER_FULL"] = 6400;
            values[valuesById[6401] = "RET_GROUP_HEGEMONY_SET_MEMBER_CLOSED"] = 6401;
            values[valuesById[6464] = "RET_GOD_AWARD_SHOP_CLOSED"] = 6464;
            values[valuesById[6480] = "RET_MULTIPLE_ITEM_VALID"] = 6480;
            return values;
        })();

        return User;
    })();

    return Cmd;
})();

module.exports = $root;
