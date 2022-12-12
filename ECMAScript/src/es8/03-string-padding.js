// El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.Este método recibe dos argumentos: La longitud máxima a rellenar, incluyendo el string inicial y string para rellenar, por defecto, es un espacio.

//El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.

const string = 'Hello';
console.log(string.padStart(6, '_')); // _Hello

//El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

console.log(string.padEnd(6, '_')); // Hello_
