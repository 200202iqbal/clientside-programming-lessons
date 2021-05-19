function regist()
{
    console.log("regist");
    // let user_name = document.getElementById("userName").value;
    // let message = checkAlphabet(user_name);
    // let furigana = document.getElementById("furigana").value;
    // let messageFurigana = checkFurigana(furigana);
    // console.log(messageFurigana);
    // document.getElementById("error_aphabet").innerHTML = message
    // document.getElementById("error_furigana").innerHTML = messageFurigana;

    let user = {};
    user.name = document.getElementById("userName").value;
    user.furigana = document.getElementById("furigana").value;
    user.zip = document.getElementById("postNumber").value;
    user.tel = document.getElementById("telpNumber").value;
    console.log(user);

    validateEmpty(user.name,"userName");
    validateEmpty(user.furigana,"furigana");
    validateEmpty(user.zip,"postNumber");
    validateEmpty(user.tel,"telpNumber");
}

function validateEmpty(value,id)
{
    if(!value)
    {
        document.getElementById(id).classList.add("error");
        let message = document.createElement("p");
        message.innerText = "required";
        document.getElementById(id).appendChild(message);

    }else
    {
        document.getElementById(id).classList.remove("error");
    }
}
// //アルファベット
// function checkAlphabet(value)
// {
//     let pattern = /^[a-zA-Z ]*$/
//     let message = "";
//     let is_match = value.match(pattern);
//     if(!is_match)
//     {
//         message ="アルファベットで入力してください。"
//     }
//     return message;
// }

// function checkFurigana(value)
// {
//     let pattern = /^[\u3040-\u309F]+$/;
//     let message = "";
//     let is_match = value.match(pattern);
//     if(!is_match)
//     {
//         message ="フリガナで入力してください。"
//     }
//     return message;
// }