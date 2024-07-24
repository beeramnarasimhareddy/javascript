//1. Using forEach

let arr1=[1,2,3,4,5]
arr1.forEach((itrtr,index)=>{
    console.log(itrtr)
})

//2. Using map
let  arr2=[1,2,3,4,5,6,7,8,9]
let newarr2=arr2.map((itrtr,index)=>{
    return itrtr*2
})
console.log(newarr2)

//3. Using filter
let arr3=[7,0,3,2,1,8,9,1,6,9]
let newarr3=arr3.filter((arr)=>{
    if(arr%2==0)
        return arr
})
console.log(newarr3)

//4.Using reduce
let arr4=[1,37,7,5,6,78,87]
let sum=arr4.reduce((acc,iter)=>{
    return acc=acc+iter
})
console.log(sum)

//5. Using find
let people=[
    {
        name:'Narasimha',
        age:21
    },
    {
        name:'Vinay',
        age:20
    },
    {
        name:'Venkat',
        age:19
    },
    {
        name:'Ramu',
        age:'48'
    }
]
let age=people.find(person=>person.age>25);
console.log(age)

//6. Using findIndex

let peoples=[
    {
        name:'Narasimha',
        age:21
    },
    {
        name:'Vinay',
        age:17
    },
    {
        name:'Venkat',
        age:23
    },
    {
        name:'Ramu',
        age:48
    }
]
let ages=peoples.findIndex((person)=>person.age<18);
console.log(ages)
