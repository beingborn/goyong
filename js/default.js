


var swiper = new Swiper(".bannerSwiper", {
    slidesPerView : 'auto',
    spaceBetween: 32,
    loop: true,
    loopAdditionalSlides : 1,
  

    navigation: {
      nextEl: ".banner__btn .swiper-button-next",
      prevEl: ".banner__btn swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mainSwiper", {
    autoplay: {
      delay: 3000,
    },

    slidesPerView : 3,

    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    on: {
    activeIndexChange : function() {
        
    },
    },
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