let num1 = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite outro número:"));
let result;
let other;
let equi;

if (num1 > num2){
    result = num1;
    other = num2;
    equi = 0;
}if (num1 < num2){
    result = num2;
    other = num1;
    equi = 0;
}if (num1 == num2) {
    equi = 1;
}
if(equi = 0){
alert(`O maior número é ${result}, e o menor é ${other}`)
}
if(equi = 1){
    alert(`Os dois números são iguais`)
}