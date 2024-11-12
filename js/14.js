// Function Declaration

function sumar() {
  console.log(1 + 1);
}

sumar();
sumar();
sumar();
sumar();

function sumar2() {
  console.log(2 + 2);
}

function sumar3(num1,num2) {
    console.log(num1 + num2)
}

sumar3(10,20)

function sumar4(num1 = 0,num2 = 0) {
    console.log(num1)
    console.log(num2)
    console.log(num1 + num2)
}

sumar4(300)
