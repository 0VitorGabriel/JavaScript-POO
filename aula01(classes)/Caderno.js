class Caderno {
    constructor(qtd_paginas, qtd_materias, preco, marca, cor) {
        this.qtd_paginas = qtd_paginas
        this.qtd_materias = qtd_materias
        this.preco = preco
        this.marca = marca
        this.cor = cor
    }
    abrir() {
        console.log('caderno aberto')
    }
    fechar() {
        console.log('carderno fechado')
    }
}

const caderno_1 = new Caderno(240, 12, 50.00, 'tilibra', 'preto')

console.log(caderno_1)

caderno_1.abrir()
caderno_1.fechar()