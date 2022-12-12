// El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

const promesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
        //true o false
        resolve("Se ha resuelto la promesa")
        } else {
        reject("Se ha rechazado la promesa")
        }
    })
}

promesa()
    .then(respuesta => console.log(respuesta)) //En caso que se ejecute resolve
    .catch(error => console.log(error)) //En caso que se ejecute reject
    .finally(( )=> console.log('Finalizado'));