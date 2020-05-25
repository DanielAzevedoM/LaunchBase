/*
OPERADORES DE LÓGICOS

&& "E" As duas condições devem ser verdadeiras
    para que a condição final seja verdadeira

||  "OU" Uma das condições deve ser verdadeira
    para que a condição final seja verdadeira.
    
!   "NÃO" Nega uma condição

*/
function verificarIdade(idade){
  if(!(idade >= 18) || idade === 17){
    return console.log("Entrada proibida, permitida entrada a partir de 18 anos!")
  } else {
    return console.log("Entrada permitida, pode prosseguir!")
  }
}
verificarIdade(17);

/*
OPERADORES DE ARITMÉTICOS

* Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração

*/

console.log( 2 * 2) // 4
console.log( 2 / 2) // 1
console.log( 2 % 1.5) // 0.5
console.log( 2 + 2) // 4
console.log( 2 - 2) // 0