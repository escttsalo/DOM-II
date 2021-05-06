// Your code goes here

// //Fun Bus Color Change (Mouseover)
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", (e) => {
    e.target.style.color = "blue";
    e.target.style.fontSize = "8em";
});

// //Hidden coupons (keydown)
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'b') {
    alert('The coupon code for today is: HEB40P');
  }
});

//Bus Becomes Big and Small (wheel)
function zoom(e) {
    e.preventDefault();
    scale += e.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    e.target.style.transform = `scale(${scale})`;
};

let scale = 1;
const introImg = document.querySelector('.intro img');
introImg.addEventListener('wheel', zoom);

//Loads new navigation
window.addEventListener("load", pop)
function pop(e){
  let mainNav = document.querySelector(".main-navigation")
  mainNav.style.backgroundColor = "black";
  mainNav.style.opacity = "0.75"
  document.querySelectorAll("nav a").forEach(item => item.style.color = "white")
};

//prevent links from refreshing
document.querySelector("nav a").addEventListener('click', (e) => preventDefault())

//DARK MODE plz
document.querySelector("body").addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = "black";
  let comFun = item => item.style.color = "white";
  document.querySelectorAll("h2").forEach(comFun);
  document.querySelectorAll("h4").forEach(comFun);
  document.querySelectorAll("p").forEach((item, i, obj) => {
    if(i < obj.length - 1){
      item.style.color = "white";
    }
  });
});