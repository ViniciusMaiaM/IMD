var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(nome_correntista, cpf_correntista, saldo) {
        this.nome_correntista = nome_correntista;
        this.cpf_correntista = cpf_correntista;
        this.saldo = saldo;
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
var c = new ContaCorrente("Vinicius", "213443312", 1233);
c.setNome("Vinicius");
c.setCpf("1234123123");
c.setSaldo(1234);
c.depositar(100);
c.sacar(100);
c.mostrarInformacoes();
