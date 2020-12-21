let btnTranslate = document.querySelector('#btn-translate');
let txtInput = document.querySelector('#txt-input');
let outputDiv = document.querySelector('#output');

let clickHandler = () => {
    outputDiv.innerText = 'translated one ' + txtInput.value;
};

btnTranslate.addEventListener('click', clickHandler);
