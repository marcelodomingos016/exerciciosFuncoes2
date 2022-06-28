
/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade! */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'maria',
    idade: 30
}

const pessoa2 = {
    nome: 'jose',
    idade: 10
}

const pessoa3 = {
    nome: 'hadassa',
    idade: 5
}

const pessoa4 = {
    nome: 'ingrid',
    idade: 27
}

console.log(calculaIdade.call(pessoa2, 30))