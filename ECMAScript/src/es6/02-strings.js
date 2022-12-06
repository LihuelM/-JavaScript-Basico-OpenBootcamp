// Template literals - Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ( ` ), para envolver el mensaje. Para incluir las variables se utiliza la sintaxis ${variable}.

let nombre = "Andres";
let edad = 23;

let mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(mensaje);

let mensajeNuevo = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensajeNuevo);

// Multiline strings - La plantilla multilínea consiste en crear mensajes que contengan varias líneas separadas entre sí, utilizando las plantillas literales. Antes de ES6, la forma de crear una plantilla multilínea era agregar \n al string.

var mensaje2 = "Línea 1 \n" + "línea 2";
console.log(mensaje2);

const mensajeNuevo2 = `Línea 1
línea 2`;
console.log(mensajeNuevo2);