var canvas;
var context;

function initCanvas() {
    canvas = document.getElementById("mainCanvas")
    canvas.width = 600;
    canvas.height = 600;

    context = canvas.getContext("2d");

    $("#mainCanvas").mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        drawCanvas(mouseX, mouseY);
    });
}

function drawCanvas(x, y) {
    pixelCords = getPixelCord(x, y);
    pixelSize = getPixelSize();

    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], pixelSize, pixelSize);

    splitPixels(pixelCords[0], pixelCords[1], pixelColor, pixelSize);
}

function redrawCanvas() {
    console.log("")
}

function updateCanvas() {
    redrawCanvas();
    setInterval(redrawCanvas, 5000);
}

initCanvas();
// updateCanvas();