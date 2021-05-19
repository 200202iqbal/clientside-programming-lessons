var message = document.getElementById("message");

function add()
{
    message.classList.replace("frame","message")
    message.classList.add("active")
    
}
function remove()
{
    message.classList.replace("frame","message")
    message.classList.remove("active")
}
function toggle()
{
    message.classList.toggle("active2")
}
function replace()
{
    // replace("old class name","new class name")
    message.classList.replace("message","frame")
}
var element = document.getElementById("alert")
// menambahkan element css ke variabel element
element.style.backgroundColor = "#ff0000";
element.style.fontSize = "20px";
element.style.color = "#fff";
element.style.width = "150px";

// create element p dengan variable comment

let comment = document.createElement("p");
comment.innerHTML = "出席率にはきをつけましょう!";
// style.cssText = memberikan nilai property css 
comment.style.cssText = "border:2px solid darkgray; font-weight:600; padding:10px;";

document.getElementById("display").appendChild(comment);

function over(element)
{
    element.style.backgroundColor = "white";
    element.style.color = "darkcyan";
    element.classList.add("namaAnimasi");
}
function out(element)
{
    element.style.backgroundColor = "darkcyan";
    element.style.color = "white";
    element.classList.remove("namaAnimasi");
}
