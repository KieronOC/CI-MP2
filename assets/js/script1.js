// var clcards = document.getElementsByClassName('carD');
// console.log(clcards);
// var temp = clcards[0];
// console.log(temp);
// clcards[0].outerHTML = clcards[9].outerHTML;
// console.log(clcards[0])
// clcards[9] = temp;
// console.log(clcards);



// clcards[0].classList.add('test');


var newCardArr = document.getElementsByClassName('carD');
console.log(newCardArr);

function shuffleArray1() {
    for (var i = 0; i < newCardArr.length; i++) {
        var j = Math.floor(Math.random() * newCardArr.length);
        var temp = newCardArr[i].outerHTML;
        newCardArr[i].outerHTML = newCardArr[j].outerHTML;
        newCardArr[j].outerHTML = temp;
    };
    console.log(newCardArr);
    return newCardArr;
}

shuffleArray1(newCardArr);