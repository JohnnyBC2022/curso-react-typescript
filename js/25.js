import { sumar, restar } from "./funciones.js";
// Este import funciona porque en el HTML le estamos diciendo en el script que sea de tipo módulo.
// Para evitar la colisión de nombres se le puede colocar un alias a la función que queremos importar.
// import { sumar as funcionSumar } from "./funciones.js";
const resultado = sumar(10, 20);

console.log(resultado);