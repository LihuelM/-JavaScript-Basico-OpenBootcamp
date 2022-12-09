// Module - Para que el código de JavaScript sea más ordenado, legible y mantenible; ES6 introduce una forma de manejar código en archivos de manera modular. Esto involucra exportar funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.

// Las exportaciones de código consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export. Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

// Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original.

// Además, si iniciaste un proyecto con NPM (Node Package Manager) con Node.js, necesitas especificar que el código es modular en el archivo package.json 

import { add } from './module.js'

add(2,2) //4


// Para importar todas las funcionalidades de un archivo se utiliza un asterisco (*) y se puede cambiar el nombre para evitar la repetición de variables o funciones a través de la palabra reservada as.

import * as myMathModule from './module.js';

myMathModule.add(2,2) //4