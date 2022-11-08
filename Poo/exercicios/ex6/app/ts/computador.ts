class Computador{
    processador: string;
    memoria:number;

    public get proces():string{
        return this.processador;
    }

    public set proces(proces:string){
        this.processador = proces;
    }

    public get mem():number{
        return this.memoria;
    }

    public set mem(mem:number){
        this.memoria = mem;
    }
}

class Laptop extends Computador{
    bateria_watts: number = 0;

    public get bat():number{
        return this.bateria_watts;
    }

    public set bat(bat:number){
        this.bateria_watts = bat;
    }

}

class Desktop extends Computador{
    cabinenete: string = "";

    public get cab():string{
        return this.cabinenete;
    }

    public set cab(cab:string){
        this.cabinenete = cab;
    }    

}

