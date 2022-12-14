// Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

// Para manipular estas estructuras de datos, existen los siguientes métodos:
// add(value): añade un nuevo valor.
// delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
// has(value): retorna un booleano si existe o no el valor dentro del Set.
// clear(value): elimina todos los valores del Set.
// size: retorna la cantidad de elementos del Set.

const lista = new Set();

lista.add('item 1');
lista.add('item 2').add('item 3');
console.log(lista);