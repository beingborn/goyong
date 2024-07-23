


var swiper = new Swiper(".bannerSwiper", {
    slidesPerView : 1,
    loop: true,
    loopAdditionalSlides : 1,
  

    navigation: {
      nextEl: ".banner__btn .swiper-button-next",
      prevEl: ".banner__btn swiper-button-prev",
    },

    breakpoints: {
      1024: {
        slidesPerView : 3,
        spaceBetween: 24,
      },

      1440: {
        slidesPerView : 'auto',
        spaceBetween: 32,
      }
    }

  });

  var swiper = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 3000,
    },

    slidesPerView : 1,
    slidesBetWeen : 16,
    centeredSlides: true,

    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {

     1024: {
      slidesPerView : 2,
      centeredSlides: false, 
     }, 

      1440: {
        slidesPerView : 3,
        centeredSlides: false, 
      }
    }
  });

  /** 
   * autoplay 토글 
   * 
   */

  $('.swiper__pause > img').click(function() {
    const img = $(this);

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      img.attr('src', '/img/play.png')

    } else {
      swiper.autoplay.start();
      img.attr('src', '/img/pause.png')
    }
  });