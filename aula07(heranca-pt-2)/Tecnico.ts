import Aluno from "./Aluno";

class Tecnico extends Aluno {
    private _registroProfissional: Number 

    constructor(nome: String, idade: Number, sexo: String, matricula: Number, curso: String, registro: Number) {
        super(nome, idade, sexo, matricula, curso)

        this._registroProfissional = registro
    }

    public praticar(): void {
        console.log('praticando')
    }
    
    
    public get registroProfissional(): Number {
        return this._registroProfissional;
    }

    public set registroProfissional(registroProfissional: Number) {
        this._registroProfissional = registroProfissional;
    }
}

export default Tecnico