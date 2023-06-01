import Aluno from "./Aluno";

class Bolsista extends Aluno {
    private _bolsa: Number 

    constructor(nome: String, idade: Number, sexo: String, matricula: Number, curso: String, bolsa: Number) {
        super(nome, idade, sexo, matricula, curso)

        this._bolsa = bolsa
    }

    public get bolsa(): Number {
        return this._bolsa;
    }

    public set bolsa(bolsa: Number) {
        this._bolsa = bolsa;
    }

    public renovarBolsa(): void {
        console.log(`renovando a bolsa de ${this.nome}`)
    }

    public override pagarMensalidade(): void {
        console.log(`${this.nome} é bolsista, pagamento facilitado`)
    }
}

export default Bolsista