abstract class Animal {
    protected _peso: Number 
    protected _idade: Number 
    protected _membros: Number 

    constructor(peso: Number, idade: Number, membros: Number) {
        this._peso = peso 
        this._idade = idade 
        this._membros = membros
    }

    public get peso(): Number {
        return this._peso;
    }

    public set peso(peso: Number) {
        this._peso = peso;
    }

    public get idade(): Number {
        return this._idade;
    }

    public set idade(idade: Number) {
        this._idade = idade;
    }

    public get membros(): Number {
        return this._membros;
    }

    public set membros(membros: Number) {
        this._membros = membros;
    }

    public abstract emitirSom(): void 
}

export default Animal