import Animal from "./Animal";

class Peixe extends Animal {
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
        console.log('nadando')
    }

    public override alimentar(): void {
        console.log('comendo substãncias')
    }

    public override emitirSom(): void {
        console.log('peixe não faz som')
    }

    public soltarBolha(): void {
        console.log('soltando bolhad')
    }
}

export default Peixe