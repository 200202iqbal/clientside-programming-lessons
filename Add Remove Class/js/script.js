var messsageElement = document.getElementById("message");
function add()
{   
    messsageElement.classList.add("active");
}
function remove()
{
    messsageElement.classList.remove("active")
}
function toggle()
{
    messsageElement.classList.toggle("active");
}
function replace()
{
    messsageElement.classList.replace("message","frame");
}
function change()
{
    document.querySelector("body").classList.toggle("change-mode");
    document.querySelectorAll("button").classList.toggle("button-lightmode");
}