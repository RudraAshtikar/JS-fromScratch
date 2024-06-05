function sayMyName(){
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("R");
    console.log("A");
}

// sayMyName();

function addTwoNumbers( number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(1,2)

// console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// ...num1 is a rest operator

// console.log((calculateCartPrice(200,400, 500, 2000)));

const user ={
    username: "rudra",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price in ${anyobject.prices}`);
}
// handleObject(user)

// handleObject({
//     username: " rudra",
//     prices : 200
// })

const myNewArray = [ 200, 300, 400 ,800]

function returnSeconValue(getArray){
    return getArray[1]
}


// console.log(returnSeconValue(myNewArray));

console.log(returnSeconValue([200, 300, 400, 800]));