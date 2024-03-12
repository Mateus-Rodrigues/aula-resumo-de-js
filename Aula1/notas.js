let entrada = require('prompt-sync')();
let valor = '';

console.log('Programa que recebe dois numeros');
valor = entrada('Digite a nota 1');
let n1 = parseFloat(valor);
valor = entrada('Digite a nota 2');
let n2 = parseFloat(valor);
valor = entrada('Digite a nota 3');
let n3 = parseFloat(valor);
valor = entrada('Digite a nota 4');
let n4 = parseFloat(valor);

let media = (n1 + n2 + n3 + n4)/4;

console.log('A média da soma de: ' + n1 + '+' + n2 + '+'  + n3 + '+'  + n4 + '=' + media);

if (media >=7){
    console.log('Aprovado');
} else if (media >=4){
    console.log('Recuperação');
}else{
    console.log('Reprovado');
} 


console.log('Pressione ENTER para encerrar!');
entrada();