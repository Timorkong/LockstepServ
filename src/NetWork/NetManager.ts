import { env } from "process";
import net,{Socket,Server} from "net"
import { Singleton } from "../Code/Singleton";

export class NetManager extends Singleton<NetManager>
{
    private server:Server|undefined;
    /**
     *  Init
     */
    public  Init() {
        this.server = net.createServer();
        this.server.listen(3333,"0.0.0.0",()=>{
            console.error("启动tcp 监听服务");
          })
          
          this.server.on("connection",socket =>{
            console.error(`新客户端连接 ${socket.remoteAddress} 端口 ${socket.remotePort}`)
          })
    }
}
