const bank = 1000;
const payment = 500;
const card = true;

if (bank >= payment) {
  console.log("Puedes pagar");
} else if (card) {
  console.log("Puedes pagar con tu tarjeta");
} else {
  console.log("Saldo insuficiente, no puedes pagar");
}

// Hay que tener en cuenta que solo se va a ejecutar la primera que se cumpla

/**
 * Logical Or and Logical And
 * || Or - Al menos una condición se cumple
 * && And - Todas las condiciones se cumplen
 */

if (bank >= payment || card) {
    console.log("Puedes pagar");
} else {
    console.log("Saldo insuficiente, no puedes pagar");
}
