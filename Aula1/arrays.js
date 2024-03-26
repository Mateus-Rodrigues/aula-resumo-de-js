//sintaxe antiga

/*let aluno1 = 'Teófilo Trajano';
let aluno2 = 'Raíssa Rebeca';
let aluno3 = 'Carlos Caetano';
let aluno4 = 'Helena Harris';

console.log('Lista de alunos:');
console.log('-' + aluno1);
console.log('-' + aluno2);
console.log('-' + aluno3);
console.log('-' + aluno4);
console.log('');
console.log('Fim do programa');*/

//sintaxe nova array

let alunos = [
    'Teófilo Trajano',
    'Raíssa Rebeca',
    'Carlos Caetano',
    'Helna Harris',
    'Ewerton Estones'
];

console.log('Lista de alunos: ');

for (let n = 0; n < alunos.length; n++){
    console.log('- ' + alunos[n])
}

console.log('');
console.log('Fim do programa');