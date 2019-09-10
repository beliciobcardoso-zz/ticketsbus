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

