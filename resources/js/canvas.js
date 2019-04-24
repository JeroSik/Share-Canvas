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

        if(curTool === 'pixel'){
            drawPixel(mouseX, mouseY);
        }else if(curTool === 'paint'){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
            redraw();
        }
    });
    $('#mainCanvas').mousemove(function(e){
        if(on){
          addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
          redraw();
        }
    });
    $('#canvas').mouseup(function(e){
        on = false;
    });
    $('#canvas').mouseleave(function(e){
        on = false;
    });
}
function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function drawPixel(x, y) {
    pixelCords = getPixelCord(x, y);

    console.log("Old X: " + x + "     Old Y: " + y);
    console.log("New X: " + pixelCords[0] + "     New Y: " + pixelCords[1]);
    
    context.fillStyle = pixelColor;
    context.fillRect(pixelCords[0], pixelCords[1], 5, 5);
}

function getPixelCord(x, y) {
    var pixelX = Math.round(x / 5) * 5;
    var pixelY = Math.round(y / 5) * 5;

    return [pixelX, pixelY];
}

function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
}


initCanvas();