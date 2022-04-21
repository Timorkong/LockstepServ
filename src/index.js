"use strict";
exports.__esModule = true;
var command_user_1 = require("./protobuff/command_user");
var ProjectName = 'new-typescript-project';
function say() {
    console.error(command_user_1.Cmd.User.CMD.CMD_ACTIVATE_SUPER_EQUIPMENT_SUIT_REQ);
    return "This project  fdaf is ".concat(ProjectName, ".");
}
console.log(say());
