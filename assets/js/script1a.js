document.addEventListener("DOMContentLoaded", function() {});

// Start game by pressing start button
var start = document.querySelector('#start');

// Add event listener that shuffles cards base on their hidden images and starts a timer.

// Displays the time
var myVar = setInterval(function() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    var x = document.querySelector('#clock');
    setTimeout(function() { x.innerHTML = 'Time now: ' + t });
});





// Timer code learnt from W3 Schools
start.addEventListener('click', function() {
    shuffleArray(cards);
    var c = 0;
    var t;

    function timedCount() {
        document.getElementById("stopwatch").innerHTML = c;
        c = c + 1;
        t = setTimeout(timedCount, 1000);
    }
    timedCount();

});





// Find out the screen size

var screenH = window.innerHeight;
var screenW = window.innerWidth;

console.log(screenW);
console.log(screenH);


// Put all the cards into an array 

var cards = document.getElementsByClassName('carD');

console.log(cards[11].id);

function addEVL() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', alt);
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
    }
    return cards;
}


// cards[0].addEventListener('click', function() {
//     alert(`this is my ${cards[0].id}`);
// });