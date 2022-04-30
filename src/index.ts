import { NetManager } from "./NetWork/NetManager";
import { Cmd } from "./protobuff/command_user";
import { protocol_req } from "./NetWork/protocol_req";
import "reflect-metadata";

let netManger: NetManager = new NetManager();
netManger.Init();
let _req = new protocol_req();

let pro = Object.getPrototypeOf(_req);

for (var e in Cmd.User.CMD) {
  var keyToAny: any = e;
  if (isNaN(keyToAny)) {
    var fruitAnyType: any = Cmd.User.CMD[e];
    let func = pro[e];
    if (func != null) {
      func(e);
    }
  }
}

