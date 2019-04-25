// Initialize global variables
var colorWell;
var defaultColor = "#000000";

// Allow browser to open color wheel on start up
window.addEventListener("load", startup, false);

// Function listens to color wheel press
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    pixelColor = defaultColor
    colorWell.addEventListener("input", updateColor, false);
    colorWell.select();
}

// Function updates the current pixel color
function updateColor(event) {
    console.log("New Color: " + event.target.value);

    pixelColor = event.target.value;
}