//document.write("FIFA 21");// imprimi na tela 

var numero1 = prompt("Digite o primeiro numero"); // ou var numero1 = parseInt(promot("digite o primero valor"))
numero1convet = parseInt(numero1);

var decimal = prompt("Digite o decimal");

var numero2 = prompt("Digite o segundo numero");
numero2convet = parseInt(numero2);


if (decimal == "-") {

    var resultado = numero1convet - numero2convet;
    var resultado = resultado.toFixed(1);
    document.write( numero1convet + " - " + numero2convet + " = " + resultado);
}
    else if (decimal == "+") { 
    var resultado = numero1convet + numero2convet;
    var resultado = resultado.toFixed(1);
        document.write( numero1convet + " + " + numero2convet + " = " + resultado);

} else if (decimal == "*") {
    var resultado = numero1convet * numero2convet;
    var resultado = resultado.toFixed(1);
    document.write( numero1convet + " * " + numero2convet + " = " + resultado);
}
    else if (decimal == "/") {
    
    var resultado = numero1convet / numero2convet;
    var resultado = resultado.toFixed(1);
    document.write( numero1convet + " / " + numero2convet + " = " + resultado);
} else {
    alert("Opcao Invalida, Por Favor tente novamente escolhendo umas dessas operacoes + - * / ");
}