import { Barco } from './class/Barco';
import { Moto } from './class/Moto';
import { Veiculo } from "./class/Veiculo";
import { Carro } from './class/Carro';


var veiculo : Veiculo = new Carro(4);

veiculo.ligar();

veiculo = new Moto(2);

veiculo.ligar();

veiculo =  new Barco(0);

veiculo.ligar();