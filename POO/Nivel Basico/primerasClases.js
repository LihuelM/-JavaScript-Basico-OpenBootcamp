const natalia = {
    name : "natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

function Student (name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "maria juanita",
    15,
    [
        "Cusrso de Introducción a la Producción de Videojuegos",
        "Curso de Creación de Personajes"
    ])

// Prototipos con la sintaxis de clases

class Student2 {
    constructor (name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito = new Student2 (
    "Juen Miguel",
    28,
    [
        "Inglés básico",
        "Inglés Intermedio",
    ],
)