// Manipulación del contenido HTML con JS.

const heading = document.querySelector(".heading");

const links = document.querySelectorAll(".navegacion a");

heading.textContent = 'Un nuevo título';
heading.id = 'Un nuevo ID';

// delete heading.textContent Esto no funciona
// Se pueden quitar atributos
heading.removeAttribute('id')

const inputName = document.querySelector('#nombre')
inputName.value = 'Un nuevo valor...'

console.log(inputName.classList)


console.log(links)
//Hay que tener en cuenta que cuando accedemos a un elemento con querySelectorAll, nos devuelve un array, así que para acceder al elemento que queremos modificar, le tenemos que indicar a cual de ellos
links[0].textContent = 'Nuevo enlace';

// Y si queremos acceder a todos hay que recorrer el array como hemos visto:
links.forEach(link => link.textContent = 'Nuevo enlace') // Esto es como si hicieramos un queryselector a cada uno de los elementos