document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event triggered');
  const swiper = new Swiper('.swiper', {
  
       // Optional parameters
       effect: 'coverflow',
       grabcursor: true,
       centeredSlides: true,
       slidesPerView: 1,
       spaceBetween: 30,
       direction: 'horizontal',
       pagination: {
        el: '.swiper-pagination',
      },
       coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: false,
     },
     });
    });
  