$(document).ready(function(){

  AOS.init(); 

  $('.user').click(function(){
    $('.black-login').fadeIn();
  });

  $('.black-login').click(function(e){
    console.log(e.target);
    if(e.target == e.currentTarget){
        $('.black-login').fadeOut();
    }
});

  var ww = $(window).width();


  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    const sec1_sct = $('.sec-1').offset().top;
    const sec2_sct = $('.sec-2').offset().top;
    const sec3_sct = $('.sec-3').offset().top;
    const sec4_sct = $('.horizontal-container').offset().top;

    // console.log(sct);
    // if (sct >= sec4_sct && ww > 1600){
    //   skrollr.init();
    //   $('.horizontal-container').css({
    //       position: 'fixed',
    //       top: 0,
    //       left: 0,
    //   });
    // }else{
    //   $('.horizontal-container').css({
    //     position: 'static'
    //   });
    // }

    if(sct >= sec4_sct){
        $('.header-area').addClass('active');
        $('.icon-box svg').addClass('active');
        $('.sub-txt1').addClass('active');
        $('.sub-txt2').addClass('active');
        $('#hamburger span').addClass('skrolls');
        $('.sub-menu-box').addClass('skrolls');
    }else if(sct >= sec3_sct && sct < sec4_sct){
      $('.icon-box svg').removeClass('active');
      $('.header-area').removeClass('active');
      $('#hamburger span').removeClass('skrolls');
      $('.sub-menu-box').removeClass('skrolls');
      $('.sub-txt1').removeClass('active');
      $('.sub-txt2').removeClass('active');
  }
  });

  media();
  function media(){
    let windiwWidth = $(window).width();
    if(windiwWidth >= 812){
      var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        autoplay: {
          delay: 1800,
          disableOnInteraction: false,
        },
      });
    }if(windiwWidth >= 1600){
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".sec");
    
      let scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
          trigger: ".horizontal-container",
          pin: true,
          scrub: 0.1,
          end: "+=3000"
          }
      });
    
      gsap.set(".box-1, .box-2", {y: 100});
      // 스크롤마킹
      // ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});
    
      gsap.to(".box-1", {
      y: -130,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
          trigger: ".box-1",
          containerAnimation: scrollTween,
          start: "left center",
          toggleActions: "play none none reset",
          id: "1",
      }
      });
    
    
      gsap.to(".box-2", {
      y: -120,
      ease: "none",
      scrollTrigger: {
          trigger: ".box-2",
          containerAnimation: scrollTween,
          start: "center 80%",
          end: "center 20%",
          scrub: true,
          id: "2"
      }
      });
    }
  }

  $('.sec-4-txt h2').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    const result = $(this).attr('data-alt');

    $('.sec-4-txt p').removeClass('active');
    $(`#${result}`).addClass('active');
  });

  $('.main-menu li').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');

    $(`#${result}`).addClass('active');

    $('.sub-menu-box').addClass('active');
  });
  
  $('.sub-menu-box').mouseleave(function(){
    $(this).removeClass('active');
  });

  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('.ham-menu').toggleClass('active');
    $('#hamburger span').toggleClass('active');
    $('.icon-box').toggleClass('active');
  });

  let btn = $('.top-btn');
  $(window).scroll(function(){
      if($(window).scrollTop() >= 300){
          btn.fadeIn();
      }else{
          btn.fadeOut();
      }
  });
  btn.click(function(){
      $('html,body').animate({
          scrollTop: 0
      },500);
  });
});
