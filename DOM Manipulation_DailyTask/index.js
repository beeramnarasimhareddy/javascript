//1.selecting element by id
let heading=document.getElementById("heading")
console.log(heading)
heading.style.backgroundColor="yellow"
heading.style.fontSize="40px"

//2.selecting element by classname
let subhead=document.getElementsByClassName("subheading")
console.log(subhead)
for(i=0;i<subhead.length;i++){
subhead[i].style.color="blue"
}
//3.Select Elements by Tag Name
let paragraph=document.getElementsByTagName("p")
console.log(paragraph)
for(let i=0;i<paragraph.length;i++){
    paragraph[i].style.border = "2px solid black"
    paragraph[i].style.fontSize="20px"
}
//4. Select Element by Query Selector
let nested=document.querySelector('h2')
console.log(nested)
nested.style.fontStyle ='italic';

//5. Select Elements by Query Selector 
let element=document.querySelectorAll(".span")
console.log(element)
for(i=0;i<element.length;i++){
    element[0].style.border="2px solid red"
    element[0].style.borderRadius="5px"
    element[1].style.border="2px solid green"
    element[1].style.borderRadius="50%"
}

// 6. Change Styles of Selected Elements
let fav=document.getElementById("fav-hobbie");

fav.style.color="red";
fav.style.backgroundColor="black";
fav.style.border="2px solid grey";
fav.style.margin="10px";
fav.style.padding="5px";
fav.style.fontStyle="italic";
fav.style.borderRadius="5px"