import net, { Socket, Server } from "net"
import { Singleton } from "../Code/Singleton/Singleton";
import { protocol_req } from "./protocol_req";
import { protocol_rsp } from "./protocol_rsp";
import { Dispatch } from "./../Code/Event/Dispatch";
import { Cmd } from "./../protobuff/command_id";
import { UserInfo } from "./../Code/User/UserInfo";

export class NetManager extends Singleton<NetManager>
{
  public dispatch_req: Dispatch | undefined;
  public dispatch_rsp: Dispatch | undefined;
  private server: net.Server | undefined;
  private protocol_req: protocol_req | undefined;
  private protocol_rsp: protocol_rsp | undefined;
  /**
   *  Init
   */

  private InitDispatch(protoTypeOf: any, dispatcher: Dispatch) {
    for (var e in Cmd.ID.CMD) {
      var keyToAny: any = e;
      if (isNaN(keyToAny)) {
        let func = protoTypeOf[e];
        if (func != null) {
          let msgId = Number.parseInt(Cmd.ID.CMD[keyToAny]);
          dispatcher.On(msgId, func);
        }
      }
    }
  }

  public Init() {
    this.server = net.createServer();
    this.protocol_req = new protocol_req();
    this.protocol_rsp = new protocol_rsp();
    this.dispatch_req = new Dispatch();
    this.dispatch_rsp = new Dispatch();

    let protoTypeOf = Object.getPrototypeOf(this.protocol_req);
    this.InitDispatch(protoTypeOf, this.dispatch_req);
    protoTypeOf = Object.getPrototypeOf(this.protocol_rsp);
    this.InitDispatch(protoTypeOf, this.dispatch_rsp);
  }

  constructor() {
    super();
    this.Init();
  }

  public start() {
    this.server && this.server.listen(3333, "0.0.0.0", () => {
      console.error("启动tcp XB监听服务");
    })

    this.server && this.server.on("connection", this.OnConnect);
  }

  private OnConnect(socket: Socket) {
    let userInfo: UserInfo = new UserInfo();
    userInfo.onSocket(socket);
    console.error(`新客户端连接 ${socket.remoteAddress} 端口 ${socket.remotePort}`)
  }
}

