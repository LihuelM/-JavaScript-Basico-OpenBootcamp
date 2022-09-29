// factorial-break.js

let resultado = 1;
let i = 1;

while (true) {

    i++;
    resultado *= i;

    if (i === 10) {
    
        break;

    }
}
console.log(resultado);


