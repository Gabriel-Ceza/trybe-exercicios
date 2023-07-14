const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
  sum += numbers[index];
}

console.log(sum);

media = sum / numbers.length;
console.log(media);

if (media > 20) {
  console.log("“O valor da média aritmética é maior que 20");
} else {
  console.log("O valor da média aritmética é menor ou igual a 20.");
}

let maiorNumero = 0;
for (let y = 0; y < numbers.length; y += 1) {
  if (numbers[y] > maiorNumero) {
    maiorNumero = numbers[y];
  }
}
console.log(maiorNumero);

let numerosImpares = 0;
for (let z = 0; z < numbers.length; z += 1) {
  if (numbers[z] % 2 !== 0) {
    numerosImpares += 1;
  }
}

console.log(numerosImpares);

if (numerosImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
}

let fatorial = 10;
for (let i = 10; i > 0; i -= 1) {
  fatorial *= i;
}

let word = "tryber";

let wordReverse = word.split("").reverse().join("");
console.log(wordReverse);
