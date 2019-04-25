// Initialize global variables
var pixelColor;
var pixelIDMap = [];

// Function returns pixel object which stores an id, color, and coordinates
// Pixel ID is the x, y coordinate pair
function makePixel(x_cord, y_cord, colorHex) {
    pixelID = "(" + x_cord + "," + y_cord + ")";

    return {
        id: pixelID,
        x: x_cord,
        y: y_cord,
        color: colorHex
    };
}

// Function returns normal x, y coordinate pair to pixel coordinate pair
// Pixel coordinates are rounded down to the nearest 5
function getPixelCord(x, y) {
    var pixelX = Math.round(x / 5) * 5;
    var pixelY = Math.round(y / 5) * 5;

    return [pixelX, pixelY];
}

// Function returns the pixel size from the size selector
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

// Function checks if a pixel ID already exists within the pixelIDMap
function pixelIDExist(id) {
    for (var i = 0; i < pixelIDMap.length; i++) {
        if (pixelIDMap[i] == id) {
            return true;
        }
    }
    return false;
}

// Function splits larger pixels into smaller standard pixels
function splitPixels(x_cord, y_cord, colorHex, sizeVal) {
    for (var i = 0; i < (sizeVal / 5); i++) {
        for (var j = 0; j < (sizeVal / 5); j++) {
            pixel = makePixel(x_cord+5*i, y_cord+5*j, colorHex);

            // Either add pixel or update pixel value
            if (pixelIDExist(pixel.id)) {
                updatePixel(pixel);
            } else {
                pixelIDMap.push(pixel.id);
                addPixel(pixel);
            }
        }
    } 
}