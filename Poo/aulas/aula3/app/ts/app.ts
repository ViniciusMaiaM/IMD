import {Carro} from "./carro";

// Importando a classe

let c: Carro;
c = new Carro("Fiesta","Vermelho","dao-3123",4);

c.cor = "Vermelho";


console.log(`A cor do carro ${c.modelo} é ${c.cor}`);
