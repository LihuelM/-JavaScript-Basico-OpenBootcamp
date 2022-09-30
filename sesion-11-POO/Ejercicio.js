// Ejercicio - Módulo 11

class Estudiante {
    nombre = "Lihuel"
    asignaturas = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

let Estudiante2 = new Estudiante()
console.log(Estudiante2);

Estudiante2.obtenDatos()
console.log(Estudiante2.obtenDatos())