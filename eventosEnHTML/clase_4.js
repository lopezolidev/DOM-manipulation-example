const h1 = document.querySelector('h1'); 
//tambien funcionaria document.getElementById('pid')
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const btn = document.getElementById('button');
const pResult = document.getElementById('result');

function calculateOnClick() {
    pResult.innerText = Number(input1.value) + Number(input2.value);
}

// podemos usar el addEventListener para generar un escuchador de eventos, referente a un selector, un evento en particular y llamando a una función

btn.addEventListener('click', calculateOnClick);

