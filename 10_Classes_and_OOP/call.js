function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) 
    // .call used to hold its refrence inside the call stack because when a function inside a function comes it does its work and gets out 
    // which in this case means SetUsername is called its conole log is printed and it goes out of the execution context and takes this.username with it
    // this is passed because the variables of SetUsername will disappear once it is called and it gets out of the function execution context
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);