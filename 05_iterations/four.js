// for in loop 

const myObject = {
    js : 'javascript',
    py : 'python',
    cpp : 'C++',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = [ "js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);   //0 1 2 3 4
    // console.log(programming[key]);
}

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('IN', "India")

for (const key in map) {
    console.log(key)  //  for of loop does not even read this log statement 
}
