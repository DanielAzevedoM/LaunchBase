//Aula - 3
/* Mostrar se a média dos alunos é maior, menor ou igual a 5.
*/
const nome = ['Mayk', 'Diego', 'Valeska'];


function mediaNotas(nota1, nota2, nota3){
    media = (nota1 + nota2 + nota3) / 3;

    console.log(`A nota do ${nome[0]} é ${nota1}, do aluno ${nome[1]} é ${nota2} e a do aluno ${nome[2]} é ${nota3} e a média das três notas é: ${media}`);

    if(media < 5){
      return console.log(`A média dos 3 alunos é menor que 5.`);
    } else if (media > 5){
      return console.log(`A média dos 3 alunos é maior que 5`);
    } else if (media == 5){
      return console.log(`A média dos 3 alunos é igual a 5`);
    }
}

mediaNotas(5, 5, 5);