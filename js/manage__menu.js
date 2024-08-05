$(document).ready(function() {
    // depth-1 항목 클릭 이벤트 설정
    $('.menu__depth-1 > a').click(function(e) {
        e.preventDefault(); // 링크 기본 동작 방지

        // 클릭된 depth-1 항목의 부모(li 요소)를 active 클래스로 토글
        var $depth1Item = $(this).parent();

        // 다른 depth-1 항목의 active 클래스 제거 및 depth-2 항목 숨기기
        // $('.menu__depth-1').not($depth1Item).removeClass('active').find('.menu__depth-2').slideUp();

        // 클릭된 항목의 depth-2 항목 슬라이드 토글 및 active 클래스 토글
        $depth1Item.toggleClass('active').find('.menu__depth-2').slideToggle();
    });
});


// 기본 css에 innerHeight로 값 주기 
// lnb height 기본값이 auto 여서 slideToggle 기능 수행 시 document가 함께 늘어남. 
// 그래서 innerHeight을 이용해서 값을 유동적으로 지정해줘서 그 안에서만 slide되게 지정함

$(document).ready(function(){
    let lnb = $('.main__content .sub .lnb')
    let lnbHeight = lnb.innerHeight();

    lnb.css('height', lnbHeight)
})



$(document).ready(function(){
    let tablePagination = $('.pagination .page-link') 


    tablePagination.click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지



    $(this).addClass("active");
    tablePagination.not($(this)).removeClass('active')
  });

  tablePagination.eq(0).addClass('active')

})



$(document).ready(function(){
    $('.menu__depth-2').click(function(e){
        e.preventDefault(); // 링크 기본 동작 방지

        $(this).addClass("active");
        $('.menu__depth-2').not($(this)).removeClass('active')


    })

    $('.menu__depth-2').eq(0).addClass('active');
})


