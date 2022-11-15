"use strict";
// O modificador protected define que classes filhas/derivadas também tem acesso
// ao atributo ou método
// Ele chamará o construtor da superclasse para que essa possa realizar 
// as suas inicializações antes mesmo que todas as suas classes filhas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cellphone = void 0;
var Cellphone = /** @class */ (function () {
    function Cellphone(brand, battery, chip) {
        this._brand = brand;
        this._battery = battery;
        this._chip = chip;
        if (battery == undefined || battery < 0) {
            this._battery = 100;
        }
        if (chip == undefined || chip <= 0) {
            this._chip = 1;
        }
    }
    Cellphone.prototype.power = function (action) {
        if (action) {
            console.log("The cellphone is on!");
        }
        else {
            console.log("The cellphone is of!");
        }
    };
    Cellphone.prototype.call = function (queue) {
        if (queue > 0) {
            console.log("You have ".concat(queue, " call(s) in the queue!"));
        }
        else {
            console.log("You don't have any call in queue!");
        }
    };
    Object.defineProperty(Cellphone.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        set: function (battery) {
            if (battery < 0) {
                this._battery = 100;
            }
            else {
                this._battery = battery;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cellphone.prototype, "chip", {
        get: function () {
            return this._chip;
        },
        set: function (chip) {
            if (chip <= 0) {
                this._chip = 1;
            }
            else {
                this._chip = chip;
            }
        },
        enumerable: false,
        configurable: true
    });
    Cellphone.prototype.detail = function () {
        console.log("\n        Brand: ".concat(this._brand, "\n        Battery: ").concat(this._battery, "\n        Chip(s): ").concat(this._chip));
    };
    return Cellphone;
}());
exports.Cellphone = Cellphone;
