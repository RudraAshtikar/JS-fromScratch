// for 

for (let i = 0; i<= 12; i++){
    const element = i;
    if (element == 12){
        // console.log(`12 is the best number`);
    }
    // console.log(element);
}

// console.log(element);


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value is ${j} and inner loop value is ${i}`);
        // console.log(`${i} * ${j} = ${i * j} `);
        
    }
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue 

// for (let index = 1; index <= 20; index++) {
//    if(index == 5) {
//     console.log(`Detected 5`);
//     break
//    }
//     console.log(`Val of i is ${index}`);
// }

const i = 1
for( let index = i; index <= 20; index++){
    if (index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
}