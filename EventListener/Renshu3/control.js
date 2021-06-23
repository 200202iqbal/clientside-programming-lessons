// var control = document.addEventListener("keydown",control);
// var character = document.getElementById("character");
// function control(event){
//     var key_code = event.keyCode;
//     var actionX ="";
//     var actionY ="";
//     if(key_code == 37){
//         actionX="-10px";
//         console.log("Left");
//         character.style.marginLeft = character.style.marginLeft - actionX;
//     } 
//     if(key_code == 38){
//         actionY="+10px";
//         console.log("Top");
//         character.style.marginTop = actionY;
//     } 
//     if(key_code == 39){
//         actionX="10px";
//         console.log("Right");
//         character.style.paddingRight = actionX;
//     } 
//     if(key_code == 40){
//         actionY="-10px";
//         console.log("Bottom");
//         character.style.marginBottom = actionY;
//     } 
    

// }

const canvas = document.getElementById("canvas");
var character = canvas.getContext("2d");
character.fillRect(10,10,10,10);
character.fillStyle="blue";

var control = document.addEventListener("keydown",control);
function control(event){
        var key_code = event.keyCode;
        var x = 0;
        if(key_code == 37){
            x= 5;
        } 
        if(key_code == 38){

        } 
        if(key_code == 39){

        } 
        if(key_code == 40){

        } 
        character.translate(x,50);
    }