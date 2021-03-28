var numeroDolartexto = prompt("Digite o valor Dolar");

var numeroDolarnumero = parseFloat(numeroDolartexto); // flooat recebe numeros inteiros e meio inteiro

numeroDolarnumero = numeroDolarnumero * 5.76;
var valoremDecimal = numeroDolarnumero.toFixed(2); // esse toFixed determina as casas decimal do valor retornado

alert(valoremDecimal);
