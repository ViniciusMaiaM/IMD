// O modificador protected define que classes filhas/derivadas também tem acesso
// ao atributo ou método
// Ele chamará o construtor da superclasse para que essa possa realizar 
// as suas inicializações antes mesmo que todas as suas classes filhas

export class Cellphone{
    protected _brand:string;
    protected _battery: number;
    protected _chip: number;

    public constructor(brand:string,battery: number, chip?: number){
        this._brand = brand;
        this._battery = battery;
        this._chip = chip;


        if(battery == undefined || battery < 0){
            this._battery = 100;
        }

        if(chip == undefined || chip <= 0){
            this._chip = 1;
        }
    }

    public power(action:boolean){
        if(action){
            console.log("The cellphone is on!");
        }
        
        else{
            console.log("The cellphone is of!");
        }
    }

    public call(queue?: number){
        if(queue > 0){
            console.log(`You have ${queue} call(s) in the queue!`);
        }
        else{
            console.log("You don't have any call in queue!");
        }
    }

    public get battery():number{
        return this._battery
    }

    public set battery(battery:number){
        if(battery < 0){
            this._battery = 100;
        }
        else{
            this._battery = battery;
        }
    }

    public get chip():number{
        return this._chip
    }

    public set chip(chip:number){
        if(chip <= 0){
            this._chip = 1;
        }
        else{
            this._chip = chip;
        }
    }

    public detail(){
        console.log(`
        Brand: ${this._brand}
        Battery: ${this._battery}
        Chip(s): ${this._chip}`)
    }
}
