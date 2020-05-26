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
  },
  {
    nome: "alunonovo",
    nota: 5
  }
]

function mediaNotas(alunos){
  let soma = 0;
  for(let i = 0; i < alunos.length; i++){
    soma = soma + alunos[i].nota; 
   
  }
  const media = soma / 3;
  return media;
}
const media1 = mediaNotas(alunosDaTurmaA);
const media2 = mediaNotas(alunosDaTurmaB);

function enviaMensagem(alunos, media, turma){
    
  if(media < 5){
    return console.log(`Media: ${media}. A media da turma ${turma} é menor que 5.`);
  } else if (media > 5){
    return console.log(`Media: ${media}. A media da turma ${turma} é maior que 5, parabéns!`);
  } else if (media == 5){
    return console.log(`Media: ${media}. A media da turma é igual a 5, parabéns!`);
  }
}

enviaMensagem(alunosDaTurmaA, media1, 'A');
enviaMensagem(alunosDaTurmaB, media2, 'B');

//MARCAR ALUNO COMO REPROVADO 
//SE A NOTA FOR MENOR QUE 5
//E TAMBEM ENVIAR MENSAGEM

function marcarComoReprovado(aluno){
  aluno.reprovado = false;
  if(aluno.nota < 5){
    aluno.reprovado = true
  }
}



function enviarMensagemReprovado(aluno){
  if(aluno.reprovado){
    console.log(`O aluno ${aluno.nome} está reprovado!`)
  }
}

function alunoReprovado(alunos){
  for(let aluno of alunos){
   marcarComoReprovado(aluno);
   enviarMensagemReprovado(aluno);
  }
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);

