// Eventos del DOM - Inputs

const inputName = document.querySelector("#nombre");

inputName.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", functionPassword());

function functionPassword() {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 3000);
}
