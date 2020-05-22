//Conceito de criação de objetos

const aluno01 = {
  nome: "Mayk",
  nota: 4
}

const aluno02 = {
  nome: "Diego",
  nota: 4
}

const aluno03 = {
  nome: "Fulano",
  nota: 2
}

function mediaNotas(){
 
  const  media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

  console.log(`A nota do ${aluno01.nome} é ${aluno01.nota}, do aluno ${aluno02.nome} é ${aluno02.nota} e a do aluno ${aluno03.nome} é ${aluno03.nota} e a média das três notas é: ${media}`);

  if(media < 5){
    return console.log(`A média dos 3 alunos é menor que 5.`);
  } else if (media > 5){
    return console.log(`A média dos 3 alunos é maior que 5`);
  } else if (media == 5){
    return console.log(`A média dos 3 alunos é igual a 5`);
  }
}

mediaNotas();