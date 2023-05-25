class Caneta {
    #ponta
    #tampada
    
    constructor (modelo, ponta, carga, tampada, cor) {
        this.modelo = modelo
        this.#ponta = ponta
        this.carga = carga
        this.tampada = tampada
        this.cor = cor
    }

    status() {
        console.log('modelo: ' + this.modelo)
        console.log('ponta: ' + this.#ponta)
        console.log('carga: ' + this.carga)
        console.log('cor: ' + this.cor)
        console.log('está tampada? ' + this.#tampada)
    }

    rabiscar() {
        if (this.#tampada) {
            console.log('erro')
        } else {
            console.log('rabiscou')
        }
    }

    destampar() {
        this.#tampada = false
    }

    tampar() {
        this.#tampada = true
    }
}

const caneta1 = new Caneta()
caneta1.modelo = 'BIC cristal'
caneta1.cor = 'azul'
// caneta1.#ponta = 0.5
caneta1.carga = 80
// caneta1.#tampada = false
caneta1.destampar()

caneta1.status()