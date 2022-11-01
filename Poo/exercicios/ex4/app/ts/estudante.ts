class Estudante{

    public constructor(
        readonly _id: string,
        public _nome: string,
        private _credito: number,){
            if(_credito <= 0){
                this._credito = 1;
            }
        }    

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get credito(): number {
        return this._credito;
    }

    public set credito(credito: number) {
        if(credito <= 0){
            this._credito = 1;
        }

        else{
            this._credito = credito;
        }
    }

    public detalhar(){
        console.log(`ID: ${this._id} \nNome: ${this.nome} \nCredito: ${this._credito}`)
    }
}

let c = new Estudante("1","Vinicius",5);
c.credito = -2;
c.detalhar()
let c2 = new Estudante("2","Teste",0);
c.credito = 2;
c2.detalhar()