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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WifiCellphone = void 0;
var second_cellphone_1 = require("./second_cellphone");
var WifiCellphone = /** @class */ (function (_super) {
    __extends(WifiCellphone, _super);
    function WifiCellphone(brand, battery, chip, camera, wifi) {
        var _this = _super.call(this, brand, battery, chip, camera) || this;
        _this._wifi = wifi;
        return _this;
    }
    Object.defineProperty(WifiCellphone.prototype, "wifi", {
        get: function () {
            return this._wifi;
        },
        set: function (wifi) {
            this._wifi = wifi;
        },
        enumerable: false,
        configurable: true
    });
    WifiCellphone.prototype.connect = function () {
        if (this._wifi == undefined) {
            console.log("You don't have a wifi connection!");
        }
        else {
            console.log("You're connected to the wifi ".concat(this._wifi));
        }
    };
    WifiCellphone.prototype.detail = function () {
        _super.prototype.detail.call(this);
        console.log("\n        Wifi: ".concat(this._wifi));
    };
    return WifiCellphone;
}(second_cellphone_1.CameraCellphone));
exports.WifiCellphone = WifiCellphone;
var c = new WifiCellphone("Motorola", 50, 2, 1, "rede");
c.detail();
c.connect();
