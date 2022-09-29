// factorial-while.js

function factorial (numero) {
    let resultado = 1;
    let i = 1;

    while (i < numero) {
        resultado *= i;

        ++i;
    }
    return resultado;
}

console.log(factorial(10));