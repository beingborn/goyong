
// 배너 스와이퍼
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

  // 메인 스와이퍼
    var swiper = new Swiper(".mainSwiper", {
      slidesPerView : 'auto',
      loop: true,               
      loopAdditionalSlides : 1,
      centeredSlides: false,
  
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
          slidesPerView : 'auto',
          centeredSlides: false, 
        }
      },
      on: {
        slideChange: function() {
  
        }
      }
      // loop 때문에 tab키가 내부에서 계속해서 이동하는 것이다. 스와이퍼 영역에서 tab키를 7번 누르면 (7개의 슬라이드를 다 확인해봤다는 가정하에 이 값을 TRUE값으로 바꾸고 탭을 다음거로 이동하는 것을 JAVASCRIPT로 짜야겠다.)
    });

      $(document).on('keydown', function(event) {
        if (event.key === 'Tab') {
            var slides = $('.swiper-slide:not(.swiper-slide-duplicate)');
    
            // 각 슬라이드의 버튼 그룹을 검사
            slides.each(function() {
                var buttons = $(this).find('.button__group button');
                var lastButton = buttons[buttons.length + 1];
    
                // 마지막 버튼에 포커스가 있을 때
                if ($(document.activeElement).is(lastButton)) {
                    event.preventDefault();
                    $('#next__event').focus();
                }
            });
        }
    });









  
  /** 
   * autoplay 토글 
   * 접근성 FOCUS, ENTER, HOVER
   */



  document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.swiper__pause img');
  
    const updateImage = (isPlaying) => {
      img.src = isPlaying ? '/img/pause.png' : '/img/play.png';
    };
  
    img.addEventListener('click', function() {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        updateImage(false);
      } else {
        swiper.autoplay.start();
        updateImage(true);
      }
    });
  
    img.addEventListener('mouseenter', function() {
        swiper.autoplay.stop();
        updateImage(false);
    });
  
    img.addEventListener('mouseleave', function() {
      updateImage(swiper.autoplay.running);
    });
  
    img.addEventListener('focus', function() {
      updateImage(false);
    });
  
    img.addEventListener('blur', function() {
      updateImage(swiper.autoplay.running);
    });
  });


  /**
   * 메인 배너 버튼 
   * 변수로써 각 선언
   * this의 z-index값 4로 변경, color white, background-color == 003675로 변경
   * this.not 은 z-index 값 3으로 변경 color = #1d1d1d backgroundcolor = white로 변경
   * 
   * 주의 사항 slide active의 포함된 버튼을 누를 시와 아닌 것을 누를 때의 color 및 background를 각각 다르게 지정시켜주어야 한다. 
   * 1번 문제 : 액티브 슬라이드가 다른 코드로 넘어갔을 때를 인식하지 못한다. 즉 클릭했을 때만 parentHasSlideActive를 판단하기 때문에
   */



  var slide = $('.main__swiper .swiper-slide')

  $(document).ready(function() {
    $('.main__swiper .swiper-slide').each(function(index,slide) {
      // 각 슬라이드 내의 버튼 요소를 선택
      let buttons = $(slide).find('.btn__group button');
  
      // 버튼 클릭 이벤트 핸들러 추가
      buttons.click(function() {
        // 클릭된 버튼에 active--style 클래스 추가
        $(this).addClass('active--style');
  
        // 클릭되지 않은 동일한 슬라이드 내의 다른 버튼에서 active--style 클래스 제거
        buttons.not(this).removeClass('active--style');
      });
    });
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
        
        $('.header').css('transform', 'translateY(-100%)').removeClass('header__fixed');
      } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight){
        // 스크롤을 올릴 때 헤더를 고정
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