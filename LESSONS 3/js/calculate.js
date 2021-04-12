
var hp = 10;
console.log("HP     = ",hp);
console.log("HP + 1 = ", hp+1);

hp = 10;
console.log("HP - 5 = ",hp-5);

hp = 10;
console.log("HP * 5 = ",hp*5);

hp = 10;
console.log("HP / 5 = ",hp/5);

hp = 6;
console.log("HP % 5 = ",hp%5);

hp = 5;
++hp;
console.log("++5 = ",hp);

hp = 5;
--hp;
console.log("--5 = ",hp);

hp = 5;
hp += 3;
console.log("5+3 = ",hp);

hp = 5;
hp -= 3;
console.log("5-3 = ",hp);

var monster_name = "Mew";
var hp = 1000;
var message = monster_name + "のHPは " + hp + "です。";
console.log("Monster name = " + monster_name);
console.log(message);

var attack = 10;
hp -= attack;
console.log("Mew attacked by something!!");
console.log("今のHP " + hp + "　です。");

var is_over = (hp>5);
console.log(is_over);
var is_under = (hp<=5);
console.log(is_under);
hp = 3;
is_under = (hp<=5);
message = (is_under)? "死にそう" : "ままだいける"
console.log(message);

console.log("---------------------")