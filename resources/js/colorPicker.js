var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    pixelColor = defaultColor
    colorWell.addEventListener("input", updateFirst, false);
    // colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    console.log("New Color: " + event.target.value);
    pixelColor = event.target.value;
}