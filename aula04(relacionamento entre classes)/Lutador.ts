class Lutador {
    private _nome: String
    private _nacionalidade: String
    private _peso: Number
    private _altura: Number
    private _idade: Number
    private _vitorias: Number
    private _derrotas: Number
    private _empates: Number
    private _categoria: String

    constructor(nome: String, nacionalidade: String, peso: Number, altura: Number, idade: Number, vitorias: Number, derrotas: Number, empates: Number, categoria: String) {
        this._nome = nome
        this._nacionalidade = nacionalidade
        this._peso = peso
        this._categoria = categoria
        this.setCategoria(peso)
        this._altura = altura 
        this._idade = idade 
        this._vitorias = vitorias 
        this._derrotas = derrotas 
        this._empates = empates
    }

    apresentar() {
        console.log(`lutador: ${this.nome}`)
        console.log(`nacionalidade: ${this.nacionalidade}`)
        console.log(`${this.altura}m de altura`)
        console.log(`${this.idade} anos de idade`)
        console.log(`peso: ${this.peso}kg`)
        console.log(`vitorias: ${this.vitorias}`)
        console.log(`derrotas: ${this.derrotas}`)
        console.log(`empate: ${this.empates}`)
    }

    status() {
        console.log(this.nome)
        console.log(`categoria do peso: ${this.categoria}`)
        console.log(`vitorias: ${this.vitorias}`)
        console.log(`derrotas: ${this.derrotas}`)
        console.log(`empates ${this.empates}`)
    }

    ganhar() {
        this.vitorias = Number(this.vitorias) + 1
    }

    perder() {
        this.derrotas = Number(this.derrotas) + 1
    }

    empatar() {
        this.empates = Number(this.empates) + 1
    }

    get nome() {
        return this._nome
    }

    set nome(nome) {
        this._nome = nome
    }

    get peso() {
        return this._peso
    }

    set peso(peso) {
        this._peso = peso

        this.setCategoria(peso)
    }

    get categoria() {
        return this._categoria
    }

    setCategoria(peso: Number) {
        if (Number(peso) < 52.2) {
            this._categoria = 'inválido'
        } else if (Number(peso) <= 70.3) {
            this._categoria = 'leve'
        } else if (Number(peso) <= 83.9) {
            this._categoria = 'médio'
        } else if (Number(peso) <= 120.2) {
            this._categoria = 'pesado'
        } else {
            this._categoria = 'inválido'
        }
    }

    get nacionalidade() {
        return this._nacionalidade
    }

    set nacionalidade(nacionalidade: String) {
        this._nacionalidade = nacionalidade
    }

    get altura() {
        return this._altura
    }

    set altura(altura: Number) {
        this._altura = altura
    }

    get idade() {
        return this._idade
    }

    set idade(idade: Number) {
        this._idade = idade
    }

    get vitorias() {
        return this._vitorias
    }

    set vitorias(vitorias: Number) {
        this._vitorias = vitorias
    }

    get derrotas() {
        return this._derrotas
    }

    set derrotas(derrotas: Number) {
        this._derrotas = derrotas
    }

    get empates() {
        return this._empates
    }

    set empates(empates: Number) {
        this._empates = empates
    }
}

export default Lutador