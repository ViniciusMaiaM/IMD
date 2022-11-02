class Carro{  
    
    modelo: string;
    _cor: string;
    placa: string;
    numPortas: number;

    get cor(): string{
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }

}

let c = new Carro();

c.cor = "Vermelho"

console.log(c.cor);