import Pessoa from "./Pessoa";
import Aluno from "./Aluno";
import Funcionario from "./Funcionario";
import Professor from "./Professor";

const pessoa1: Pessoa = new Pessoa('pedro', 12, 'masculino')

const pessoa2: Aluno = new Aluno('maria', 50, 'feminino', 0o0, 'informática')

const pessoa3: Professor = new Professor('claudio', 72, 'masculino', 'Java', 100000.50)

const pessoa4: Funcionario = new Funcionario('fabiana', 20, 'feminino', 'cozinha', true)

console.log(pessoa1.toString())
console.log(pessoa2.toString())
console.log(pessoa3.toString())
console.log(pessoa4.toString())