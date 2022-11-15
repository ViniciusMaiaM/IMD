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
exports.CameraCellphone = void 0;
var base_cellphone_1 = require("./base_cellphone");
var CameraCellphone = /** @class */ (function (_super) {
    __extends(CameraCellphone, _super);
    function CameraCellphone(brand, battery, chip, camera) {
        var _this = _super.call(this, brand, battery, chip) || this;
        _this._camera = camera;
        if (camera == undefined) {
            _this._camera = 0;
        }
        return _this;
    }
    Object.defineProperty(CameraCellphone.prototype, "camera", {
        get: function () {
            return this._camera;
        },
        set: function (camera) {
            if (camera == undefined) {
                this._camera = 0;
            }
            else {
                this._camera = camera;
            }
        },
        enumerable: false,
        configurable: true
    });
    CameraCellphone.prototype.photograph = function (picture) {
        if (this._camera > 0 && picture) {
            console.log("You took a picture!");
        }
        else {
            console.log("You can't take a picture!");
        }
    };
    CameraCellphone.prototype.flashlight = function (power) {
        if (power) {
            console.log("Your flashlight is on!");
        }
        else {
            console.log("Your flashlight is of!");
        }
    };
    CameraCellphone.prototype.detail = function () {
        _super.prototype.detail.call(this);
        console.log("\n        Camera: ".concat(this._camera));
    };
    return CameraCellphone;
}(base_cellphone_1.Cellphone));
exports.CameraCellphone = CameraCellphone;
var c = new CameraCellphone("LG", 50, 2, 1);
c.detail();
c.photograph(true);
c.flashlight(false);
