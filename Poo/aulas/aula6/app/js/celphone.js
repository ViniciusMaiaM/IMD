"use strict";
// O modificador protected define que classes filhas/derivadas também tem acesso
// ao atributo ou método
// Ele chamará o construtor da superclasse para que essa possa realizar 
// as suas inicializações antes mesmo que todas as suas classes filhas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cellphone = void 0;
var Cellphone = /** @class */ (function () {
    function Cellphone() {
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
    return Cellphone;
}());
exports.Cellphone = Cellphone;
var c = new Cellphone();
c.call();
