//if else
//Write a program that checks if a number is positive, negative, or zero.

let n=-9
if(n>0)
    console.log(`${n} is positive number`)
else if(n<0)
    console.log(`${n} is negative number`)
else
    console.log(`${n} is equal to zero`)


//switch cases
let day=8
switch(true){
    case day==1:
        console.log('Monday')
        break;
    case day==2:
        console.log('Tuesday')
        break;
    case day==3:
        console.log('Wednesday')
        break;
    case day==4:
        console.log('Thursday')
        break;
    case day==5:
        console.log('Friday')
        break;
    case day==6:
        console.log('Saturday')
        break;
    case day==7:
        console.log('Sunday')
        break;
    default:
        console.log('Assign values from 1-7')
    
}

//ternary operator
var age=19
console.log((age>=18)?"Adult":"Minor")


//for loop
for(let i=1;i<=10;i++)
    console.log(i)

//reverse loop
for(let j=10;j>=1;j--)
    console.log(j)


