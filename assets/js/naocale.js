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
  
  var Item2 = document.getElementById('item2');
  var Item3 = document.getElementById('item3');
  var Item4 = document.getElementById('item4');
  var Item2FromTop =window.pageYOffset + Item2.getBoundingClientRect().top;
  var Item3FromTop =window.pageYOffset + Item3.getBoundingClientRect().top;

  window.addEventListener("optimizedScroll", function(){
    Item2.style.transform = "translateY(" + 0.1*(Item2FromTop - window.pageYOffset ) + "px)";
    Item3.style.transform = "translateY(-" + 0.1*(Item3FromTop - window.pageYOffset ) + "px)";
    Item4.style.transform = "translateY(-" + 1.2*(window.pageYOffset) + "px)";
  })

 

