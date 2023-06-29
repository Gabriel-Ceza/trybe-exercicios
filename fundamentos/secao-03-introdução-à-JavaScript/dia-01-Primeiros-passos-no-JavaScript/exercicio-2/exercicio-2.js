let num1 = 26;
let num2 = 28;
let message = '';

if(num1 > num2) {
    message = `${num1} é maior que ${num2}.`;
} else if (num1 === num2) {
    message = `${num1} é igual a ${num2}.`;
} else {
    message = `${num2} é maior que ${num1}.`;
}

console.log(message);