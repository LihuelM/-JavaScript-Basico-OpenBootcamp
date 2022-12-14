// Existen tres métodos para eliminar espacios en blanco de un string:

//El método trim elimina los espacios en blanco al inicio y al final.
//El método trimStart o trimLeft elimina los espacios al inicio.
//El método trimEnd o trimRight elimina los espacios al final.


const hello = '         hello world!      ';
console.log(hello.trimStart());
console.log(hello.trimEnd());
console.log(hello.trim());