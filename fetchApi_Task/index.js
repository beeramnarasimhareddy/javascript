//1.Using Fetch API

function fetchData(url){
  fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>console.log(data)).catch((error=>console.error(error)))

}
fetchData();

//2.Handling Promises with Async and Await

async function fetchdata() {
try{
  let response=await fetch("https://jsonplaceholder.typicode.com/users")
  let data=await response.json();
  console.log(data)
}
  catch(error){
    console.error('error')
  }
  
}
fetchdata();


//3.Fetch with Parameters

document.addEventListener("DOMContentLoaded",()=>{
  let tbody=document.querySelector("#table tbody");

  fetch("https://jsonplaceholder.typicode.com/users").then((response=>response.json())).then((data=>table_data(data)))

  function table_data(table){
    table.forEach((person) => {
      let trow=document.createElement("tr")

      trow.innerHTML=
      `
      <tr>
             <td>${person.name}</td>
             <td>${person.email}</td>
             <td>${person.phone}</td>
             <td>${person.website}</td>
            </tr>
      `
      tbody.appendChild(trow)
      
    });
  }
})


//



async function Fetchdata(){
  try{
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => console.log(result))
  }
  catch{
      console.log("Invalid URL")
  }
  
}
Fetchdata()