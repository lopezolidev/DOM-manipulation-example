const inputDown = document.getElementById('inputDown');
const inputUp = document.getElementById('inputUp');
const pDown = document.getElementById('pDown');
const pUp = document.getElementById('pUp');

function keysDown(event) {
    pDown.innerText += `${event.code}`;
}

inputDown.addEventListener('keydown', keysDown);

//usando la propiedad .code del evento que genera la funcion keysDown podemos saber cual es la tecla que se esta presionando mas no el caracter, es decir que la letra "a" seguira teniendo el mismo identificador de letra aunque sea "A". Son la misma tecla pero no el mismo caracter

// el evento keydown lo que hace es ejecutar una accion mientras la tecla se mantenga presionada

// usando la propiedad .key nos arroja el caracter:

// function keysDown(event) {
//     pDown.innerText = `${event.key}`;
// }

function keysUp(event) {
    pUp.innerText += `${event.code}`
}

inputUp.addEventListener('keyup', keysUp);

// cuando usamos el evento keyup, nos retorna una accion solo cuando la tecla ya no esta siendo presionada, cosa contraria a keydown, donde mientras este presionada la tecla se seguira ejecutando la accion


function scrollingPower(event) {
    const desplazamientoTotal = document.documentElement.scrollHeight - window.innerHeight;
    //el elemento document.documentElement.scrollHeight nos da una distancia total en el eje ordenada ("Y") del objeto document, mientras que window.innerHeight es la distancia interna de la ventana.

    //lo que queremos acceder es el numero maximo de espacio scrolleable sin tener que scrollear en la pantalla propiamente, por eso hacemos la resta

    const desplazable = Math.ceil(window.scrollY);
    //desplazamiento es la distancia en pixeles que el usuario ha recorrido en el scroll desde arriba (0) hasta abajo (numero final)

    if (desplazable === (desplazamientoTotal / 2)) {
        alert('Esta es la mitad de la pagina');
    } else if (desplazable === desplazamientoTotal) {
        //como desplazado realmente es un numero con decimales tenemos que redondearlo hacia arriba para que se iguale a desplazamiento
        alert('Has llegado al fin de la pagina!');
    }
}
window.addEventListener('scroll', scrollingPower);
