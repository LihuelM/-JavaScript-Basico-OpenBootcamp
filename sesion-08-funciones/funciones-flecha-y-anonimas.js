// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)

console.log(array2)

// las funciones tipo flecha, se guardan en una variable!

// const dobleDelValor = valor => {
//     return valor * 2
// }
const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)

console.log(array3)

function doble(valor) {
    return valor * 2
}

// las variables var y las funciones definidas (de forma tradicional) se pueden acceder desde fuera de su ámbito, las funciones tipo flecha y las variables const/let, no pueden se accedidas antes de inicializarse.