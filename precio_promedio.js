// En javascript los objetos son contenedores dinamicos de uno o mas valores que se acceden a traves de una key o llave.
// Calcular el precio de las casas por localidad
// la constante casas contiene la informacion de casas.

const acumulado = {};

for(const casa of casas) {
    if(!acumulado[casa.localidad]){
        acumulado[casa.localidad] = { acumuladoPrecio: 0, contador: 0};
    }
    acumulado[casa.localidad].acumuladoPrecio += casa.precio;
    acumulado[casa.localidad].contador += 1;
}
console.log(acumulado);

const localidades = Object.keys(acumulado);

for(const localidad of localidades) {
    console.log(localidad + ' ' + Math.floor(acumulado[localidad].acumuladoPrecio / acumulado[localidad].contador));
}