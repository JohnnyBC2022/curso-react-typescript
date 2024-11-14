// Selectores

const heading = document.querySelector(".heading");

console.log(heading);

// Una vez que accedemos al elemento tenemos acceso a sus propiedades.
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);

const link = document.querySelector(".navegacion a"); // trae el primero que encuentre
console.log(link);

const links = document.querySelectorAll(".navegacion a");
console.log(links);
