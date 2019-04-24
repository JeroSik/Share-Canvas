var canvas;
var context;
var pixelColor;

function initCanvas() {
    canvas = document.getElementById("mainCanvas")
    canvas.width = 600;
    canvas.height = 600;

    context = canvas.getContext("2d");

    $("#mainCanvas").mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        drawPixel(mouseX, mouseY);
    });
}

function drawPixel(x, y) {
    pixelCords = getPixelCord(x, y);
    pixelSize = getPixelSize();

    console.log(pixelSize)

    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], pixelSize, pixelSize);

    addPixel(pixelCords[0], pixelCords[1], pixelColor, pixelSize);
}

function getPixelCord(x, y) {
    var pixelX = Math.round(x / 5) * 5;
    var pixelY = Math.round(y / 5) * 5;

    return [pixelX, pixelY];
}

function getPixelSize() {
    var sizeValue = document.getElementById('sizeList').value;
    if (sizeValue == "small") {
        return 5;
    } else if (sizeValue == "normal") {
        return 10;
    } else if (sizeValue == "large") {
        return 25;
    } else if (sizeValue == "exLarge") {
        return 50;
    }
}

function updateCanvas() {
    readPixels();
    setInterval(readPixels, 5000);
}

initCanvas();
// updateCanvas();