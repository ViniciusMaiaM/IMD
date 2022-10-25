var ContaCorrente = /** @class */ (function () {
    function ContaCorrente() {
    }
    ContaCorrente.prototype.setNome = function (nome) {
        this.nome_correntista = nome;
    };
    ContaCorrente.prototype.setCpf = function (cpf) {
        this.cpf_correntista = cpf;
    };
    ContaCorrente.prototype.setSaldo = function (num) {
        this.saldo = num;
    };
    ContaCorrente.prototype.depositar = function (depo) {
        this.saldo += depo;
    };
    ContaCorrente.prototype.sacar = function (sac) {
        this.saldo -= sac;
    };
    ContaCorrente.prototype.mostrarInformacoes = function () {
        console.log("Nome: ".concat(c.nome_correntista, " | CPF: ").concat(c.cpf_correntista, " | Saldo: ").concat(c.saldo));
    };
    return ContaCorrente;
}());
var c = new ContaCorrente;
c.setNome("Vinicius");
c.setCpf("1234123123");
c.setSaldo(1234);
c.depositar(100);
c.sacar(100);
c.mostrarInformacoes();
