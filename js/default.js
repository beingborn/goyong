


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


  /**
   * 스크롤 이벤트 감지해서 헤더 고정 
   * or 숨기기
   * 
   * 1. 윈도우 스크롤 값 저장 
   * 2. 스크롤 값이 초기값 보다 커진다 => 스크롤을 내린다 true , headerHeight 보다 더 커졌을 때 header fixed
   * 3. 그 반대도 똑같이 진행
   * 4. 단 스크롤 높이 값이 헤더 높이 보다 작아진다면 다시 position relative 로 전환
   */


  $(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var headerHeight = $('.header').outerHeight();
  
      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // 스크롤을 내릴 때 헤더를 숨김 (단 스크롤이 헤더 높이보다 높을 때만)
        
        console.log(scrollTop);
        $('.header').css('transform', 'translateY(-100%)').removeClass('header__fixed');
      } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight){
        // 스크롤을 올릴 때 헤더를 고정
        console.log(scrollTop);
        $('.header').css('transform', 'translateY(0)').addClass('header__fixed');
      } 
      
      if (scrollTop <= headerHeight) {
        // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기
        $('.header').css('transform', 'translateY(0%)').removeClass('header__fixed');
      }
      
      lastScrollTop = scrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
    });
  });