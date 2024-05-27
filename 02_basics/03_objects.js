//singleton
//Object.create // this is a constructor

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rudra",
    "full name": "Rudra Ashtikar",
    [mySym]: "mykey1",
    age: 18,
    location : "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(typeof mySym);

JsUser.email = "hitesh@chatgpt.com"
 
// Object.freeze(JsUser);

JsUser.email = "rudra@microsoft.com"

// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());