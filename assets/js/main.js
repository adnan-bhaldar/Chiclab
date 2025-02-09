// ============================================= HOME ==================================================

var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //   delay: 4500,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ============================================= SHOP ==================================================

  var swiper = new Swiper(".shop-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      924: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  // ============================================= TESTIMONIAL ==================================================

var swiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination : {
    el: '.swiper-pagination',
    clickable: true,
  },
});