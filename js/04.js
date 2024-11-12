// Objetos: Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre y un valor asociado.

const product = {
  name: "Monitor de 20 pulgadas",
  price: 300,
  available: true,
};

console.log(product);
console.log(typeof product);
console.table(product);

console.log(product.name);
console.log(product.price);
console.log(product.description);

// En versiones antiguas si queríamos guardar el precio de un producto en una variable se hacía de la siguiente manera:

// const price = product.price;

// Destructuring
const { name, price, available } = product;

console.log(name);
console.log(price);
console.log(available);

// Object Literal Enhancements
const authentication = true;
const user = "Jonathan";

const newObject = {
  authentication: authentication,
  user: user,
};

console.log(newObject);
// El object literal lo que hace es crear un nuevo objeto con las propiedades que le pasemos con esta sintaxis (siempre que clave y valor sean iguales):

const newObject2 = {
  authentication,
  user,
};

console.log(newObject2);
