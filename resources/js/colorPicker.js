var colorWell;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    // colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}

function updateFirst(event) {
    console.log(event.target.value);
    pixelColor = event.target.value;
}

// Use this link for additional features
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color