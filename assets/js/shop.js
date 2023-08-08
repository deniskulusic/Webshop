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