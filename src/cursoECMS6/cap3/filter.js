// filtrar todos os alunos que são maiores de idade

let alunos = [
    { "nome": "Felipe", idade: 26 },
    { "nome": "Maria", idade: 27 },
    { "nome": "João", idade: 18 },
    { "nome": "bebe", idade: 15 }
]

const aluno = alunos.filter(aluno => {
    return aluno.idade >= 18;
})

console.log(aluno);