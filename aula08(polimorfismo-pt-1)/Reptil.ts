import Animal from "./Animal";

class Reptil extends Animal {
    private _corEscama: String

    constructor(peso: Number, idade: Number, membros: Number, corEscama: String) {
        super(peso, idade, membros)

        this._corEscama = corEscama
    }

    public get corEscama(): String {
        return this._corEscama;
    }

    public set corEscama(corEscama: String) {
        this._corEscama = corEscama;
    }

    public override locomover(): void {
        console.log('rastejando')
    }

    public override  alimentar(): void {
        console.log('comendo vegetais')
    }

    public override emitirSom(): void {
        console.log('som de reptil')
    }

}

export default Reptil