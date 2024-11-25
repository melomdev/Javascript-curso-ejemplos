// Un arreglo de string el cual contiene el nombre y apellido de varias personas. 
// Crear una funcion para ordenar los nombres alfabeticamente ya sea por nombre o apellido.

const nombres = [
    "June Greene",
    "Doyle Gonzales",
    "Twila Dotson",
    "Melba Moon"
];

// ordenar los nombres alfabeticamente

const ordenadors = nombres.sort((a, b) => {
    const nombreA = a.split(' ')[0];
    const nombreB = b.split(' ')[0];
    return nombreA < nombreB ? -1 : nombreA > nombreB ? 1 : 0;
})