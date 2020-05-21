//Aula - 3
/* Criar um progama que calcula a média
das notas entre os alunos e enviar mensagem
do calculo da média.
*/
const nome = ['Mayk', 'Diego', 'Valeska'];

function mediaNotas(nota1, nota2, nota3){
    notatotal = nota1 + nota2 + nota3;
    media = notatotal / 3;

    return console.log(`A nota do ${nome[0]} é ${nota1}, do aluno ${nome[1]} é ${nota2} e a do aluno ${nome[2]} é ${nota3} e a média das três notas é: ${media}`);
}

mediaNotas(4, 4 ,4);

