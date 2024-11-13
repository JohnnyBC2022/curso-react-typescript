// Optional Chaining (?)

const student = {
    name: "Jonathan",
    course: 'React',
    pass: true,
    exams: {
        score1: 20,
        score2: 30
    }
};

// console.log(student.exams.score1);  Aquí va a marcar un error y ya no ejecuta la línea siguiente. Para evitarlo se usa Optional Chaining
console.log(student.exams?.score1);
console.log('Después del estudiante');

// Nullish coalescing (??) Si el valor de la izquierda es null o undefined, se va a tomar el valor de la derecha
const score = student.exams?.score1 ?? 'No hay notas';
console.log(score);

const page = null ?? 1;
console.log(page);
