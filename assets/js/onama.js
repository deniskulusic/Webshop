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
var Item3 = document.getElementById('item3');
  var Item4 = document.getElementById('item4');
  var Item41 = document.getElementById('item41');
  var Item5 = document.getElementById('item5');
  var Item6 = document.getElementById('item6');
  var Item9 = document.getElementById('item9');
  var Item7 = document.getElementById('item7');
  var Item10 = document.getElementById('item10');
  var Item11 = document.getElementById('item11');
  var Item12 = document.getElementById('item12');
  var Item8 = document.getElementById('picture2');
  var Item81 = document.getElementById('picture1');
  var Item83 = document.getElementById('picture3');
  var Item204 = document.getElementById('go');
  var Item205 = document.getElementById('go2');
  var Item206 = document.getElementById('go3');
  var Item2024 = document.getElementById('go21');
  var Item2025 = document.getElementById('go22');
  var Item2026 = document.getElementById('go23');
  var Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  var Item9FromTop =window.pageYOffset + Item9.getBoundingClientRect().top;
  var Item8FromTop =window.pageYOffset + Item8.getBoundingClientRect().top;
  var Item3FromTop =window.pageYOffset + Item3.getBoundingClientRect().top;
  var Item6FromTop =window.pageYOffset + Item6.getBoundingClientRect().top;
  var Item10FromTop =window.pageYOffset + Item10.getBoundingClientRect().top;
  var Item11FromTop =window.pageYOffset + Item11.getBoundingClientRect().top;
  var Item12FromTop =window.pageYOffset + Item12.getBoundingClientRect().top;
  let height = Item2024.offsetHeight;
  var getScroll , br=0;
  window.addEventListener("resize",function(){
  getScroll=this.pageYOffset;
  Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  Item3FromTop =window.pageYOffset + Item3.getBoundingClientRect().top;
  Item6FromTop =window.pageYOffset + Item6.getBoundingClientRect().top;
  Item8FromTop =window.pageYOffset + Item8.getBoundingClientRect().top;
  Item10FromTop =window.pageYOffset + Item10.getBoundingClientRect().top;
  Item11FromTop =window.pageYOffset + Item11.getBoundingClientRect().top;
  Item12FromTop =window.pageYOffset + Item12.getBoundingClientRect().top;
  elDistanceToTop =window.pageYOffset + Footer.getBoundingClientRect().top;
  height = Item2024.offsetHeight;
  });
  function Repeat(){
    if((elDistanceToTop - getScroll - 120) < 0){
      Nav.classList.add("nav-close");
    }
    else{
      Nav.classList.remove("nav-close");
    }
    
  /*   
   Item3.style.transform = "translateY(-" + 0.1*(Item3FromTop - getScroll -100) + "px)";
    Item4.style.transform = "translateY(-" + 1*(getScroll) + "px)";
    
   
    
    Item2.animate({
      transform : "translateY(" + 0.1*(Item2FromTop - getScroll ) + "px)"
    },{duration:500,fill:"forwards"})
    
    Item5.animate({
      transform : "translateY(-" + 0.5*(getScroll) + "px)"
    },{duration:1200,fill:"forwards"})
    */
    
    Item4.style.transform = "translateY(calc(-50% - " + 0.7*(getScroll) + "px))";
    Item41.style.transform = "translateY(calc(-50% - " + 0.7*(getScroll) + "px))";
    Item5.style.transform = "translateY(-" + 0.5*(getScroll) + "px)";
    FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - getScroll +100 ) + "px)";
    Item9.scroll(0,(-0.1*(Item9FromTop-screen.availHeight - getScroll)));
    if(br*10>height){
      br=0;
      Item2024.animate({
        transform : "translateY(" +   0  + "px)"
      },{duration:0,fill:"forwards"})
      Item2025.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:0,fill:"forwards"})
      Item2026.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:0,fill:"forwards"})
      Item204.animate({
        transform : "translateY(" +   0  + "px)"
      },{duration:0,fill:"forwards"})
      Item205.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:0,fill:"forwards"})
      Item206.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:0,fill:"forwards"})
    }
    else{
      Item2024.animate({
        transform : "translateY(" + ( 10*(  br )) + "px)"
      },{duration:0,fill:"forwards"})
      Item2025.animate({
        transform : "translateY(" + ( 10*(  br )) + "px)"
      },{duration:0,fill:"forwards"})
      Item2026.animate({
        transform : "translateY(" +( 10*(  br )) + "px)"
      },{duration:0,fill:"forwards"})
      Item204.animate({
        transform : "translateY(" + ( 10*( - br )) + "px)"
      },{duration:0,fill:"forwards"})
      Item205.animate({
        transform : "translateY(" + ( 10*( - br )) + "px)"
      },{duration:0,fill:"forwards"})
      Item206.animate({
        transform : "translateY(" +( 10*( - br )) + "px)"
      },{duration:0,fill:"forwards"})
    }
    
    if(window.innerWidth<650)
   {
    Item8.animate({
      transform : "translateY(" + (-0.05*(Item8FromTop - getScroll -200)) + "px)"
    },{duration:1200,fill:"forwards"})
    Item81.animate({
      transform : "translateY(" + (-0.05*(Item8FromTop - getScroll -200)) + "px)"
    },{duration:1200,fill:"forwards"})
    Item83.animate({
      transform : "translateY(" + (-0.05*(Item8FromTop - getScroll - 200)) + "px)"
    },{duration:1200,fill:"forwards"})
   }
   else{
    Item8.animate({
      transform : "translateY(" + (-0.1*(Item8FromTop - getScroll)) + "px)"
    },{duration:1200,fill:"forwards"})
    Item81.animate({
      transform : "translateY(" + (-0.2*(Item8FromTop - getScroll )) + "px)"
    },{duration:1200,fill:"forwards"})
    Item83.animate({
      transform : "translateY(" + (-0.1*(Item8FromTop - getScroll)) + "px)"
    },{duration:1200,fill:"forwards"})
   }
      
    
    Move(Item7 , Item7FromTop);
    Move(Item3 , Item3FromTop);
    Move(Item6 , Item6FromTop);
    Move(Item10 , Item10FromTop);
    Move(Item11 , Item11FromTop);
    Move(Item12 , Item12FromTop);
  };
  window.addEventListener("scroll",function(){
    br++;
    getScroll=this.pageYOffset;
    requestAnimationFrame(Repeat);
  });
  function Move(Item , ItemFromTop  ){
    IfElse(500, 0.2, Item , ItemFromTop)
  }
  function Move3(Item1,Item2,Item3 , ItemFromTop  ){
    IfElse(500, 0.2, Item1 ,ItemFromTop);
    IfElse(480, 0.4, Item2 ,ItemFromTop);
    IfElse(460, 0.65, Item3 ,ItemFromTop);
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
