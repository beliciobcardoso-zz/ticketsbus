var now = new Date();
var dia = now.getDate();
var mes = now.getMonth();
var ano = now.getFullYear();

var mes = mes + 1;

document.getElementById('data').innerHTML = "Data: " + dia + "/" + mes + "/" + ano;