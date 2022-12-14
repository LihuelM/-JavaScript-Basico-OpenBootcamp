//clases - son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a objetos en JavaScript, sino que proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.


// declarando
class User {};
// instancia de una clase
const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'Hello!';
    }
};

// dos instancias de la misma clase
const gndx =  new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor, getter y setter

class Rectangulo {
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Setter
    set xAlto(x) {
        return this.alto = x;
    }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area); // 100
console.log(cuadrado.xAlto = 20); //20