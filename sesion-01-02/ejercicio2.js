// Objetos
const libroPreferido = {
    titulo: "Ensayo sobre la ceguera",
    autor: "Jose Saramago",
    url: "https://es.wikipedia.org/wiki/Ensayo_sobre_la_ceguera"
}

libroPreferido.fecha = 1995;
console.log(libroPreferido.fecha);

// Fechas --Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const dia = ahora.getDate();
const mes = ahora.getMonth() +1;
const anyo = ahora.getFullYear();
console.log(dia, mes, anyo);

const miFechaNacimiento_cadena = new Date("nov 01 1990"); 
console.log(miFechaNacimiento_cadena);

const miFechaNacimiento_valores =new Date(1990, 10, 01);
console.log(miFechaNacimiento_valores);

// Listas, arrays o arreglos
const lista = ["Lihuel", 31, true, libroPreferido, miFechaNacimiento_valores];
const lista2 = new Array("Lihuel", 31, true, libroPreferido, miFechaNacimiento_valores);
const lista3 = new Array(5);
lista3[0] = "Primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);