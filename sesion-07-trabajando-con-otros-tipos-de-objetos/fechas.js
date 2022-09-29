const hoy = new Date();
console.log(hoy);

const miFechaDeNacimiento = new Date(1990, 10,1);
console.log(miFechaDeNacimiento);

const hoyMasTarde = (hoy > miFechaDeNacimiento);
console.log(hoyMasTarde);

const diaNacimiento = miFechaDeNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = miFechaDeNacimiento.getMonth();
console.log(mesNacimiento + 1);

const anyoNacimiento = miFechaDeNacimiento.getFullYear();
console.log(anyoNacimiento);