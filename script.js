var css =document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var gradient=document.getElementById("gradient")
function backgroundChanger(){
gradient.style.background= "linear-gradient(to right,"+ color1.value +","+ color2.value  +")";	
}
css.textcontent=gradient.style.background;
console.log(css.textcontent);
color1.addEventListener("input",backgroundChanger);
//no need to call the function
color2.addEventListener("input",backgroundChanger);
