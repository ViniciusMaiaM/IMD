class ContaCorrente{
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;

    setNome(nome:string){
        this.nome_correntista = nome;
    }

    setCpf(cpf:string){
        this.cpf_correntista = cpf;
    }

    setSaldo(num:number){
        this.saldo = num;
    }

    depositar(depo:number){
        this.saldo += depo;
    }

    sacar(sac:number){
        this.saldo -= sac;
    }

    mostrarInformacoes(){
        console.log(`Nome: ${c.nome_correntista} | CPF: ${c.cpf_correntista} | Saldo: ${c.saldo}`)
    }

}


let c = new ContaCorrente;
c.setNome("Vinicius")   
c.setCpf("1234123123")
c.setSaldo(1234)
c.depositar(100)
c.sacar(100)
c.mostrarInformacoes()
