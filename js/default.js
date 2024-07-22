


var swiper = new Swiper(".bannerSwiper", {
    slidesPerView : 'auto',
    spaceBetween: 32,
    loop: true,
    loopAdditionalSlides : 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mainSwiper", {
    slidesPerView : 3,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
    activeIndexChange : function() {
        
    },
    },
  });