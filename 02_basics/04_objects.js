// const tinderUser = new object()
const tinderUser = {
    gender: "male"
}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname : "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 ={1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

// const obj3 = { obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4) // used to add the objects together in one the first parameter i.e "{}" i.e the target obj 

const obj3 = {...obj1, ...obj2, ...obj4} //spread operator
// console.log(obj3);


const users = [
    { 
        id : 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ********************DESTRUCTURE AND JSON API******************

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor}= course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[                   // this is how API codes are returned whenever we asked for them
    {},
    {},
    {}
]