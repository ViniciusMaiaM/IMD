"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var monitor_1 = require("./monitor");
var teclado_1 = require("./teclado");
var Computer = /** @class */ (function () {
    function Computer(type_switch, num_key, hz, name, brand, num_imput) {
        this._monitor = new monitor_1.Monitor(hz, name, brand, num_imput);
        this._keyboard = new teclado_1.Keyboard(type_switch, num_key);
    }
    Computer.prototype.ligar = function (type_switch, num_key, hz, name, brand, num_imput) {
        this._monitor = new monitor_1.Monitor(hz, name, brand, num_imput);
        this._keyboard = new teclado_1.Keyboard(type_switch, num_key);
    };
    Object.defineProperty(Computer.prototype, "monitor", {
        get: function () {
            return this._monitor;
        },
        set: function (monitor) {
            this._monitor = monitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computer.prototype, "keyboard", {
        get: function () {
            return this._keyboard;
        },
        set: function (keyboard) {
            this._keyboard = keyboard;
        },
        enumerable: false,
        configurable: true
    });
    Computer.prototype.detalhar = function () {
        console.log("Monitor:".concat(this.monitor.detalhar(), " \n        \nKeyboard: ").concat(this.keyboard.detalhar()));
    };
    return Computer;
}());
exports.Computer = Computer;
var teste = new Computer("Red", 0, 60, "Vincius", "", 4);
teste.detalhar();
