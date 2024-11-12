// Destructuring de arrays

const tecnologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];

const react = tecnologies[3];
// Los extrae en función de la posición, así que ojo
const [html, css, nodejs] = tecnologies;

console.log(nodejs);

// imaginemos que solo queremos extraer el valor de la posición 4:
const [, , , reactjs] = tecnologies;
console.log(reactjs);
