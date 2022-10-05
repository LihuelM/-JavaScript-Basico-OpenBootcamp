// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

// localStorage y sessionStorage //

const nombre = "Lihuel";
const apellido ="Muracciole";

const persona = {
    nombre,
    apellido
}

// localStorage.setItem("persona", JSON.stringify(persona));
// localStorage.removeItem("nombre");

// sessionStorage.setItem("persona", JSON.stringify(persona));

//  Cookies //

const now = new Date()
// document.cookie = 'datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}'