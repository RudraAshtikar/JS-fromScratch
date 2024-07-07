var c = 300
let a =300
if (true){
    let a = 10
    const b = 20 
    // console.log("Inner: ", b);
}


// console.log(a);

// console.log(b);

// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++Interesting+++++++++++++++


console.log(addone(5));

function addone (num){ // a standalone function can have initialization before writing thr function
    return num+1
}

addTwo(5) // can't do this because of hoisting issue

const addTwo = function(num){ // a function held inside a variable can't be initalize before 
    return num + 2
}
