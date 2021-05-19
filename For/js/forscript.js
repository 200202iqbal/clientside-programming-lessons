let mono = [
    {id:1, name:"銅のつるぎ", price:150},
    {id:2, name:"鉄のやり", price:550},
    {id:3, name:"皮のたて", price:90},
    {id:4, name:"鉄のかぶと", price:850},
    {id:5, name:"皮のぼうし", price:50},
];

console.log("-----------Price < 300-----------");
for (let key in mono){
    // console.log(mono[key]);
    if(mono[key].price < 300)
    {  
        let itemUnder300 = mono[key];

        console.log(itemUnder300.name + " : " + itemUnder300.price);
    }
}

let product = [
    {id:1 , name: "ミネラルウォーター", price:"80", is_sale: true},
    {id:2 , name: "ほうじ茶", price:"120", is_sale: false},
    {id:3 , name: "コーヒー", price:"150", is_sale: true},
    {id:4 , name: "紅茶", price:"130", is_sale: false},
    {id:5 , name: "炭酸水", price:"90", is_sale: true},
]

let item_list = document.getElementById("item-list");

let table = document.createElement("table");
item_list.appendChild(table);

    let tr = document.createElement("tr");
    let th_id = document.createElement("th");
    let th_name = document.createElement("th");
    let th_price = document.createElement("th");
    let th_is_sale = document.createElement("th");
    th_id.innerText = "id";
    th_name.innerText = "name";
    th_price.innerText = "price";
    th_is_sale.innerText = "is_sale";
    tr.appendChild(th_id);
    tr.appendChild(th_name);
    tr.appendChild(th_price);
    tr.appendChild(th_is_sale);
    table.appendChild(tr);

//repeat
for(let key in product)
{
    tr = document.createElement("tr");

    let td_id = document.createElement("td");
    let td_name = document.createElement("td");
    let td_price = document.createElement("td");
    let td_is_sale = document.createElement("td");

    let item = product[key];
    td_id.innerHTML = item.id;
    td_name.innerHTML = item.name;
    td_price.innerHTML = item.price;

    tr.appendChild(td_id);
    tr.appendChild(td_name);
    tr.appendChild(td_price);
    
    if(item.is_sale == true)
    {
        td_is_sale.innerHTML = item.is_sale;
        tr.appendChild(td_is_sale);
    }
    table.appendChild(tr);

    console.log(td_is_sale);
}