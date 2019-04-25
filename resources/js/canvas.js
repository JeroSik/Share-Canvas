// Initialize global variables
var canvas;
var context;
var drawLock = false;

// Funciton starts the canvas on load up
function initCanvas() {
    // Creates canvas with set height and width
    canvas = document.getElementById("mainCanvas")
    canvas.width = 600;
    canvas.height = 600;
    context = canvas.getContext("2d");

    // Gets click on canvas
    $("#mainCanvas").mousedown(function(e){
        // Get x and y coordinate of mouse press
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        
        // Check if drawing is allowed
        if (!drawLock) {
            drawCanvas(mouseX, mouseY);
            lockCanvas();
        }
    });
}

// Function prevents canvas from being drawn on for 10 seconds
function lockCanvas() {
    var seconds = 10;

    var x = setInterval(function() {
        drawLock = true;
        document.getElementById("drawTimer").innerHTML = seconds + "s";

        // If the count down is over, allow canvas to be drawn again
        if (seconds-- <= 0) {
            clearInterval(x);
            drawLock = false;
            document.getElementById("drawTimer").innerHTML = "READY";
        }
    }, 1000);
}

// Function draws a pixel on the canvas
function drawCanvas(x, y) {
    pixelCords = getPixelCord(x, y);
    pixelSize = getPixelSize();

    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], pixelSize, pixelSize);

    console.log("Pixel Info: (" + pixelCords[0] + ", " + pixelCords[1] + "), " + pixelColor + ", " + pixelSize);

    splitPixels(pixelCords[0], pixelCords[1], pixelColor, pixelSize);
}

// Function updates the canvas with the database every 6 seconds
function updateCanvas() {
    readPixels();

    setInterval(function() {
        var seconds = 5;

        var x = setInterval(function() {
            document.getElementById("refreshTimer").innerHTML = seconds + "s";

            // Refresh page after 6 seconds
            if (seconds-- <= 0) {
                clearInterval(x);
                document.getElementById("refreshTimer").innerHTML = "Refreshed!";
            }
        }, 1000);
        readPixels();
    }, 6000);
}

// Start functions on load up
initCanvas();
updateCanvas();