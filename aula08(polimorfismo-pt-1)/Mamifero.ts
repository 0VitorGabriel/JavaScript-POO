import Animal from "./Animal";

class Mamifero extends Animal {
    private _corPelo: String

    constructor(peso: Number, idade: Number, membros: Number, corPelo: String) {
        super(peso, idade, membros)

        this._corPelo = corPelo
    }

    public get corPelo(): String {
        return this._corPelo;
    }

    public set corPelo(corPelo: String) {
        this._corPelo = corPelo;
    }

    public override locomover(): void {
        console.log('correndo')
    }

    public override alimentar(): void {
        console.log('mamando')
    }

    public override emitirSom(): void {
        console.log('som de mamífero')
    }

}

export default Mamifero