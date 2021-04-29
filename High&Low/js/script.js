//browser Random number
var numberValueElement = document.getElementById("number");
var numberRandom = Math.floor(Math.random()*13);
numberValueElement.innerHTML = numberRandom;

//user Random number
var userRandomNumber = Math.floor(Math.random()*13);

//Button を宣言する
var boxLow = document.getElementById("box-low");
var boxDraw = document.getElementById("box-draw");
var boxHigh = document.getElementById("box-high");

//buttonの関数
function low()
{
    if( userRandomNumber < numberRandom)
    {
        alert("正解");
    }
    else
    {
        alert("違います");
    }
}

function draw()
{
    if( userRandomNumber == numberRandom)
    {
        alert("正解");
    }
    else
    {
        alert("違います");
    }
}

function high()
{
    if( userRandomNumber > numberRandom)
    {
        alert("正解");
    }
    else
    {
        alert("違います");
    }
}
console.log(numberRandom);
console.log(userRandomNumber);