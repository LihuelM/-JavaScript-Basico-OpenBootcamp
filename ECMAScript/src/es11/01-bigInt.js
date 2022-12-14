// El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const number1 = 45932874563206252782935n
const number2 = BigInt(45932874563206252782935)

console.log(number1); // 45932874563206252782935n 
console.log(number2); // 45932874563206252782935n 