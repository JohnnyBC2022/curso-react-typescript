// Condicionales
const bank = 4000;
const withdraw = 200;

const auth = true;

if (auth) {
  // Se cumple la condición
  console.log("El usuario esta autenticado");
} else {
  // No se cumple la condición
  console.log("El usuario no esta autenticado");
}

/**
 * > Mayor que
 * < Menor que
 * >= Mayor o igual que
 * <= Menor o igual que
 * == igual que
 * === igual estricto
 * != distinto
 * !== distinto estricto
 */

if (bank >= withdraw) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insuficiente");
}
