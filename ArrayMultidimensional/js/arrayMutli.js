var rows = [
    [90,78,82,],
    [62,70,68,],
    [68,88,72,],
]

console.log(rows);
var cols = rows[0];
console.log(cols);

var data = cols[1];
console.log(data);

var data2 = rows[0][1];
console.log(data2);

console.log(rows[2][1])

var user = [
    { id:1, name:"user1", email: "user1@gmail.com", tel:"123456"},
    { id:2, name:"user2", email: "user2@gmail.com", tel:"1234567"},
    { id:3, name:"user3", email: "user3@gmail.com", tel:"12345"},
];
console.log(user);
console.log(user[1].email);

var drinks = [
    ["アイスコーヒー", "ミネラルウォーター","ほうじ茶"],
    ["紅茶","牛乳","アイスコーヒー"],
    ["烏龍茶","コーラ","オレンジジュース"],
    ["ミネラルウォーター","コーラ","ほうじ茶"],
];

console.log(drinks);

var products = [
    { id:1, name:"ミネラルウォーター",   price:80, is_sale:true},
    { id:2, name:"ほうじ茶",            price:120, is_sale:false},
    { id:3, name:"コーヒー", price:150, is_sale:true},
    { id:4, name:"紅茶", price:130, is_sale:false},
    { id:5, name:"炭酸水", price:90, is_sale:true},
];

console.log(products);

for (var row=0; row < products.length; row++)
{
    console.log("Row Test");
    console.log(products[row]);
}
function regist()
{
    var ItemIdElement = document.getElementById("item_name").value;
    var ItemNameElement = document.getElementById("item_name").value;
    var ItemPriceElement = document.getElementById("item_price").value;
    var Is_saleElement = document.getElementById("Is_sale").value;
    console.log(Is_saleElement,ItemIdElement,ItemNameElement,ItemPriceElement);

}