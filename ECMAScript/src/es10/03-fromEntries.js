// El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor]. Se considera la operación inversa de Object.entries().

const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
] 

const usuario = Object.fromEntries(arrayEntries) 
console.log(usuario)


const entries = new Map([
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
]);
console.log(entries);
console.log(Object.fromEntries(entries)); 