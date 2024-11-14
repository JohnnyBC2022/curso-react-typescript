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