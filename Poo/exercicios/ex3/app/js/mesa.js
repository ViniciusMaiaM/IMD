var MesaDeJantar = /** @class */ (function () {
    function MesaDeJantar(material, lugares, preco) {
        this.material = material;
        this.lugares = lugares;
        this.preco = preco;
        if (lugares != undefined) {
            this.lugares = lugares;
        }
        else {
            this.lugares = 4;
        }
        if (preco != undefined) {
            this.preco = preco;
        }
        else {
            this.preco = 0;
        }
    }
    MesaDeJantar.prototype.detalhar = function () {
        console.log("Material: ".concat(this.material, " \nLugares: ").concat(this.lugares, " \nPre\u00E7o: ").concat(this.preco));
    };
    return MesaDeJantar;
}());
var m1 = new MesaDeJantar("Metal", 8, 100);
var m2 = new MesaDeJantar("Madeira", 6);
var m3 = new MesaDeJantar("Vidro");
m1.detalhar();
m2.detalhar();
m3.detalhar();
