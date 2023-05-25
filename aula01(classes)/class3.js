class TomarBanho {
    constructor(tempo, sabotene_usado, shampoo_usado, agua_fria, agua_quente, ligado) {
        this.tempo = tempo
        this.sabotene_usado = sabotene_usado
        this.shampoo_usado = shampoo_usado
        this.agua_fria = agua_fria
        this.agua_quente = agua_quente
        this.ligado = ligado
    }
    ligar_chuveiro() {
        this.ligado = true
        console.log('chuveiro ligado')
    }
    desligar_chuveiro() {
        this.ligado = false
        console.log('chuveiro desligado')
    }
    colocar_agua_quente() {
        this.agua_fria = false
        this.agua_quente = true
        console.log('chuveiro na água quente')
    }
    colocar_agua_fria() {
        this.agua_quente = false
        this.agua_fria = true
        console.log('chuveiro na água fria')
    }
}

const tomar_banho = new TomarBanho('10m', 'protex', 'palmolive')

tomar_banho.ligar_chuveiro()
tomar_banho.colocar_agua_quente()

console.log(tomar_banho)