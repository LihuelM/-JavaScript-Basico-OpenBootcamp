// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

class Rectangulo {
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    // Getter
    get #area() {
        return this.calcArea();
    }
    // Setter
    set #xAlto(x) {
        return this.alto = x;
    }
    // Método
    #calcArea () {
      return this.alto * this.ancho;
    }
}

const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area); // 100
console.log(cuadrado.xAlto = 20); //20