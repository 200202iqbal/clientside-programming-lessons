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
    var itemListElement = document.getElementById("itemList");
  
    var itemListElement1 = document.createElement("button").innerHTML = document.createElement("td");
    for ( i = 0; i < itemlist.length ; i++)
    {
      
        itemListElement1.innerHTML += i + ". " + itemlist[i] + "<br>";
        
    }
    itemListElement.appendChild(itemListElement1); 

}
/*var deleteButton = document.createElement("button");
var deleteButton1 = itemListElement.appendChild(deleteButton).innerHTML = "Delete";*/
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