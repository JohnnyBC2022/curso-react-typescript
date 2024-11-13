// Evalucación de corto circuito. Un truthy en javascript es un valor que es considerado true cuando se evalúa en un contexto de boolean. Es decir, son valores que se van a tratar como truthy por defecto a menos que sean definidos como falsy.

const auth = true;

if (new Date()) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Por eso hay que tener cuidado con cosas como esta:
const user = {};

user && console.log("Usuario autenticado");

// Es como si hicieramos:
user ? console.log("Usuario autenticado") : "";
// Pero como no tenemos nada definido para el caso del false se utiliza esa sintaxis de corto circuito.
