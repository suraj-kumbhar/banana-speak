let btnTranslate = document.querySelector('#btn-translate');
let txtInput = document.querySelector('#txt-input');
let outputDiv = document.querySelector('#output');

let serverURL = 'https://api.funtranslations.com/translate/minion.json';

let getTranslation = text => {
    return serverURL + '?text=' + text;
};

let errorHandler = error => {
    console.error('Error :', error);
    alert('Sorry, the server is down, please try some another time!');
};

let clickHandler = () => {
    let inputText = txtInput.value;

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            console.log(json.contents.text);
        })
        .catch(error => errorHandler(error));
};

btnTranslate.addEventListener('click', clickHandler);
