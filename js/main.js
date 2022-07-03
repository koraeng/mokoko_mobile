$(function(){
    var headerTop = $('header').offset().top;
    console.log(`헤더가 위에서부터 떨어져 있는 거리는?`)
    
    $(window).scroll(function(){    //스크롤 이벤트가 발생하면
    var scroll = $(window).scrollTop();
    console.log(`스크롤 된 거리는?${scroll}`);

        if(scroll >= headerTop){
            $('header').addClass('stick');
        } else {
            $('header').removeClass('stick');
        }
    });
});
