// Objetos - Union de dos o más objetos
const product = {
  name: "Monitor de 20 pulgadas",
  price: 300,
  available: true,
};

const client = {
  name: "Jonathan",
  premium: true,
};

/* const cart = {
    amount: 1,
    ...product // spread operator
} */

/* En vez de hacer:
const newObject = {
    product: {...product},
    client: {...client}
} */

/* const newObject = {
    product,
    client
} */

const newObject = {
  ...product,
  ...client,
};

console.log(newObject);

// Se puede mejorar con :
const newObject2 = Object.assign(product, client);
console.log(newObject2);
