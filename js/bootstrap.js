$(document).ready(function(){
        //로그인버튼 누르면 모달창 열리게 설정하고 검정배경 누르면 닫히게 설정해보기
    $('#login').click(function(){
        $('.black-background').fadeIn();
    });

    // $('.black-background').click(function(){
    //     $(this).fadeout();
    // });

    //이벤트 버블링
    //현재 ui에서 검정배경을 누르면 모달창 내용물을 눌러도 담힘 이것을 이벤트 버블링 이라고함
    //.target
    //지금 클릭한 요소
    //.currentTarget
    //지금 이벤트 리스너가 달린곳
    $('.black-background').click(function(e){
        console.log(e.target);
        //지금 클릭한 요소가 이벤트리스너가 달린곳과 같다면 페이드아웃 시켜줘
        if(e.target == e.currentTarget){
            $('.black-background').fadeOut();
        }
    });


    // 버튼 누르면 서브메뉴 열리는 ui 만들기(슬라이드 열리고 닫히게)
    $('#nav-sub-button').click(function(){
        $('.nav-sub').slideToggle();
    });

    //스크롤이벤트
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);
        //sct이 200px이상일때 nav-menu,logo 클래스 추가
        //아닐때는 제거
        if(sct >= 200){
            $('.nav-menu').addClass('on');
            $('.logo').addClass('on');
        }else{
            $('.nav-menu').removeClass('on');
            $('.logo').removeClass('on');
        }
    });

});    