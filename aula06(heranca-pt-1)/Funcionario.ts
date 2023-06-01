import Pessoa from "./Pessoa";

class Funcionario extends Pessoa {
    private _setor: String 
    private _trabalhando: Boolean

    constructor(nome: String, idade: Number, sexo: String, setor: String, trabalhando: Boolean) {
        super(nome, idade, sexo)

        this._setor = setor 
        this._trabalhando = trabalhando
    }

    mudarTrabalho() {
        this.trabalhando = !this.trabalhando
    }

    public get setor(): String {
        return this._setor;
    }

    public set setor(setor: String) {
        this._setor = setor;
    }

    public get trabalhando(): Boolean {
        return this._trabalhando;
    }

    public set trabalhando(trabalhando: Boolean) {
        this._trabalhando = trabalhando;
    }
}

export default Funcionario