// Ejercicio 1 - Módulo 12

function GenerateFibonacci(num){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    let arrayFibonacci = GenerateFibonacci(6);
    console.log(arrayFibonacci);