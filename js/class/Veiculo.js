"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    // public get marcha(): string {
    //     return this._marcha;
    // }
    // public set marcha(value: string) {
    // }
    // public get velocidade(): number {
    //     return this._velocidade;
    // }
    // public set velocidade(value: number) {
    // }
    // public get modelo(): string {
    //     return this._modelo;
    // }
    // public set modelo(value: string) {
    // }
    // public get marca(): string {
    //     return this._marca;
    // }
    // public set marca(value: string) {
    // }
    // public get cor(): string {
    //     return this._cor;
    // }
    // public set cor(value: string) {
    //     this._cor = value;
    // }
    // public get rodas(): number {
    //     return this._rodas;
    // }
    // public set rodas(value: number) {
    // }
    constructor(rodas) {
        this._rodas = rodas;
    }
    ligar() {
        console.log("Ligando...");
    }
    desligar() {
        console.log("Desligando...");
    }
    acelerar(taxa) {
        this._velocidade += taxa;
        return this._velocidade;
    }
    frear(taxa) {
        this._velocidade -= taxa;
        return this._velocidade;
    }
    trocarMarcha(marcha) {
        this._marcha = marcha;
        return false;
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map