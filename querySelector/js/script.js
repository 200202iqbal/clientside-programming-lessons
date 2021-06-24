var h2Element = document.querySelector("#shop");
console.log(h2Element);
var h3Element = document.querySelector("#nameshop");
h3Element.innerHTML = h2Element.innerHTML;

var ulElement = document.querySelectorAll("ul.country_list li");
console.log(ulElement);

var cities = document.getElementsByClassName("city");
console.log(cities.length);

//li タグの繰り返し
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  console.log(city.innerText);
}
//liタグの繰り返し
for (city of cities) {
  console.log(city.innerText);
}

//ドリンクフードの ul を取得
var item_lists = document.getElementsByClassName("item_list");
console.log(item_lists);

for (var item_list of item_lists) {
  //console.log(item_list)
  //ulの子(children)をループ
  for (var item of item_list.children) {
    console.log(item.innerText);
  }
}
//checkbox に全てON/OFF
function checkAll() {
  console.log("check all");
  //class が　check_item の HTML　タグを全て取ってくる
  var checkElements = document.getElementsByClassName("check_item");
  //id が check_item_all のチェックボックスからtrue/falseをとる
  var checked = document.getElementById("check_item_all").checked;
  console.log(checkElements);
  for (var element of checkElements) {
    element.checked = checked;
  }
}

var message_btn = document.getElementById("message_btn");
message_btn.addEventListener("click", showMessage);

function showMessage() {
  alert("Click Event");
}
var remove_btn = document.getElementById("remove_btn");
remove_btn.addEventListener("click", function () {
  click_btn.removeEventListener("click", showMessage);
});
