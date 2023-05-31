import Livro from "./Livro";
import Pessoa from "./Pessoa";

// pessoas

const pessoa0 = new Pessoa('Vitor', 12, 'masculino')

const pessoa1 = new Pessoa('Guilherme', 22, 'masculino')

// livros

const livro0 = new Livro('O guia do mochileiro das galaxias pt-1', 'Douglas Adams', 208, pessoa0)

const livro1 = new Livro('O pequeno príncipe', 'Antoine de Saint-Exupéry', 97, pessoa1)

const livro2 = new Livro('Malala', 'Malala', 205, pessoa1)

livro1.abrir()
livro1.folhear()
console.log(livro1.detalhes())
livro1.voltarPagina()
console.log(livro1.detalhes())