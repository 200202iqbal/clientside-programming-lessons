var distance = 4.9;
var message = "";
if(distance < 1 )
{
    message = "徒歩"
}
else if ( distance >= 1 && distance < 5 )
{
    message = "自転車"
}else
{
    message = "飛ぶ"
}
console.log(message)

var inputElement = document.getElementById("distanceInput");
var outputElement = document.getElementById("messageInDistance")


function jsInputChange()
{
    distance = inputElement.value;
    if(distance < 1 )
{
    message = "徒歩"
}
else if ( distance >= 1 && distance < 5 )
{
    message = "自転車"
}else
{
    message = "飛ぶ"
}
    console.log(message)
    outputElement.innerHTML = message
}
/*
Buy House Script
*/
var money = 300000;
var has_job = true;
if (money >= 300000000 || has_job )
{
    message = "ローンで家を買おうかな?";
}else
{
    message = "賃貸で頑張ります";
}
console.log(message);

/*
Switch Case
*/

var weekday = "水";
switch (weekday)
{
    case "月":
        message = "燃えるゴミ"
        break;
    case "水":
        message = "燃えないゴミ"
        break;
    case "金":
        message = "燃えるゴミ"
        break;
    default:
        message = "回収なし"
        break;
}
console.log(message);

/*
Date
*/

var today = new Date();
console.log(today);

/*
Year
*/
var year = today.getFullYear();
console.log(year);

/*
Month
*/
var month = today.getMonth() + 1;
console.log(month);

/*
Date
*/
var date = today.getDate();
console.log(date);

var hours = today.getHours();
console.log(hours);

var minute = today.getMinutes();
console.log(minute);

var seconds = today.getSeconds();
console.log(seconds);

var weekday = today.getDay();
console.log(weekday);
/*
show in page
*/
var getDayElement = document.getElementById("todayID");
var Day ;
function changeIntToDay(weekday)
{
    switch(weekday)
    {
    case 1:
        Day = "月曜日";
        break;
    case 2:
        Day = "火曜日";
        break;
    case 3:
        Day = "水曜日";
        break;
    case 4:
        Day = "木曜日";
        break;
    case "5":
        Day = "金曜日";
        break;
    case 6:
        Day = "土曜日";
        break;
    case 7:
        Day = "日曜日";
        break;
    default:
        Day = "";
        break;
    }
    return Day;
}
getDayElement.innerHTML = changeIntToDay(weekday);

/*
Gomi function
*/
var Gomi = changeIntToDay(weekday)
var GomiElement = document.getElementById("todayGomiID")
var GomiString ;
function resultGomi(Gomi)
{

    if ( Gomi == "月曜日" || Gomi == "金曜日")
    {
        GomiString = "燃えるゴミ";
    }
    else if( Gomi == "火曜日" || Gomi == "水曜日" )
    {
        GomiString = "燃えないゴミ";
    }
    else
    {
        GomiString = "回収なし"
    }
    return GomiString;

}
GomiElement.innerHTML = resultGomi(Gomi);

/*
hitduke
*/
var hitdukeElement = document.getElementById("todayDateID")
hitdukeElement.innerHTML = year + "/" + month + "/"+ changeIntToDay(weekday);

/*
Digital Clock
*/

/*var hoursElement = document.getElementById("hours")
var minutesElement = document.getElementById("minutes")
var secondsElement = document.getElementById("seconds")

hoursElement.innerHTML = hours;
minutesElement.innerHTML = minute;
secondsElement.innerHTML = seconds;*/

var testClockElement = document.getElementById("testClock")
var myClock = setInterval(Clock,1000);
function Clock()
{
    var D = new Date();
    testClockElement.innerHTML = D;
}

/*shift +alt + f : code formatting*/
