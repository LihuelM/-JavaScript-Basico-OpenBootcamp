//'use strict' - Activar esta función permite poner seguridad a nuestro codigo, pensarlo un poco más y evita futuros inconvenientes


pi = 3.1416; //Se declaro sin asignar
console.log(pi);

//Lo que interpreto el programa fue:
var pi; // Se declaro y asigno undefined
pi = 3.1416; //y luego se reasigno al valor
console.log(pi);

'use strict'; //No permite utilizar esta variable, si no se encuentra declarada
pi = 3.1416; 
console.log(pi); 

function myfunction(){ //No permite utilizar esta variable, si no se encuentra declarada
    'use strict';
    return pi = 3.1416;
}
console.log(myfunction());