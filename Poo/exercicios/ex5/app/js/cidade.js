var Cidade = /** @class */ (function () {
    function Cidade(nome) {
        this.nome = nome;
    }
    return Cidade;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cidade) {
    }
    return Pessoa;
}());
var Animal = /** @class */ (function () {
    function Animal(nome, dono) {
    }
    return Animal;
}());
var natal = new Cidade("Natal");
var joao = new Pessoa("João", natal);
var toto = new Animal("Totó", joao);
