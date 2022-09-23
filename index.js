let x = Math.round(Math.random()*100);
let count= 0;
let num = prompt("Write a number between 0 and 100:");

if(num == x) 
  console.log("Your guess is correct.");
while(num != x){
  count++;
  if(num < x)
    console.log("random number is higher.");
  else if (num > x)
    console.log("random number is lower.");
  num = prompt("Write a number between 0 and 100:");
}
if(num == x) 
  console.log("Your guess is correct.");

let score = 100 - count-1;
console.log("Your score =",score);
console.log("Random number is", num);