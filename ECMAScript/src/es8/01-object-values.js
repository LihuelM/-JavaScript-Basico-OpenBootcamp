//Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

console.log(Object.values(usuario)); // [ 'Andres', 'andres@correo.com', 23 ]


// Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

console.log(Object.keys(usuario)); // [ 'name', 'email', 'age' ]