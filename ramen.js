const ramenMenu = document.querySelector('.popup-ramen-menu');
const ramenBox = document.querySelector('.ramenBox');
// const dark = document.querySelector('#dark');
// ramenBox.addEventListener('click', function() {
//   ramenMenu.classList.remove('pop-hide');
// })
const dark2 = document.querySelector('#dark2');
//ramen
$(function () {

  let scrollPos;
  $('.ramenBox').click(function() {
    scrollPos = $(window).scrollTop();
    dark2.classList.add('clicked');
    $('.popup-ramen-menu').fadeIn();
    $('body').addClass('fixed').css({ top: -scrollPos });
    console.log(scrollPos)
  });
    
    $('.fas').click(function() {
      $('.popup-ramen-menu').fadeOut();
      dark2.classList.remove('clicked');
      $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
      $(window).scrollTop(scrollPos);
    
  });
  
  $(' #dark2, ramenbox').click(function() {
    $('.popup-ramen-menu').fadeOut();
    dark2.classList.remove('clicked');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);
  
});
});

//appetizer
$(function () {

  let scrollPos;
  $('.appetizerBox').click(function() {
    scrollPos = $(window).scrollTop()
    $('.popup-appetizer-menu').fadeIn();
    dark2.classList.add('clicked');
    $('body').addClass('fixed').css({ top: -scrollPos });
  });
  
  $('.fas, #dark2').click(function() {
    $('.popup-appetizer-menu').fadeOut();
    dark2.classList.remove('clicked');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);
  });

  
});

//drink
$(function () {

  let scrollPos;
  $('.drinkBox').click(function() {
    scrollPos = $(window).scrollTop()
    $('.popup-drink-menu').fadeIn();
    dark2.classList.add('clicked');
    $('body').addClass('fixed').css({ top: -scrollPos });
  });
  
  $('.fas, #dark2').click(function() {
    $('.popup-drink-menu').fadeOut();
    dark2.classList.remove('clicked');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);
  });

  
});


//others
$(function () {

  let scrollPos;
  $('.otherBox').click(function() {
    scrollPos = $(window).scrollTop()
    $('.popup-others-menu').fadeIn();
    dark2.classList.add('clicked');
    $('body').addClass('fixed').css({ top: -scrollPos });
  });
  
  $('.fas, #dark2').click(function() {
    $('.popup-others-menu').fadeOut();
    dark2.classList.remove('clicked');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $(window).scrollTop(scrollPos);
  });

  
});
$('.otherBox').click(function() {
  $('.popup-others-menu').fadeIn();
  dark2.classList.add('clicked');
});

$('.fas').click(function() {
  $('.popup-others-menu').fadeOut();
  dark2.classList.remove('clicked');
});

$('#dark2').click(function() {
  $('.popup-others-menu').fadeOut();
  dark2.classList.remove('clicked');
});