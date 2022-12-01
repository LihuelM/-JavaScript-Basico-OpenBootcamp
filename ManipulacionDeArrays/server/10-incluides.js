// Includes: Este método nos ayuda a determinar fácilmente si un array contiene un elemento predeterminado. Si el elemento existe includes retorna true, si no devuelve false. Es inmutable. Este método también se puede utilizar con strings.

const pets = [ "cat", "dog", "bat" ];

// Con for
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

// Con includes
const rta = pets.includes('dog');
console.log('includes', rta);