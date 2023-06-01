abstract class Pessoa {
    private _nome: String 
    private _idade: Number 
    private _sexo: String 

    constructor(nome: String, idade: Number, sexo: String) {
        this._nome = nome 
        this._idade = idade 
        this._sexo = sexo
    }

    public get nome(): String {
        return this._nome;
    }

    public set nome(nome: String) {
        this._nome = nome;
    }

    public get idade(): Number {
        return this._idade;
    }

    public set idade(idade: Number) {
        this._idade = idade;
    }

    public get sexo(): String {
        return this._sexo;
    }

    public set sexo(sexo: String) {
        this._sexo = sexo;
    }

    public fazerAniversario(): void {
        this.idade = Number(this.idade) + 1
    }

    public toString(): String {
        return (
            `
                ---------- STATUS ---------
                nome: ${this.nome}
                idade: ${this.idade}
                sexo: ${this.sexo}
            `
        )
    }
}

export default Pessoa