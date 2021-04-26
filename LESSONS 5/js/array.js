var monster = ["Slime","Chimera","Nome"]
console.log(monster);
var length = monster.length;
console.log(length);
monster.push("Zombie")//最後の要素に値を追加する
console.log(monster);
monster.pop()//最後の要素に値を削除する
console.log(monster);
monster.shift()//先頭の要素を削除する
console.log(monster);
monster.unshift("スライム");//先頭にスライムを追加する
console.log(monster)
monster.splice(2,0,"ドラゴン")//monsterの2番目の要素を一つ追加する
console.log(monster)
monster.splice(2,1)//monsterの2番目要素を一つ削除する
console.log(monster)
var index = monster.indexOf("スライム")
console.log(index)
/***
 * 
 * 
 * 
 */
var weekdays = ["日","月","火","水","木","金","土"];
var date = new Date();
var dateElement = document.getElementById("date");
dateElement.innerHTML = date;


var itemlist = [];


function registItem()
{
    var itemValue = document.getElementById("item_name");
    var item = itemValue.value;
    itemlist.push(item);
    console.log(itemlist);
}

function show()
{
    var showdataElement = document.getElementById("showdata");
    var text = "";
    for ( i = 0; i < itemlist.length ; i++)
    {
        text += i + ". " + itemlist[i] + "<br>";
    }
    showdataElement.innerHTML = text;

    var itemListElement = document.getElementById("itemList");
    var itemListElement1 = document.createElement("p");
    for ( i = 0; i < itemlist.length ; i++)
    {
        itemListElement1.innerHTML += i + ". " + itemlist[i] +"<br>";
    }
    itemListElement.appendChild(itemListElement1); 
}
function resetItems()
{
    itemlist = []
}

function deleteItems()
{
    var deleteOrderElement = document.getElementById("deleteOrder").value ;
    itemlist.splice(deleteOrderElement, 1);
    console.log("Number of array : ",deleteOrderElement);
    console.log(itemlist);
}



