const ramenMenu = document.querySelector('.popup-ramen-menu');
const ramenBox = document.querySelector('.ramenBox');
// const dark = document.querySelector('#dark');
// ramenBox.addEventListener('click', function() {
//   ramenMenu.classList.remove('pop-hide');
// })

//ramen
$('.ramenBox').click(function() {
  dark.classList.add('clicked');
  $('.popup-ramen-menu').fadeIn();
});

$('.fas').click(function() {
  $('.popup-ramen-menu').fadeOut();
  dark.classList.remove('clicked');
});

$('#dark').click(function() {
  $('.popup-ramen-menu').fadeOut();
  dark.classList.remove('clicked');
});
// $(document).on('click touchend', function(event) {
//   // 表示したポップアップ以外の部分をクリックしたとき
//   if (!$(event.target).closest('.ramenBox').length) {
//     $('.popup-ramen-menu').fadeOut();
//   }
// });

//appetizer
$('.appetizerBox').click(function() {
  $('.popup-appetizer-menu').fadeIn();
  dark.classList.add('clicked');
});

$('.fas').click(function() {
  $('.popup-appetizer-menu').fadeOut();
  dark.classList.remove('clicked');
});
$('#dark').click(function() {
  $('.popup-appetizer-menu').fadeOut();
  dark.classList.remove('clicked');
});


//drink
$('.drinkBox').click(function() {
  $('.popup-drink-menu').fadeIn();
  dark.classList.add('clicked');
});

$('.fas').click(function() {
  $('.popup-drink-menu').fadeOut();
  dark.classList.remove('clicked');
});
$('#dark').click(function() {
  $('.popup-drink-menu').fadeOut();
  dark.classList.remove('clicked');
});


//others
$('.otherBox').click(function() {
  $('.popup-others-menu').fadeIn();
  dark.classList.add('clicked');
});

$('.fas').click(function() {
  $('.popup-others-menu').fadeOut();
  dark.classList.remove('clicked');
});

$('#dark').click(function() {
  $('.popup-others-menu').fadeOut();
  dark.classList.remove('clicked');
});