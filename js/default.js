


var swiper = new Swiper(".bannerSwiper", {
    slidesPerView : 1,
    loop: true,
    loopAdditionalSlides : 1,
  

    navigation: {
      nextEl: ".banner__btn .swiper-button-next",
      prevEl: ".banner__btn .swiper-button-prev",
    },

    breakpoints: {

      767: {
        slidesPerView : 3,
        spaceBetween: 20,
      },

      1080: {
        slidesPerView : 3,
        spaceBetween: 20,
      },

      1440: {
        slidesPerView : 3,
        spaceBetween: 32,
      }
    }

  });

  var swiper = new Swiper(".mainSwiper", {
    
    slidesPerView : 'auto', // 슬라이드가 하나씩 보이게 되면 무조건 slide가 화면의 100%로 잡히기 때문에 auto를 줌으로써 width를 유동적으로 변경 시켜주어야한다.
    centeredSlides: false,
    // slidesBetWeen : 16,

    loop: true,
    loopAdditionalSlides : 1,

    // autoplay: {
    //   delay: 3000,
    // },

    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {


        

     1080: {
      slidesPerView : 'auto',
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

  $('.swiper__pause img').click(function() {
    const img = $(this);

    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      img.attr('src', '/img/play.png')

    } else {
      swiper.autoplay.start();
      img.attr('src', '/img/pause.png')
    }
  });