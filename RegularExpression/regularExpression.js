function regist()
{
    console.log("regist");
    let user_name = document.getElementById("userName").value;
    let message = checkAlphabet(user_name);
    let furigana = document.getElementById("furigana").value;
    let messageFurigana = checkFurigana(furigana);
    
    console.log(message);
    console.log(messageFurigana);
    document.getElementById("error_aphabet").innerHTML = message
    document.getElementById("error_furigana").innerHTML = messageFurigana;
}

//アルファベット
function checkAlphabet(value)
{
    let pattern = /^[a-zA-Z ]*$/
    let message = "";
    let is_match = value.match(pattern);
    if(!is_match)
    {
        message ="アルファベットで入力してください。"
    }
    return message;
}

function checkFurigana(value)
{
    let pattern = /^[\u3040-\u309F]+$/;
    let message = "";
    let is_match = value.match(pattern);
    if(!is_match)
    {
        message ="フリガナで入力してください。"
    }
    return message;
}