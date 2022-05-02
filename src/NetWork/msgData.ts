export enum NET_DEFINE {
    HEAD_MSG_ID_SIZE = 4,//包头消息号大小
    HEAD_SEQUENCE_SIZE = 4,//包头消息序列号大小
    HEAD_LENTH_SIZE = 4,//包头长度字段大小
    HEAD_SIZE = HEAD_LENTH_SIZE + HEAD_MSG_ID_SIZE + HEAD_SEQUENCE_SIZE, //包头大小
}

export class MsgData {
    public msgID = 0;
    public sequence = 0;
    public msg!: Buffer;
    public add() {
        this.msg.at(0)
    }
}
