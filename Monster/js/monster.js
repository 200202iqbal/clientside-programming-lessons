var monster = document.getElementById("monster");
var imgMonster = ["img/monster_006.png","img/monster_022.png","img/monster_040.png"]
var descMonster = ["モンスター１","モンスター2","モンスター3"];

for (i = 0; i < imgMonster.length; i++)
{
    var monsterElement1 = document.createElement("img")
    var monsterElement2 = document.createElement("figcaption");
    monsterElement1.src = imgMonster[i];
    monsterElement2.innerText = descMonster[i];
    var newLine = document.createElement("br");
    monster.appendChild(monsterElement1);
    monster.appendChild(monsterElement2);
    monster.appendChild(newLine);
    
}
var selectedMonster = "img/monster_006.png"

function animateMonster(selectedMonster)
{
    var width = 0;
    var animateElement = document.getElementById("animateMonster");
    var timer = setInterval(function(){
        width++;
        selectedMonster.width = width;
        if (width > 100)
        {
            clearInterval(timer)
        }
    },10)
}
