var character =
{
    id      : 1,
    name    : "ヒーロー",
    job     :"アーチャー ",
    level   :1,
    hp      :15,
    mp      :0,
    exp     :0,
}


console.log(character)
console.log(character.name)
var profilCharacter = "img/archer.jpg"
var profilCharacterElement = document.getElementById("profilCharacter");
var profilCharacterElement1 = document.createElement("img");
profilCharacterElement1.src = profilCharacter;
profilCharacterElement.appendChild(profilCharacterElement1);

var charNameElement = document.getElementById("charName");
var charJobElement = document.getElementById("charJob");
var charLevelElement = document.getElementById("charLevel");
var charEXPElement = document.getElementById("charEXP");
var charHPElement = document.getElementById("charHP");
var charMPELement = document.getElementById("charMP");


var charName = charNameElement.innerHTML = character.name;
var charJob = charJobElement.innerHTML = character.job;
var charLevel = charLevelElement.innerHTML = character.level;
var charEXP = charEXPElement.innerHTML = character.exp;
var charHP = charHPElement.innerHTML = character.hp;
var charMP = charMPELement.innerHTML = character.mp;


function levelup()
{
    character.exp += 2;
    character.hp *=1.5;
    character.mp += 50;
    character.exp += 100;  
    character.level += 1;
    console.log("Character Level Up !");
    console.log(character.exp);
}

function showStat()
{
    charLevel = charLevelElement.innerHTML = character.level;
    charEXP = charEXPElement.innerHTML = character.exp;
}

character.weapon = "スタンガン";
console.log("Weapon : ",character.weapon);

//
//
//
//
//
//

var getNameUserElement = document.getElementById("nameUser").innerText;
var getEmailUserElement = document.getElementById("emailUser").innerText;
var getPasswordUserElement = document.getElementById("passwordUser").innerText;

var user =
{
    Name : "",
    email : "",
    password : "",
}


var getNameUserElement = document.getElementById("nameUser");
var getEmailUserElement = document.getElementById("emailUser");
var getPasswordUserElement = document.getElementById("passwordUser");


function userAdd()
{
    var NameUserValue = getNameUserElement.value;
    var EmailUserElement = getEmailUserElement.value;
    var PasswordUserElement = getPasswordUserElement.value;
    user.Name =  NameUserValue;
    user.email = EmailUserElement;
    user.password = PasswordUserElement;
    console.log(user);
}


