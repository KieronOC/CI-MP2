document.addEventListener("DOMContentLoaded", function() {

});

var cards = document.getElementsByClassName('carD');
console.log(cards);

cards[1].addEventListener('click', change1);

// function change() {
//     cards[0].style.borderColor = 'red';
// };

// function change() {
//     cards[1].classList.toggle('test');
// };

function change1() {

    cards[1].firstChild.src = "/assets/images/Heron.jpg";
    setTimeout(flickback, 5000)
}

function flickback() {
    cards[1].firstChild.src = "/assets/images/Card_Front.png";
}