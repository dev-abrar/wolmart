// preeloader-js
$(window).load(function () {
    $('#preloader').delay(300).fadeOut(300);
  });

  $('.menu_btn').click(function(){
    $('.mobile_menu').toggleClass('out');
  });

  // mobile_menu

  $('.menu_toggle').on('click', function(){
      $('.nav_menu').css('left', '0');
  });
  $('.nv_cross').on('click', function(){
      $('.nav_menu').css('left', '-100%');
  });
  
// mobile_menu
  $('#mbtn1').on('click', function(){
    $('.mobile_nav_item').css('display', 'block');
    $('.mobile_nav_item2').css('display', 'none');
    $('#mbtn1').css('borderBottom', '3px solid #f14242');
    $('#mbtn2').css('borderBottom', '3px solid #ddd');
});
$('#mbtn2').on('click', function(){
    $('.mobile_nav_item2').css('display', 'block');
    $('.mobile_nav_item').css('display', 'none');
    $('#mbtn2').css('borderBottom', '3px solid #f14242');
    $('#mbtn1').css('borderBottom', '3px solid #ddd');
});

// account-js
$('.abtn1').on('click', function(){
  $('.form_1st_item').css('display', 'block');
  $('.form_2nd_item').css('display', 'none');
  $('.abtn1').css('borderBottom', '3px solid #f14242');
  $('.abtn2').css('borderBottom', '3px solid #ddd');
});
$('.abtn2').on('click', function(){
  $('.form_2nd_item').css('display', 'block');
  $('.form_1st_item').css('display', 'none');
  $('.abtn2').css('borderBottom', '3px solid #f14242');
  $('.abtn1').css('borderBottom', '3px solid #ddd');
});



$('.ston').on('click', function(){
$('.acor1').toggleClass('acno');
$('.ston').toggleClass('ad');
});
$('.ston1').on('click', function(){
$('.acor2').toggleClass('acno');
$('.ston1').toggleClass('ad');
});
$('.ston2').on('click', function(){
$('.acor3').toggleClass('acno');
$('.ston2').toggleClass('ad');
});
$('.ston3').on('click', function(){
$('.acor4').toggleClass('acno');
$('.ston3').toggleClass('ad');
});

$(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "1"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "07/10/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

  // counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});






  