// O modificador protected define que classes filhas/derivadas também tem acesso
// ao atributo ou método
// Ele chamará o construtor da superclasse para que essa possa realizar 
// as suas inicializações antes mesmo que todas as suas classes filhas

export class Cellphone{
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

    
}

let c = new Cellphone();
c.call();
