var canvas;
var context;

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
    console.log("X: " + x + "     Y: " + y);

    context.fillStyle = "#000000";
    context.fillRect(x, y, 25, 25);
}

initCanvas();