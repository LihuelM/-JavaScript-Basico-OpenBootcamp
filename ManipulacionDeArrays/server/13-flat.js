// Flat: El método flat nos permite 'aplanar' un array de varias dimensiones, o una matriz mejor dicho, sin modificar el array original. Flat puede tomar un argumento opcional:  **depth [opcional]** → la profundidad en la que queremos aplicar el método. Si no le pasamos argumento, entonces depth será =1.

const matriz = [
    [1,2,3],
    [4,5,6, [2, 3, [1, 2]]],
    [7,8,9],
];
const array = [1,2,[3,4],5,6];

// Con for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

// Con flat
const rta = matriz.flat(3);
console.log('flat', rta);