const tecnologies = ["HTML", "CSS", "Javascript", "React.js", "Node.js"];
const numbers = [10, 20, 30];

// Filter

const newTecnologies = tecnologies.filter(tech => tech !== "HTML");

// Es lo mismo que.
const tecnologies2 = tecnologies.filter(function (tech) {
    if(tech !== 'HTML'){
        return tech;
    }
})

console.log(newTecnologies);
console.log(tecnologies2);

const result = numbers.filter(num => num !== 10);
console.log(result);

// Includes
const result2 = tecnologies.includes("HTML");
console.log(result2);

// Some - Devuelve si al menos un elemento cumple la condición
const result3 = numbers.some(number => number > 15);
if(result3){
    console.log("Al menos un elemento cumple la condición");
} else {
    console.log("Ningun elemento cumple la condición");
}

// Find - Devuelve el primer elemento que cumple la condición
const result4 = numbers.find(number => number > 15);
console.log(result4);

// Every - Devuelve verdadero si todos los elementos cumplen la condición o falso si todos no los cumplen
const result5 = numbers.every(number => number > 15);
console.log(result5);

// Reduce - Devuelve un solo valor que es la suma de todos los elementos
const result6 = numbers.reduce((total, number) => total + number,0); // El cero es el valor inicial
console.log(result6);


