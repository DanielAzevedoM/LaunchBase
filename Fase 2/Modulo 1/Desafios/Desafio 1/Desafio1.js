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

function calcularIMC(nome, peso, altura){
  const imc = peso / (altura * altura);

  if(imc >= 30){
    return console.log(`${nome}, você está acima do peso!. Seu Imc atual é ${imc}`)
  } else {
    return console.log(`Você não está acima do peso!. Seu Imc atual é ${imc} `)
  }
}

calcularIMC("Daniel Azevêdo", 50, 1.50) // Nome, Peso, Altura


/*
Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, 
enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o exemplo abaixo

*/

const nome = "Silvio";
const sexo = "M";
const idade = 55;
const contribuicao = 40;

const contriCal = idade + contribuicao;

console.log(`Tempo de contribuição: ${contriCal}`);


if(sexo === "M"){
  if(contriCal < 95){
    return console.log(`${nome}, você ainda não pode se aposentar!`);
  } else{
    return console.log(`${nome}, você pode se aposentar!`);
  }
} else if(sexo === "F"){
  if(contriCal < 85){
    return console.log(`${nome}, você ainda não pode se aposentar!`);
  } else{
    return console.log(`${nome}, você pode se aposentar!`);
    }
  } else {
    return console.log("Sexo Inválido!");
}

