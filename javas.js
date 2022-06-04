let num1 = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite outro número:"));
let result;
let other;

if (num1 > num2){
    result = num1;
    other = num2;
    alert(`O maior número é ${result}, e o menor é ${other}`)
} else if (num1 < num2){
    result = num2;
    other = num1;
    alert(`O maior número é ${result}, e o menor é ${other}`)
}else if (num1 == num2) {
    alert(`Os dois números são iguais`)
}
