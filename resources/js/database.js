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
    console.log("Pixel Info: (" + x_cord + ", " + y_cord + "), " + colorHex + ", " + sizeVal);

    // Add a new document with a generated id.
    db.collection("pixels").add({
        color: colorHex,
        size: sizeVal,
        x: x_cord,
        y: y_cord
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function readPixels() {
    pixelMap = [];

    db.collection("pixels").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            pixelData = doc.data();
            pixelMap.push(pixelData);
        });
    });
}