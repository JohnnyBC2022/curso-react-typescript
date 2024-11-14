// Selectores

const heading = document.querySelector(".heading");

console.log(heading);

// Una vez que accedemos al elemento tenemos acceso a sus propiedades.
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);

const enlace = document.querySelector(".navegacion a"); // trae el primero que encuentre
console.log(enlace);

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
