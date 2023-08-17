var MenuOpenButton=document.querySelector(".menu");
var Menu=document.querySelector(".menu-fullscreen");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Menu.classList.toggle("menu-active");
    Nav.classList.toggle("menu-active");
   
});



var FooterText = document.getElementById('item0');
var Footer = document.getElementById('item1');
var elDistanceToTop =window.pageYOffset + Footer.getBoundingClientRect().top;

  var getScroll;
  function Repeat(){
    if((elDistanceToTop - getScroll - 120) < 0){
      Nav.classList.add("nav-close");
    }
    
    else{
      Nav.classList.remove("nav-close");
    }
    FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - getScroll +100 ) + "px)";
    console.log(getScroll)
  };
window.addEventListener("scroll",function(){
  getScroll=this.pageYOffset;
  
  requestAnimationFrame(Repeat);
});