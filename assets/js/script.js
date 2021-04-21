//All code written by KJOC referencing CI Materials, Bootrap 4 Documentation online W3Schools and MDN, as well as other sources specifically referred to to help understand how to make it work.
//Except where specifcally mentioned no other code has been copied and pasted from any other source without understanding what it is doing and referencing it below.

// Checks page has loaded. Part of CI course materials
document.addEventListener("DOMContentLoaded", function() {});

// Displays the time : Learning source and some code from : https://www.codesdope.com/blog/article/ow-to-create-a-digital-clock-using-javascript/

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

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
    document.getElementById("clock").innerText =
        `${hour}:${min}:${sec}     Z+1`;
    let t = setTimeout(function() {
        currentTime();
    }, 1000);
}
currentTime();

// An array of photos to use as background images. Free images from the web. This technique learnt from Javascript courses on LinkedIn Learning and Udemy.
let pictures = [{
        'photo': 'GP14',
        'img': 'assets/images/gp14.jpg',
    },
    {
        'photo': 'GP14',
        'img': 'assets/images/gp14.jpg',
    },
    {
        'photo': 'National12',
        'img': 'assets/images/nat12.jpg',
    },
    {
        'photo': 'National12',
        'img': 'assets/images/nat12.jpg',
    },
    {
        'photo': 'Enterprise',
        'img': 'assets/images/enterprise.jpg',
    },
    {
        'photo': 'Enterprise',
        'img': 'assets/images/enterprise.jpg',
    },
    {
        'photo': 'Gull',
        'img': 'assets/images/gull.jpeg',
    },
    {
        'photo': 'Gull',
        'img': 'assets/images/gull.jpeg',
    },
    {
        'photo': 'Heron',
        'img': 'assets/images/heron.jpg',
    },
    {
        'photo': 'Heron',
        'img': 'assets/images/heron.jpg',
    },
    {
        'photo': 'Solo',
        'img': 'assets/images/solo.jpg',
    },
    {
        'photo': 'Solo',
        'img': 'assets/images/solo.jpg',
    },
    {
        'photo': 'Fireball',
        'img': 'assets/images/fireball.jpg',
    },
    {
        'photo': 'Fireball',
        'img': 'assets/images/fireball.jpg',
    },
    {
        'photo': 'Intl14',
        'img': 'assets/images/int14.jpg',
    },
    {
        'photo': 'Intl14',
        'img': 'assets/images/int14.jpg',
    },
    {
        'photo': 'Scorpian',
        'img': 'assets/images/scorpian.jpg',
    },
    {
        'photo': 'Scorpian',
        'img': 'assets/images/scorpian.jpg',
    },
    {
        'photo': 'MerlinRocket',
        'img': 'assets/images/merlinrocket.jpg',
    },
    {
        'photo': 'MerlinRocket',
        'img': 'assets/images/merlinrocket.jpg',
    },
    {
        'photo': 'Lark',
        'img': 'assets/images/lark.jpg',
    },
    {
        'photo': 'Lark',
        'img': 'assets/images/lark.jpg',
    },
    {
        'photo': 'Bosun',
        'img': 'assets/images/bosun.jpg',
    },
    {
        'photo': 'Bosun',
        'img': 'assets/images/bosun.jpg',
    },
];

// Different arrays of card pictures to go here in the future so the player can pick different subjects to play the game with.
// The next iteration is planned to include sets of cards for; boat parts, sail parts, knots, clouds, wind strengths and perhaps basic rules of the road amoungst others.



// The following code sets the time that cards will stay visible if a matching pair is not found. The user can click one of three buttons on the game start page; Slow, Medium or Quick, which sets the <delayMiss> variable to one of three different delays; 2sec, 1sec or 0.5sec.
// The default is 2 seconds and if no button is pressed and the game will be played at this card turn back speed. This was altered on a UX test with a 9 year old. The first set of speeds were set at 6sec, 3sec and 1sec and it caused instant frustration. The aim is to add 4th game speed button that will allow the user to play at their own pace, by having to click back on unmatched cards to hide them again and keep playing which mimics the real life card version.

let delayM = 400;
let delayMiss = 2000;

let slow = document.getElementById('slow');
let medium = document.getElementById('medium');
let quick = document.getElementById('quick');

slow.addEventListener('click', function() {
    medium.classList = '';
    quick.classList = '';
    if (slow.classList.contains('speedPick')) {
        slow.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        slow.classList.add('speedPick');
        delayMiss = 2000;
        return;
    }
});

medium.addEventListener('click', function() {
    slow.classList = '';
    quick.classList = '';
    if (medium.classList.contains('speedPick')) {
        medium.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        medium.classList.add('speedPick');
        delayMiss = 1000;
        return;
    }
});

quick.addEventListener('click', function() {
    medium.classList = '';
    slow.classList = '';
    if (quick.classList.contains('speedPick')) {
        quick.classList.remove('speedPick');
        delayMiss = 2000;
        return;
    } else {
        quick.classList.add('speedPick');
        delayMiss = 500;
        return;
    }
});

// Start game by pressing start button
let start = document.querySelector('#start');

// Timer code learnt from W3 Schools and my own interpretation from there.
// Button to start timer.
start.addEventListener('click', timedCount);

// Remove Jumbotron and add game instruction before adding cards to screen. Add small instructional piece at top of game page, which came about from an older user not being sure what to do when the cards appeared.

start.addEventListener('click', removeJumbo);

function removeJumbo() {
    let jumBo = document.getElementById('gameInfo');
    jumBo.remove();

    let gameTitle = document.getElementById('gameInstr');
    let nwDiv = document.createElement('div');
    let iB = document.getElementsByClassName('area');
    nwDiv.classList.add('gameInst', 'row', 'justify-content-center');
    gameTitle.insertBefore(nwDiv, iB[0]);
    nwDiv.innerText =
        'Find the matching pairs. 2 selections at a time. Cards will turn back automatically.';
}

//  Starts the game by shuffling the deck and then adding the cards to the screen through the  f(shuffleArray), but stops more cards being added if Start button is pressed more than once.
let hits = 0;
start.addEventListener('click', function() {
    hits += 1;
    if (hits > 1) {
        return;
    } else {
        shuffleArray();
    }
});

// This is the timer code which starts when the user presses the Starting Gun button and stops when the last mathcing pair has been found. Learnt from W3 Schools and ammended.
let c = 0;
let t;
let timer = document.getElementById("stopwatch");

function timedCount() {

    timer.innerHTML = 0;

    function check(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    let k = c;
    if (k > 59) {
        let m = Math.floor(k / 60);
        let s = k % 60;
        let min = check(m);
        let sec = check(s);
        let l = min + 'm ' + ': ' + sec + 's';
        timer.innerHTML = l;
    } else {
        k = '00m ' + ': ' + check(c) + 's';
        timer.innerHTML = k;
    }
    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

// Gets the player to in effect refresh the page before pressing the Start button to start the timer and shuffle the cards
let newGame = document.getElementById('reStart');
newGame.addEventListener('click', refresh);

function refresh() {
    window.location.reload();
}

let box = document.getElementById('cardBox');
//Durstenfeld shuffle from Stackoverflow at :
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array.

let mixedUpPics;

function shuffleArray() {

    // The following 5 lines, Based on Durstenfeld et al, converts the numbered list into a randomely shuffled list.
    for (let i = 0; i < pictures.length; i++) {
        let j = Math.floor(Math.random() * pictures.length);
        let temp = pictures[i];
        pictures[i] = pictures[j];
        pictures[j] = temp;
    }
    mixedUpPics = pictures;

    // Create the card's HTML by looping through the array above
    for (i = 0; i < mixedUpPics.length; i++) {

        let cards = document.createElement('div');
        // Add css for whole card (carD) plus 'photo' property from pictures to use for checking for a match later.
        cards.classList.add('carD', `${mixedUpPics[i].photo}`);
        // Unique Id for cards
        cards.id = i;
        box.appendChild(cards);

        // Dinghy side of cards
        let faceUp = document.createElement('div');
        faceUp.classList.add('up');
        cards.appendChild(faceUp);
        faceUp.style.backgroundImage = `url(${mixedUpPics[i].img})`;
        let text = document.createElement('div');
        text.classList.add('boatName');
        text.innerText = `${mixedUpPics[i].photo}`;
        faceUp.appendChild(text);

        // Hidden cards face
        let faceHidden = document.createElement('div');
        faceHidden.classList.add('hidden');
        cards.appendChild(faceHidden);

        // Blank card for when cards matched to create blank space
        faceHidden = document.createElement('div');
        faceHidden.classList.add('blank');
        cards.appendChild(faceHidden);
    }
    return;
}

// This section powers the selection of two cards, turns them over, checks them for a match, turns them back if not matched and makes them dissappear if they are.

// Set the variables required to zero the cards after selection that will prevent greater than 2 being selected.

let guess1 = '';
let guess2 = '';
let counter = 0;
let previousTarget = null;

//The variable will hold the event of a card being clicked
let choice;

// This variable is declared to count the numbers of matched pairs selected so that the point the game is complete is fired leading to the game complete message screen appearing. f<wellDone> at the bottom.
let correct = 0;

// This next section is the main engine of the game. It sets a for loop through the above array of divs containing the cards now populated on screen waiting for the user to click or tap them.

// For every div an eventlistener is added reacting to a click
box.addEventListener('click', function(event) {

    // Each target clicked is added to a variable 
    choice = event.target;

    if (choice.id === 'cardBox' || choice.nextSibling.className ===
        'guess' || choice.classList.item(0) === 'carD') {
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
            // We add a class to the clicked card to say this is a guess
            choice.classList.add('guess');
            // We remove the hidden class to show the dinghy picture behind
            choice.classList.remove('hidden');
            // At this point the programme will jump to the end of the play function and fire again at Line 185

        } else {
            // The function will re enter the if statement at line 189 and add 1 to it at line 191 making it 2, so it will jump the condition at 193 and go straight to the else statement at 202 where the 2nd guess will be recorded in the same way as the first.
            guess2 = choice.parentNode.classList.item(1);
            choice.classList.add('guess');
            choice.classList.remove('hidden');
            // We now have two guesses recorded so we now need to collect the two elements with classes of 'guess' and check if the guess1 and guess2 variables are the same.
        }
        let bothCards = document.querySelectorAll('.guess');
        if (guess1 !== '' && guess2 !== '') {
            if (guess1 === guess2) {
                setTimeout(function() {
                    for (let i = 0; i < bothCards.length; i++) {
                        bothCards[i].previousSibling.classList
                            .remove('up');
                        bothCards[i].previousSibling.firstChild
                            .innerText = '';
                    }
                    correct += 1;
                    // Check if all pairs found
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


// This last section add the HTML and CSS to the game page after all the pairs have been found and reports back the time taken and a well done message.
function wellDone() {
    let clearDeck = document.getElementById('cardBox');
    clearDeck.innerHTML = '';
    let message = ` <div class="container-fluid">
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