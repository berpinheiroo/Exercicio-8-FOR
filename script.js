/* Faça um algoritmo que receba 5 números e para cada um deles exibir na tela qual o
resultado da sua multiplicação pelos próximos 5 números em sequência. */

var tabuada
var numTabuada
var resultado

for (i = 0; i < 5; i++) {
    tabuada = parseInt(prompt("Numero Tabuada"))
    numTabuada = tabuada
    console.log("Numero:", tabuada)

    for (var x = 0; x < 5; x++){
        numTabuada++
        resultado = tabuada * numTabuada
        console.log(tabuada + "x" + numTabuada + "=" + resultado)
    }
}