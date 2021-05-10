void function test()
{
    console.log("Hello World");
}();

var age = 25;
var beverage = (age => 20 ) ? "Beer" : "Juice";
console.log(beverage);

let greeting = person => 
{
    let name = person ? person.name : `stranger`
    return `Howdy, ${name}`
}

console.log(greeting({name : "Alice"})); 
console.log(greeting(null));

console.log(example(17));
