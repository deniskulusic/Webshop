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
console.log(GalleryTriger)
for(j=0;j<GalleryTriger.length;j++){
    GalleryTriger[j].addEventListener('click',function(){
        GalleryBackground.classList.toggle("naocale-active");
        Gallery.classList.toggle("naocale-active");
        document.body.classList.toggle("naocale-active");
        window.scrollTo(0, 0);
      });
    }

