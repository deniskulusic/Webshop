
var NewsletterInput=document.querySelectorAll(".newsletter-corner , .newsletter-popup-background");
const NewsletterContent=document.querySelector(".newsletter-popup");
for(j=0;j<NewsletterInput.length;j++){
    NewsletterInput[j].addEventListener('click',function(){
        console.log(NewsletterInput);
        NewsletterContent.classList.toggle("newsletter-popup-active")
        
      });
    }