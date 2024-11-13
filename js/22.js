// Operador ternario
const auth = true;
const bank = 1000;
const payment = 500;
const card = true;

if (auth) {
  console.log("El usuario esta autenticado");
} else {
  console.log("El usuario no esta autenticado");
}

auth
  ? console.log("El usuario esta autenticado")
  : console.log("El usuario no esta autenticado");

bank >= payment || card
  ? console.log("Puedes pagar")
  : console.log("Saldo insuficiente, no puedes pagar");
