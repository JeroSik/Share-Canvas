// Initialize Firebase
var config = {
    apiKey: "AIzaSyCj6TSXMLn3j3eCORCccs5f_tBiLLai_h8",
    authDomain: "share-canvas.firebaseapp.com",
    databaseURL: "https://share-canvas.firebaseio.com",
    projectId: "share-canvas",
    storageBucket: "share-canvas.appspot.com",
    messagingSenderId: "356431070588"
};

var app = firebase.initializeApp(config);

var db = firebase.firestore(app)

function addPixel(pixel) {
    // Add a new document with a generated id.
    db.collection("pixels").doc(pixel.id).set({
        color: pixel.color,
        x: pixel.x,
        y: pixel.y
    })
    .then(function() {
        // console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function updatePixel(pixel) {
    var pixelRef = db.collection("pixels").doc(pixel.id);

    // Set the "capital" field of the city 'DC'
    return pixelRef.update({
        color: pixel.color
    })
    .then(function() {
        // console.log("Document successfully updated!");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    });
}

function readPixels() {
    pixelIDMap = [];
    console.log("READING PIXELS");

    db.collection("pixels").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            pixelData = doc.data();
            pixelIDMap.push(doc.id);

            context.fillStyle = pixelData.color;
            context.fillRect(pixelData.x, pixelData.y, 5, 5);
        });
    });
}