const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "rudra"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "rudra"
//     console.log(this.username);
// }

// chai()


const chai = () =>{
    let username ="rudra"
    console.log(this);
}

// chai()

//****************Explicit return****************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

 // ******************* Implicit return ************

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// If num1 + num2 is added in curly braces then "return" keyword should be used 

const addTwo = (num1,num2) => ({username: "rudra"}) 
//To retun an object it is necessary to wrap it inside a parantheses

console.log(addTwo());

const myArray= [2,3,4,5,6]

myArray.forEach()