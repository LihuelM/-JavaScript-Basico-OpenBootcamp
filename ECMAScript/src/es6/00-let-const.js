// Declaración y Asignación

var nameVar = "soy var"; //Una variable declarada con var puede ser re-declarada y re-asignada.
let nameLet = "soy let"; //Una variable declarada con let puede ser re-asignada, pero no re-declarada.
const nameConst = "soy const"; //Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

// Re-asignación de variables
nameVar = "otro var";
console.log(nameVar); // 'otro var'

nameLet = "otro let";
console.log(nameLet); // otro let'

nameConst = "otro const"; //TypeError: Assignment to constant variable.
