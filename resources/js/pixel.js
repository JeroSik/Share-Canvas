var pixelColor;
var pixelIDMap = [];

function makePixel(x_cord, y_cord, colorHex) {
    pixelID = "(" + x_cord + "," + y_cord + ")";

    return {
        id: pixelID,
        x: x_cord,
        y: y_cord,
        color: colorHex
    };
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

function pixelIDExist(id) {
    for (var i = 0; i < pixelIDMap.length; i++) {
        if (pixelIDMap[i] == id) {
            return true;
        }
    }
    return false;
}

function splitPixels(x_cord, y_cord, colorHex, sizeVal) {
    for (var i = 0; i < (sizeVal / 5); i++) {
        for (var j = 0; j < (sizeVal / 5); j++) {
            pixel = makePixel(x_cord+5*i, y_cord+5*j, colorHex);

            if (pixelIDExist(pixel.id)) {
                console.log("updated!");
                updatePixel(pixel);
            } else {
                pixelIDMap.push(pixel.id);
                addPixel(pixel);
            }
        }
    } 
}