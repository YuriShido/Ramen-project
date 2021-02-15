const refresh = document.querySelector('.refresh')
const cartWrapper = document.querySelector('.cart-wrapper')
let cartContainer = document.querySelectorAll('.cart-container')
const cartContent = document.querySelectorAll('.cart-content')
let remove = document.querySelectorAll('.remove')
let priceItem = document.querySelectorAll('.price-item')
const priceTotal = document.querySelector('.price-total')
// ------------------------------------------------------------------------
// const items = window.localStorage.getItem('items');
// ------------------------------------------------------------------------
let items = ``
// for (let i = 0; i < window.localStorage.length; i++) {
//   items += window.localStorage.getItem(`item${i}`)
// }
// console.log(window.localStorage.length)
// ------------------------------------------------------------------------



let removeLength = 0;
// let currentLength = 0;
let currentLength = window.localStorage.getItem('localStorageLength')

// function reflesh() {
//   cartWrapper.innerHTML = items
//   cartContainer = document.querySelectorAll('.cart-container')
//   remove = document.querySelectorAll('.remove')
// }


function setTotalAmount() {
  let totalAmount = 0;
  // console.log(currentLength)

  if (currentLength == 0) {
    priceTotal.innerHTML = 0
  } else {
    for (let j = 0; j < currentLength; j++) {
      // console.log(priceItem[j].innerHTML)
      // console.log("j is: " + j)
      // console.log(priceItem[0].innerHTML)
      totalAmount += parseFloat(priceItem[j].innerHTML)
    }
    priceTotal.innerHTML = totalAmount
  }
}

refresh.addEventListener('click', (e) => {
  e.preventDefault()
  items = ``
  // ------------------------------------------------------------------------
  // cartWrapper.innerHTML = items
  // ------------------------------------------------------------------------
  for (let j = 0; j < window.localStorage.length; j++) {
    // console.log(`J is ${j}`)
    // console.log(items)
    if (window.localStorage.getItem(`item${j}`) !== null) {
      items += window.localStorage.getItem(`item${j}`)
      // console.log(items)
    }
  }
  cartWrapper.innerHTML = items

  // ------------------------------------------------------------------------
  cartContainer = document.querySelectorAll('.cart-container')
  remove = document.querySelectorAll('.remove')
  priceItem = document.querySelectorAll('.price-item')

  removeLength = remove.length
  currentLength = priceItem.length


  // console.log("remove length is " + removeLength)
  // console.log("price item length is " + currentLength)

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
      console.log(i)
      window.localStorage.removeItem(`item${i}`)

      priceItem = document.querySelectorAll('.price-item')
      // currentLength = priceItem.length
      
      // console.log(window.localStorage.getItem('items'))
      
      
      let newIndex = 0
      // console.log(currentLength)
      for (let j = 0; j < currentLength; j++) {
        console.log(j + "  " + i)
        if (j !== i) {
          console.log("conduced")
          window.localStorage.setItem(`item${newIndex}`, window.localStorage.getItem(`item${j}`))
          newIndex++
        }
      }
      currentLength--
      window.localStorage.setItem('localStorageLength', currentLength)


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