$(document).on('keydown', function(event) {
    if (event.key === 'Tab') {
        console.log("탭 키 눌렸음");

        // 모든 버튼들 선택
        let errorButtons = $('.main__swiper .swiper-slide .item .item__wrap .btn__group button');

        // 현재 포커스된 요소
        let focusedElement = $(document.activeElement);
        console.log("현재 포커스된 요소: ", focusedElement);

        // 9번째에서 12번째 버튼에 포커스가 있을 때
        errorButtons.each(function(index) {
            if (focusedElement.is(errorButtons.eq(index))) {
                if (index >= 9 && index < 13) {
                    console.log(index + "번째 버튼입니다!");

                    // event.preventDefault(); // 기본 탭 동작 방지

                    // 다음 버튼으로 포커스 이동
                    // errorButtons.eq(index + 1).css("border", "3px solid #000"); // 동작됌
                    
                    setTimeout(function(){
                        // errorButtons.eq(index + 1).focus();
                        $('#last__prev__income').focus();
                    }, 50)
                }
            }
        });
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
     }, 
      1440: {
        slidesPerView : 'auto',
        centeredSlides: false, 
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    on : {
      init : function(){
      },

    }
    //   slidesLengthChange: function(){
    //     console.log("length 바뀜")
    //     logSlides();
    //   },
    //   slideChange: function() {
    //     logSlides();
    //   },

    // },




    
  });


  function logSlides() {
    const allSlides = swiper.slides;
    
    allSlides.forEach((slide, index) => {
      // 복사된 슬라이드를 식별하기 위해 'swiper-slide-duplicate' 클래스를 확인
      const isDuplicate = slide.classList.contains('swiper-slide-duplicate');
      console.log(`Slide ${index}: ${isDuplicate ? 'Duplicate' : 'Original'}`);
      console.log(allSlides)
      
    

    });
  }
  logSlides();

//     $(document).on('keydown', function(event) {
//       if (event.key === 'Tab') {
//          console.log("탭 키 눌렸음")
//           var slides = $('.main__swiper .swiper-slide-duplicate');
//           console.log(slides)


//           slides.each(function() {
//               let mainbuttons = $(slides).find('.btn__group button');
//               var lastButton = mainbuttons[mainbuttons.length - 1];
//           });
//       }
//   });
