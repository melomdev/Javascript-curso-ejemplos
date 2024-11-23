// JavaScript es un lenguaje dinamicamente tipado, esto significa que una variable puede tomar diferentes tipos conforme se ejecuta la aplicacion
// Los arreglos en javascript pueden contener elementos de diferentes tipos en cada uno de sus indices

// Determinar si ambos arreglos son similares:

function sonSimilares(arregloA, arregloB) {
    if(arregloA.length !== arregloB.length) {
        return false;
    };

    for(let indice = 0, total = arregloA.length; indice <= total; indice++){
        if(arregloA[indice] !== arregloB[indice]){
            return false;
        }
    }
    return true;
}

console.log(sonSimilares([1,2] [1,2,3])); //false
console.log(sonSimilares([1,2,3] [1,2,3])); //true
console.log(sonSimilares([1,2] ['1','2','3'])); //false
