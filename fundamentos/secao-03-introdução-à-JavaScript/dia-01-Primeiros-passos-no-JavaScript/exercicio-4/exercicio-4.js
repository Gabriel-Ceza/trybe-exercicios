let degA = 45;
let degB = 22;
let degC = -113;

let somaDosAngulos = degA + degB + degC;

let trianguloPositivo = somaDosAngulos > 0 ? true : false;

if(trianguloPositivo) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Triângulo Inválido');
}
 