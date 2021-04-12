/**
 * 
 * calculate 
 */

function calculate(x)
{
    var y = x + 5;
    return y;
}
var answer = calculate(10);
console.log(answer);


/**
 * price
 */

function total_price (price,amount)
{
    var tax_rate = 0.1;
    console.log(":::::::::::::::::::::::::::::::::")
    console.log("Price = ",price);
    console.log("Amount = ",amount);
    console.log("Tax Rate = ",tax_rate);
    console.log("Tax rate = ",tax_rate);
    var total = price * amount * tax_rate;
   
    return Math.round(total);
    
}

console.log("Total price = " ,total_price(301,5))
console.log("Total price = " ,total_price(1680,23))

/**
 * random function
 */

//１から６までのランダムな数字を表示する
function randomFunction ()
{
    console.log(":::::::::::::::::::::::::::::::::")
    var random = Math.random();
    var randomfloat = random * 7
    // * 7 untuk mendapatkan nilai dari (0 + 7)
    console.log("Random = ", random);
    console.log("Random with float = ", randomfloat);
    return Math.floor(random);
}

console.log("ランダム値 は " ,randomFunction());

///////////////////////////////////////

function randomNumber(min,max)
{
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    // + min untuk memberikan batasan nilai mininum. sehingga tidak ada nilai yang muncul diatas nilai referensi minimum.
    return number;
}
console.log(randomNumber(2,6));
//////////////////////////////////////////////////
var titleElement = document.getElementById("title");
console.log(titleElement);

titleElement.innerHTML = "Dice's number ";
////////////////
var resultElement = document.getElementById("result");
resultElement.innerHTML = randomNumber(1,6);

var priceElement = document.getElementById("item_price");
var price = priceElement.innerHTML
var number = randomNumber(1,10);
totalPrice = total_price(price,number);
console.log(totalPrice);

var itemElement = document.getElementById("item_name");
var messageElement = document.getElementById("message");

var item_name = itemElement.innerHTML;

messageElement.innerHTML = item_name + " " +  number + "個です" + totalPrice + "Gです。"



