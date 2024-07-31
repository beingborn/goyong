/**
 * 서브 탭 변환
 *
 *
 */

$(document).ready(function () {
  let subTabBtn = $(".tab__wrap .tab__btn button");
  let subTabContent = $(".tab__content .tab");
  console.log(subTabContent);

  subTabBtn.click(function () {
    let tabIndex = $(this).parent().index();

    subTabBtn.removeClass("active");
    $(this).addClass("active");

    subTabContent.hide().eq(tabIndex).show();
  });

  // 초기화: 첫 번째 탭과 콘텐츠를 활성화
  subTabBtn.eq(0).addClass("active");
  subTabContent.hide().eq(0).show();
});

$(document).ready(function () {
  let moTabBtn = $(".mobile__tab .swiper .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");

  moTabBtn.click(function () {
    let moTabIndex = $(this).parent().index();

    moTabBtn.removeClass("btn--active");
    $(this).addClass("btn--active");

    moTabContent.hide().eq(moTabIndex).show();
  });

  moTabBtn.eq(0).addClass("btn--active");
  moTabContent.hide().eq(0).show(); //임시로 켜둠
});

/** 모바일 슬라이드 토글
 *
 *
 */

let dataOpen = $(".data--open");

$(document).ready(function () {
  dataOpen.click(function () {
    var currentSlide = $(this).next(".mo__slide");

    $(this).next(".mo__slide").stop().slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");

    $(".mo__slide").not(currentSlide).slideUp();
    // 클릭하지 않은 ('.mo__slide')는 모두 slideUp() 시키기
  });

  // 기본은 모두 숨김
  $(".mo__slide").hide();
});

var swiper = new Swiper(".moTabSwiper", {
  slidesPerView: "auto",

  // spaceBetween: 4,
  freeMode: true,
  navigation: {
    nextEl: ".moTabSwiper .swiper-button-next",
    prevEl: ".moTabSwiper.swiper-button-prev",
  },
});
