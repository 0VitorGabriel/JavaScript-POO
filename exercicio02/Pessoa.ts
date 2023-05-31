class Pessoa {
    private _nome: String
    private _idade: Number 
    private _sexo: String 

    constructor(nome: String, idade: Number, sexo: String) {
        this._nome = nome 
        this._idade = idade 
        this._sexo = sexo
    }
    
    fazerAniversario() {
        this.idade =+ 1
    }

    get nome(): String {
        return this._nome
    }

    set nome(nome: String) {
        this._nome = nome
    }

    get idade(): Number {
        return this._idade
    }
    
    set idade(idade: Number) {
        this._idade = idade
    }

    get sexo(): String {
        return this._sexo
    }

    set sexo(sexo: String) {
        this._sexo = sexo
    }
}

export default Pessoa