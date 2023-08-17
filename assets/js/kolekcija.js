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
  var Item6 = document.getElementById('item6');
  var Item7 = document.getElementById('item7');
  var Item8 = document.getElementById('item8');
  var Item91 = document.getElementById('item91');
  var Item92 = document.getElementById('item92');
  var Item93 = document.getElementById('item93');
  var Item101 = document.getElementById('item101');
  var Item102 = document.getElementById('item102');
  var Item103 = document.getElementById('item103');
  var Item6FromTop =window.pageYOffset + Item6.getBoundingClientRect().top;
  var Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  var Item8FromTop =window.pageYOffset + Item8.getBoundingClientRect().top;
  var Item9FromTop =window.pageYOffset + Item91.getBoundingClientRect().top;
  var Item10FromTop =window.pageYOffset + Item101.getBoundingClientRect().top;
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
    
    Item4.style.transform = "translateY(calc(-50% - " + 0.7*(getScroll) + "px))";
    Item41.style.transform = "translateY(calc(-50% - " + 0.7*(getScroll) + "px))";
    Item5.style.transform = "translateY(-" + 0.5*(getScroll) + "px)";
    FooterText.style.transform = "translateY(-" + 0.35*(elDistanceToTop - getScroll +100 ) + "px)";
    
    Move(Item6 , Item6FromTop);
    Move(Item7 , Item7FromTop);
    Move(Item8 , Item8FromTop);
    Move3(Item91,Item92, Item93 , Item9FromTop );
    Move3(Item101,Item102, Item103 , Item10FromTop );
  };
  window.addEventListener("scroll",function(){
    getScroll=this.pageYOffset;
    requestAnimationFrame(Repeat);
  });
  window.addEventListener("resize",function(){
    getScroll=this.pageYOffset;
  Item6FromTop =window.pageYOffset + Item6.getBoundingClientRect().top;
  Item7FromTop =window.pageYOffset + Item7.getBoundingClientRect().top;
  Item8FromTop =window.pageYOffset + Item8.getBoundingClientRect().top;
  Item9FromTop =window.pageYOffset + Item91.getBoundingClientRect().top;
  Item10FromTop =window.pageYOffset + Item101.getBoundingClientRect().top;
  elDistanceToTop =window.pageYOffset + Footer.getBoundingClientRect().top;
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

  