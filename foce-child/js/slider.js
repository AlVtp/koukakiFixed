var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Adjust this based on your layout
  spaceBetween: 10, // Adjust spacing between slides if needed
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// document.addEventListener('DOMContentLoaded', function () {
//   console.log('DOMContentLoaded event triggered');
//   const swiper = new Swiper('.swiper', {
  
//        // Optional parameters
//        effect: 'coverflow',
//        grabcursor: true,
//        speed: 100,
//        centeredSlides: true,
//        slidesPerView: 1,
//        spaceBetween: 60,
//        direction: 'horizontal',
//        pagination: {
//         el: '.swiper-pagination',
//       },
//        coverflowEffect: {
//        rotate: 60,
//        stretch: 0,
//        depth: 100,
//        modifier: 1,
//        slideShadows: false,
//      },
//      autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//      });
//     });
  

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