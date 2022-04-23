"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.req = void 0;
require("reflect-metadata");
var command_user_1 = require("../protobuff/command_user");
var req = /** @class */ (function () {
    function req() {
    }
    req.prototype.CMD_GM_CONTROL_PK_REQ = function () {
        console.error("CMD_GM_CONTROL_PK_REQ = ", command_user_1.Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ);
    };
    __decorate([
        Reflect.metadata(command_user_1.Cmd.User.CMD.CMD_GM_CONTROL_PK_REQ, 'CMD_GM_CONTROL_PK_REQ')
    ], req.prototype, "CMD_GM_CONTROL_PK_REQ");
    return req;
}());
exports.req = req;
