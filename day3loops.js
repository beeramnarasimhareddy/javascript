//for loop
// Write a program that prints the multiplication table of 5 using a for loop.
for(i=1;i<=10;i++)
    console.log(`5x${i}=${5*i}`)

//Write a program that calculates and prints the sum of all even numbers between 1 and50 using a for loop
sum=0
for(i=1;i<=50;i++)
    if(i%2==0)
        sum=sum+i
        console.log(sum)


//while loop
//prime numbers from 2-20



let num =2;
while (num <=20) {
    if (num > 1) { 
        let isPrime = true;
        let i = 2;
        while (i * i <= num) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
            i++;
        }
        if (isPrime) {
            console.log(num);
        }
    }
    num++;
}


// Write a program that calculates and prints the sum of all odd numbers between 1and 20 using a while loop

i=1
sum=0
while(i<=20){
    if(i%2!=0){
        sum=sum+i
       
        
    }i++


} console.log(sum)


//Write a program that calculates and prints the factorial of a given number (e.g.,5!) using a while loop
i=1
factorial=1
while(i<=5){
    factorial*=i
    i++
}console.log(factorial)
