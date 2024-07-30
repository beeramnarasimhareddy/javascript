1.//creating promises

function asyncTask(name,delay,shouldReject){
    return new Promise((resolve,reject)=>{
            if(shouldReject){
                reject(`Task ${name} Failed`)
            }else{
                resolve(`task ${name} completed`)
            }
    })

}

asyncTask('Narasimha',2000,true).then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

  asyncTask('Narasimha',1000,false).then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

2.//using promises


asyncTask('Task1',1000,false).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
asyncTask('Task2',2000,false).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
asyncTask('Task3',3000,true).then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

//promise all
function asyncTask(name,delay,shouldReject){
    return new Promise((resolve,reject)=>{
        if(shouldReject){
            reject(`Task ${name} failed`)
        }
        else{
            resolve(`Task ${name} success`)
        }
    })

}
const task1 = asyncTask('Task 1', 1000, false);
const task2 = asyncTask('Task 2', 2000, false);
const task3 = asyncTask('Task 3', 3000, true);

Promise.all([task1, task2, task3])
  .then((results) => {
    console.log('All tasks completed successfully:', results);
  })
  .catch((error) => {
    console.log('One or more tasks failed:', error);
  });

  Promise.allSettled([task1, task2, task3])
  .then((results) => {
    console.log('fulfiled', results);
  })
  .catch((error) => {
    console.log('Rejected', error);
  });

  Promise.race([task1,task2,task3])
  .then((results)=>{
    console.log('success=>',results)
  }).catch((error)=>{
    console.log('err=>',error)
  })
