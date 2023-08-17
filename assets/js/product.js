var ColorInput=document.querySelectorAll("#color-field input");
let ColorName=document.getElementById("color-name");
var Picture=document.querySelectorAll(".gallery-cell-holder picture");
var PictureCount=Picture.length/ColorInput.length;
let CurrentColor;
console.log(ColorInput.length)
ColorName.innerHTML=ColorInput[0].value;
for(j=0;j<ColorInput.length;j++){
ColorInput[j].addEventListener('click',function(){
    ColorName.innerHTML=this.value;
    for(CurrentColor=0;CurrentColor<ColorInput.length;CurrentColor++){
        if(this.value==ColorInput[CurrentColor].value){
            break;
        }
    }
    [].forEach.call(Picture, function(el) {
        el.classList.remove("gallery-cell-holder-active");
    });
    for(j=0;j<Picture.length;j++){
        if(CurrentColor-j%ColorInput.length==0){
            Picture[j].classList.add("gallery-cell-holder-active");
        }
    }


  });
}
var Gallery=document.querySelector(".gallery");
var GalleryBackground=document.querySelector(".naocale-background");
var GalleryTriger=document.querySelectorAll(".naocale-background , .povecalo");
for(j=0;j<GalleryTriger.length;j++){
    GalleryTriger[j].addEventListener('click',function(){
        GalleryBackground.classList.toggle("naocale-active");
        Gallery.classList.toggle("naocale-active");
        document.body.classList.toggle("naocale-active");
        window.scrollTo(0, 0);
      });
    }
    var MenuOpenButton=document.querySelector(".menu");
    var Menu=document.querySelector(".menu-fullscreen");
    var Nav=document.querySelector("nav");
    MenuOpenButton.addEventListener('click',function(){
        Menu.classList.toggle("menu-active");
        Nav.classList.toggle("menu-active");
       
    });
    
    
    
    var FooterText = document.getElementById('item0');
    var Footer = document.getElementById('item1');
    var elDistanceToTop;
    setTimeout(function(){
        elDistanceToTop=window.pageYOffset + Footer.getBoundingClientRect().top;
    },1000)
    
      var getScroll;
      function Repeat(){
        if((elDistanceToTop - getScroll -120) < 0){
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
    window.addEventListener("resize",function(){
        getScroll=this.pageYOffset;
        setTimeout(function(){
            elDistanceToTop=window.pageYOffset + Footer.getBoundingClientRect().top;
        },1000)
      });
