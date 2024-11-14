// Si utilizamos esta sintaxis, en el import debemos llamar a la función con el mismo nombre y entre llaves.
export function sumar(n1, n2) {
  return n1 + n2;
}

export function restar(n1, n2) {
  return n1 - n2;
}
/*
Como alternativa se puede hacer lo siguiente:
function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

export {
    sumar,
    restar
};
*/

export default function multiplicar(n1, n2) {
  return n1 * n2;
}

/* solo puede haber un export default por archivo */

// Vemos que funciona perfectamente con function declaration. También funciona con arrow function
/*
    export const sumar = (n1, n2) => n1 + n2;
    export const restar = (n1, n2) => n1 - n2;
 */

/*
Ojo con el default que cambia un poco la sintaxis. Hay que hacer lo siguiente:
    const multiplicar = (n1, n2) => n1 * n2;
    export default multiplicar;
    Y normalmente se hace así por convenio, pero también funciona al revés:
    export default mutliplicar;
    const multiplicar = (n1, n2) => n1 * n2;
*/
