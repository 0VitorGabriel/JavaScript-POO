import Pessoa from "./Pessoa";

class Professor extends Pessoa {
    private _especialidade: String
    private _salario: Number 

    constructor(nome: String, idade: Number, sexo: String, especialidade: String, salario: Number) {
        super(nome, idade, sexo)

        this._especialidade = especialidade 
        this._salario = salario
    }

    receberAumento(aumento: Number) {
        this.salario = aumento
    }

    public get especialidade(): String {
        return this._especialidade;
    }

    public set especialidade(especialidade: String) {
        this._especialidade = especialidade;
    }

    public get salario(): Number {
        return this._salario;
    }

    public set salario(salario: Number) {
        this._salario = salario;
    }
}

export default Professor