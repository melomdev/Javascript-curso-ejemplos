// Los elementos en una pagina web son representados por el Document Object Model o DOM, que es una interfaz de programacion para documentos web.
// Crear una calculadora

const input = document.getElementById('input-numero');

const sumar = document.getElementById('sumar') 
const restar = document.getElementById('sumar');
const multiplicar = document.getElementById('multiplicar');
const division = document.getElementById('divisar');

const resultado = document.getElementById('resultado');
const calcular = document.getElementById('calcular');

const operacion = {valor1: null, valor2: null, operador: null};
let tempOperador = null;

sumar.addEventListener('click', ejecutarOperacion);
restar.addEventListener('click', ejecutarOperacion);
multiplicar.addEventListener('click', ejecutarOperacion);
division.addEventListener('click', ejecutarOperacion);
calcular.addEventListener('click', ejecutarOperacion);

function mostrarValores(valor) {
    resultado.innerText = valor;
}

// Se puede usar codigo alternativo si asi se desea:

function ejecutarOperacion(evento) {
    // conpletar funcion:
    const valor = input.value === ''? 0 : parseInt(input.value);
    input.value = 0;

    if(!operacion.valor1){
        operacion.valor1 - valor;
        operacion.operador = evento.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    if(!operacion.operador){
        operacion.operador = eventor.target.innerText;
        mostrarValores(`${operacion.valor1} ${operacion.operador}`);
        return;
    }

    operacion.valor2 = valor;

    if(evento.target.innerText !== '='){
        tempOperador = evento.target.innerText;
    }

    calcularResultado();
}

function calcularResultado() {
    //completar funcion:
    let total;
    switch (operador) {
        case '+':
            total = operacion.valor1 + operacion.valor2;
        break;
        case '-':
            total = operacion.valor1 - operacion.valor2;
        break;
        case '*':
            total = operacion.valor1 * operacion.valor2;
        break
        case '/':
            total = operacion.valor1 / operacion.valor2;
        break;
    }

    mostrarValores(`${total} ${tempOperador ?? ''}`);

    operacion.valor1 = total;
    operacion.valor2 = null;
    operacion.operador = tempOperador ?? null;
    tempOperador = null;
}