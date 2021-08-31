var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler() {
    console.log("clicked");
    // txtOutput.innerText = "B"+txtInput.value
    var inputText = txtInput.value //taking input
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
}
btnTranslate.addEventListener("click", clickHandler)