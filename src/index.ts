import { NetManager } from "./NetWork/NetManager";
import { Cmd } from "./protobuff/command_user";
import { req } from "./NetWork/req";

let netManger:NetManager = new NetManager();
netManger.Init();
let _req = new req();
console.error(Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ);
let funcCmd = Reflect.getMetadata(Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ,_req);
console.error(funcCmd);
