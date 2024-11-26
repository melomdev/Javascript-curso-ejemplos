// Juego "el piso es lava"
function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarRocas(){
    var fragmento = new DocumentFragment();

    for (let i = 0; i <= 50; i++) {
        const elemento = document.createElement('div');
        elemento.style.position = 'absolute';
        elemento.style.width = `${generarNumeroAleatorio(70)}px`;
        elemento.style.height = `${generarNumeroAleatorio(70)}px`;
        elemento.style.top = `${generarNumeroAleatorio(window.innerHeight)}px`;
        elemento.style.left = `${generarNumeroAleatorio(window.innerWidth)}px`;
        elemento.style.borderRadius = '10px';
        elemento.style.backgroundColor = `#${Math.floor(Math.random() * 167772)}px`;
        fragmento.appendChild(elemento);
    }

    document.body.appendChild(elemento);
}
generarRocas();

// Determinar si el puntero se encuentra encima del fondo de la pantalla
// o si esta tocando algun elemento en la pagina 

const resultado = document.geteELementByTagName('span')[0];

document.addEventListener('mousemove', (evento) => {
    const x = evento.clientX;
    const y = evento.clientY;
    const el = document.elementsFromPoint(x, y);
    if(el.tagName == 'BODY' || el.tagName == 'HTML') {
        resultado.innerText = 'El puntero se esta quemando!';
    } else {
        resultado.innerText = 'El puntero esta a salvo!';
    }
});