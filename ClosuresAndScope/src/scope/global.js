// Variables//
var a; //declaracion
var b = b; //declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa';// redeclaracion

//Global Scope //
var fruit = 'apple';
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Tener cuidado al asignar las variables dentro de una funcion, si se encuentran mal asignadas, pueden pasar a ser globales, en lugar de ser locales. Ejemplo:

function bestFruit() {
    fruit = 'apple'; //global
    console.log(fruit);
}

bestFruit();
console.log(fruit);