// que1 what goes in the num operator?

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// ...num1 is a rest operator

// console.log((calculateCartPrice(200,400, 500, 2000)));


// Global scope in node environment and browser console environment is different


// this refers current context

// global object in browser is the window object

/*

different behaviour of this in regular function and arrow function?

    -1->In a regular function, the this keyword refers to the object that the function is called on.

    -1.1-> 
    function chaii()
    {
    let username = "rudra"
    console.log(this); // here it acts as a global object
    }

    -2-> In an arrow function, the this keyword refers to the object that the function is defined on.

    -2.1->
    const chai = () =>{
    let username ="rudra"
    console.log(this); // here it retruns empty scope
}
*/
module.exports.someproperty = "somevalue"

const chai = () => {
    console.log(this);
}

// chai()

// This shows that when `this` defined in arrow function in global context refers to module.exports