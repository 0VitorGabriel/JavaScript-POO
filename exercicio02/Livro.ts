import Pessoa from "./Pessoa"
import Publicacao from "./Publicacao"

class Livro implements Publicacao {
    private _titulo: String 
    private _autor: String 
    private _totalPaginas: Number 
    private _paginaAtual: Number 
    private _aberto: Boolean
    private _leitor: Pessoa

    constructor(titulo: String, autor: String, totalPaginas: Number, leitor: Pessoa) {
        this._titulo = titulo 
        this._autor = autor 
        this._totalPaginas = totalPaginas 
        this._paginaAtual = 0 
        this._aberto = false 
        this._leitor = leitor
    }

    detalhes(): String {
        return (
            `
                --------------------------- STATUS ------------------------------
                leitor: ${this.leitor.nome} 
                gênero do autor: ${this.leitor.sexo} 
                O livro que ${this.leitor.nome} está lendo é ${this.titulo}; 
                total de paginas do livro: ${this.totalPaginas}; 
                página que o ${this.leitor.nome} está agora: ${this.paginaAtual}; 
                livro aberto? ${this.aberto}; 
                nome do autor do livro: ${this.autor}.
            `
        )
    }

    abrir(): void {
        if (!this.aberto) {
            this.aberto = true
        } else {
            console.log('o livro deve estar fechado para abri-lo')
        }
    }

    fechar(): void {
        if (this.aberto) {
            this.aberto = false
        } else {
            console.log('o livro deve estar aberto para ser fechado')
        }
    }

    folhear(): void {
        if (this.aberto) {
            let pagina: Number = Math.floor(Math.random() * (Number(this.totalPaginas) - 1) + 1)
    
            this.paginaAtual = pagina
        } else {
            console.log('o livro deve estar aberto para folhear')
        }
    }

    avancarPagina(): void {
        if (this.aberto) {
            this.paginaAtual = Number(this.paginaAtual) + 1
        } else {
            console.log('o livro deve estar aberto para avancar de página')
        }
    }

    voltarPagina(): void {
        if (this.aberto) {
            this.paginaAtual = Number(this.paginaAtual) - 1
        } else {
            console.log('o livro deve estar aberto para voltar de página')
        }
    }

    public get titulo(): String {
        return this._titulo;
    }

    public set titulo(titulo: String) {
        this._titulo = titulo;
    }

    public get autor(): String {
        return this._autor;
    }

    public set autor(autor: String) {
        this._autor = autor;
    }

    public get totalPaginas(): Number {
        return this._totalPaginas;
    }

    public set totalPaginas(totalPaginas: Number) {
        this._totalPaginas = totalPaginas;
    }

    public get paginaAtual(): Number {
        return this._paginaAtual;
    }

    public set paginaAtual(paginaAtual: Number) {
        this._paginaAtual = paginaAtual;
    }

    public get aberto(): Boolean {
        return this._aberto;
    }

    public set aberto(aberto: Boolean) {
        this._aberto = aberto;
    }

    public get leitor(): Pessoa {
        return this._leitor;
    }

    public set leitor(leitor: Pessoa) {
        this._leitor = leitor;
    }
}

export default Livro