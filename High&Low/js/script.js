    //browser Random number
    var numberValueElement = document.getElementById("number");
    var numberRandom = Math.floor(Math.random()*13);
    numberValueElement.innerHTML = numberRandom;
      
    //user Random number
    var userRandomNumber = Math.floor(Math.random()*13); 
    console.log(numberRandom);
    console.log(userRandomNumber);
    
    //Button を宣言する
    var boxLow = document.getElementById("box-low");
    var boxDraw = document.getElementById("box-draw");
    var boxHigh = document.getElementById("box-high");
    var buttonRetry = document.getElementById("box-retry")    
    buttonRetry.hidden = true;
    //

    var resultTextElement = document.getElementById("resultText");
    var scoreValueElement = document.getElementById("scoresValue");
    var scoreValue = 0;


    
//buttonの関数
function low()
{
    if( userRandomNumber < numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        buttonHidden();
        

    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        sessionStorage.clear();
    }
}

function draw()
{
    if( userRandomNumber == numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        buttonHidden();
        
    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        sessionStorage.clear();
    }
}

function high()
{
    if( userRandomNumber > numberRandom)
    {
        scoreValue++;
        resultTextElement.innerHTML = "Win !!";
        scoreValueElement.innerHTML = scoreValue;
        buttonHidden();
    }
    else
    {
        resultTextElement.innerHTML = "Lose !!";
        buttonHidden();
        
        sessionStorage.clear();

    }
}
/*//browser Random number
var numberValueElement = document.getElementById("number");
var numberRandom = Math.floor(Math.random()*13);
numberValueElement.innerHTML = numberRandom;

//user Random number
var userRandomNumber = Math.floor(Math.random()*13); */



function buttonHidden()
{
    boxLow.hidden = true;
    boxDraw.hidden = true; 
    boxHigh.hidden = true;
    buttonRetry.hidden = false;
}

function retry()
{
    console.log("retry");
    // Store
    sessionStorage.setItem("scoreCount", scoreValue++);
    document.location.reload();
}
    
    
    // Retrieve
    scoreValueElement.innerHTML = sessionStorage.getItem("scoreCount");
