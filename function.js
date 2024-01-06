// regular function 
function hello1(){
    console.log("Hello World");
    // return undefined;
}
let msg = hello1();
console.log("message", msg)


// function Expression
const hello2 = function(){
    console.log("Hello World")
}

hello2();

// named function Expression
const hello3 = function hello(){
    console.log('Hello World Named')
}
hello3()


// arrow Function
const hello4 =()=>{
    console.log("Hello World Arrow function")
}
hello4();

// Anonymous function

