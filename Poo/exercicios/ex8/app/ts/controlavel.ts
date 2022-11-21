interface Controlavel{
    mover():void;
}

export class Jogador implements Controlavel{
    mover(): void {
        console.log("Jogador se movendo")
    }
}

export class Volante implements Controlavel{
    mover(): void {
        console.log("Volante girando")
    }
}

let jog = new Jogador()
let vol = new Volante()

jog.mover()
vol.mover()
