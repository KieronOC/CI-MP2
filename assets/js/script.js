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
    document.getElementById("clock").innerText = '' + hour + " : " + min + " : " + sec + ' Z+1';
    var t = setTimeout(function() { currentTime(); }, 1000);
}
currentTime();

// An array of photos to use as background images. Free images from the web.
let pictures = [
    { 'photo': 'GP14', 'img': 'assets/images/gp14.jpg', },
    { 'photo': 'GP14', 'img': 'assets/images/gp14.jpg', },
    { 'photo': 'National12', 'img': 'assets/images/nat12.jpg', },
    { 'photo': 'National12', 'img': 'assets/images/nat12.jpg', },
    { 'photo': 'Enterprise', 'img': 'assets/images/enterprise.jpg', },
    { 'photo': 'Enterprise', 'img': 'assets/images/enterprise.jpg', },
    { 'photo': 'Gull', 'img': 'assets/images/gull.jpeg', },
    { 'photo': 'Gull', 'img': 'assets/images/gull.jpeg', },
    { 'photo': 'Heron', 'img': 'assets/images/heron.jpg', },
    { 'photo': 'Heron', 'img': 'assets/images/heron.jpg', },
    { 'photo': 'Solo', 'img': 'assets/images/solo.jpg', },
    { 'photo': 'Solo', 'img': 'assets/images/solo.jpg', },
    { 'photo': 'Fireball', 'img': 'assets/images/fireball.jpg', },
    { 'photo': 'Fireball', 'img': 'assets/images/fireball.jpg', },
    { 'photo': 'Intl14', 'img': 'assets/images/int14.jpg', },
    { 'photo': 'Intl14', 'img': 'assets/images/int14.jpg', },
    { 'photo': 'Scorpian', 'img': 'assets/images/scorpian.jpg', },
    { 'photo': 'Scorpian', 'img': 'assets/images/scorpian.jpg', },
    { 'photo': 'MerlinRocket', 'img': 'assets/images/merlinrocket.jpg', },
    { 'photo': 'MerlinRocket', 'img': 'assets/images/merlinrocket.jpg', },
    { 'photo': 'Lark', 'img': 'assets/images/lark.jpg', },
    { 'photo': 'Lark', 'img': 'assets/images/lark.jpg', },
    { 'photo': 'Bosun', 'img': 'assets/images/bosun.jpg', },
    { 'photo': 'Bosun', 'img': 'assets/images/bosun.jpg', },
];

// Different arrays of card pictures to go here in the future so the player can pick different subjects to play the game
// with. The next iteration is planned to include sets of cards for; boat parts, sail parts, knots, clouds, wind strengths and perhaps basic rules of the road amoungst others.


// The following code sets the time that cards will stay visible if a matching pair is not found. The user can
// click one of three buttons on the game start page; Slow, Medium or Quick, which sets the <delayMiss> variable to
// one of three different delays; 6sec, 3sec or 1sec. The default is 6 seconds and if no button is pressed and the
// game started the default will be 6sec.

let delayM = 400;
let delayMiss = 2000;

var sLow = document.getElementById('slow');
var mEdium = document.getElementById('medium');
var qUick = document.getElementById('quick');

sLow.addEventListener('click', function() {
    mEdium.classList = '';
    qUick.classList = '';
    if (sLow.classList.contains('speedPick')) {
        sLow.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        sLow.classList.add('speedPick');
        delayMiss = 2000;
        return;
    }
});

mEdium.addEventListener('click', function() {
    sLow.classList = '';
    qUick.classList = '';
    if (mEdium.classList.contains('speedPick')) {
        mEdium.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        mEdium.classList.add('speedPick');
        delayMiss = 1000;
        return;
    }
});

qUick.addEventListener('click', function() {
    mEdium.classList = '';
    sLow.classList = '';
    if (qUick.classList.contains('speedPick')) {
        qUick.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        qUick.classList.add('speedPick');
        delayMiss = 500;
        return;
    }
});


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
    }
});

// Start the game itself of clicking and checking pairs of cards selected
// start.addEventListener('click', play);

var c = 0;
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

    // Remove Jumbotron

    var jumBo = document.getElementById('gameInfo');
    jumBo.remove();

    // Create the card's HTML by looping through the array above

    for (i = 0; i < mixedUpPics.length; i++) {

        var cards = document.createElement('div');
        // Add css for whole card (carD) plus 'photo' property from pictures to use for checking for a match later.
        cards.classList.add('carD', `${mixedUpPics[i].photo}`);
        // Unique Id for cards
        cards.id = i;
        box.appendChild(cards);

        // Dinghy side of cards
        var faceUp = document.createElement('div');
        faceUp.classList.add('up');
        cards.appendChild(faceUp);
        faceUp.style.backgroundImage = `url(${mixedUpPics[i].img})`;
        var text = document.createElement('div');
        text.classList.add('boatName');
        text.innerText = `${mixedUpPics[i].photo}`;
        faceUp.appendChild(text);


        // Hidden cards face
        var faceHidden = document.createElement('div');
        faceHidden.classList.add('hidden');
        cards.appendChild(faceHidden);

        // Blank card for when cards matched to create blank space
        faceHidden = document.createElement('div');
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


// Gets all the divs containing the 3 children divs that contain the pairs pictures, hidden face and a blank
// var gameCards = document.getElementsByClassName('carD');
// console.log(gameCards);
// This function accessed from event of pressing the start button
// function play() {

// This then sets a for loop through the above array of divs
// for (let i = 0; i < gameCards.length; i++) {
// For every div an eventlistener is added reacting to a click

var choice;
var correct = 0;
box.addEventListener('click', function(event) {


    // Each target clicked is added to a variable 
    choice = event.target;

    if (choice.id === 'cardBox' || choice.nextSibling.className === 'guess' || choice.classList.item(0) === 'carD') {
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
            // if (choice.classList.item(0) === 'carD') {
            //     return;
            // }

            console.log(guess1);
            // We add a class to the clicked card to say this is a guess
            choice.classList.add('guess');
            // We remove the hidden class to show the dinghy picture behind
            choice.classList.remove('hidden');
            // At this point the programme will jump to the end of the play function and fire again at Line 185

        } else {
            // The function will re enter the if statement at line 189 and add 1 to it at line 191 making it 2, so it will jump the condition at 193 and go straight to the else statement at 202 where the 2nd guess will be recorded in the same way as the first.
            guess2 = choice.parentNode.classList.item(1);
            // if (choice.classList.item(0) === 'carD') {
            //     return;
            // }
            console.log(guess2);
            choice.classList.add('guess');
            choice.classList.remove('hidden');
            // We now have two guesses recorded so we now need to collect the two elements with classes of 'guess' and check if the guess1 and guess2 variables are the same.
        }
        var bothCards = document.querySelectorAll('.guess');
        console.log(bothCards);
        if (guess1 !== '' && guess2 !== '') {
            if (guess1 === guess2) {
                setTimeout(function() {
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].previousSibling.classList.remove('up');
                        bothCards[i].previousSibling.firstChild.innerText = '';
                    }
                    correct += 1;
                    if (correct === 12) {
                        clearTimeout(t);
                        return wellDone();
                    } else {

                    }
                }, delayM);
                setTimeout(function() {
                    guess1 = '';
                    guess2 = '';
                    counter = 0;
                    previousTarget = null;
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].classList.remove('guess');
                    }
                }, delayM);

            } else {
                setTimeout(function() {
                    guess1 = '';
                    guess2 = '';
                    counter = 0;
                    previousTarget = null;
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].classList.add('hidden');
                        bothCards[i].classList.remove('guess');
                    }
                }, delayMiss);
            }
        }
    }
});


function wellDone() {

    var clearDeck = document.getElementById('cardBox');
    clearDeck.innerHTML = '';
    var message = ` <div class="container-fluid">
    <div id="gameInfo" class="jumbotron">
        <div class="row explain0 d-flex justify-content-end">
            <div class="explain1 col-xs-12">
            You found all the pairs in :<br><span class="link"> ${Math.floor(c/60)} Min : ${c%60} Secs.</span><br>Have another go and try and beat your time.<br> Press <span style="color: #03944c;">New Game</span> button top left to start again.
            </div>
        </div>
        
        <div class="fun1 row d-flex justify-content-center">
            <div class="fun col-sm-5 offset-4">WELL DONE!!<br>You Did It!
            </div>
        </div>
        <div class="row ">
    </div>
</div>`;
    clearDeck.innerHTML = message;
}