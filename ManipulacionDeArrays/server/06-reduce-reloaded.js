// Reduce, tambien puedo utilizarlo para crear un objeto de frecuencias, es decir, transformar un array de varios elementos, en un solo objeto, utilizando como indicador, su frecuencia de aparicion en el mismo.

const items = [5, 6, 7, 6, 5, 7, 7, 8];

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);