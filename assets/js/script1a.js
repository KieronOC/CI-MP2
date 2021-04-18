// ﻿python3 -m http.server

document.addEventListener("DOMContentLoaded", function() {});
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

// An array of photos to use as background images
let pictures = [
    { 'photo': 'GP14', 'img': '/assets/images/GP14.jpg', },
    { 'photo': 'GP14', 'img': '/assets/images/GP14.jpg', },
    { 'photo': 'Nat12', 'img': '/assets/images/Nat12.jpg', },
    { 'photo': 'Nat12', 'img': '/assets/images/Nat12.jpg', },
    { 'photo': 'Enterprise', 'img': '/assets/images/Enterprise.jpg', },
    { 'photo': 'Enterprise', 'img': '/assets/images/Enterprise.jpg', },
    { 'photo': 'Gull', 'img': '/assets/images/Gull.jpeg', },
    { 'photo': 'Gull', 'img': '/assets/images/Gull.jpeg', },
    { 'photo': 'Heron', 'img': '/assets/images/Heron.jpg', },
    { 'photo': 'Heron', 'img': '/assets/images/Heron.jpg', },
    { 'photo': 'solo', 'img': '/assets/images/solo.jpg', },
    { 'photo': 'solo', 'img': '/assets/images/solo.jpg', },
    { 'photo': 'fireball', 'img': '/assets/images/fireball.jpg', },
    { 'photo': 'fireball', 'img': '/assets/images/fireball.jpg', },
    { 'photo': 'Int14', 'img': '/assets/images/Int14.jpg', },
    { 'photo': 'Int14', 'img': '/assets/images/Int14.jpg', },
    { 'photo': 'Scorpian', 'img': '/assets/images/Scorpian.jpg', },
    { 'photo': 'Scorpian', 'img': '/assets/images/Scorpian.jpg', },
    { 'photo': 'Merlin_Rocket', 'img': '/assets/images/Merlin_Rocket.jpg', },
    { 'photo': 'Merlin_Rocket', 'img': '/assets/images/Merlin_Rocket.jpg', },
    { 'photo': 'Lark', 'img': '/assets/images/Lark.jpg', },
    { 'photo': 'Lark', 'img': '/assets/images/Lark.jpg', },
    { 'photo': 'Bosun', 'img': '/assets/images/Bosun.jpg', },
    { 'photo': 'Bosun', 'img': '/assets/images/Bosun.jpg', },
]

let mixedUpPics;

// Start game by pressing start button
var start = document.querySelector('#start');

// Timer code learnt from W3 Schools and my own interpretation from there.
// Button to start timer and shuffle the cards on screen
start.addEventListener('click', timedCount);


//  Starts the game by shuffling the deck and then adding the cards to the screen through f(shuffleArray), but stops more cards being added if Start button is pressed more than once.
var hits = 0;
start.addEventListener('click', function() {
    hits += 1;
    if (hits > 1) {
        return;
    } else {
        shuffleArray();
    };
});

// Start the game itself of clicking and checking pairs of cards selected
// start.addEventListener('click', play);

var c = 00;
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


// Gets the player to in effect refresh the page before pressing the Start button to start the timer and shuffle the cards
var newGame = document.getElementById('reStart');
newGame.addEventListener('click', refresh);

function refresh() {
    window.location.reload();
}

let box = document.getElementById('cardBox');
//Durstenfeld shuffle from Stackoverflow at : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array.

function shuffleArray() {
    // The following 5 lines, Based on Durstenfeld et al, converts the numbered list into a randomely shuffled list.
    for (var i = 0; i < pictures.length; i++) {
        var j = Math.floor(Math.random() * pictures.length);
        var temp = pictures[i];
        pictures[i] = pictures[j];
        pictures[j] = temp;
    }
    mixedUpPics = pictures;
    console.log(mixedUpPics);

    // Create the card's HTML by looping through the array above

    // var box = document.getElementById('cardBox');

    for (i = 0; i < mixedUpPics.length; i++) {

        var cards = document.createElement('div');
        // Add css for whole card (carD) plus 'photo' property from pictures to use for checking for a match later.
        cards.classList.add('carD', `${mixedUpPics[i].photo}`);
        // Unique Id for cards
        cards.id = i;
        box.appendChild(cards);

        // Dinghy side of cards
        var faceUp = document.createElement('div')
        faceUp.classList.add('up');
        cards.appendChild(faceUp);
        faceUp.style.backgroundImage = `url(${mixedUpPics[i].img})`;

        // Hidden cards face
        var faceHidden = document.createElement('div')
        faceHidden.classList.add('hidden');
        cards.appendChild(faceHidden);

        // Blank card for when cards matched to create blank space
        var faceHidden = document.createElement('div')
        faceHidden.classList.add('blank');
        cards.appendChild(faceHidden);
    }
    return;
}


// This section intended to power the selection of two cards, turn them over, check them for a match, turn them back if not matched and make them dissappear if they are.

// Set the variables required to zero
let guess1 = '';
let guess2 = '';
let counter = 0;
let previousTarget = null;
let delay = 2000;




// Gets all the divs containing the 3 children divs that contain the pairs pictures, hidden face and a blank
// var gameCards = document.getElementsByClassName('carD');
// console.log(gameCards);
// This function accessed from event of pressing the start button
// function play() {

// This then sets a for loop through the above array of divs
// for (let i = 0; i < gameCards.length; i++) {
// For every div an eventlistener is added reacting to a click
var choice;

box.addEventListener('click', function(event) {


    // Each target clicked is added to a variable 
    choice = event.target;

    if (choice.id === 'cardBox' || choice.nextSibling.className === 'guess') {
        return;
    }
    // We need to limit the choices to two cards for the pair game to work so we set a counter to zero above and make sure it does not exceed 2
    if (counter < 2) {
        // The first card clicked brings us to this line where 1 is added to 0 = 1
        counter += 1;
        // The counter variable will exacly === 1 so this code will fire
        if (counter === 1) {
            // We first get the name of the dinghy which was added as a class name from the shuffled array at line 141
            guess1 = choice.parentNode.classList.item(1);
            console.log(guess1);
            // We add a class to the clicked card to say this is a guess
            choice.classList.add('guess')
                // We remove the hidden class to show the dinghy picture behind
            choice.classList.remove('hidden');
            // At this point the programme will jump to the end of the play function and fire again at Line 185

        } else {
            // The function will re enter the if statement at line 189 and add 1 to it at line 191 making it 2, so it will jump the condition at 193 and go straight to the else statement at 202 where the 2nd guess will be recorded in the same way as the first.
            guess2 = choice.parentNode.classList.item(1);
            console.log(guess2);
            choice.classList.add('guess')
            choice.classList.remove('hidden');
            // We now have two guesses recorded so we now need to collect the two elements with classes of 'guess' and check if the guess1 and guess2 variables are the same.
        }
        var bothCards = document.querySelectorAll('.guess');
        console.log(bothCards);
        if (guess1 !== '' && guess2 !== '') {
            if (guess1 === guess2) {
                setTimeout(function() {

                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].previousSibling.classList.remove('up')
                    }
                }, delay);
                setTimeout(function() {
                    guess1 = '';
                    guess2 = '';
                    counter = 0;
                    previousTarget = null;
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].classList.remove('guess')
                    }
                }, delay);

            } else {
                setTimeout(function() {
                    // let bothGuesses = document.getElementsByClassName('guess');
                    guess1 = '';
                    guess2 = '';
                    counter = 0;
                    previousTarget = null;
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].classList.add('hidden')
                        bothCards[i].classList.remove('guess')
                    }
                }, delay);
            }
        }
    }
});
















// Put all the cards into an array 

var cards = document.querySelectorAll('.carD');

// Find out the screen size

var screenH = window.innerHeight;
var screenW = window.innerWidth;
console.log(screenW);
console.log(screenH);





// function select(newCards) {
//     for (var i = 0; i < newCards.length; i++) {
//         newCards[i].addEventListener('click', function() {
//             var idValue = this.id;
//             console.log(idValue);
//             if (idValue === '1' || idValue === '2') {
//                 this.innerHTML = '<img class="imgD1" src="/assets/images/Card_Front.png" />'
//             } else {
//                 alert('not correct');
//             };
//         });
//     }
// }