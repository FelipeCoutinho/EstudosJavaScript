// A	função		every		é	pertinente	para	validar	se	todos	os	elementos
// de	 um	 	Array		 respeitam	 uma	 dada	 condição.


let alunos = [
    { "nome": "Felipe", idade: 26 },
    { "nome": "Maria", idade: 27 },
    { "nome": "João", idade: 18 },

]

const todosAlunosMaiores = alunos.every(e => {
    return e.idade >= 18;
})

console.log(todosAlunosMaiores);