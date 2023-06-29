let num1 = 6;
let num2 = 15;
let num3 = 8;
let message = '';

if(num1 > num2 && num1 > num3) {
    message = `${num1} é o maior número.`
} else if (num2 > num3) {
    message = `${num2} é o maior número.`    
} else {
    message = `${num3} é o maior número.`
}

console.log(message);