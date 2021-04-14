console.log("JS Connected");


var cards = document.getElementsByClassName('carD');
console.log(cards);

// cards[0].addEventListener('click', changeColour);

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', changeColour)
}


function changeColour() {
    cards[i].classList.add('imgD1');
    console.log(cards[i].className);
}