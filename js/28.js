// Performance y Multiple Async Await

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/todos";
const url3 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  try {
    const inicio = performance.now(); // Aquí empieza a medir el tiempo de respuesta
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const response2 = await fetch(url2);
    const data2 = await response.json();
    console.log(data2);

    const response3 = await fetch(url3);
    const data3 = await response.json();
    console.log(data3);

    const fin = performance.now(); // Para finalizar la medición
    console.log(`El resultado de la PRIMERA función es:  ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();

// Tenemos que tener en cuenta que nos interesa, ya que vamos acumulando awaits. Es decir, la función espera que termine una tarea para empezar otra. Cuando los datos de la segunda consulta dependen de la primera, hay que hacerlo de la primera forma, pero si son consultas de datos independientes, para mejorar la performance (tiempo de ejecución) de la aplicación podemos lanzar las peticiones de forma simultánea

const consultarAPI2 = async () => {
  try {
    const inicio = performance.now(); // Aquí empieza a medir el tiempo de respuesta
    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);

    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);

    console.log(data);
    console.log(data2);
    console.log(data3);

    const fin = performance.now(); // Para finalizar la medición
    console.log(`El resultado de la SEGUNDA función es:  ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI2()
