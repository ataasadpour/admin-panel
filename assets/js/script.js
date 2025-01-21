// swiper hero

var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   swiper hero2

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: false,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });