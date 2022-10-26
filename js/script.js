// Hide and Show
let changeIcon = function (icon) {
  icon.classList.toggle('fa-plus')
}
let changeIcon1 = function (icon) {
  icon.classList.toggle('fa-plus')
}
let changeIcon2 = function (icon) {
  icon.classList.toggle('fa-plus')
}
let changeIcon3 = function (icon) {
  icon.classList.toggle('fa-plus')
}
let changeIcon4 = function (icon) {
  icon.classList.toggle('fa-plus')
}


$(document).ready(function () {
  $("#wid_dash").click(function () {
    $("#category_list").toggle(500, 0);
  });
  $("#wid_dash1").click(function () {
    $("#category_list1").toggle(500);
  });
  $("#wid_dash2").click(function () {
    $("#category_list2").toggle(500);
  });
  $("#wid_dash3").click(function () {
    $("#category_list3").toggle(500);
  });
  $("#wid_dash4").click(function () {
    $("#category_list4").toggle(500);
  });
});
// function myFunction() {
//   var x = document.getElementById("category_list");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//     document.getElementById("category_list").style.transition = "all 2s";
//   }
// }
// function myFunction1() {
//   var x = document.getElementById("category_list1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function myFunction2() {
//   var x = document.getElementById("category_list2");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function myFunction3() {
//   var x = document.getElementById("category_list3");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// function myFunction4() {
//   var x = document.getElementById("category_list4");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// menu-fix
var menu = $('.header_bottom').offset().top;

$(window).scroll(function () {
  var scroll = $(this).scrollTop();

  if (menu < scroll) {
    $('.header_bottom').addClass('menu_fix');
  } else {
    $('.header_bottom').removeClass('menu_fix');
  }

  // banner_slider
  // $('.owl-carousel').owlCarousel({
  //   smartSpeed: 600,
  //   autoplay: true,
  //   margin: 20,
  //   items: 1,
  //   loop: true,
  //   autoplayHoverPause: true,
  //   autoplaySpeed: 500,
  //   nav: true,
  // })
});
document.addEventListener('DOMContentLoaded', function () {
  new WOW().init();

  // bt_top
  $('.bt_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });
  $(window).scroll(function () {
    var abc = $(this).scrollTop();

    if (abc > 200) {
      $('.bt_top').fadeIn();
    } else {
      $('.bt_top').fadeOut();
    }
  });

})

$('.owl-carousel').owlCarousel({
  smartSpeed: 600,
  autoplay: true,
  margin: 20,
  items: 1,
  loop: true,
  autoplayHoverPause: true,
  autoplaySpeed: 500,
  nav: true,
});


$(function () {

  $('.clint_logo').slick({
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 1000,
    speed:200,
    responsive: [

      {
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
                autoplay: false,
                autoplaySpeed: 1500,
                speed:600,
            }
        },
      {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: false,
                autoplaySpeed: 1500,
                speed:600,
            }
        },
      {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed:600,
            }
        },
      {
            breakpoint: 451,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed:600,
            }
        },
        {
          breakpoint: 576,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplay: true,
                  autoplaySpeed: 1500,
                  speed: 500,
              }
        },
      ]
  });
  $('.category_wrap').slick({
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 1000,
    speed:200,
    responsive: [
      {     
            breakpoint: 1400,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
      {     
            breakpoint: 1200,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
      {     
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
      {     
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
      {     
            breakpoint: 451,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
      {
        breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 500,
            }
      },
        
      ]
  });



  // Horizental FIlter
  var $dropdown = $('.dropdown').beefup({
    animation: 'fade',
    openSingle: true,
    selfClose: true
  });

  // Close dropdown
  $('.dropdown').on('click', 'li', function () {
    $dropdown.close();
  });


  // $('.show11').on('click',function(){
  //   $('.offcanvus').css('left','0px')
  // })
  // $('.cross11').on('click',function(){
  //   $('.offcanvus').css('left','-100%')
  // })

  $('#left').offcanvas({
    modifiers: "left,overlay",
    triggerButton: '.js-offcanvas-trigger-left'
  });

  $(window).load(function () {
    $('#preloader').delay(300).fadeOut(300);
  });

  
});


// sign-in
$('.signin').on('click', function () {
  $('.sign_in').css('top', '10%');
});
$('.hide2').on('click', function () {
  $('.sign_in').css('top', '-100%');
});

// sign-up
$('.signup').on('click', function () {
  $('.up_sign').css('left', '0');
});
$('.hide').on('click', function () {
  $('.up_sign').css('left', '-100%');
});

// chart-js
$('.chart1').on('click', function () {
  $('.chart').css('right', '0');
});
$('.close').on('click', function () {
  $('.chart').css('right', '-350px');
});

// f_select-js
$('.on_btn1').on('click', function(){
  $('.f_a_btn1').fadeToggle(300);
});

$('.on_btn2').on('click', function(){
  $('.f_a_btn2').fadeToggle(300);
});

$('.on_btn3').on('click', function(){
  $('.f_a_btn3').fadeToggle(300);
});

$('.on_btn4').on('click', function(){
  $('.f_a_btn4').fadeToggle(300);
});

$('.on_btn5').on('click', function(){
  $('.f_a_btn5').fadeToggle(300);
});

// mixit-up
var containerEl = document.querySelector('.g_row');

var mixer = mixitup(containerEl);

$(window).load(function () {
  $('#preloader').delay(300).fadeOut(300);
});
