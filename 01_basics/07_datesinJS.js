let myDate = new Date

// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());


// let myCreatedDate = new Date(2023, 11, 23)
// let myCreatedDate = new Date(2023, 11, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);  get time in MilliSeconds its easier to compare this way, example: when building a booking app

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // milliseconds to seconds

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1 ); adding 1 so that the user doesn't confuses
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', { weekday: "long",

})