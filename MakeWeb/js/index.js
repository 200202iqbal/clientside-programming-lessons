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
