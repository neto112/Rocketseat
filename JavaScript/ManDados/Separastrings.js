// Manipulando Strings e Arrrays
// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. 
// Depois disso, transforme o array em um texto e onde eram espaços, coloque

let phrase = "Eu quero gol viver o Amor!"
let myArray = phrase.split("gol")
let phraseWithUnderscore = myArray.join("")
console.log(phraseWithUnderscore.toLowerCase())