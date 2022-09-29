// Ejercicio 1 - Módulo 8

// Funcion sin parámetros:

function funcionSinParametros(porDefecto = true) {
    console.log(true);
}

funcionSinParametros()

// función asíncrona que utilice un setTimeout

const funcionAsincronica = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });
}

funcionAsincronica().then(() => console.log("Hola soy una promesa"));


// función generadora de índices pares automáticos

function* generaId() {
    let id = 0;
    while (true) {
        id +=2
        if (id === 20) {
            return id;
        }
        yield id;
    }
}

const funcionGenerIndicesPares = generaId();

console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)
console.log(funcionGenerIndicesPares.next().value)