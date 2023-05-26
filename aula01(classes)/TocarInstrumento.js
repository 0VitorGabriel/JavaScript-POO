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

const tocar_violao = new TocarInstrumento('1hora', 'nothing else mattters', 'violâo', 'EADGBE')

tocar_violao.pegar()
tocar_violao.tocar()

console.log('atributos: ' + JSON.stringify(tocar_violao))