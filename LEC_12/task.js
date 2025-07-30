// Make a box containing a button generate 
// on clicking generate random colors will be generated inside the box 

let colors = [
  '#FF5733', 
  '#33FF57', 
  '#3357FF', 
  '#FF33A8', 
  '#FF8C33', 
  '#8D33FF', 
  '#33FFF6', 
  '#F3FF33', 
  '#A833FF', 
  '#33FF99'  
];

let box = document.querySelector(".box");
let genbtn = document.querySelector(".btn");
let stop=document.querySelector(".stop");
let intervalid=null;
function randomcolor() {
  let index = Math.floor(Math.random() * 10);
  let color = colors[index];
  return color;
}

genbtn.addEventListener("click", function() {
//   let color = randomcolor();
//   box.style.background = color;
  intervalid=setInterval(() => {
    let color = randomcolor();
    box.style.background = color;
  }, 500);
});

stop.addEventListener("click", function() {
    if (intervalid) {
        clearInterval(intervalid);
    }
})