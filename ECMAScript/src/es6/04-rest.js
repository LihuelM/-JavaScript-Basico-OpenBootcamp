// La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

// Arrays destructuring
const array = [ 1, 2, 3, 4, 5 ];

const [uno, dos, tres ] = array;

console.log(uno);
console.log(dos);
console.log(tres);

// Object destructuring
let usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

let nombre = usuario.nombre;
let edad = usuario.edad;
let plataforma = usuario["plataforma"];

console.log(nombre);  // 'Andres' 
console.log(edad);  // 23
console.log(plataforma);  // 'Platzi'


// Parámetro rest - El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.

function hola (primero, segundo, ...resto) {
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5);