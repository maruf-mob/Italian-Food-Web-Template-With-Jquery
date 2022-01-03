$(document).ready(function(){
   // preloader functions;
    
  $("#preloader").introLoader();
  
  //typeWritter;
  
  var typed = new Typed('.land-text .type', {
   strings: ["are you hungry?", "want to eat?","going to be crazy?"],
   typeSpeed: 50,
   backSpeed: 70,
   showCursor: false,
   backDelay: 700,
   loop: true,
   loopCount: Infinity,
   
 });
   
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
    
    //countDown
    
    var clock = $('.clock').FlipClock({
      clockFace:'HourlyCounter',
      autoStart:false,
      callbacks:{
        stop:function(){
          $('.message').html('The clock has stopped!')
        }
      }
    }); 
      
   // set time;
   clock.setTime(1425365);  
   
   // coundown mode;
   clock.setCountdown(true);  
   
   // start the clock;
   clock.start(); 
  
});
