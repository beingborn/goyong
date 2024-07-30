$(document).ready(function(){
    let subTabBtn = $('.tab__wrap .tab__btn button');
    let subTabContent = $('.tab__content .tab');
    console.log(subTabContent)

    subTabBtn.click(function(){
        let tabIndex = $(this).parent().index();

        subTabBtn.removeClass('active');
        $(this).addClass('active');

        subTabContent.hide(500).eq(tabIndex).show(500);
    });

    // 초기화: 첫 번째 탭과 콘텐츠를 활성화 
    subTabBtn.eq(0).addClass('active');
    subTabContent.hide().eq(0).show();
});

