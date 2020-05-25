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

