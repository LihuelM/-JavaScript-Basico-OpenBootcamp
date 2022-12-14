//spread operator - El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.

// Para strings
const array = [ ..."Hola"];    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array];   //[ 'H', 'o', 'l', 'a' ]

//Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, si cambias algo en la copia, también lo harás en el original. Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original.

const originalArray = [1,2,3,4,5];
const copyArray = [...originalArray];
copyArray[0] = 0;

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

//Para unir dos arrays o un array con un elemento, con el operador de propagación, simplemente debes separarlos por comas en un array. El operador de propagación sirve para producir una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original.

const array1 = [1,2,3];
const number = 4;
const array2 = [5,6,7];

const otherArray2 = [ ...array1, number, ...array2 ];
console.log(otherArray); // [1,2,3,4,5,6,7]


