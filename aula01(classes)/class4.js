class TocarInstrumento {
    constructor(duracao, musicas_tocadas, instrumento, afinacao) {
        this.duracao = duracao
        this.musicas_tocadas = musicas_tocadas
        this.instrumemto = instrumento
        this.afinacao = afinacao
    }
    pegar() {
        console.log(`${this.instrumemto} pego`)
    }
    tocar() {
        console.log(`tocando ${this.instrumemto}...`)
    }
}

const tocar_violao = new TocarInstrumento()
tocar_violao.duracao = '1hora'
tocar_violao.musicas_tocadas = 'nothing else matters'
tocar_violao.instrumemto = 'violão'
tocar_violao.afinacao = 'EADGBE'
tocar_violao.pegar()
tocar_violao.tocar()

console.log('atributos: ' + JSON.stringify(tocar_violao))