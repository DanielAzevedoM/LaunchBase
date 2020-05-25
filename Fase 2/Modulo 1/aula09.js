/* 
Criar um progama que calcula a média
das turmas de alunos e envia
do calculo da média.
*/
const alunosDaTurmaA = [
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

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 5
  },
  {
    nome: "Siclano",
    nota: 2
  }
]

function mediaNotas(alunos){

  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
  
}
const media1 = mediaNotas(alunosDaTurmaA);
const media2 = mediaNotas(alunosDaTurmaB);

function enviaMensagem(alunos, media){
  
  console.log(`A nota do ${alunos[0].nome} é ${alunos[0].nota}, do aluno ${alunos[1].nome} é ${alunos[1].nota} e a do aluno ${alunos[2].nome} é ${alunos[2].nota} e a média das três notas é: ${media}`);
  
  if(media < 5){
    return console.log(`A média dos 3 alunos é menor que 5.`);
  } else if (media > 5){
    return console.log(`A média dos 3 alunos é maior que 5`);
  } else if (media == 5){
    return console.log(`A média dos 3 alunos é igual a 5`);
  }
}

enviaMensagem(alunosDaTurmaA, media1);
enviaMensagem(alunosDaTurmaB, media2);

