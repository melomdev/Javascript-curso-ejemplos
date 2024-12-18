// Una funcion es una bloque de codigo que ejecuta una funcion especifica y resuelve un problema.
// Escribir una funcion que indica si un numero es primo

function esPrimo(numero) {
    if(numero <= 1)
        return false;
}

for(let i = 2; i < numero; i++){
    if(numero % i === 0){
        return false;
    }
}
return true;

console.log(esPrimo(2)); //true
console.log(esPrimo(7)); //true
console.log(esPrimo(10)); //false
console.log(esPrimo(15)); //false
console.log(esPrimo(29)); //true
