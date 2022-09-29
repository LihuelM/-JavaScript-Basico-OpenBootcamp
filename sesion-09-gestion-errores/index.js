//Ejercicio 1 - Módulo 9

const funcionError = nombre => {
    if (typeof nombre === "string") {
        return "Hola!" + " " + (nombre) + " " + "Bienvenido a este nuevo reto!";
    }
    throw new Error("Lo siento, tu nombre debe ser de tipo 'string' para poder utilizar esta función!");
}

const nombre = 13;

try {
    console.log("Está ejecutándose de manera correcta");
    const saludo = funcionError(nombre);
    console.log(saludo);
} catch (e) {
    console.error(`El valor de e es: ${e}`);
} 

