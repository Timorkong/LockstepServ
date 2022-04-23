"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.Instance = function (c) {
        if (this.instance == null)
            this.instance = new c();
        return this.instance;
    };
    Singleton.instance = null;
    return Singleton;
}());
exports.Singleton = Singleton;
