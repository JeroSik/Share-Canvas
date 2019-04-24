var canvas;
var context;
var pixelColor;

function initCanvas() {
    canvas = document.getElementById("mainCanvas")
    canvas.width = 750;
    canvas.height = 750;

    context = canvas.getContext("2d");
    $("#mainCanvas").mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        drawPixel(mouseX, mouseY);
    });
}

function drawPixel(x, y) {
    pixelCords = getPixelCord(x, y);

    // console.log("Old X: " + x + "     Old Y: " + y);
    // console.log("New X: " + pixelCords[0] + "     New Y: " + pixelCords[1]);
    
    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], 5, 5);

    addPixel(pixelCords[0], pixelCords[1], pixelColor)
}

function getPixelCord(x, y) {
    var pixelX = Math.round(x / 5) * 5;
    var pixelY = Math.round(y / 5) * 5;

    return [pixelX, pixelY];
}

function updateCanvas() {
    readPixels();
}

initCanvas();
setInterval(updateCanvas, 5000);