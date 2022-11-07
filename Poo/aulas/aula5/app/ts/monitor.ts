export class Monitor{
    private _hz: number
    private _name: string
    private _brand:string
    private _num_input: number

    public constructor(hz:number,name:string,brand:string,num_input:number){
        this._hz = hz;
        this._name = name;
        this._brand = brand;
        this._num_input = num_input;

        if ((hz < 60) || (hz == undefined)){
            this._hz = 60
        }
    }

    public get hz():number{
        return this._hz;
    }

    public set hz(hz:number){
        if ((hz < 60) || (hz == undefined)){
            this._hz = 60
        }
        else{
            this._hz = hz;
        }
    }

    public get name():string{
        return this._name;
    }

    public set name(name:string){
        if (name != undefined){
            this._name = name;
        }

        else{
            this._name = "Name Monitor";
        }
    }

    public get brand():string{
        return this._brand
    }

    public set brand(brand:string){
        if(brand != undefined){
            this._brand = brand;
        }
        else{
            this._brand = "LG";
        }
    }

    public get num_input():number{
        return this._num_input
    }

    public set num_input(num_imput:number){
        if (num_imput != undefined){
            this._num_input = num_imput;
        }
        else{
            this._num_input = 2;
        }
    }

    public detalhar(){
        console.log(`HZ:${this._hz} \nName: ${this._name} 
        \nBrand: ${this._brand} \nInput:${this._num_input}`)
    }
}  