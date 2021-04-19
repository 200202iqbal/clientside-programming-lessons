function showMessage(message)
{
    message += " さん、こんにちは !";
    alert(message);
}

function calculate()
{
    console.log("change");

    var priceElement = document.getElementById("price");
    price = priceElement.value;
    console.log(price);

    var message = "値段は " + price + " Gだよ";
    document.getElementById("message").innerHTML = message
}

function buy()
{
    console.log("buy");
    var itemPrice = document.getElementById("price").innerHTML;
    var amount = document.getElementById("amount").value;
    var totalPrice = itemPrice * amount;
    var itemName = document.getElementById("item_name").innerHTML;

    var message = itemName + ", "+ amount + " 個で" + totalPrice +" Gだよ";
    document.getElementById("message").innerHTML = message;
}

var timer;
var countElement = document.getElementById("count");
var boxElement =document.getElementById("box");

function startTimer()
{
    console.log("Start!")
    var count  = 0;
    //setInterval (処理、時間)
    //時間 1000 = 1 秒(second)
    timer = setInterval(
        function()
        {
            count++;
            console.log(count);
            countElement.innerHTML = count;

            var left = count + "px";
            console.log(left);
            boxElement.style.position ="absolute";
            boxElement.style.top = "800px"
            boxElement.style.left = left;
        },10
    )
}

function stopTimer()
{
    console.log("stopTimer");
    clearInterval(timer);
    countElement.innerHTML = 0;
}

