//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
/* 
Global scope ke pollution se problem hoti hei kai baar and uske pollution ko hatane ke liye we use IIFE
IIFE provides encapsulation, allowing you to create private scopes for variables and functions. 
This prevents variable conflicts and unintended modifications of data in the global scope.
*/

(function chai(){
    //named iife
    console.log(`db connected`);
})(); // demicolon is important to end this iife and start a new one

((name) => {
    console.log(`Db connected two ${name}`);
})(`hitesh`);

