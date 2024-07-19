//push and pop
let arr=[]
arr.push(1,2,3)
console.log(arr)
arr.pop()
console.log(arr)


//shift and unshift
let arr1=["a","b","c"]
arr1.shift()
console.log(arr1)
arr1.unshift("z")
console.log(arr1)

//slice
let arr2=[1,2,3,4,5]
let newarr2=arr2.slice(1,4)
console.log(newarr2)

//splice
let arr3=["red","green","blue","yellow"]
let newarr3=arr3.splice(2,1,"purple","orange")
console.log(arr3)

//Creating and Manipulating objects

let Car={
    make:"India",
    model:"AudiQ5",
    year:2020
}
console.log(Car)
delete Car.year
console.log(Car)

//Nested loops
let person={
    name:"Narasimha",
    age:21,
    address:{
        street:"checkpost",
        city:"Kurnool",
        zipcode:"528910"

    }
}
console.log(person)
console.log(person.address.city)

//Arrow function

const greet=(name)=>{
    return `Hello ${name}`
}
console.log(greet("Narasimha"))