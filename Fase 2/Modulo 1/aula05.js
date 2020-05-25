/*
OPERADORES DE COMPARAÇÃO

>   maior
<   menor
>=  maior igual a 
<=  menor igual a
==  igual a
=== igual e do mesmo tipo
!=  diferente de
!== diferente, inclusive do tipo
*/

/*Desafio 1
Verificar se a pessoa é maior de 18 anos
se sim, deixar entrar, se não, bloquear entrada
se a pessoa tiver 17 anos
avisar para voltar quando fizer 18 anos
*/
function verificarIdade(idade){
  if(idade >= 18){
    return console.log("Entrada permitida, pode prosseguir!")
  } else if(idade == 17){
    return console.log("Entrada proibida, você tem 17 anos, volte com 18!")
  } else {
    return console.log("Entrada proibida, permitida entrada a partir de 18 anos!")
  }
}
verificarIdade(19);

