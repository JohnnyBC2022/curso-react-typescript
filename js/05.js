// Manipulación de Objetos

const product = {
  name: "Monitor de 20 pulgadas",
  price: 300,
  available: true,
};

// No se pueden modificar, añadir o eliminar propiedades
Object.freeze(product);

// Solo te permite modificar las propiedades existentes
Object.seal(product);

// Reescribir el valor de una propiedad
product.available = true;

// Si no existe la propiedad se crea
product.image = "imagen.jpg";

// Eliminar una propiedad
delete product.available;

console.log(product);
