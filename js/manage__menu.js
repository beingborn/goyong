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



