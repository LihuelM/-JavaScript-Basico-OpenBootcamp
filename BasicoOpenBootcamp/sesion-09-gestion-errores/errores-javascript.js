const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble = miFuncion("a1a")
const numero = "10";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

// InternalError, se lanza cada vez que hay un problema interno. Ej, cuando una funcion se llama a si misma de forma indefinida.
//SyntaxError, fallo de sintaxis, error en la escritura.
//TypeError, error en el tipo de dato. Ej, se ingresa un string, cuando se espera un número.
//RangeError, error de rango. Ej, cuando se intenta acceder a algo por fuera de lo q se tiene. 
//ReferenceError, cuando no existe la referencia a la cual intentamos acceder.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error