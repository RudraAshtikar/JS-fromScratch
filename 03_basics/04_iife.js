//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(){
    //named iife
    console.log(`db connected`);
})(); // demicolon is important to end this iife and start a new one

((name) => {
    console.log(`Db connected two ${name}`);
})(`hitesh`);

