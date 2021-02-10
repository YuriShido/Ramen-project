const ramenMenu = document.querySelector('.popup-ramen-menu');
const ramenBox = document.querySelector('.ramenBox');

// ramenBox.addEventListener('click', function() {
//   ramenMenu.classList.remove('pop-hide');
// })


$('.ramenBox').click(function() {
  $('.popup-ramen-menu').fadeIn();
});

$('.fas').click(function() {
  $('.popup-ramen-menu').fadeOut();
});
// $(document).on('click touchend', function(event) {
//   // 表示したポップアップ以外の部分をクリックしたとき
//   if (!$(event.target).closest('.ramenBox').length) {
//     $('.popup-ramen-menu').fadeOut();
//   }
// });

$('.appetizerBox').click(function() {
  $('.popup-appetizer-menu').fadeIn();
});

$('.fas').click(function() {
  $('.popup-appetizer-menu').fadeOut();
});

$('.drinkBox').click(function() {
  $('.popup-drink-menu').fadeIn();
});

$('.fas').click(function() {
  $('.popup-drink-menu').fadeOut();
});
$('.otherBox').click(function() {
  $('.popup-others-menu').fadeIn();
});

$('.fas').click(function() {
  $('.popup-others-menu').fadeOut();
});