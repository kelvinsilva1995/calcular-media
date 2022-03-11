var nome = prompt("Qual seu nome?")

var notaDoPrimeiroBimestre = parseFloat(prompt("Nota do primeiro Bimestre?"))
var notaDoSegundoBimestre = parseFloat(prompt("Nota do segundo Bimestre?"))
var notaDoTerceiroBimestre = parseFloat(prompt ("Nota do terceiro Bimestre?"))
var notaDoQuartoBimestre = parseFloat(prompt("Nota do quarto Bimestre?"))

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

 var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)

// function notaFinal(notaDoPrimeiroBimestre,notaDoSegundoBimestre,notaDoTerceiroBimestre,notaDoQuartoBimestre) {
//   (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
//   return notaFinal
//     console.log("Resultado " + notafinal)
// }
document.getElementById("texto").innerText = `${nome} Sua média foi ${notaFinal}`

// isso é um comentário 

// Revisão
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação