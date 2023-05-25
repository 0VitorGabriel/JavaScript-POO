class Lampada {
    constructor(acesa, preco, tipo, marca) {
        this.acesa = acesa
        this.preco = preco
        this.tipo = tipo
        this.marca = marca
    }
    acender() {
        this.acesa = true
        console.log('lampada acesa!')
    }
    apagar() {
        this.acesa = false
        console.log('lampada apagada')
    }
}

const lampada1 = new Lampada(50.00, 'led', 'avant')

lampada1.acender()

console.log(lampada1)