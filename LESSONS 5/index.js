let scores = [82,71,56,77,91];
let scoreLength = scores.length;
let i = 0;
let av = 0;
while(i < scoreLength)
{
    av = av +  scores[i];
    i++;
}
av = av/scoreLength
console.log(av)