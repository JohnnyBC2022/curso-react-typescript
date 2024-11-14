// Eventos del DOM - Clicks

const heading = document.querySelector(".heading");
const links = document.querySelectorAll(".navegacion a");

heading.addEventListener("click", () => {
  heading.textContent = "Nuevo heading al hacer click...";
});

heading.addEventListener("dblclick", () => {
  heading.textContent = "Nuevo heading al hacer doble click...";
});

heading.addEventListener("mouseenter", () => {
  heading.textContent = "Nuevo heading al pasar el ratón...";
});

heading.addEventListener("mouseenter", () => {
  heading.textContent = "Nuevo heading al dejar de pasar el ratón...";
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    console.log(e);
    console.log(e.target);
    e.target.textContent = "hiciste click en un enlace";
  });
});
