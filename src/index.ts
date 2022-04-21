import { Cmd } from "./protobuff/command_user";

const ProjectName: string = 'new-typescript-project'

function say (): string {
  console.error(Cmd.User.CMD.CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_REQ);
  return `This project  fdaf is ${ProjectName}.`;
}
console.log(say())