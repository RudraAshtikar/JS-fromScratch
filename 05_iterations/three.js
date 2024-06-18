// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
    console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    if(greetings == " "){
        break
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('IN', "India")

for (const [key, Value] of map) {
    // console.log(key, ":-", Value);
}

// const myObject = {
//     game1 : "NFS",
//     game2 : "GTA"
// }

// for (const [key, Value] of myObject) { // object is not iterable by for of loop 
//     // console.log(key, ":-", Value);
// }

