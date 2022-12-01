// Concat: Este método nos permite concatenar dos o más arrays existentes, devolviendo un array totalmente nuevo que no modifica ninguno de los originales. 

const numbers1 = [1,2,3,4];
const numbers2 = [5,6,7,8];
const numbers3 = [9,10,11,12];

// Con for
const newArray = [...numbers1];
for (let index = 0; index < numbers2.length; index++) {
    const element = numbers2[index];
    newArray.push(element)
}
console.log('for', newArray);

// Con concat
const rta = numbers1.concat(numbers2);
console.log('concat', rta);

// Otro metodo de hacer merge en arrayspuede ser con spread operator (operador de propagación).
const rta2 = [...numbers1, ...numbers2];
console.log('spreatOperator', rta2);

// Si necesito agregar un array dentro de otro, puedo realizarlo con el mismo operador + push
numbers1.push(...numbers2);
console.log('spreatOperator + push', numbers1);
