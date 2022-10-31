"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, num_porta) {
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        if (num_porta != undefined) {
            this.num_porta = num_porta;
        }
        else {
            this.num_porta = 2;
        }
    }
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
exports.Carro = Carro;
// com o "export" assim exportamos a clase
