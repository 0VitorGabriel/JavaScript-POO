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

    public marcarLuta(lutador1: Lutador, lutador2: Lutador) {
        if (lutador1.categoria === lutador2.categoria && lutador1 !== lutador2) {
            this.aprovada = true
            this.desafiado = lutador1
            this.desafiante = lutador2
        } else {
            this.aprovada = false
        }
    }

    public lutar() {
        if (this.aprovada) {
            this._desafiado.apresentar()
            this._desafiante.apresentar()
            let vencedor = Math.floor(
                Math.random() * (2 - 0) + 0
            )

            switch (vencedor) {
                case 0:
                    console.log('empatou')
                    this._desafiado.empatar()
                    this._desafiante.empatar()
                    break
                case 1:
                    console.log(this._desafiado.nome + 'ganhou!')
                    this._desafiado.ganhar()
                    this._desafiante.perder()
                    break
                case 2:
                    console.log(this._desafiado.nome + 'perdeu!')
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