// Verifica se pelomenos um dos itens do arry satisfaz um dada condição


// Imagine	que	trabalhamos	no	setor	de	tecnologia	de
// um	aeroporto	e	precisamos	desenvolver	um	pequeno	programa	para
// saber	 se	 alguma	 das	 malas	 de	 um	 passageiro	 está	 acima	 do	 limite
// máximo	estabelecido	de	30kg.	Usando	um	loop	com		for	,	o	código
// para	tal	lógica	é	semelhante	a	este:

let alunos = [
    { "nome": "Felipe", idade: 26 },
    { "nome": "Maria", idade: 27 },
    { "nome": "João", idade: 18 },
    { "nome": "Bêbe", idade: 16 },

]


const todoAlunosMaiorIdade = alunos.some(aluno => {
    return aluno.idade < 18
})

console.log(todoAlunosMaiorIdade);