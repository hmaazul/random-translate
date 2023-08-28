var textInput = document.querySelector("#text-input");
var btnTranslate = document.querySelector("#btn-translate");

console.log(textInput);

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
    console.log("click done!");
    console.log(textInput.value);
}