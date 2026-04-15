// 1. Rewrite code with let and const.
let situation = 'sad';
const death = true;

console.log("Before:")
console.log("let: situation = ", situation);
console.log("const: death = ", death);

situation = 'happy';
// death = false;

console.log("After:")
console.log("let: situation = ", situation);
console.log("const: death = ", death, "\n");


// 2. Use template literals with variables.
console.log(`Initially the situation was 'sad' but now the situation is ${situation} and it can be 'sad' again. But death is always constant and ${death}. \n`);


// 3. Create a function with default parameter values.
let name1 = "BSathya";
let ageNow=23;
function userDetails(name = "Sathya", age = 18){
    console.log(`Hi ${name}, you are now ${age} years old. `);
}
userDetails(name1, ageNow);
userDetails(name1);
userDetails(ageNow);
userDetails();