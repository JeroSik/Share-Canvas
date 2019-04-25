var canvas;
var context;
var drawLock = false;

function initCanvas() {
    canvas = document.getElementById("mainCanvas")
    canvas.width = 600;
    canvas.height = 600;

    context = canvas.getContext("2d");

    $("#mainCanvas").mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        
        if (!drawLock) {
            drawCanvas(mouseX, mouseY);
            lockCanvas();
        }
    });
}

function lockCanvas() {
    var seconds = 10;

    var x = setInterval(function() {
        drawLock = true;
        document.getElementById("drawTimer").innerHTML = seconds + "s";

        // If the count down is over, write some text 
        if (seconds-- <= 0) {
            clearInterval(x);
            drawLock = false;
            document.getElementById("drawTimer").innerHTML = "READY";
        }
    }, 1000);
}

function drawCanvas(x, y) {
    pixelCords = getPixelCord(x, y);
    pixelSize = getPixelSize();

    console.log("Pixel Info: (" + pixelCords[0] + ", " + pixelCords[1] + "), " + pixelColor + ", " + pixelSize);

    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], pixelSize, pixelSize);

    splitPixels(pixelCords[0], pixelCords[1], pixelColor, pixelSize);
}

function updateCanvas() {
    readPixels();

    // Update every 6 seconds
    setInterval(function() {
        var seconds = 5;
        var x = setInterval(function() {
            document.getElementById("refreshTimer").innerHTML = seconds + "s";
            if (seconds-- <= 0) {
                clearInterval(x);
                document.getElementById("refreshTimer").innerHTML = "Refreshed!";
            }
        }, 1000);
        readPixels();
    }, 6000);
}

initCanvas();
updateCanvas();