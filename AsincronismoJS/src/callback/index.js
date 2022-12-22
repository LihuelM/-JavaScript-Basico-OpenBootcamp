// Callbacks - es una una función que se pasa como argumento de otra función y que será invocada.

function sum (num1, num2) {
    return num1 + num2;
};
function rest(num1, num2) {
    return num1 - num2;
}
function mult(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum)); // También podria ser rest, mult o div


// SetTimeout

setTimeout(function() {
    console.log('Hola JavaScript');
}, 5000);

function gretting (name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Lihuel');