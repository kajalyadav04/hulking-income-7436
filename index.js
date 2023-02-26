function slideshowFun(images){
    
}

// Use the following data for slideshow
var movieImages = [
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy2.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy3.png",
  "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy4.png",
  
  
]


  let tag = document.getElementById("slideshow");
window.addEventListener("load", function () {

  // add event-listeners;
  let bag = document.createElement("img");
  let i=1;
  bag.src = movieImages[0];
  setInterval(()=>{
   if(i===movieImages.length){
    i=0;
   };
   bag.src = movieImages[i];
   i++;
  }, 3000);
  tag.append(bag);
});

