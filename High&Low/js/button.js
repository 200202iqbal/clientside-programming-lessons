var value = 0;
var numberRandom = Math.floor(Math.random()*3);
    var userRandomNumber = Math.floor(Math.random()*3); 
    console.log(numberRandom);
    console.log(userRandomNumber);
    
function low()
{
    if (userRandomNumber < numberRandom)
    {
    value++;
    console.log(value);
    var setValue = localStorage.setItem("score", value ); 
    randomNumber();
    }
    
}
function high()
{
    if(userRandomNumber > numberRandom)
    {
    value++
    console.log(value);
    var setValue = localStorage.setItem("score", value ); 
    randomNumber();
    }
    
    
}
function ulang()
{
    document.location.reload();
}
function showStorage()
{
    var getValue = localStorage.getItem("score");
    console.log(getValue);
}
function randomNumber()
{
    var numberRandom = Math.floor(Math.random()*3);
    var userRandomNumber = Math.floor(Math.random()*3); 
    console.log(numberRandom);
    console.log(userRandomNumber);
}