document.addEventListener("DOMContentLoaded", function() {});

// Start game by pressing start button
var start = document.querySelector('#start');


// Displays the time : Learning source and come code from : https://www.codesdope.com/blog/article/how-to-create-a-digital-clock-using-javascript/

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    function updateTime(k) {
        if (k < 10) {
            return "0" + k;
        } else {
            return k;
        }
    }
    document.getElementById("clock").innerHTML = 'Current Time is : ' + hour + " : " + min + " : " + sec;
    var t = setTimeout(function() { currentTime() }, 1000);
}
currentTime();


// Timer code learnt from W3 Schools and my own interpretation from there.
start.addEventListener('click', timedCount);
start.addEventListener('click', shuffleArray);


var c = 55;
var t;
var timer = document.getElementById("stopwatch");

function timedCount() {
    timer.innerHTML = 0;

    function check(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    var k = c;
    if (k > 59) {
        var m = Math.floor(k / 60);
        var s = k % 60;
        var min = check(m);
        var sec = check(s);
        var l = min + 'm ' + ': ' + sec + 's';
        timer.innerHTML = l;
    } else {
        k = '00m ' + ': ' + check(c) + 's';
        timer.innerHTML = k;
    }
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}


// Put all the cards into an array 

var cards = document.getElementsByClassName('carD');

// Find out the screen size

var screenH = window.innerHeight;
var screenW = window.innerWidth;
console.log(screenW);
console.log(screenH);



console.log(cards);

// Add event listener that shuffles cards base on their hidden images and starts a timer.

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

for (let card of cards) {
    card.addEventListener('click', function() {
        card.innerHTML = '<img class="imgD1" src="/assets/images/Card_Front.png" />';


    });
}