"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NetManager = void 0;
var net_1 = require("net");
var Singleton_1 = require("../Code/Singleton");
var NetManager = /** @class */ (function (_super) {
    __extends(NetManager, _super);
    function NetManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Init
     */
    NetManager.prototype.Init = function () {
        this.server = net_1["default"].createServer();
        this.server.listen(3333, "0.0.0.0", function () {
            console.error("启动tcp 监听服务");
        });
        this.server.on("connection", function (socket) {
            console.error("\u65B0\u5BA2\u6237\u7AEF\u8FDE\u63A5 ".concat(socket.remoteAddress, " \u7AEF\u53E3 ").concat(socket.remotePort));
        });
    };
    return NetManager;
}(Singleton_1.Singleton));
exports.NetManager = NetManager;
