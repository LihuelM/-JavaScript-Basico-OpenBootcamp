// El parámetro opcional de catch permite omitir el error si es necesario.

try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}