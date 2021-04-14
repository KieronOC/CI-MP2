document.addEventListener("DOMContentLoaded", function() {

});

// Set all the backs of the cards to a variable

var imgF = "/assets/images/Card_Front.png"
var img1 = "/assets/images/GP14.jpg"
var img2 = "/assets/images/Nat12.jpg"
var img3 = "/assets/images/Enterprise.jpg"
var img4 = "/assets/images/Gull.jpg"
var img5 = "/assets/images/Heron.jpg"


// Put all the cards into an array

var cards = document.getElementsByClassName('carD');
console.log(cards);

// Start the game
var start = document.getElementById('start');
start.addEventListener('click', setCards);
start.addEventListener('click', shuffleArray);

function setCards() {
    console.log('Game started');
}

// Create a unique random sequence of numbers between 1 and the number of cards in play (12).
// Durstenfeld shuffle from Stackoverflow at : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array (Lines 36 to 40 only below)


function shuffleArray() {
    var seQuence = [];
    var limit = cards.length;
    console.log('The number of cards in play is ' + limit);
    //    Produces an arrar in order of the number of cards in play
    for (let i = 1; i <= limit; i++) {
        seQuence.push(i);
    }
    console.log(seQuence);
    //   Based on Durstenfeld et al the following 5 lines converts the numbered list into a randomely shuffled list
    for (var i = seQuence.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = seQuence[i];
        seQuence[i] = seQuence[j];
        seQuence[j] = temp;
    }
    console.log(seQuence);
    return seQuence;
}

var positions = (shuffleArray('2,3,4,5,2,3,4,5,2,3'));
console.log('These are the card position' + positions);
console.log(positions);



// for (var i = 0; i <= cards.length; i++) {
//     cards[i].addEventListener('click', function() {



//     });

// }








cards[1].addEventListener('click', change1);
cards[2].addEventListener('click', change2);

// function change() {
//     cards[0].style.borderColor = 'red';
// };

// function change() {
//     cards[1].classList.toggle('test');
// };

function change1() {

    cards[1].firstChild.src = img5;
    setTimeout(flickback, 5000)
}

function change2() {

    cards[2].firstChild.src = img1;
    setTimeout(flickback, 5000)
}

function flickback() {
    cards[1].firstChild.src = imgF;
    cards[2].firstChild.src = imgF;
}