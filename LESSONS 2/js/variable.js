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
var hp = 3;
console.log(hp+1);

hp = 1;
console.log(hp-2);

hp=5;
console.log(hp*3);

hp= 4;
console.log(hp/5);

hp = 6;
console.log(hp%5);

hp = 5;
++hp;
console.log(hp);

hp = 5;
--hp;
console.log(hp);

hp = 10;
hp += 5;
console.log(hp);

hp = 10;
hp -= 5;
console.log(hp);

hp = 10;
hp *= 5;
console.log(hp);

hp = 10;
hp /= 5;
console.log(hp);
hp = 24;
hp %= 5;
console.log(hp);

hp = 10;
var status_message = monster + " のHPは " + hp;
console.log(status_message);

var calculate_message = "お会計は" + total_price +"円です・";
console.log(calculate_message);