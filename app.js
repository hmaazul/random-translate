var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output-txt");

// console.log(textInput);   //to select the text area 

var url = "https://api.funtranslations.com/translate/minion.json";

function urlTranslation(input) {
    return url + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("some error occured");
    alert("Some error occured! Do try after some time");
}

function clickHandler() {
    var inputTxt = textInput.value;

    fetch(urlTranslation(inputTxt))
        .then(response => response.json())
        .then( json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerText = translatedTxt;
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);



