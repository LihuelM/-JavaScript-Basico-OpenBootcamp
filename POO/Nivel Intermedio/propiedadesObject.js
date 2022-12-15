const juan = {
    name: "juanito",
    age: 18, 
    approvedCourses: ["Curso 1"],
    addCourse (newCourse) {
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));


Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestre",
    writable: false,
    enumerable: false,
    configurable: false,
});

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true,
});

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false,
});


Object.seal(juan); //hace que las propiedades del objecto juan, no se puedan eliminar, es decir, configurable: false.
Object.isSealed(juan); //sirve para chequear el punto anterior.
Object.freeze(juan);// no se pueden borrar, ni modificar las propuedades.
Object.isFrozen(juan);//sirve para chequear el punto anterior.

console.log(Object.getOwnPropertyDescriptors(juan));


const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}


// const obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: 'd',
//         e: 'e',
//     },
//     editA() {
//         this.a = 'Abcd'
//     }
// };

// const obj2 = {};
// for (prop in obj1) {
//     obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

