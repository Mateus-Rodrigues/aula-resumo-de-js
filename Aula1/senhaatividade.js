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
    senhaDigitada != senha;
    error === error+1

    if(error = 3){
        result = 'Senha Bloqueada'
    }

}while (senhaDigitada = senha );

console.log('Você acessou');
