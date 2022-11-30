// Ejercicio 1- Módulo 10

// El archivo Controller.js el cual exporta estas funciones, se encuentra dentro de la carpeta (modulo) 
import * as moduloController from './modulo/controller.js'

const sum = moduloController.suma(4, 5);
console.log(sum);

const mult = moduloController.multiplica(1, 2);
console.log(mult);

// Usando librería chalk

import chalk from 'chalk';

console.log(chalk.green('Hello world!'));
console.log(chalk.green(sum));
console.log(chalk.green(mult));