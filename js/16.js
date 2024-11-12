// Arrow functions

const sumar = (num1 = 0, num2 = 0) => {
  console.log(num1 + num2);
};

// Cuando solo se va a ejecutar una línea de código, se puede prescindir de las llaves
const sumar2 = (num1 = 0, num2 = 0) => console.log(num1 + num2);
sumar(10, 20);
sumar(300, 10);
sumar(300);
