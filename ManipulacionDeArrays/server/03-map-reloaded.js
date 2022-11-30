const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];


const rta = orders.map(item => item.total);
console.log('rta', rta);


// Se copia el objeto, pero tambien se copia la misma referencia en memoria, por lo cual, si este se modifica, también modifica el array original.

// const rta2 = orders.map(item => {
//     item.tax = .19;
//     return item;
// });
// console.log('rta2', rta2);

const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19,
    };
});
console.log('rta3', rta3);
console.log('original', orders);