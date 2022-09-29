//Ejercicio 2 - Módulo 7

const misDatosPersonales = {
    nombre: "Lihuel",
    apellido: "Muracciole",
    edad: 31,
    altura: 1.64,
    isDeveloper: true,
}
console.log(misDatosPersonales);

const miEdad = misDatosPersonales.edad;
console.log(miEdad);

//Listas

const mejorAmiga1 = { 
    nombre: "Gabriela", 
    apellido: "Rumis", 
    edad: 29, 
    altura: 1.54, 
    isDeveloper: false 
}
const mejorAmiga2 ={  
    nombre: "Rocio", 
    apellido: "Cabrera", 
    edad: 30, 
    altura: 1.70, 
    isDeveloper: false  }

    const listaTodas = [misDatosPersonales, mejorAmiga1, mejorAmiga2];
    console.log(listaTodas)

    const listaOrdenadaPorEdades = listaTodas.sort((a, b) => b.edad - a.edad);
    console.log(listaOrdenadaPorEdades);

