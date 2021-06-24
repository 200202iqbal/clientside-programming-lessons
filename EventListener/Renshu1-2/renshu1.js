var buyBtn = document.getElementById("buybtn");
buyBtn.addEventListener("click",buy);

function buy()
{
    console.log("buy");
    var shouhinName = document.querySelector("#shouhin > p").innerText;
    console.log(shouhinName);

    var kakaku = document.querySelector("#kakaku > p").innerText;
    console.log(kakaku);

    var value = document.querySelector("#kosu > #inputValue").value;
    console.log(value);

    var resultBox = document.querySelector("#result > input");
    var totalPrice = kakaku * value;
    console.log(totalPrice);
    resultBox.value = "Total Price is " + totalPrice
}

var inputBtn = document.getElementById("inputMsg");
inputBtn.addEventListener("input",input);
function input()
{
    var result = document.getElementById("resultText");
    result.innerText = this.value;
}