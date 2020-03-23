var data = document.createElement('script');
data.src = './js/data.js';
document.head.appendChild(data);

var banco = document.createElement('script');
banco.src = './js/banco.js';
document.head.appendChild(banco);

var formulario = document.getElementById('formulario');
var valorPassagem = document.getElementById('valorPassagem');
var quantidadePassagem = document.getElementById('quantidadePassagem');
var soma;




formulario.addEventListener('submit', function (e) {

	console.log(valorPassagem.value);
	console.log(quantidadePassagem.value);

	soma = valorPassagem.value * quantidadePassagem.value;
	console.log('Valor total gastos em passagem ao dia ', soma);


	e.preventDefault();

})

