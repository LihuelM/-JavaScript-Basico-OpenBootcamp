// Find es un método inmutable que nos ayuda a iterar sobre un array y encontrar el primer elemento que coincida con una condición dada, si no hay algún elemento que coincida, entonces va a retornar undefined.Find siempre va a devolver el primer y solo el primer elemento que haga match con la condición. 

const numbers = [1, 30, 41, 29, 50, 60];

// Con for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }
}
console.log('for', rta);

// Con find
const rta2 = numbers.find(item => item === 30);
console.log('find', rta2);

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    },
];

const rta3 = products.find(item => item.id === '🥞');
console.log('find', rta3);


// FindIndex nos itera sobre un array y encuentra el índice del primer elemento que coincida con una condición dada, si no hay algún elemento que coincida, entonces va a retornar -1.

const rta4 = products.findIndex(item => item.id === '🥞');
console.log('findIndex', rta4);