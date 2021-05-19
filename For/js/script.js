for (let index = 0; index < 10 ; index++) {
    console.log(index);
}
// 偶数 //
console.log("偶数")
for (let index = 0; index < 10 ; index++)
{
        if (index === 0)
        {
            
        }
        else if(index%2 === 0)
        {
        console.log(index);
        }
    
}
console.log("奇数")
for (let index = 0; index < 10 ; index++)
{
    if(index%2 !== 0)
    {
        console.log(index);
    }
}

// *console.log("計算")
// let sum = 0;
// for (let index = 1; index <= 1000 ; index++)
// {
//     /*let indexTemp = index + 1;
//     console.log(index , " + " , indexTemp, " = ", index+indexTemp )
//     */
//     /* 1 + 2 = 3
//         3 + 3 = 6
//         6 + 4 = 10
//         10 + 5 = 15
//     */
//     console.log(sum ,"+", index );
//     sum += index;
// }

let drinks = [
    'ミネラルウォーター', 
    'コーヒー',
     'ほうじ茶',
     'フルーツティー', 
     'むぎ茶'];

for (let index = 0; index < drinks.length; index++) {
    
    console.log(drinks[index] , "を飲む");   
    
}

for (const key in drinks)
{
    console.log(drinks[key]);
}

drinks.forEach(function(drink,key)
{
    console.log(key);
    console.log(drink);
});

let items = 
[
    {id : 1, name:"ミネラルウォーター", price:80 },
    {id : 2, name:"コーヒー", price:130 },
    {id : 3, name:"ほうじ茶", price:120 },
    {id : 4, name:"フルーツティー", price:150 },
    {id : 5, name:"むぎ茶", price:90 },
];

console.log("-----------------------------------")
let sum =0;
for (let index = 0; index < items.length ; index++)
{
    sum += items[index].price ;
    console.log("商品名 = " , items[index].name, ", 値段 = " , items[index].price );
    // if ( index+1 == items.length)
    // {
    //     console.log("合計 : ", sum);
    // }
    
}
console.log("合計 : ", sum);

console.log("-----------------------------------")
let number = 1000;
let iteration = 0;
while(number >= 0)
{
    number -=17;
    iteration++;
}
console.log("iteration : " , iteration);