import Lutador from "./Lutador"


class Luta {
    private _desafiado: Lutador
    private _desafiante: Lutador
    private _rounds: Number
    private _aprovada: Boolean

    constructor(desafiado: Lutador, desafiante: Lutador, rounds: Number, aprovada: Boolean) {
        this._desafiado = desafiado
        this._desafiante = desafiante
        this._rounds = rounds
        this._aprovada = aprovada
    }

    public marcarLuta() {
        if (this._desafiado.categoria == this._desafiante.categoria && this._desafiado != this._desafiante) {
            this.aprovada = true
        } else {
            this.aprovada = false
            console.log('não pode lutar!')
        }
    }

    public lutar() {
        if (this.aprovada) {
            console.log('--- desafiado ---')
            this._desafiado.status()
            console.log('--- desafiante ---')
            this._desafiante.status()

            let vencedor = Math.floor(
                Math.random() * (2 - 0) + 0
            )

            console.log('--- status ---')
            switch (vencedor) {
                case 0:
                    console.log('empate')
                    this._desafiado.empatar()
                    this._desafiante.empatar()
                    break
                case 1:
                    console.log(this._desafiado.nome + ' ganhou!')
                    this._desafiado.ganhar()
                    this._desafiante.perder()
                    break
                case 2:
                    console.log(this._desafiante.nome + ' perdeu!')
                    this._desafiado.perder()
                    this._desafiante.ganhar()
                    break
            }

        } else {
            console.log('a luta deve ser aprovada para acontecer a luta')
        }
    }

    public get desafiado() {
        return this._desafiado
    }

    public set desafiado(desafiado: Lutador) {
        this._desafiado = desafiado
    }

    public get desafiante() {
        return this._desafiante
    }

    public set desafiante(desafiante: Lutador) {
        this._desafiante = desafiante
    }

    public get rounds() {
        return this._rounds
    }

    public set rounds(rounds: Number) {
        this._rounds = rounds
    }

    public get aprovada(): Boolean {
        return this._aprovada
    }

    public set aprovada(aprovada: Boolean) {
        this._aprovada = aprovada
    }
}

export default Luta