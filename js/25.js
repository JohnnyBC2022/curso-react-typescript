import hola, { sumar, restar } from "./funciones.js";
// Este import funciona porque en el HTML le estamos diciendo en el script que sea de tipo módulo.
// Para evitar la colisión de nombres se le puede colocar un alias a la función que queremos importar.
// import { sumar as funcionSumar } from "./funciones.js";

// Cuando importamos una función que tiene el default, no es necesario poner el import entre llaves y podemos llamarlo como queramos. Va a funcionar porque el default es único en el archivo.
const resultado = sumar(10, 20);

console.log(resultado);

const resultado2 = hola(100, 20);
console.log(resultado2);
