import Pessoa from "./Pessoa";

class Aluno extends Pessoa {
    private _matricula: Number
    private _curso: String 

    constructor(nome: String, idade: number, sexo: String, matricula: Number, curso: String) {
        super(nome, idade, sexo)

        this._curso = curso 
        this._matricula = matricula
    }

    public cancelarMatricular(): String {
        return (
            'matricula cancelada'
        )
    }

    public get matricula(): Number{
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
}

export default Aluno