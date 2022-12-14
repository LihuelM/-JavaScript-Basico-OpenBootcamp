//Arrow functions - Las funciones flecha (arrow functions) consiste en una función anónima con la siguiente estructura:

//Función tradicional
function nombre (parámetros) {
    return valorRetornado
};

//Función flecha
const nombre = (parámetros) => {
    return valorRetornado
};

// Las funciones flecha tienen un retorno implícito, es decir, se puede omitir la palabra reservada return, para que el código sea escrito en una sola línea.
const suma = (num1, num2) => num1 + num2;

// Si tengo un solo parámetro, puedo omitir los paréntesis.
const porDos = num => num * 2;