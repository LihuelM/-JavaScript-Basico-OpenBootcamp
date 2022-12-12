// Generadores asincronos, Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.


async function* anotherGEnerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGEnerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

// for await

async function forAwait(array) {
    for await (let valor of array) {
    console.log(valor);
    }
}

const nombres = forAwait(["Alexa", "Oscar", "David"]);
console.log('After');