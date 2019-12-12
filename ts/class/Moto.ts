import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo{

    ligar(){
        console.log("ligando minha moto...")
    }

    desligar(){
        console.log("desligando minha moto...")
    }
}