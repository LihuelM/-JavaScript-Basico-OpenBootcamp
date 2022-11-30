// Ejercicios Modulo 6

const listaDeCompras = ["queso", "leche", "huevos", "manteca", "harina"];

listaDeCompras.push("Aceite de Girasol");
console.log(listaDeCompras);

listaDeCompras.pop();
console.log(listaDeCompras);

const peliculasFavoritas = [
    { titulo: "En busca de la felicidad", director: "Gabriele Muccino", fecha: 2007 },
    { titulo: "La decision mas dificil", director: "Nick Cassavetes", fecha: 2009 },
    { titulo: "La isla siniestra", director: "Christopher Nolan", fecha: 2010 },
]

const directores = peliculasFavoritas.map(valor => {
    return valor.director;
})
console.log(directores);

const titulos = peliculasFavoritas.map (valor=> {
    return valor.titulo;
})
console.log(titulos);

const directoresTitulos_concat = directores.concat(titulos);
console.log(directoresTitulos_concat); 

const directoresTitulos_propagacion = [...directores, ...titulos];
console.log(directoresTitulos_propagacion); 

const posterioresAl2010 = peliculasFavoritas.filter(obj => obj.fecha > 2009);
console.log(posterioresAl2010);