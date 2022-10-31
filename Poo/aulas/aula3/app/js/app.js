"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
// Importando a classe
var c;
c = new carro_1.Carro("Fiesta", "Vermelho", "dao-3123", 4);
c.cor = "Vermelho";
console.log("A cor do carro ".concat(c.modelo, " \u00E9 ").concat(c.cor));
