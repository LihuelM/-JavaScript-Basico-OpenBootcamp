// Reasignación de variables

//VAR- Se puede reasignar y redeclarar

var firstName; //undefined
firstName = 'Oscar';
console.log(firstName);

var lastNAme = 'David'; //declarar y asignar
lastNAme = 'Ana'; //reasignar
console.log(lastNAme);

var secondName = 'David'; //declarar y asignar
var secondName = 'Ana'; //reasignar
console.log(secondName);

//LET - Se puede reasignar, No se puede volver a declarar.

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit);

// let fruit = 'Banana'; No se puede volver a declarar

//CONST - No se puede reasignar, ni se puede volver a declarar

const animal = 'Dog';
// animal = 'Cat';No se puede reasignar
console.log(animal);
// const animal = 'Snake'; No se puede volver a declarar

const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);