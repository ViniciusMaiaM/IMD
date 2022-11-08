"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
var Keyboard = /** @class */ (function () {
    function Keyboard(type_switch, num_key) {
        this._tipe_switch = type_switch;
        if ((num_key != undefined) && (num_key >= 26)) {
            this._num_key = num_key;
        }
        else {
            this._num_key = 102;
        }
    }
    Object.defineProperty(Keyboard.prototype, "type_switch", {
        get: function () {
            return this._tipe_switch;
        },
        set: function (type_switch) {
            this._tipe_switch = type_switch;
        },
        enumerable: false,
        configurable: true
    });
    Keyboard.prototype.detalhar = function () {
        console.log("\nSwitch:".concat(this._tipe_switch, " \nKey: ").concat(this._num_key));
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;
