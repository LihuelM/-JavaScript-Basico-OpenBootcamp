// Filter: es un método inmutable que nos permite iterar sobre un array y crear un nuevo array solo con los elementos que cumplan cierta condición.

const words = ["spray", "elites", "limit", "apple", "exuberant"]
// const newWords = []

// Con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >=6) {
        newArray.push(item);
    };
}
console.log('for-newArray', newArray);
console.log('for-original', words);

// Con Filter
const rta = words.filter (item => item.length >= 6);
console.log('filter-rta', rta);
console.log('filter-original', words);

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
    {
        customerName: "Maria",
        total: 890,
        delivered: false,
    },
];

const deliveryOk = orders.filter(item => item.delivered && item.total >= 100);
console.log('filter-deliveryOk', deliveryOk);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log (search('Nico'));