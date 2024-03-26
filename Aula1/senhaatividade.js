/*const entrada = require('prompt-sync')();

const senha = '1357908642';
let senhaDigitada = '';


do{
    senhaDigitada = entrada('Digite a senha para entrar: ');
}while (senha != senhaDigitada);

console.log('Você acessou o sistema');*/

const entrada = require('prompt-sync')();

const senha = '1020304050'
let result;
let error = 0;
let senhaDigitada = '';

senhaDigitada = entrada('Digite a senha para entrar: ');

/*if(senhaDigitada === senha){
    result = 'Você acessou'
} else{
    result = 'senha incorreta'
}*/

//resolver esse parte


do{
    senhaDigitada != senha
    result = 'senha incorreta'

    

}while (senhaDigitada = senha );

if(error = 3){
    result = 'Senha Bloqueada'
}

console.log('Você acessou');
