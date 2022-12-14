// Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.


//Función antes de ES6 - Antes de ES6, se debía establecer una variable y utilizar el operador OR ( ||) con el valor por defecto necesario. El caracter guion bajo ( _) lo utilizo para diferenciar el parámetro de la función de la variable declarada.

function sumar(number1, number2){
    var _number1 = number1 || 0;
    var _number2 = number2 || 0;
    
    return _number1 + _number2;
}

// Parámetros por defecto - Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:

function sumar(number1 = 0, number2 = 0){
    return number1 + number2;
}
