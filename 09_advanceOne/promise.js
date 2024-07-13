const promiseOne = new Promise (function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise one consumed");
})

new Promise (function(resolve, reject){
    setTimeout(() => {
        console.log("Async 2 task complete");
        resolve()
    },1000)
}).then(() => {
    console.log("promise 2 consumed")
})

const promiseThree = new Promise (function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Rudra" , email : "chaiaurcode@example.com"})
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
    console.log(user.username);
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout( () => {
        let error = false
        if(!error){
            resolve({username : "Rud", password : "123"})
        }else{
            reject("Error : Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout( () => {
        let error = false
        if(!error){
            resolve({username : "Short fuse", password : "chidchidi"})
        }else{
            reject("Error : Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E :", error);
        
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

// Promise.all
// yes yeh bhi available hei, kuch research aap b kro