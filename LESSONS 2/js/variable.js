var monster = "kappa";
console.log(monster);

function countdown(number)
{
    while(number>0)
    {
        --number;
       console.log(number);
    }  
}
console.log("Kappa comming...");
console.log(countdown(10));

var price = 250;
var amount = 15;
var tax_rate = 0.1;
var total_price = price * amount * (1 + tax_rate);
console.log("Price = " + price);
console.log("Amount = " + amount);
console.log("Tax rate = " + tax_rate);
console.log("Total price = " + total_price);

