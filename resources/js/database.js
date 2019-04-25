// Initialize Firebase
var config = {
    apiKey: "AIzaSyCj6TSXMLn3j3eCORCccs5f_tBiLLai_h8",
    authDomain: "share-canvas.firebaseapp.com",
    databaseURL: "https://share-canvas.firebaseio.com",
    projectId: "share-canvas",
    storageBucket: "share-canvas.appspot.com",
    messagingSenderId: "356431070588"
};

// Create reference variables to firebase 
var app = firebase.initializeApp(config);
var db = firebase.firestore(app)

// Function adds a pixel object to the database
function addPixel(pixel) {
    db.collection("pixels").doc(pixel.id).set({
        color: pixel.color,
        x: pixel.x,
        y: pixel.y
    })
    .then(function() {
        console.log("Pixel successfully written.");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

// Function updates a pixel color given the ID
function updatePixel(pixel) {
    var pixelRef = db.collection("pixels").doc(pixel.id);

    return pixelRef.update({
        color: pixel.color
    })
    .then(function() {
        console.log("Pixel successfully updated.");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });
}

// Function reads all pixels from database
function readPixels() {
    console.log("Reading pixels from database.");

    // Reset pixelIDMap
    pixelIDMap = [];

    db.collection("pixels").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            pixelData = doc.data();
            
            // Add pixel to pixelIDMap
            pixelIDMap.push(doc.id);

            // Draw pixel on canvas
            context.fillStyle = pixelData.color;
            context.fillRect(pixelData.x, pixelData.y, 5, 5);
        });
    });
}