// iniciando o exercicio declarando as variáveis

let novaLista = ""
let c = "Crackle"
let sc = "SnapCrackle"
let s = "Snap"
let separate = ", "
function snapCrackle(maxValue) {
   for (let i=1; i <= maxValue; i++) {
   if (i % 2 !== 0 && i % 5 === 0) { // o resto da divisao por 2 diferente de 2 E o resto da divisao por 5 diferente de 0
    novaLista += sc
   } else if (i % 2 !== 0) { // o resto da divisão do i por 2 tem que ser diferente de 0 (IMPAR)
    novaLista += s
   } else if (i % 5 === 0){// o resto da divisão de i por 5 tem que ser identico a 0 (multiplo de 5)
    novaLista += c
   } else {
    novaLista += i 
   }

   if (i < maxValue) novaLista += separate
 }
 
 return novaLista;

}

console.log(snapCrackle(16))