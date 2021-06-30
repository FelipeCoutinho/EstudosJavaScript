//                                                          	A	ideia	por	trás	dela	é	pegar	todos	os	valores	de
// um	 	Array		 e	 condensá-los	 em	 um	 único.	 Para	 demonstrar	 seu
// funcionamento,	vamos	mostrar	um	caso	clássico	de	uso.
// Neste	 exemplo,	 vamos	 fazer	 a	 soma	 de	 todos	 os	 elementos	 de
// dentro	 de	 um	 	 Array	 .	 Como	 fizemos	 nos	 outros,	 primeiro
// implementamos	uma	abordagem	mais	comum:

let numeros = [1, 2, 3, 4, 5, 6]

let soma = numeros.reduce((soma, numero) => {
    return soma + numero;
}, 0)


console.log(soma);
