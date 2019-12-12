import { ICambio } from '../interface/ICambio';


export abstract class Veiculo implements ICambio {

    protected _rodas: number;
    private _cor: string;
    private _marca: string;
    private _modelo: string;
    private _velocidade: number;
    private _marcha: string;
    
    
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



    constructor(rodas:number){
        this._rodas = rodas;
    }

    ligar(): void {
        console.log("Ligando...");
    }

    desligar(): void {
        console.log("Desligando...")
    }

    acelerar(taxa: number): number {
        this._velocidade += taxa;
        return this._velocidade;
    }

    frear(taxa: number): number {
        this._velocidade -= taxa;
        return this._velocidade;
    }


    trocarMarcha(marcha: string): boolean {
        this._marcha = marcha;
        return false;
    }

}