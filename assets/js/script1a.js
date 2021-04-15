document.addEventListener("DOMContentLoaded", function() {});

// Set all the backs of the cards to a variable

var imgF = "/assets/images/Card_Front.png"
var img1 = "/assets/images/GP14.jpg"
var img2 = "/assets/images/Nat12.jpg"
var img3 = "/assets/images/Enterprise.jpg"
var img4 = "/assets/images/Gull.jpg"
var img5 = "/assets/images/Heron.jpg"
var img6 = "/assets/images/solo.jpg"

// Find out the screen size

var screenH = window.innerHeight;
var screenW = window.innerWidth;

console.log(screenW);
console.log(screenH);


// Put all the cards into an array 

var cards = document.getElementsByClassName('carD');

console.log(cards[11].id);

function addEVL() {
    for (i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', alt)
    }
}

addEVL();

function alt() {
    alert('hello');
}

// Durstenfeld shuffle from Stackoverflow at : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array (5 Lines referenced below)

function shuffleArray() {
    // The following 5 lines, Based on Durstenfeld et al, converts the numbered list into a randomely shuffled list.
    for (var i = 0; i < cards.length; i++) {
        var j = Math.floor(Math.random() * cards.length);
        var temp = cards[i].outerHTML;
        cards[i].outerHTML = cards[j].outerHTML;
        cards[j].outerHTML = temp;
    };
    return cards;
}
shuffleArray(cards);

// cards[0].addEventListener('click', function() {
//     alert(`this is my ${cards[0].id}`);
// });





function flip() {
    for (i = 0; i < cards.length; i++); {
        if (cards[i].id = 1 || 2) {
            cards[i].firstChild.src = img1;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
        if (cards[i].id = 3 || 4) {
            cards[i].firstChild.src = img2;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
        if (cards[i].id = 5 || 6) {
            cards[i].firstChild.src = img3;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
        if (cards[i].id = 5 || 6) {
            cards[i].firstChild.src = img4;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
        if (cards[i].id = 5 || 6) {
            cards[i].firstChild.src = img5;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
        if (cards[i].id = 5 || 6) {
            cards[i].firstChild.src = img6;
            setTimeout(5000)
            cards[i].firstChild.src = imgF
        }
    }
}