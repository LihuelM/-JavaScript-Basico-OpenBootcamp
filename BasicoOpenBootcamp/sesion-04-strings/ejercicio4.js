// Ejercicio Módulo 4

let nombre = "Lihuel";
let apellido = "Muracciole";
let estudiante = (nombre + " " + apellido);
console.log(estudiante);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let numeroLetrasEstudiante = estudiante.length;
console.log(numeroLetrasEstudiante);

let primeraLetraNombre = nombre.charAt("0");
console.log(primeraLetraNombre);
console.log(nombre.indexOf("Lihuel"))


let ultimaLetraApellido = apellido.charAt("9");
console.log(ultimaLetraApellido);
console.log(apellido.lastIndexOf("e"));

console.log(estudiante.replace(' ', ''))

let booleana = estudiante.includes ("Lihuel");
console.log(booleana);