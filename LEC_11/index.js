//accessing dom element 
//1. using id
//2. using class
//3. using tag
//4. querySelectro/querySelectorAll

// let el1= document.getElementById("heading");
// console.log(el1); 
// let el2= document.getElementsByClassName("item");
// console.log(el2[0]); 
// let el3= document.getElementsByTagName("p");
// console.log(el3[0]);
let el4= document.querySelector("p");
let el5= document.querySelectorAll(".item");
let el6= document.querySelectorAll(".item");
let ul= document.querySelector("#container");
console.log(el4); 
console.log(el5);
console.log(el6);
console.log(ul);

//properties
/*
innerText
innerHTML
textContent
*/
let data=el4.innerText;
console.log(data);
el4.innerText="change using JS";
let data2=ul.innerHTML;
console.log(data2);
let data3=ul.innerHTML;
console.log(data3);
let data4=ul.textContent;
console.log(data4);
ul.innerHTML=`<li class="item">item 4</li>
<li class="item" >item 5</li>
<li class="item">item 6</li>`

/*getAttribute
setAttribute
classList
*/
let el7= document.querySelector(".item");
console.log(el7);
// console.dir(el7.getAttribute("id"));
// console.dir(el7.getAttribute("class"));
// el7.setAttribute("id","js");
// console.log(el7.getAttribute("id"));
el7.classList.add(("delete"));
console.log(el7.classList.containes("delete"));
el7.classList.remove("item");
console.log(el7.classList);