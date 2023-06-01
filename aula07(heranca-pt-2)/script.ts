import Visitante from "./Visitante";
import Aluno from "./Aluno";
import Bolsista from "./Bolsista";
import Professor from "./Professor";
import Tecnico from "./Tecnico";

let v1 = new Visitante('joao', 15, 'masculino')

console.log(v1.toString())

let a1 = new Aluno('maria', 5, 'femininino', 0o0, 'canto')

a1.pagarMensalidade()

let b1 = new Bolsista('vitor', 12, 'masculino', 0o0, 'informática', 900600.00)

b1.pagarMensalidade()

let p1 = new Professor('Alesandra', 50, 'feminino', 'Marcenaria', 5000.00)

p1.receberAumento()

console.log(p1.salario)

let t1 = new Tecnico('marcos', 40, 'masculino', 0o0, 'biologia', 0o0)

console.log(t1.toString())