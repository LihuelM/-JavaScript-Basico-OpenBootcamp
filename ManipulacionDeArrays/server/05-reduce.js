// Reduce: El método reduce nos permite tomar todos los valores de un array y reducirlos a uno solo, por lo tanto este método no retorna un array, sino un único valor. No modifica el array original, es inmutable.

const totals = [1, 2, 3, 4];

// Con for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

// Con reduce
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta', rta);