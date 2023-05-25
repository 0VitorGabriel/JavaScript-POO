class Caneta {
    #ponta
    #modelo

    constructor(ponta, modelo) {
        this.#ponta = ponta
        this.#modelo = modelo
    }

    get modelo() {
        return this.#modelo
    }

    set modelo(modelo) {
        this.#modelo = modelo
    }

    get ponta() {
        return this.#ponta
    }

    set ponta(ponta) {
        this.#ponta = ponta
    }
}

const caneta1 = new Caneta(0.5, 'BIC')
console.log(caneta1.modelo)
console.log(caneta1.ponta)