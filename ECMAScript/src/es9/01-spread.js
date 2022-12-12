// Las propiedades de propagación consisten en expandir las propiedades de un objeto utilizando el spread operator. Sirve para crear nuevos objetos a partir de otros.

const objeto = {
    nombre: "Andres",
    age: 23,
}
const usuario = {
    ...objeto,
    plataforma: "Platzi"
}
console.log(usuario);

const user = {username: 'Li', age: 32, country: 'ARG'};
const {username, ...values} = user;
console.log(username);
console.log(values);