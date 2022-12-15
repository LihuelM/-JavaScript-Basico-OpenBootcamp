const numeritos = [0, 1, 22, 3, 4, 5,5,535,6,7,9, 10 ]
let numerito = 0;

// Modo de hacerlo con condicional

for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log({index,numerito});
}

// Modo de hacerlo con funcion recursiva

function recursiva (numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        return recursiva (numbersArray); 
    } else {

    }
}