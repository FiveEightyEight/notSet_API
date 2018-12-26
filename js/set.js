// card make up
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

// rd    pp   gr
// ov    sq   di
// n1    n2   n3
// sd    st   ol
const allCards = {};

// BUILDERS

const buildAllCards = () => {
    const colors = ['rd', 'pp', 'gr'];
    const shape = ['ov', 'sq', 'di'];
    const number = ['n1', 'n2', 'n3'];
    const shading = ['sd', 'st', 'ol'];
    const cards = [];

    for (let c = 0; c < colors.length; c++) {
        for (let s = 0; s < shape.length; s++) {
            for (let n = 0; n < number.length; n++) {
                for (let d = 0; d < shading.length; d++) {
                    cards.push(`${colors[c]}${shape[s]}${number[n]}${shading[d]}`)
                }
            }
        }
    }

    return cards;
}

const buildCard = (card_id) => {
    const colors = { //['rd', 'pp', 'gr'];
        rd: 'red', 
        pp: 'purple',  
        gr: 'green',  
    }
    const shapes = { // ['ov', 'sq', 'di'];
        ov: 'oval',
        sq: 'square',
        di: 'diamond',
    }
    const numbers = { // ['n1', 'n2', 'n3'];
        n1: 'one',
        n2: 'two',
        n3: 'three',
    }
    const shadings = { // ['sd', 'st', 'ol'];
        sd: 'solid',
        st: 'striped',
        ol: 'outlined',
    }

    const color = colors[`${card_id[0]}${card_id[1]}`];
    const shape = shapes[`${card_id[2]}${card_id[3]}`];
    const number = numbers[`${card_id[4]}${card_id[5]}`];
    const shading = shadings[`${card_id[6]}${card_id[7]}`];

    return {
        card_id,
        color,
        shape,
        number,
        shading,
    }
}

// <--- HELPER FUNCTIONS --> //
const shuffle = (array) => {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.

    // by https://gist.github.com/gordonbrander
    return Math.random().toString(36).substr(2, 9);
};

const pushToAllDecks = (deck_id, cards) => {
    allDecks[deck_id] = {
        cards
    };
};


// have a function that takes an id and spits out a card 

/* how to track what cards are in deck and NOT produce dups? */

/*      <--- deck builder --->       */

class Deck {
    constructor(deck_id, cards, remaining, discard) {
        this.deck_id = deck_id,
            this.cards = cards,
            this.remaining = remaining,
            this.discard = discard
    }
}
/*
const deck = { // Server Side deck
    deck_id, // unique id for deck, assortment of letters and numbers // api can track what deck to reference 
    cards, // array of cards in deck
    remaining, // number of cards in deck
    discard, // discarded cards

}
const playDeck = { // Player Side Deck
    deck_id, // unique id for deck, assortment of letters and numbers // api can track what deck to reference 
    remaining, // number of cards left to draw
    drawn, // cards currently in play
    discard, // discarded cards

}

*/
const allDecks = {
    //     deck_id: {
    //         cards, // array of card object ids
    //     },
    //     deck_id2: {
    //         cards, // array of card object ids
    //     },
};




const buildDeck = (shuffled = false) => {
    if (shuffled) {
        const deck_id = ID();
        const cards = shuffle(buildAllCards());
        const remaining = cards.length;
        const shuffled = true;

        pushToAllDecks(deck_id, cards);

        return {
            deck_id,
            cards,
            remaining,
            shuffled,
        }
    } else {
        const deck_id = ID();
        const cards = buildAllCards();
        const remaining = cards.length;
        const shuffled = false;

        pushToAllDecks(deck_id, cards);

        return {
            deck_id,
            cards,
            remaining,
            shuffled,
        }
    }

}

const drawCard = (deck_id, count) => {
    if (!allDecks[deck_id]) {
        return null;
    }

    const drawn = [];
    for (let i = 0; i < count; i++) {
        drawn.push(allDecks[deck_id].cards.shift());
    }
    return drawn;

};

const display = () => {
    return allDecks;
}

module.exports = {
    buildDeck,
    drawCard,
    display,
}