/*;(function(){

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

  window.addEventListener("optimizedScroll", function(){
    Item2.style.transform = "translateY(" + 0.1*(Item2FromTop - window.pageYOffset ) + "px)";
    Item3.style.transform = "translateY(-" + 0.1*(Item3FromTop - window.pageYOffset -100) + "px)";
    Item4.style.transform = "translateY(-" + 1*(window.pageYOffset) + "px)";
    Item5.style.transform = "translateY(-" + 0.5*(window.pageYOffset) + "px)";
    
    Move(Item6 , Item6FromTop);
    Move(Item7 , Item7FromTop);
    Move(Item8 , Item8FromTop);
    Move3(Item91,Item92, Item93 , Item9FromTop );
  })
*/  
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
  var Item2 = document.getElementById('item2');
  var Item3 = document.getElementById('item3');
  var Item4 = document.getElementById('item4');
  var Item41 = document.getElementById('item41');
  var Item5 = document.getElementById('item5');
  var Item7 = document.getElementById('item7');
  var Item81 = document.getElementById('item81');
  var Item82 = document.getElementById('item82');

  var Item2FromTop =window.pageYOffset + Item2.getBoundingClientRect().top;
  var Item3FromTop =window.pageYOffset + Item3.getBoundingClientRect().top;
  var Item4FromTop =window.pageYOffset + Item4.getBoundingClientRect().top;
  var Item5FromTop =window.pageYOffset + Item5.getBoundingClientRect().top;
  var Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  var Item81FromTop =window.pageYOffset + Item81.getBoundingClientRect().top;
  var Item82FromTop =window.pageYOffset + Item82.getBoundingClientRect().top;
  var getScroll;
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
    Item41.style.transform = "translateY(calc(-50% - " + 0.7*(getScroll) + "px))";
    if(screen.width>650){
    Item3.animate({
      transform : "translateY(-" + 0.1*(Item3FromTop - getScroll -100) + "px)"
    },{duration:1200,fill:"forwards"})
    Item2.animate({
      transform : "translateY(" + 0.1*(Item2FromTop - getScroll -100) + "px)"
    },{duration:1200,fill:"forwards"})
  }
  else{
    if(0<Item3FromTop - window.pageYOffset - 500){
      Item3.animate({
        transform : "translateY(" + 0.2*(Item3FromTop - getScroll - 500) + "px)"
      },{duration:1200,fill:"forwards"})
      
    }
    else{
      Item3.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:1200,fill:"forwards"})
    }
    if(0<Item2FromTop - window.pageYOffset - 500){
      Item2.animate({
        transform : "translateY(" + 0.2*(Item2FromTop - getScroll - 500) + "px)"
      },{duration:1200,fill:"forwards"})
      
    }
    else{
      Item2.animate({
        transform : "translateY(" + 0 + "px)"
      },{duration:1200,fill:"forwards"})
    }
  }
  if(screen.width>1150){
    Item81.animate({
        transform : "translateY(" + 0.1*(Item81FromTop - getScroll -100) + "px)"
      },{duration:1200,fill:"forwards"})
      Item82.animate({
        transform : "translateY(-" + 0.1*(Item82FromTop - getScroll -100) + "px)"
      },{duration:1200,fill:"forwards"})
  }
  else{
    if(0<Item81FromTop - window.pageYOffset - 500){
        Item81.animate({
          transform : "translateY(" + 0.2*(Item81FromTop - getScroll - 500) + "px)"
        },{duration:1200,fill:"forwards"})
        
      }
      else{
        Item81.animate({
          transform : "translateY(" + 0 + "px)"
        },{duration:1200,fill:"forwards"})
      }
      if(0<Item82FromTop - window.pageYOffset - 500){
        Item82.animate({
          transform : "translateY(" + 0.2*(Item82FromTop - getScroll - 500) + "px)"
        },{duration:1200,fill:"forwards"})
        
      }
      else{
        Item82.animate({
          transform : "translateY(" + 0 + "px)"
        },{duration:1200,fill:"forwards"})
      }
  }
    FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - getScroll +100 ) + "px)";
    
    Move(Item4 , Item4FromTop);
    Move(Item5 , Item5FromTop);
    Move(Item7 , Item7FromTop);
  };
  window.addEventListener("scroll",function(){
    getScroll=this.pageYOffset;
    requestAnimationFrame(Repeat);
  });
  window.addEventListener("resize",function(){
    getScroll=this.pageYOffset;
    Item2FromTop =window.pageYOffset + Item2.getBoundingClientRect().top;
  Item3FromTop =window.pageYOffset + Item3.getBoundingClientRect().top;
  Item4FromTop =window.pageYOffset + Item4.getBoundingClientRect().top;
  Item5FromTop =window.pageYOffset + Item5.getBoundingClientRect().top;
  Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  elDistanceToTop =window.pageYOffset + Footer.getBoundingClientRect().top;
  });

  function Move(Item , ItemFromTop){
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

  