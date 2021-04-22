function showMessage(message)
{
    message += " さん、こんにちは";
    alert(message);
}

var price;
function calculate()
{
    console.log("change");

    var priceELement = document.getElementById("price");
    price = priceELement.value;
    console.log(price);

    var message = "値段は " + price + " Gだよ";
    document.getElementById("message").innerHTML = message;
}

function buy()
{
    console.log("buy");
    var item_price = document.getElementById("item_price").innerHTML;
    var amount = document.getElementById("amount").value;
    var total_price = item_price * amount;
    var item_name = document.getElementById("item_name").innerHTML;
    var message = item_name + amount + " 個で" + total_price + " Gだよ";
    document.getElementById("message").innerHTML = message;
}

var timer;
var countElement = document.getElementById("count");
var boxElement = document.getElementById("box");

function startTimer()
{
    console.log("startTimer")
    var count = 0;
    //setInterval処理、時間
    //時間 : 1000 = 1秒
    timer = setInterval(
        function() {
            count++;
            console.log(count);
            countElement.innerHTML = count;

            var left = count + " px";
            console.log(left);
            boxElement.style.position = "absolute";
            boxElement.style.top = "800px";
            boxElement.style.left = left;
        },10

    )
}

function stopTimer()
{
    console.log("stopTimer");
    clearInterval(timer)
    countElement.innerHTML = 0;
}
