// Template Strings y concatenación

const product = "Tablet de 12 pulgadas";
const price = 400;
const brand = "orange";

console.log("El producto es: " + product);
console.log("El producto es: ", product);

// Esta sintaxis puede provocar muchos errores o no ser fácil de utilizar
console.log(product + precio + "€" + ", marca: " + brand);
// Para evitarlo, se usan los templates strings:
console.log(
  `El producto es: ${product}, con un precio de ${price} €, marca: ${brand}`
);
