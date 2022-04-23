import 'reflect-metadata'
import { Cmd } from '../protobuff/command_user';


export class req {
  @Reflect.metadata(Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ, 'CMD_GM_CONTROL_PK_REQ')
  public CMD_GM_CONTROL_PK_REQ() {
    console.error("CMD_GM_CONTROL_PK_REQ = ",Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ);
  }
}