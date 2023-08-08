var MenuOpenButton=document.querySelector(".menu");
var Menu=document.querySelector(".menu-fullscreen");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Menu.classList.toggle("menu-active");
    Nav.classList.toggle("menu-active");
   
});

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

var FooterText = document.getElementById('item0');
var Footer = document.getElementById('item1');
const elDistanceToTop =window.pageYOffset + Footer.getBoundingClientRect().top;
window.addEventListener("optimizedScroll", function(){
  if((elDistanceToTop - window.pageYOffset - 120) < 0){
    Nav.classList.add("nav-close");
  }
  
  else{
    Nav.classList.remove("nav-close");
  }
  console.log(elDistanceToTop , window.pageYOffset);
  FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - window.pageYOffset +100 ) + "px)";
})