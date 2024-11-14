// Fetch API con Async / Await
const url = "https://jsonplaceholder.typicode.com/comments";

/* fetch(url)
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Hubo un error...");
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message))
*/

const consultarAPI = async () => {
  /* Si hacemos esto así, no podemos manejar errores, pero si todo está ok, va a funcionar
    const response = await fetch(url)
    const data = await response.json()
    console.log(data); Para ello se usa try..catch: */
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Hubo un error...");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();
