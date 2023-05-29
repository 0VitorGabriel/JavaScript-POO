class Lutador {
    #nome
    #nacionalidade
    #peso
    #altura
    #idade
    #vitorias
    #derrotas
    #empates
    #categoria

    constructor(nome, nacionalidade, peso, altura, idade, vitorias, derrotas, empates) {
        this.#nome = nome
        this.#nacionalidade = nacionalidade
        this.peso = peso
        this.#altura = altura 
        this.#idade = idade 
        this.#vitorias = vitorias 
        this.#derrotas = derrotas 
        this.#empates = empates
    }

    apresentar() {
        console.log(`lutador: ${this.nome}`)
        console.log(`nacionalidade: ${this.#nacionalidade}`)
        console.log(`${this.altura}m de altura`)
        console.log(`${this.idade} anos de idade`)
        console.log(`peso: ${this.peso}kg`)
        console.log(`vitorias: ${this.vitorias}`)
        console.log(`derrotas: ${this.derrotas}`)
        console.log(`empate: ${this.empate}`)
    }

    status() {
        console.log(this.nome)
        console.log(`categoria do peso: ${this.categoria}`)
        console.log(`vitorias: ${this.vitorias}`)
        console.log(`derrotas: ${this.derrotas}`)
        console.log(`empates ${this.empates}`)
    }

    ganhar() {
        this.vitorias = this.vitorias + 1
    }

    perder() {
        this.derrotas = this.derrotas + 1
    }

    empatar() {
        this.empates = this.empates + 1
    }

    get nome() {
        return this.#nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get peso() {
        return this.#peso
    }

    set peso(peso) {
        this.#peso = peso

        this.categoria = peso
    }

    get categoria() {
        return this.#categoria
    }

    set categoria(peso) {
        if (peso < 52.2) {
            this.#categoria = 'inválido'
        } else if (peso <= 70.3) {
            this.#categoria = 'leve'
        } else if (peso <= 83.9) {
            this.#categoria = 'médio'
        } else if (peso <= 120.2) {
            this.#categoria = 'pesado'
        } else {
            this.#categoria = 'inválido'
        }
    }

    get nacionalidade() {
        return this.#nacionalidade
    }

    set nacionalidade(nacionalidade) {
        this.#nacionalidade = nacionalidade
    }

    get altura() {
        return this.#altura
    }

    set altura(altura) {
        this.#altura = altura
    }

    get idade() {
        return this.#idade
    }

    set idade(idade) {
        this.#idade = idade
    }

    get vitorias() {
        return this.#vitorias
    }

    set vitorias(vitorias) {
        this.#vitorias = vitorias
    }

    get derrotas() {
        return this.#derrotas
    }

    set derrotas(derrotas) {
        this.#derrotas = derrotas
    }

    get empates() {
        return this.#empates
    }

    set empates(empates) {
        this.#empates = empates
    }
}


export default Lutador