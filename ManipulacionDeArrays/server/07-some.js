// Some: retorna true si alguno de los elementos dentro de un array cumple una condición dada, o false si es que no se cumple, es inmutable.

const numbers = [1, 2, 3, 5]

// Con for
let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element %2 === 0) {
        rta = true;
        break;
    }
}
console.log('rta', rta);

// Con some
const rta2 = numbers.some(item => item % 2 === 0);
console.log('rta2',rta2);


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

const ordenEntregada = orders.some(item => item.delivered);
console.log('ordenEntregada',ordenEntregada);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: "Cita de trabajo",
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};