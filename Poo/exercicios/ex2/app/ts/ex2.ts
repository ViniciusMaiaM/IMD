class ContaCorrente{
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;


    constructor(nome_correntista:string,cpf_correntista:string,saldo:number){
        this.nome_correntista = nome_correntista;
        this.cpf_correntista = cpf_correntista;
        this.saldo = saldo;
    }

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


let c = new ContaCorrente("Vinicius","213443312",1233);
c.setNome("Vinicius")   
c.setCpf("1234123123")
c.setSaldo(1234)
c.depositar(100)
c.sacar(100)
c.mostrarInformacoes()
