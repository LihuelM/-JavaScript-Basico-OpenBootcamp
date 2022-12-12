// El aplanamiento consiste en transformar un array de arrays a una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.

// El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

const array1= [1, 2, [3, 4, [5, 6]]];
const result1 = array1.flat(2) ;
console.log(result1); // [1, 2, 3, 4, 5, 6]

// El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

const numbers = [1, 2, 3, 4]
numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]
numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
