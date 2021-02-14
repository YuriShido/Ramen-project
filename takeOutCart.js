const refresh = document.querySelector('.refresh')
const cartWrapper = document.querySelector('.cart-wrapper')
let cartContainer = document.querySelectorAll('.cart-container')
const cartContent = document.querySelectorAll('.cart-content')
let remove = document.querySelectorAll('.remove')
let priceItem = document.querySelectorAll('.price-item')
const priceTotal = document.querySelector('.price-total')
const items = window.localStorage.getItem('items');


let removeLength = 0;
let priceItemLength = 0;

// function reflesh() {
  //   cartWrapper.innerHTML = items
  //   cartContainer = document.querySelectorAll('.cart-container')
  //   remove = document.querySelectorAll('.remove')
  // }
  
  // reflesh()
  function setTotalAmount() {
  let totalAmount = 0;
  // console.log(priceItemLength)

  if (priceItemLength == 0) {
    priceTotal.innerHTML = 0
  } else {
    for (let j = 0; j < priceItemLength; j++) {
      console.log(priceItem[j].innerHTML)
      // console.log("j is: " + j)
      // console.log(priceItem[0].innerHTML)
      totalAmount += parseFloat(priceItem[j].innerHTML)
    }
    priceTotal.innerHTML = totalAmount
  }
}

refresh.addEventListener('click', (e) => {
  e.preventDefault()

  cartWrapper.innerHTML = items
  cartContainer = document.querySelectorAll('.cart-container')
  remove = document.querySelectorAll('.remove')
  priceItem = document.querySelectorAll('.price-item')

  removeLength = remove.length
  priceItemLength = priceItem.length
  console.log("remove length is " + removeLength)
  console.log("price item length is " + priceItemLength)
  // console.log(removeLength)
  // console.log(priceItem)
  setTotalAmount()
  // reflesh();
  // console.log(cartWrapper)


  // console.log(remove.length)
  // for (let k = 0; k < remove.length; k++){
  //   console.log(remove[k])
  // }
  
  for (let i = 0; i < removeLength; i++) {
    remove[i].addEventListener('click', () => {
      cartContainer[i].remove()

      priceItem = document.querySelectorAll('.price-item')
      priceItemLength = priceItem.length

      console.log(window.localStorage.getItem('items'))


      setTotalAmount()

      // cartContainer = document.querySelectorAll('.cart-container')
      // remove = document.querySelectorAll('.remove')
      // reflesh()
      // console.log(remove.length)
      // console.log(cartContainer[i])
    })
  }
})

// while(true) {
// reflesh()

// }


// console.log(remove.length)