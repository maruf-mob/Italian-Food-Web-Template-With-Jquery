$(document).ready(function(){
   // preloader functions;
    
  $("#preloader").introLoader();
   
   //slider;

   $('.slider').slick({
      slidesToShow:3,
      slideToScroll:1,
      arrows:false,
      dots:true,
      centerMode:true,
      centerPadding:'0px', 
      autoplay:true,
      speed:200,
   });
   
   //back to top function;
   $('.to-top').toTop();
  
});
