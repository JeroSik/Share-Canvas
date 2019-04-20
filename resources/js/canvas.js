var canvas;
var context;

function initCanvas() {
    context = document.getElementById("mainCanvas").getContext("2d");
    $("#mainCanvas").mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
              
        drawPixel(mouseX, mouseY);
    });
}

function drawPixel(x, y) {

}

initCanvas();