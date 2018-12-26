const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Have JS file with card info
// API can create a new deck
// API can shuffle deck
const app = require('express')();
const set = require('./set');


const port = 300;

app.get('/', (req, res) => {
    console.log(`user is here`);

    res.json({
        message: `hello`,
    })
});

app.get('/new/deck/shuffled', (req, res) => {

    const newDeck = set.buildDeck(true);

    res.json(newDeck);

});

app.get('/new/deck', (req, res) => {

    const newDeck = set.buildDeck();

    res.json(newDeck);

});

app.get('/draw', (req, res) => {
    const {deck_id, count} = req.query;
    const drawn = set.drawCard(deck_id, count);

    res.json(drawn);
});

app.get('/display', (req, res) => {

    res.json(set.display());
});

app.listen(port, e => {
    console.log(`Listening on port ${port}`)
});


/*
const card = {
    id, // c s n d  // unique id for each card // 81 total
    img, // image
    color, // (red, purple or green)           rd    pp   gr
    shape, // (oval, squiggle or diamond)      ov    sq   di
    number, // (one, two or three)             n1    n2   n3
    shading, // (solid, striped or outlined)   sd    st   ol
}
*/
