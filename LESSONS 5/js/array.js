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
var date = new Date();
var today = date.getDay();
var dateElement = document.getElementById("today");
dateElement.innerHTML = today;
