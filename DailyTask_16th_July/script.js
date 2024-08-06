//1.localStorage: Setting and Getting Data
localStorage.setItem('name','Narasimha');
localStorage.setItem('place','Hyderabad')
console.log(localStorage.getItem('name'));
console.log(localStorage.getItem('place'))
//2. sessionStorage: Setting and Getting Data

sessionStorage.setItem('age','21');
console.log(sessionStorage.getItem('age'))


//3. Removing Items from Storage
console.log(localStorage.removeItem('place'));
console.log(sessionStorage.removeItem('age'))

//4.JSON Storage

const object1={
  name:'NarasimhaReddy',
  age:21
}

localStorage.setItem("obj",JSON.stringify(object1))
sessionStorage.setItem("obj",JSON.stringify(object1))

console.log(JSON.parse(localStorage.getItem("obj")));
console.log(JSON.parse(sessionStorage.getItem("obj")));


// Clearing Storage

localStorage.clear();
sessionStorage.clear();

console.log(localStorage,sessionStorage)