const refresh = document.querySelector('.refresh')
const cartWrapper = document.querySelector('.cart-wrapper')

refresh.addEventListener('click', () => {
  const items = window.localStorage.getItem('items');
  cartWrapper.innerHTML = items
})



// $(function () {
//   'use strict';

//   $.ajax({
//     type: 'GET',
//     //   url:'/cart/',
//     url: '/takeOut.html',
//     dataType: 'html'
//   })
//   .then(
//     function(data) {  
//         // const yoyo = $(data).find('.yoyo')

//         refresh.addEventListener('click', () => {
//           console.log("CLICKED")
//           // console.log(yoyo)
//           // getCartwrapperHTML()
//           // console.log(getCartwrapperHTML())
//           const items = window.localStorage.getItem('items');
//           // console.log(window.localStorage.getItem('items'))
//           console.log(items)

//         })


//       }
//     )
// })