//calling console.assert() with a falsy assertion prints message to the console without interrupting execution of 
//subsequent code
let msg = "is not even";
for(let i =2;i<=5;i++) {
    console.log('the num is' + i);
    console.assert(i%2 === 0, i + msg );
}