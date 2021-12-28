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
  
   //gallery nav li click;
  
   $('#gallery .gallery-nav ul li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active'); 
   });
   
   var mixer = mixitup('.gallery-content');
   
    //gallery pop-up using venoBox;
    
    new VenoBox({
       selector:'.image-link',
       spinner:'grid',
       spinColor:'#ffe001',
    });
  
});
