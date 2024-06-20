// forEach loop
// specifically for arrays as it comes in array ka prototype


const coding = ["js", "ruby", "java", "python", "C++"]

// coding.forEach(function (val) { // callback functions are used in for each loop
//     console.log(val)
// });

// coding.forEach((item) => {
//     // console.log(item);
// })

// function printMe(item){
    // console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item , index ,array) => {
//     console.log(item , index, array);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName: "js"
    },
    {
        languageName : "C++",
        languageFileName: "C++"
    },
    {
        languageName : "python",
        languageFileName: "py"
    }
    
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})