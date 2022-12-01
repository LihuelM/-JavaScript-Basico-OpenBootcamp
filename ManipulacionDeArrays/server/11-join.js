// Join: El método join nos permite unir todos los elementos de un array dentro de un solo string sin modificar el array original. Join va a retornar un string vacío si el array no contiene ningún elemento. 

const elements = ["fuego", "aire", "agua"]

// Con for
let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

// Con join
const rta = elements.join('--');
console.log('join', rta);

// Split: es lo contrario que el método join, consiste en separar un string en substrings, indicando un valor a separar. Este método retornará un array de los elementos separados. Este método recibe dos argumentos (opcional el 2do): El separador que especifica el conjunto de caracteres a separar en substrings y/o el límite de elementos separados a retornar.

const tittle = 'Curso de manipulacion de arrays';

const tittleFinal = tittle.split(' ').join('/');
console.log(tittleFinal);