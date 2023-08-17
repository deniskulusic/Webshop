var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
var Filters=document.querySelector(".filters");
var FiltersToggle=document.querySelector(".filters-toggle");
var FilterBackground=document.querySelector(".filter-background");
FiltersToggle.addEventListener('click',function(){
  Filters.classList.toggle("filter-active");
  FilterBackground.classList.toggle("filter-active");
  
});
FilterBackground.addEventListener('click',function(){
  Filters.classList.toggle("filter-active");
  FilterBackground.classList.toggle("filter-active");
  
});
var SmallGrid=document.querySelector(".small-grid");
var BigGrid=document.querySelector(".big-grid");
var ShopGrid=document.querySelector(".shop-grid");
BigGrid.addEventListener('click',function(){
  ShopGrid.classList.add("shop-grid-big");
  ShopGrid.classList.remove("shop-grid-small");
  SmallGrid.classList.toggle("choose-active");
  BigGrid.classList.toggle("choose-active");
});
SmallGrid.addEventListener('click',function(){
  ShopGrid.classList.add("shop-grid-small");
  ShopGrid.classList.remove("shop-grid-big");
  SmallGrid.classList.toggle("choose-active");
  BigGrid.classList.toggle("choose-active");
});
var MenuOpenButton=document.querySelector(".menu");
var Menu=document.querySelector(".menu-fullscreen");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Menu.classList.toggle("menu-active");
    Nav.classList.toggle("menu-active");
   
});



var FooterText = document.getElementById('item0');
var Footer = document.getElementById('item1');
var Item2 = document.getElementById('item2');
var Item4 = document.getElementById('item4');
  var Item5 = document.getElementById('item5');
var elDistanceToTop=window.pageYOffset + Footer.getBoundingClientRect().top;
var Item2FromTop =window.pageYOffset + Item2.getBoundingClientRect().top;
var getScroll;
function Repeat(){
    if((elDistanceToTop - getScroll -120) < 0){
      Nav.classList.add("nav-close");
    }
    else{
      Nav.classList.remove("nav-close");
    }
    FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - getScroll +100 ) + "px)";
    Item4.animate({
      transform : "translateY(calc(-50% + " + 0.7*(getScroll) + "px)) translateX(-50%)"
    },{duration:0,fill:"forwards"})
    Item5.style.transform = "translateY(" + 0.5*(getScroll) + "px)";
    Move(Item2 , Item2FromTop);
  };
  window.addEventListener("scroll",function(){
  getScroll=this.pageYOffset;
  requestAnimationFrame(Repeat);
  });
window.addEventListener("resize",function(){
    getScroll=this.pageYOffset;
    elDistanceToTop=window.pageYOffset + Footer.getBoundingClientRect().top;
    Item2FromTop =window.pageYOffset + Item2.getBoundingClientRect().top;
  });
  function Move(Item , ItemFromTop){
    IfElse(500, 0.2, Item , ItemFromTop)
  }
  function IfElse(Value , Value2 ,Item ,ItemFromTop){
    if(0<ItemFromTop - window.pageYOffset - Value){
      Item.animate({
        transform : "translateY(" + Value2*(ItemFromTop - getScroll - Value) + "px)"
      },{duration:1200,fill:"forwards"})
      
    }
    else{
      Item.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:1200,fill:"forwards"})
    }
  }