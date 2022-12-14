// El método at de arrays sirve para acceder a los elementos a partir del índice.

// La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.


const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length -1]); // metodo tradicional

console.log(array.at(-1)); // version es13- AT

