"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volante = exports.Jogador = void 0;
var Jogador = /** @class */ (function () {
    function Jogador() {
    }
    Jogador.prototype.mover = function () {
        console.log("Jogador se movendo");
    };
    return Jogador;
}());
exports.Jogador = Jogador;
var Volante = /** @class */ (function () {
    function Volante() {
    }
    Volante.prototype.mover = function () {
        console.log("Volante girando");
    };
    return Volante;
}());
exports.Volante = Volante;
var jog = new Jogador();
var vol = new Volante();
jog.mover();
vol.mover();
