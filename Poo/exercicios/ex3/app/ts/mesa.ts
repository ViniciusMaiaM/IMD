class MesaDeJantar{
    material: string;
    lugares: number;
    preco: number;

    constructor(material:string, lugares?:number,preco?:number){
        this.material = material;
        this.lugares = lugares;
        this.preco = preco;

        if(lugares != undefined){
            this.lugares = lugares;
        }
        else{
            this.lugares = 4;
        }

        if(preco != undefined){
            this.preco = preco;
        }
        else{
            this.preco = 0;
        }
    }

    detalhar(){
        console.log(`Material: ${this.material} \nLugares: ${this.lugares} \nPreço: ${this.preco}`)
    }
}

let m1 = new MesaDeJantar("Metal",8,100);
let m2 = new MesaDeJantar("Madeira",6);
let m3 = new MesaDeJantar("Vidro");
m1.detalhar();
m2.detalhar();
m3.detalhar();