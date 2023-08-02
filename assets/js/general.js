var MenuOpenButton=document.querySelector(".menu");
var Menu=document.querySelector(".menu-fullscreen");
var Nav=document.querySelector("nav");
MenuOpenButton.addEventListener('click',function(){
    Menu.classList.toggle("menu-active");
    Nav.classList.toggle("menu-active");
   
});


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

var leftItem = document.getElementById('item0');
var rightItem = document.getElementById('item1');
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

const elDistanceToTop =window.pageYOffset + rightItem.getBoundingClientRect().top;


window.addEventListener("optimizedScroll", function(){
  if((elDistanceToTop - window.pageYOffset - 120) < 0){
    Nav.classList.add("nav-close");
  }
  else{
    Nav.classList.remove("nav-close");
  }
  leftItem.style.transform = "translateY(-" + 0.35*(elDistanceToTop - window.pageYOffset +100 ) + "px)";
})