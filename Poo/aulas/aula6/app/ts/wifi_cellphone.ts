import { CameraCellphone } from "./second_cellphone";

export class WifiCellphone extends CameraCellphone{
    protected _brand: string;
    protected _battery: number;
    protected _chip: number;
    protected _camera: number;
    protected _wifi: string;

    public constructor(brand: string, battery: number, chip: number, camera: number,wifi?:string){
        super(brand,battery,chip,camera);
        this._wifi = wifi;
    }

    public get wifi():string{
        return this._wifi;
    }

    public set wifi(wifi:string){
        this._wifi = wifi;
    }

    public connect(){
        if(this._wifi == undefined){
            console.log("You don't have a wifi connection!");
        }
        else{
            console.log(`You're connected to the wifi: ${this._wifi}`);
        }
    }
    public detail(): void {
        super.detail();
        console.log(`
        Wifi: ${this._wifi}`)
    }
}

let c = new WifiCellphone("Motorola",50,2,1,"rede");
c.detail();
c.connect();
