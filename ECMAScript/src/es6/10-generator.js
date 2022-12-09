// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores. Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

// Sintaxis : 1) palabra reservada function* (con el asterisco al final). 2) La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior. 3) Crear una variable a partir de la función generadora. 4) El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado. 

// Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Ana', 'Lucia', 'Maya', 'Pedro']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Si intentas recorrer un objeto de esta forma for elemento of objeto, te ocurrirá un error, porque un objeto no es un iterable. En su lugar puedes utilizar for elemento in objeto, que recorrerá las propiedades del objeto.

function* iterate2(objetos) {
    for (let elemento in objetos) {
        yield elemento;
    }
}

const objeto = iterate2({ a: 1, b: 2, c: 3 });
console.log(objeto.next().elemento);
