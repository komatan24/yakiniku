// const slidepics = ["img/slider/01_pc.jpg","img/slider/03_pc.jpg","img/slider/04_pc.jpg","img/slider/05_pc.jpg","img/slider/1205fair_01_pc.jpg","img/slider/1205fair_02_pc.jpg"];
// let num = -1;

// function slideshow_timer(){
//     if(num === 5){
//         num = 0;
//     }else{
//         num ++;
//     }
//     document.getElementById(".swiper-slide").src = slidepics[num];
// }
// setInterval(slideshow_timer,2000);

// ↓スライドショーswiper
var mySwiper = new Swiper ('.swiper-container',{
  // effect:"slide",
  loop:true,
  slidePreView:1,
  spaceBetween:10,
  centeredSlides:true,
  autoplay:true,
  autoplaySpeed:2000,
  pagination:'.swiper-pagination',
  nextButton:'.swiper-button-next',
  prevButton:'.swiper-button-prev',
  breakpoints:{
    767:{
      slidePreView:1,
      spaceBetween:0
    }
  }
})

// alert("Hello World!")
