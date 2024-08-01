/**
 * 서브 탭 변환
 *
 *
 */

//현재 문제: 초기화 로직이 매번 이루어지는데 예를 들어 다른 버튼을 클릭한 상태에서 다시 줄어들었을 때 무조건 1번을 show 하기 떄문에 기존 정보를 잃어버린다.

$(document).ready(function () {
  let subTabBtn = $(".tab__wrap .tab__btn button");
  let subTabContent = $(".tab__content .tab");
  let activeTabIndex = 0; // 처음에는 첫 번째 탭을 활성화

  function initializeTabs() {
    // 현재 활성화된 탭의 인덱스를 저장
    let currentActiveTabIndex = subTabBtn.index(
      $(".tab__wrap .tab__btn button.active")
    );
    activeTabIndex =
      currentActiveTabIndex !== -1 ? currentActiveTabIndex : activeTabIndex; // 활성화 된 값이 없으면 기존 값 0을 그대로 유지

    if (window.innerWidth > 767) {
      // 전체 콘텐츠를 숨기고 현재 활성화된 탭을 표시
      subTabBtn.removeClass("active");
      subTabBtn.eq(activeTabIndex).addClass("active");
      subTabContent.hide().eq(activeTabIndex).show();
    } else {
      // 767px 보다 작으면 PC 콘텐츠를 모두 숨긴다.
      subTabContent.hide();
    }
  }

  subTabBtn.click(function () {
    let tabIndex = $(this).parent().index();

    subTabBtn.removeClass("active");
    $(this).addClass("active");

    subTabContent.hide().eq(tabIndex).show();

    // 클릭한 탭의 인덱스를 저장
    activeTabIndex = tabIndex;
  });

  // 초기화: 첫 번째 탭과 콘텐츠를 활성화 (화면 크기 조건 추가)
  initializeTabs();

  // 화면 크기 변경 시 초기화 함수 재실행
  $(window).resize(function () {
    initializeTabs();
  });
});

// 모바일로 바뀌어도 tab-3는 바뀌면 안된다.
// 여기서 만약에 3번이 눌리면 moTabContent가 아닌 ~ 해당 인덱스의
$(document).ready(function () {
  let moTabBtn = $(".mobile__tab .swiper .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");
  let moActiveIndex = 0; // 처음에는 첫번째 컨텐츠를 활성화

  function initializeMo() {
    let currentMoActiveTabIndex = moTabBtn.index(
      $(".mobile__tab .swiper .swiper-slide button.btn--active")
    );
    moActiveIndex =
      currentMoActiveTabIndex !== -1 ? currentMoActiveTabIndex : moActiveIndex; // 활성화 된 값이 없으면 기존 값 0을 그대로 유지

    // 767보다 화면 사이즈가 크면 전체 Content를 숨기고 1번만 show 시켜놓은다.
    if (window.innerWidth < 767) {
      moTabBtn.eq(0).addClass("btn--active");
      moTabContent.hide().eq(moActiveIndex).show(); //임시로 켜둠
    } else {
      moTabContent.hide();
    }
  }

  moTabBtn.click(function () {
    let moTabIndex = $(this).parent().index();
    moTabBtn.removeClass("btn--active");
    $(this).addClass("btn--active");

    moTabContent.hide().eq(moTabIndex).show();
    $(".tab__3").hide();
    $(".tab__4").hide();

    if (moTabIndex == 2) {
      moTabContent.hide();
      $(".tab__4").hide();
      $(".tab__3").show();
    } else if (moTabIndex == 3) {
      moTabContent.hide();
      $(".tab__3").hide();
      $(".tab__4").show();
    }
  });

  // 초기화: 첫 번째 탭과 콘텐츠를 활성화 (화면 크기 조건 추가)
  initializeMo();

  // 화면 크기 변경 시 초기화 함수 재실행
  $(window).resize(function () {
    initializeMo();
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
