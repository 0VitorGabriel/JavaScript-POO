import Animal from "./Animal";

class Ave extends Animal {
    private _corPena: String

    constructor(peso: Number, idade: Number, membros: Number, corPena: String) {
        super(peso, idade, membros)

        this._corPena = corPena
    }

    public get corPena(): String {
        return this._corPena;
    }

    public set corPena(corPena: String) {
        this._corPena = corPena;
    }

    public override locomover(): void {
        console.log('voando')
    }

    public override alimentar(): void {
        console.log('comendo frutas')
    }

    public override emitirSom(): void {
        console.log('som de ave')
    }

    public fazerNinho(): void {
        console.log('construiu um ninho')
    }
}

export default Ave