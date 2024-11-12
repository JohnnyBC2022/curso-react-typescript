const tecnologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];
tecnologies[4] = "Next.js";
tecnologies[5] = "Node.js";
tecnologies[10] = "Java";

console.table(tecnologies);

// Métodos de arrays
tecnologies.push("Springboot");

// Página para comprobar si un método modifica un arreglo doesitmutate.xyz.
//No se recomiendo usar push con React, alternativa:
const newTecnologies = [...tecnologies, "Figma"];

console.table(newTecnologies);

// Si lo quieres añadir al inicio en vez del método unshift:
const newTecnologies2 = ["Figma", ...tecnologies];
console.table(newTecnologies2);

// Métodos para eliminar:
// Eliminar el primer elemento del array (o pop para eliminar el último elemento)
tecnologies.shift();

console.table(tecnologies);

// Alternativa
/* const tecnologies2 = tecnologies.filter(function(tech) {
    if(tech !== 'HTML'){
        return tech
    }
}) */

const tecnologies2 = tecnologies.map(function (tech) {
  if (tech === "Node.js") {
    return "NODE.js";
  } else {
    return tech;
  }
});

console.log(tecnologies2);
