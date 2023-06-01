import Pessoa from "./Pessoa";

class Professor extends Pessoa {
    private _especializacao: String 
    private _salario: Number 

    constructor(nome: String, idade: Number, sexo: String, especializacao: String, salario: Number) {
        super(nome, idade, sexo)

        this._especializacao = especializacao 
        this._salario = salario
    }

    public get especializacao(): String {
        return this._especializacao;
    }

    public set especializacao(especializacao: String) {
        this._especializacao = especializacao;
    }

    public get salario(): Number {
        return this._salario;
    }

    public set salario(salario: Number) {
        this._salario = salario;
    }

    public receberAumento() {
        this.salario = Number(this.salario) + 1000
    }
}

export default Professor