// Objetos - Destructuring de dos o más objetos
const product = {
  name: "Monitor de 20 pulgadas",
  price: 300,
  available: true,
};

const client = {
  name: "Jonathan",
  premium: true,
  address: {
    street: "Calle principal"
  }
};

const { name } = product;
const { name: clientName, address: {street} } = client;
// En name: clientName lo que hace es renombrar la variable

console.log(name)
console.log(clientName)

console.log(street)
