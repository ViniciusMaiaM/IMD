import { Cellphone } from "./base_cellphone";

export class CameraCellphone extends Cellphone{
    protected _brand: string;
    protected _battery: number;
    protected _chip: number;
    protected _camera: number;

    public constructor(brand: string, battery: number, chip: number, camera?: number){
        super(brand,battery,chip);
        this._camera = camera;

        if(camera == undefined){
            this._camera = 0;
        }
    }

    get camera():number{
        return this._camera
    }

    set camera(camera:number){
        if(camera == undefined){
            this._camera = 0;
        }

        else{
            this._camera = camera;
        }
    }

    public photograph(picture: boolean){
        if(this._camera > 0 && picture){
            console.log("You took a picture!");
        }
        
        else{
            console.log("You can't take a picture!");
        }
    }

    public flashlight(power:boolean){
        if(power){
            console.log("Your flashlight is on!");
        }

        else{
            console.log("Your flashlight is of!");
        }
    }

    public detail(): void {
        super.detail();
        console.log(`
        Camera: ${this._camera}`)
    }
}

let c = new CameraCellphone("LG",50,2,1);
c.detail();
c.photograph(true);
c.flashlight(false);
