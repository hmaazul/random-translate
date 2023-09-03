var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output-txt");

console.log(textInput);   //to select the text area 

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
    outputTxt.innerText = textInput.value; 
}

//https://bananaspeakpractice.netlify.app/