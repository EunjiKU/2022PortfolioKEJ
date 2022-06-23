$(function (){
  // AOS Instance
  AOS.init(); 


  //팝업
  var popupblack = document.querySelector('#popup_sec');
  var popupbtn = document.querySelector('.popupbtn');

  popupbtn.addEventListener('click',function(){
    popupblack.style.display = 'none';
    });


  //햄버거 버튼
  $('#habbtn').click(function(){
    $(this).toggleClass('hamactive');
    });


  // 언어 - 한국어 & 영어
  var language = document.querySelectorAll('#language li a');
  for(var i = 0 ; language.length > i ; i++){
    language[i].addEventListener('click',function(e){
      for(var x = 0; x < language.length; x++){
        language[x].classList.remove('llactive');
        e.target.classList.add('llactive');
    }
    });
  }


  // 언어 - arrow
  $('#langbtn').click(function(){
    $("#langbtn i").toggleClass('arrowrotate');
    $(".delangpops").toggleClass('lactive');
    $(".delangpop").toggleClass('lactive');
  });



  //헤더 스크롤 효과
  $(document).on('scroll', function(){
    if($(window).scrollTop() > 100){
        $("#header").removeClass("deheadactive");
        $("#header").addClass("headactive");
    }else{
        $("#header").removeClass("headactive");
        $("#header").addClass("deheadactive");
    }
  })


  //반응형 PC 헤더
  $('#p-nav #mainmenu').mouseover(function(){
    $('#header').addClass("heademouse");
    $('.hr').addClass("headhr");
    $('#header').removeClass("deheademouse");
    $('.hr').removeClass("deheadhr");
  });
  $('#p-nav #mainmenu').mouseleave(function(){
    $('#header').addClass("deheademouse");
    $('.hr').addClass("deheadhr");
    $('#header').removeClass("heademouse");
    $('.hr').removeClass("headhr");
  });

  const mainmenuLi = document.querySelectorAll('#mainmenu > li > a');
  mainmenuLi.forEach( li => {
    li.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });


// //반응형 MOBILE 헤더
      $("#habbtn").click(function(){
        $(".m").toggleClass('menuactive');
        $(".menublack").toggleClass('blactive');
      });
      $("#m-nav #mainmenu > li").click(function(){
        $('#m-nav .submenu').stop().slideUp(400);
        $(this).children(".submenu").stop().slideToggle(400);
      })

  //   $(window).resize(function (){  
  //     if (window.innerWidth <= 1024) {
  //     }
  // });


  // 메인 슬라이드
  var swiper1 = new Swiper(".mainslide", {
    slidesPerView:1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      autoplay: {
        delay: 2500,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // 게임 슬라이드
  var swiper2 = new Swiper(".guideslide", {
    slidesPerView: 2,
    spaceBetween: 14,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { //반응형 조건 속성
      769: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      1025: {
        spaceBetween: 60,
        slidesPerView: 3,
      }
    }
  });


  // 이벤트 슬라이드
  var swiper3 = new Swiper(".eventslide", {
    slidesPerView: 2,
    spaceBetween: 14,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: { //반응형 조건 속성
      769: {
        spaceBetween: 30,
      },
      1025: {
        spaceBetween: 60,
      }
    }
  });


  // 파트너 슬라이드
  var swiper4 = new Swiper(".partnerslide", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween:14,
    autoplay: {
      delay: 2500,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: { //반응형 조건 속성
      769: {
        slidesPerView: 3,
        spaceBetween:60,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween:60,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween:60,
      }
    }
  });


  // tab
  var targetLink = document.querySelectorAll('.tab-menu a');
  var tabContent = document.querySelectorAll('#tab-content > div');
  for(var i = 0; i < targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
      e.preventDefault();
      var orgTarget = e.target.getAttribute('href');
      var tabTarget = orgTarget.replace('#','');
      for(var j = 0; j < tabContent.length; j++){
          tabContent[j].style.display='none';
      }
      document.getElementById(tabTarget).style.display = 'block';
      for(var x = 0; x < targetLink.length; x++){
          targetLink[x].classList.remove('gactive');
          e.target.classList.add('gactive');
      }
    });
  }
  for(var j = 0; j < tabContent.length; j++){
    tabContent[j].style.display='none';
    document.getElementById('tabs-1').style.display = 'block';
  }
});