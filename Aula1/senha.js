const entrada = require('prompt-sync')();

const senha = '1357908642';
let senhaDigitada = '';


do{
    senhaDigitada = entrada('Digite a senha para entrar: ');
}while (senha != senhaDigitada);

console.log('Você acessou o sistema');