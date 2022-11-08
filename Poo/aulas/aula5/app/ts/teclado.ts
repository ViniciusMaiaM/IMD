export class Keyboard{
    private _tipe_switch: string
    private _num_key: number

    public constructor(type_switch:string,num_key:number){
        this._tipe_switch = type_switch;

        if((num_key != undefined) && (num_key >= 26)){
            this._num_key = num_key
        }

        else{
            this._num_key = 102;
        }
    }
    
    public get type_switch():string{
        return this._tipe_switch
    }

    public set type_switch(type_switch:string){
        this._tipe_switch = type_switch;
    }

    public detalhar(){
        console.log(`\nSwitch:${this._tipe_switch} \nKey: ${this._num_key}`)
    }
}