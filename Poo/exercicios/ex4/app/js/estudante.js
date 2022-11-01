var Estudante = /** @class */ (function () {
    function Estudante(_id, _nome, _credito) {
        this._id = _id;
        this._nome = _nome;
        this._credito = _credito;
        if (_credito <= 0) {
            this._credito = 1;
        }
    }
    Object.defineProperty(Estudante.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudante.prototype, "credito", {
        get: function () {
            return this._credito;
        },
        set: function (credito) {
            if (credito <= 0) {
                this._credito = 1;
            }
            else {
                this._credito = credito;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estudante.prototype.detalhar = function () {
        console.log("ID: ".concat(this._id, " \nNome: ").concat(this.nome, " \nCredito: ").concat(this._credito));
    };
    return Estudante;
}());
var c = new Estudante("1", "Vinicius", 5);
c.credito = -2;
c.detalhar();
var c2 = new Estudante("2", "Teste", 0);
c.credito = 2;
c2.detalhar();
