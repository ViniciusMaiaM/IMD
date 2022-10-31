export class Carro{

    modelo: string;
    _cor: string;
    placa: string;
    num_porta: number;

    constructor(modelo:string, cor:string, placa: string, num_porta?: number){
        this.modelo = modelo;
        this.cor = cor;
        this.placa = placa;
        
        if(num_porta != undefined){
            this.num_porta = num_porta;
        }
        else{
            this.num_porta = 2;
        }

    }

    get cor():string{
        return this._cor;
    }

    set cor(cor:string){
        this._cor = cor;
    }
}

// com o "export" assim exportamos a clase