// Every: Este método revisa todos lo elementos de un array, y si absolutamente todos cumplen una condición dada retorna true, en caso contrario retorna false. No muta al array original.

const numbers = [1,30,39,29,10,13];

// Con for
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false;
    }
}
console.log('for', rta);

// Con every
const rta2 = numbers.every(item => item <= 40);
console.log('every', rta2);

// Reto
const team = [
    {
        name: "Nicolas",
        age: 12,
    },
    {
        name: "Andrea",
        age: 88,
    },
    {
        name: "Zulema",
        age: 25,
    },
    {
        name: "Santiago",
        age: 18,
    },
];

const mayores = team.every(item => item.age >= 18);
console.log('every', mayores);