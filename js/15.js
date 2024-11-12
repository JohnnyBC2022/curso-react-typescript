// Function expression
//sumar(25,75)

const sumar = function (num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};

sumar(25, 75);

// La diferencia es que no podemos llamar a una función que no existe todavía. Sin embargo, con el function declaration si funciona. Esto se debe al modo en que se ejecuta javascript.
