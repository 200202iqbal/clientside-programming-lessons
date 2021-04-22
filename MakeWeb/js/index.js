var messageElement = document.getElementById("message");
var characterElement = document.getElementById("character_name");

function inputCharacterName()
{
    console.log("change");
    var character_name = characterElement.value;
    var characterLength = character_name.length;
    if(characterLength == 0) 
    {
        messageElement.innerHTML = ""
    }else
    {
        var message = character_name + "さん、いらっしゃい";
        messageElement.innerHTML = message;
    }
    
}

var person = {
    firstName : "John", 
    lastName : "Doe",
    age : 50, 
    eyeColor : "blue",
    fullname : function(){
        return this.firstName + " " + this.lastName;
    }
    };
console.log(person.fullname);

var fruits,flen,i;
fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Manggo"
];
flen = fruits.length;
var text = "";
for ( i = 0; i< fruits.length; i++)
{
    text += fruits[i] + "<br>";
    
}
var loopElement = document.getElementById("demo").innerHTML = text;
