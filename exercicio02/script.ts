import Livro from "./Livro";
import Pessoa from "./Pessoa";

const pessoa1 = new Pessoa('Vitor', 12, 'masculino')

const leitor1 = new Livro('O guia do mochileiro das galáxias pt-1', 'Douglas Adams', 208, 45, false, pessoa1)

leitor1.abrir()
leitor1.voltarPagina()
leitor1.detalhes()