const h1 = document.querySelector('h1'); 
//tambien funcionaria document.getElementById('pid')
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const btn = document.getElementById('button');
const pResult = document.getElementById('result');

// const form = document.querySelector('form');
// form.addEventListener('click', calculateOnClick);

// function calculateOnClick(event) {
//     console.log({event})
//     event.preventDefault();
//        para evitar la accion por defecto del submit debemos agregar el event.preventDefault(), que en este caso lo que hace es evitar el efecto submit que tenia originalmente el button dentro del form
//     pResult.innerText = Number(input1.value) + Number(input2.value);
// }

// podemos usar el addEventListener para generar un escuchador de eventos, referente a un selector, un evento en particular y llamando a una función

btn.addEventListener('click', calculateOnClick);

// tambien podemos utilizar al propio form y darle un addEventListener para que reaccione a esto y llame a la funcion

function calculateOnClick() {
    pResult.innerText = Number(input1.value) + Number(input2.value);
}

