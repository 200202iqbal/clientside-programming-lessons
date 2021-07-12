let users = [
    { name: 'A', score: 57 },
    { name: 'B', score: 92 },
    { name: 'C', score: 81 },
    { name: 'D', score: 55 },
    { name: 'E', score:72 },
]

//平均
var average = 0;
for(var i = 0; i<users.length;i++)
{
    average += users[i].score;
}
average = average / users.length;
console.log(average);

//分散
var variance = 0;
for (var i = 0; i<users.length ; i++){
variance += Math.pow((users[i].score - average),2);
}
variance /= users.length;
console.log(variance);

//標準偏差
var standardDeviation = Math.sqrt(variance);
console.log(standardDeviation);

//偏差値

var deviationValue = 0;
for(var i = 0; i<users.length;i++)
{
deviationValue = users[i].score - average;
deviationValue = 10* (deviationValue/standardDeviation) + 50
users[i].deviation = deviationValue; 

}

console.log(users);

var user_list = document.getElementById("user_list");
var table = document.createElement("table");
var theadername = document.createElement("th");
var theaderscore = document.createElement("th");
var theaderdeviation = document.createElement("th");
theadername.innerHTML = "Name";
theaderscore.innerHTML ="Score"
theaderdeviation.innerHTML = "Deviation Value"

var trheader = document.createElement("tr");
table.appendChild(trheader);
trheader.appendChild(theadername);
trheader.appendChild(theaderscore);
trheader.appendChild(theaderdeviation);
user_list.appendChild(table);

for (var key in users){
    var tr = document.createElement("tr");

    var td_name = document.createElement("td");
    var td_score = document.createElement("td");
    var td_deviationvalue = document.createElement("td");
    
    var datauser = users[key];

    td_name.innerHTML = datauser.name;
    td_score.innerHTML = datauser.score;
    td_deviationvalue.innerHTML = datauser.deviation;

    tr.appendChild(td_name);
    tr.appendChild(td_score);
    tr.appendChild(td_deviationvalue);

   table.appendChild(tr);
}