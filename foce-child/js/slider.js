document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event triggered');
  const swiper = new Swiper('.swiper', {
  
       // Optional parameters
       effect: 'coverflow',
       grabcursor: true,
       loop: true,
       speed: 100,
       centeredSlides: true,
       slidesPerView: 3,
       spaceBetween: 60,
       direction: 'horizontal',

       pagination: {
        el: '.swiper-pagination',
      },
       coverflowEffect: {
       rotate: 60,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
     },
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
     });
    });
  

// var swiper = new Swiper(".swiper-container", {
//   spaceBetween: 60,
//   speed: 1000,
//   autoplay: {
//     delay: 250,
//   },
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   loop: true,
//   slidesPerView: 3,
//   coverflowEffect: {
//     rotate: 60,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: false,
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });