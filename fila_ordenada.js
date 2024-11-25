// Crear una funcion que va  arecibir como parametro un numero, el cual se insertara en un arreglo, los valores que reciba la funcion seran positivos en un orden de mayor a cero.
const arreglo = [];

setInterval(agregarElemento, 4000, () => Math.floor(Math.random() * 100));

function agregarElemento(numeroAleatorio){
    const prioridad = numeroAleatorio();

    // Agregar el elemento prioridad al arreglo manteniendo el orden ascendente
    
    arreglo.push(prioridad);
    arreglo.sort((a, b)=> a - b);
    console.log(arreglo);
}
