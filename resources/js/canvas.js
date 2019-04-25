var canvas;
var context;
var pixelColor;
var curTool;
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var on;

function initCanvas() {
    canvas = document.getElementById("mainCanvas")
    canvas.width = 600;
    canvas.height = 600;

    context = canvas.getContext("2d");
    curTool = 'pixel'

    $("#mainCanvas").mousedown(function(e){
        on = true;
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        drawPixel(mouseX, mouseY);
    });
}

function drawPixel(x, y) {
    pixelCords = getPixelCord(x, y);

    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], 5, 5);

    // addPixel(pixelCords[0], pixelCords[1], pixelColor)
}

function getPixelCord(x, y) {
    var pixelX = Math.round(x / 5) * 5;
    var pixelY = Math.round(y / 5) * 5;

    return [pixelX, pixelY];
}

function updateCanvas() {
    readPixels();
}

function clear(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
}

initCanvas();
// setInterval(updateCanvas, 5000);
