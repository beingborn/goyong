/**
 * 서브 탭 변환
 *
 *
 */




$(document).ready(function () {
  let subTabBtn = $(".tab__wrap .tab__btn button");
  let subTabContent = $(".tab__content .tab");
  let moTabBtn = $(".mobile__tab .swiper .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");

  let activeTabIndex = 0; // PC 및 모바일 공통의 활성화된 탭 인덱스
  let isMobileView = window.innerWidth < 767; // 초기 화면 크기 판단

  function initializeTabs() {
    // 현재 활성화된 탭의 인덱스를 저장
    let currentActiveTabIndex = subTabBtn.index(
      $(".tab__wrap .tab__btn button.active")
    );
    activeTabIndex =
      currentActiveTabIndex !== -1 ? currentActiveTabIndex : activeTabIndex;

    updateView();
  }

  function updateView() {
    if (isMobileView) {
  
      if (activeTabIndex == 2) {
        moTabContent.hide();
        $('.tab__3').show() // 모바일로 변해도 pc컨텐츠 유지한 tab show하기
      } else if (activeTabIndex == 3) {
        $(".tab__4").show();
      } else {
        moTabBtn.removeClass("btn--active");
        moTabBtn.eq(activeTabIndex).addClass("btn--active");
        moTabContent.hide().eq(activeTabIndex).show();
      }
    }
    
    // 모바일 뷰가 아닐때
    subTabBtn.removeClass("active");
    subTabBtn.eq(activeTabIndex).addClass("active");
    subTabContent.hide().eq(activeTabIndex).show();
  }



  function handleResize() {
    // 화면이 변경될때마다 isMobileView 부분을 true, false 를 검사함
    isMobileView = window.innerWidth < 767;

    // 초기화 함수가 실행될 때 initailaizeTabs 함수가 실행됌
    initializeTabs();
  }

  subTabBtn.click(function () {
    let tabIndex = $(this).parent().index();

    subTabBtn.removeClass("active");
    $(this).addClass("active");
    subTabContent.hide().eq(tabIndex).show();

    // 클릭한 탭의 인덱스를 저장
    activeTabIndex = tabIndex;
  });

    moTabBtn.click(function () {
    let moTabIndex = $(this).parent().index();
    moTabBtn.removeClass("btn--active");
    $(this).addClass("btn--active");

    moTabContent.hide().eq(moTabIndex).show();

    if (moTabIndex == 2) {
      moTabContent.hide();

      $(".tab__4").hide();
      $(".tab__3").show();
    } else if (moTabIndex == 3) {
      moTabContent.hide();
      $(".tab__3").hide();
      $(".tab__4").show();
    }

    // 모바일 탭 인덱스를 PC 탭 인덱스에도 반영
    activeTabIndex = moTabIndex;
    if (!isMobileView) {
      subTabBtn.removeClass("active");
      subTabBtn.eq(activeTabIndex).addClass("active");
      subTabContent.hide().eq(activeTabIndex).show();
    }
  });

  // 초기화: 첫 번째 탭과 콘텐츠를 활성화
  initializeTabs();

  // 화면 크기 변경 시 초기화 함수 재실행
  $(window).resize(function () {
    handleResize();
  });
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
