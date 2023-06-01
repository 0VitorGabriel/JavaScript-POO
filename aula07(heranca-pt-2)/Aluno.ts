import Pessoa from "./Pessoa";

class Aluno extends Pessoa {
    private _matricula: Number 
    private _curso: String

    constructor(nome: String, idade: Number, sexo: String, matricula: Number, curso: String) {
        super(nome, idade, sexo)

        this._matricula = matricula 
        this._curso = curso
    }

    public get matricula(): Number {
        return this._matricula;
    }

    public set matricula(matricula: Number) {
        this._matricula = matricula;
    }

    public get curso(): String {
        return this._curso;
    }

    public set curso(curso: String) {
        this._curso = curso;
    }

    public pagarMensalidade(): void{
        console.log('pagando a mensalidade de ' + this.nome)
    }

}

export default Aluno