// FlatMap: El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(user => user.attributes).flat();
console.log('map+flat', rta);

const rta2 = users.flatMap(user => user.attributes);
console.log('flatMap', rta2);

// RETO

const calendars = {
    primaryCalendar: [
    {
        startDate: new Date(2021, 5, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
    },
    {
        startDate: new Date(2021, 10, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
    },
    ],
    secondaryCalendar: [
    {
        startDate: new Date(2021, 1, 2, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
    },
    {
        startDate: new Date(2021, 3, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
    },
    ],
};

const starDateCalendars = Object.values(calendars).flat().flatMap(item => item.startDate);
console.log('reto', starDateCalendars);

