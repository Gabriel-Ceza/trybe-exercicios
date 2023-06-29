let salary = 3000;

if(salary > 5189.82) {
    salary = salary - 570.88;
} else if (salary >= 2594.93 && salary <= 5189.82) {
    salary -= salary * 0.11;
} else if (salary >= 1556.95 && salary <= 2594.92) {
    salary -= salary * 0.09;
} else {
    salary -= salary * 0.08;
}

if(salary > 4664.68) {
    salary -= salary * 0.275 - 869.36;
} else if (salary >= 3751.06 && salary <= 4664.68) {
    salary -= salary * 0.225 - 636.13;
} else if (salary >= 2826.66 && salary <= 3751.05) {
    salary -= salary * 0.15 - 354.80;
} else if (salary >= 1903.99 && salary <= 2826.65) {
    salary -= salary * 0.075 - 142.80;
} else {
    salary = salary;
}

console.log(salary);