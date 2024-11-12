// Funciones que retornan valores

const sumar = function (num1 = 0, num2 = 0) {
  return num1 + num2;
};

function sumar2 (num1 = 0, num2 = 0) {
    return num1 + num2;
}

// En el arrow function no es necesario poner la palabra reservada return, ya que por defecto es una función que retorna un valor
const sumar3 = (num1 = 0, num2 = 0) => num1 + num2;

const resultado = sumar(10, 20);
const resultado2 = sumar2(10, 20);
const resultado3 = sumar3(10, 20);
sumar(300, 1);
sumar(100);

console.log(resultado);
