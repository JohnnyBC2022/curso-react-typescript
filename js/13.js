const tecnologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];

// Foreach

const arrayForEach = tecnologies.forEach(function (tech) {
  console.log(tech);
});

// Map, la diferencia es que crea un nuevo arreglo en base a las condiciones de la función
const arrayForEach2 = tecnologies.forEach(function (tech) {
  return tech;
});

// Este método se usa mucho en React porque te permite modificar comportamientos de cada uno de los elementos manteniendo intacto el array original
const arrayMap = tecnologies.map(function (tech) {
  return tech;
});

console.log(arrayForEach2)
console.log(arrayMap)

// for ...of . Ejecuta un bloque de código por cada elemento del array

for(let tech of tecnologies) {
    console.log(tech)
}
