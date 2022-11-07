import {Monitor} from "./monitor"
import { Keyboard } from "./teclado"

export class Computer{

    private _monitor: Monitor
    private _keyboard:Keyboard;

    public constructor(type_switch:string, num_key:number,hz:number,
    name:string,brand:string,num_imput:number){
        this._monitor = new Monitor(hz,name,brand,num_imput);
        this._keyboard = new Keyboard(type_switch,num_key);
    }

    public ligar(type_switch:string, num_key:number,hz:number,
    name:string,brand:string,num_imput:number){
        this._monitor = new Monitor(hz,name,brand,num_imput);
        this._keyboard = new Keyboard(type_switch,num_key);
    }

    public get monitor() : Monitor {
        return this._monitor
    }

    public set monitor(monitor : Monitor) {
        this._monitor = monitor;
    }

    public get keyboard() : Keyboard {
        return this._keyboard;
    }

    public set keyboard(keyboard : Keyboard) {
        this._keyboard = keyboard;
    }

    public detalhar(){
        console.log(`Monitor:${this.monitor.detalhar()} 
        \nKeyboard: ${this.keyboard.detalhar()}`)
    }

}

let teste = new Computer("Red",0,60,"Vincius","",4);
teste.detalhar()