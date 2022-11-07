"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
var Monitor = /** @class */ (function () {
    function Monitor(hz, name, brand, num_input) {
        this._hz = hz;
        this._name = name;
        this._brand = brand;
        this._num_input = num_input;
        if ((hz < 60) || (hz == undefined)) {
            this._hz = 60;
        }
    }
    Object.defineProperty(Monitor.prototype, "hz", {
        get: function () {
            return this._hz;
        },
        set: function (hz) {
            if ((hz < 60) || (hz == undefined)) {
                this._hz = 60;
            }
            else {
                this._hz = hz;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name != undefined) {
                this._name = name;
            }
            else {
                this._name = "Name Monitor";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (brand) {
            if (brand != undefined) {
                this._brand = brand;
            }
            else {
                this._brand = "LG";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "num_input", {
        get: function () {
            return this._num_input;
        },
        set: function (num_imput) {
            if (num_imput != undefined) {
                this._num_input = num_imput;
            }
            else {
                this._num_input = 2;
            }
        },
        enumerable: false,
        configurable: true
    });
    Monitor.prototype.detalhar = function () {
        console.log("HZ:".concat(this._hz, " \nName: ").concat(this._name, " \n        \nBrand: ").concat(this._brand, " \nInput:").concat(this._num_input));
    };
    return Monitor;
}());
exports.Monitor = Monitor;
