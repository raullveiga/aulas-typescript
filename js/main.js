"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Barco_1 = require("./class/Barco");
const Moto_1 = require("./class/Moto");
const Carro_1 = require("./class/Carro");
var veiculo = new Carro_1.Carro(4);
veiculo.ligar();
veiculo = new Moto_1.Moto(2);
veiculo.ligar();
veiculo = new Barco_1.Barco(0);
veiculo.ligar();
//# sourceMappingURL=main.js.map