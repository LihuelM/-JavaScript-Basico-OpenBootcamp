// ForEach: nos permite iterar sobre cada elemento de un array y ejecutar un callback que le pasamos como argumento.

const letters = ['a', 'b', 'c'];

// Con for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

// Con forEach
letters.forEach(item => console.log('foreach', item));
