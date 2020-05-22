//Colocar objetos dentro de um vetor

const alunos = [
  {
    nome: "Mayk",
    nota: 4
  },
  {
    nome: "Diego",
    nota: 4
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

function mediaNotas(){
 
  const  media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;

  console.log(`A nota do ${alunos[0].nome} é ${alunos[0].nota}, do aluno ${alunos[1].nome} é ${alunos[1].nota} e a do aluno ${alunos[2].nome} é ${alunos[2].nota} e a média das três notas é: ${media}`);

  if(media < 5){
    return console.log(`A média dos 3 alunos é menor que 5.`);
  } else if (media > 5){
    return console.log(`A média dos 3 alunos é maior que 5`);
  } else if (media == 5){
    return console.log(`A média dos 3 alunos é igual a 5`);
  }
}

mediaNotas();

