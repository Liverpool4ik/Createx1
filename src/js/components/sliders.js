const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".projects-section__next",
    prevEl: ".projects-section__prev",
  },
});
