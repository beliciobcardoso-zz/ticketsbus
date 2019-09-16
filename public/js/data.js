now = new Date
dia = now.getDate();
mes = now.getMonth();
ano = now.getFullYear();

document.getElementById('data').innerHTML = "Data: " + dia + "/" + mes + "/" + ano;
