var cities = document.getElementsByClassName("city");
console.log(cities);

//HTML Collection Loop Operation
for(var key in cities)
{
    var city = cities[key].innerText;
    console.log(city);
}
//cara yang tidak baik
for(var  city of cities)
{
    console.log(city.innerText);
}
//for each, untuk kasus html collection perlu di 変換(konversi) terlebih dahulu ke array
Array.from(cities).forEach(city =>{
    console.log(city.innerText);
})
//li タブの繰り返し

for( var i = 0; i < cities.length; i++){
    var city = cities[i];
    console.log(city.innerText);
}
var checkboxElement = document.getElementById("allcheck");

//itemlist js

var item_lists = document.getElementsByClassName("item_list");
console.log(item_list);
for (var i = 0; i< item_lists.length;i++ ){
    var item_list = item_lists[i];
    console.log(item_list);
}
for (var item of item_lists){
    console.log(item);
}
for (var item_list of item_lists){
    for(var item of item_list.children){
        console.log(item.innerText)
    }
}

function allfunction()
{
    var checkboxElement = document.getElementById("alldrink");
    var drinkNameElement = document.getElementsByClassName("drinks");
    
    console.log(drinkNameElement);
    //if the checkbox is checked
    if(checkboxElement.checked == true){
    //    drinkNameElement[0,1,2,3].checked = true;
        for ( var drinks of drinkNameElement)
        {
            drinks.checked = true;
        }
    }else
    {
        for ( var drinks of drinkNameElement)
        {
            drinks.checked = false;
        }
    }
}

function login()
{
    var emailElement = document.getElementsByName("email");
    var passwordElement = document.getElementsByName("password");

    console.log(emailElement);
    console.log(passwordElement);

    var email = emailElement[0].value;
    var password = passwordElement[0].value;
    console.log(email);
    console.log(password);

    return false;
}