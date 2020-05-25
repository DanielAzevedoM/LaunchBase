/* 
Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa.

A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:

peso / (altura * altura);
Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso;
*/

const nome = "Daniel Azevêdo";
const peso = 85;
const altura = 1.71;

const imc = peso / (altura * altura);

if(imc >= 30){
  return console.log(`${nome}, você está acima do peso!. Seu Imc atual é ${imc}`)
} else {
  return console.log(`Você não está acima do peso!. Seu Imc atual é ${imc} `)
}

//Mesma aplicação, mas no formato de função.

/*

function calcularIMC(nome, peso, altura){
  const imc = peso / (altura * altura);

  if(imc >= 30){
    return console.log(`${nome}, você está acima do peso!. Seu Imc atual é ${imc}`)
  } else {
    return console.log(`Você não está acima do peso!. Seu Imc atual é ${imc} `)
  }
}

calcularIMC("Daniel Azevêdo", 50, 1.50) // Nome, Peso, Altura

*/