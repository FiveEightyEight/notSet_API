
// Have JS file with card info
// API can create a new deck
// API can shuffle deck


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

const buildAllCards = () => {
    const colors = ['rd', 'pp', 'gr'];
    const shape = ['ov', 'sq', 'di'];
    const number = ['n1', 'n2', 'n3'];
    const shading = ['sd', 'st', 'ol'];
    const deck = [];

    for (let c = 0; c < colors.length; c ++) {
        for (let s = 0; s < shape.length; s ++) {
            for (let n = 0; n < number.length; n ++) {
                for (let d = 0; d < shading.length; d ++) {
                    deck.push(`${colors[c]}${shape[s]}${number[n]}${shading[d]}`)
                }
            }
        }
    }

    return deck;
}


const buildCard = (card_id) => {
    const colors = {     //['rd', 'pp', 'gr'];
        rd: 'red',
        pp: 'purple',
        gr: 'green',
    }               
    const shapes = {      // ['ov', 'sq', 'di'];
        ov: 'oval',
        sq: 'square',
        di: 'diamond',
    }
    const numbers = {      // ['n1', 'n2', 'n3'];
        n1: 'one',
        n2: 'two',
        n3: 'three',
    }
    const shadings = {     // ['sd', 'st', 'ol'];
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

const deck = buildAllCards();

const card = deck[67];

console.log(
   buildCard(card)

)
