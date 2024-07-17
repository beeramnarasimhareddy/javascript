//functions with out parameters
//Write a function named `greet` that prints "Hello, World!" to the console.
function greet(){
    console.log("Hello, World!");
}
greet()

//function with parameters
//Write a function named `addNumbers` that takes two parameters, `a` and `b`.

function addNumbers(a,b){
    sum=a+b;
    console.log(sum);

}
addNumbers(3,4)

//Functions with Return Statements
//Write a function named `multiply` that takes two parameters, `x` and `y`
function multiply(x,y){
    return (x*y);
}
let result=multiply(3,4);
console.log(result);

//Combining Functions

function calculateRectangleArea(length,width){
    function multiply(length,width){
        return (length*width);
    }
    let result=multiply(3,4);
    console.log(result);

}
calculateRectangleArea()


//DEfault parameter

function greetUser(name="Guest"){
    console.log(`Hello ${name}`)
}
greetUser()