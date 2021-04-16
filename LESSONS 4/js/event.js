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
    var itemName = document.getElementById("item_name");

    var message = itemName + amount + " 個で" + totalPrice +" Gだよ";
    document.getElementById("message").innerHTML = message;
}


var amountElement = document.getElementById("amount");
var buyButton = document.getElementById("buyBtn");

