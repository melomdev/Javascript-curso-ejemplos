// El objeto Math no tiene constructor, el objecto mas en un objeto estatico que se utiliza para ejecutar operaciones matematicas.
// Calcular el numero aleatorio que se encuentre dentro del rango de ambos numeros y la funcion debera retornar el valor de dicha operacion
// Generar un numero aleatorio dentro de un rando de dos numeros

function numeroAleatorio(numeroA, numeroB){
    return Math.random() * (numeroA - numeroB) + numeroB;
}

console.log(numeroAleatorio(5, 10));
console.log(numeroAleatorio(-25, -22));
console.log(numeroAleatorio(100, 0));
console.log(numeroAleatorio(-2, 2));

