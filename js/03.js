// Tipos de datos

// Undefined

/* let client;
console.log(client);
console.log(typeof client); */

// Strings
const student = "Jonathan";

console.log(student);
console.log(typeof student);

let product = 'Monitor de 20 pulgadas';

console.log(product);
console.log(typeof product);

// Numbers
const number = 20.20;
const number2 = 30;
const number3 = -40;
const number4 = "20";

console.log(typeof number);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof number4);

// BigInt
const bigNumber = BigInt(165498746546894654231654);

// BigInt es esencial cuando trabajas con números que necesitan precisión total y que superan los límites normales de los números en JavaScript. BigInt se usa cuando necesitas representar o manipular números enteros grandes sin perder precisión, como cifras astronómicas o cifras financieras de precisión completa.

console.log(typeof bigNumber);

// Boolean
const discount = true;
console.log(typeof discount);

// Null
const discount2 = null; // es como si no existiera
console.log(discount2);

let price; // undefined es una variable que si existe pero no tiene valor
console.log(price);

// Symbol
const firstSymbol = Symbol(30);
const secondSymbol = Symbol(30);
console.log(firstSymbol === secondSymbol);
// La característica principal de los simbolos es que son unicos y no pueden ser reasignados.

// Symbol es ideal cuando quieres crear identificadores únicos y evitar colisiones en nombres de propiedades.
const id = Symbol('id');
const user = {
   [id]: 12345,  // Propiedad "oculta" que no colisionará con otros nombres de propiedades
   name: 'Alice',
};

console.log(user[id]); // 12345

console.log(typeof id);