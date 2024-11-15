// Eventos de DOM - Submit

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  // Prevenir nuevas alertas
  const previousAlert = document.querySelector(".alerta");
  // Sintaxis antigua:
  /*
    if(previousAlert) {
        previousAlert.remove();
    }
  */
  previousAlert?.remove();

  const alerta = document.createElement("DIV");
  alerta.textContent = "Contenido de alerta";
  alerta.classList.add(
    "alerta",
    "text-white",
    "p-2",
    "text-center",
    "text-sm",
    "font-bold",
    "uppercase"
  );

  if (name === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("bg-red-500");
  } else {
    alerta.textContent = "Iniciando sesión...";
    alerta.classList.add("bg-green-500");
  }

  form.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
});
