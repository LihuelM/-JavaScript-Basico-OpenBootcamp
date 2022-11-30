// Map: es un método inmutable que nos permite iterar sobre un array y crear uno nuevo con nuevas características o transformaciones. 

const letters = ['a', 'b', 'c'];
console.log('original', letters);

// Con for
const newArray = [];
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('for', newArray);

// Con map
const newArray2 = letters.map(item => item + '++');
console.log('map', newArray2);