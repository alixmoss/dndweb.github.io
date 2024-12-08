
//JavaScript 7th Edition
//Final Project

//Die roller, etc
//Author: Alix Burton
//Date:   12/8

//Filename: roller.js

//Listens for d20 button to be clicked and displays the rolled number
document.getElementById("20roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;}

//Clears the display on click of clear button
document.getElementById("clear").onclick = function () {
    document.getElementById("total").innerHTML = "";
}

//Listens for d12 button to be clicked and displays the rolled number
document.getElementById("12roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;
}

//Listens for d10 button to be clicked and displays the rolled number
document.getElementById("10roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;
}

//Listens for d8 button to be clicked and displays the rolled number
document.getElementById("8roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 8) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;
}

//Listens for d6 button to be clicked and displays the rolled number
document.getElementById("6roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;
}

//Listens for d4 button to be clicked and displays the rolled number
document.getElementById("4roll").onclick = function() {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    var numberDisplay = document.getElementById("total");
    numberDisplay.innerText = randomNumber;
}
