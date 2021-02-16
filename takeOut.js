const dark = document.getElementById('dark');
const cancel = document.querySelectorAll('.cancel')
const card = document.querySelectorAll('.order-card')
const modal = document.querySelectorAll('.modal')
const body = document.querySelector('body')

// const cartItemsHTML = []

// body.appendChild("Yo")

// console.log(modal.length)
// console.log(cancel.length)

for (let i = 0; i < modal.length; i++) {
  card[i].addEventListener('click', () => {
    modal[i].style.display = "unset";
    dark.classList.add('clicked');
    // console.log(`card${i} is clicked`)
  })

  dark.addEventListener('click', () => {
    modal[i].style.display = "none";
    dark.classList.remove('clicked');
    // 個数リセットする処理書こうかなぁ
  })
  cancel[i].addEventListener('click', () => {
    modal[i].style.display = "none";
    dark.classList.remove('clicked');
    // 個数リセットする処理書こうかなぁ
  })
}


const plus = document.querySelectorAll('.plus');
const count = document.querySelectorAll('.count');
const minus = document.querySelectorAll('.minus');

for (let j = 0; j < plus.length; j++) {
  let currentQuantity = parseInt(count[j].innerHTML)

  plus[j].addEventListener('click', () => {
    count[j].innerHTML = ++currentQuantity
    getTotal()
    // console.log(ramen)
    // console.log(getTotal())
    setTotal()
  })
  minus[j].addEventListener('click', () => {
    if (parseInt(count[j].innerHTML) > 0) {
      count[j].innerHTML = --currentQuantity
      getTotal()
      setTotal()
    }
  })
}


// ---------------GET TOTAL---------------
let ramen = [[], [], [], [], [], [], [], []]
let appetizer = []
let drink = []
let other = []
const ramenTotal = document.querySelectorAll('.ramen-total')
const appetizerTotal = document.querySelectorAll('.appetizer-total')
const drinkTotal = document.querySelectorAll('.drink-total')
const otherTotal = document.querySelectorAll('.other-total')
let total = 0

// console.log(appetizerTotal)

function getTotal() {
  let countIndex = 0
  for (let i = 0; i < menuData.ramens.length; i++) {
    for (let j = 0; j < menuData.toppings.length; j++) {
      // console.log(count[countIndex])
      ramen[i][j] = parseInt(count[countIndex].innerHTML)
      countIndex++
    }
  }
  for (let k = 0; k < menuData.appetizers.length; k++) {
    appetizer[k] = parseInt(count[countIndex].innerHTML)
    countIndex++
  }
  for (let l = 0; l < menuData.drinks.length; l++) {
    drink[l] = parseInt(count[countIndex].innerHTML)
    countIndex++
  }
  for (let m = 0; m < menuData.others.length; m++) {
    other[m] = parseInt(count[countIndex].innerHTML)
    countIndex++
  }
}
// ---------------/GET TOTAL---------------





// ---------------SET TOTAL---------------
function setTotal() {
  // total = 0
  for (let n = 0; n < menuData.ramens.length; n++) { // 0-7 ramen-total
    total = 0
    ramenTotal[n].innerHTML = parseInt(ramenTotal[n].innerHTML)
    for (o = 0; o < menuData.toppings.length; o++) {  // 0-5
      total += ramen[n][o] * menuData.toppings[o].price
    }
    ramenTotal[n].innerHTML = (menuData.ramens[n].price + total).toFixed(2)

    // ここで値段とかの引数渡して、アペンドする関数呼ぶ?
  }

  for (p = 0; p < menuData.appetizers.length; p++) { // appetizer
    total = 0
    appetizerTotal[p].innerHTML = parseInt(appetizerTotal[p].innerHTML)
    total += appetizer[p] * menuData.appetizers[p].price
    appetizerTotal[p].innerHTML = total.toFixed(2)
  }

  for (q = 0; q < menuData.drinks.length; q++) {
    total = 0
    drinkTotal[q].innerHTML = parseInt(drinkTotal[q].innerHTML)
    total += drink[q] * menuData.drinks[q].price
    drinkTotal[q].innerHTML = total.toFixed(2)
  }

  for (r = 0; r < menuData.others.length; r++) {
    total = 0
    otherTotal[r].innerHTML = parseInt(otherTotal[r].innerHTML)
    total += other[r] * menuData.others[r].price
    otherTotal[r].innerHTML = total.toFixed(2)
  }
}

// console.log(appetizerTotal)

// ---------------/SET TOTAL---------------



// ---------------APPEND TO CART---------------
// add to cart のクリックイベントここに書く
// const url = location.pathname
// location.pathname = /
// console.log(url)

let cartWrapperHTML = ``
let cartContainerHTML = ``


$(function () {
  'use strict';

  $.ajax({
    type: 'GET',
    //   url:'/cart/',
    url: '/cart.html',
    dataType: 'html'
  })
    .then(

      //通信成功時
      function (data) {

        // const cartWrapper = document.querySelector('.cart-wrapper')
        const cartWrapper = $(data).find('.cart-wrapper')
        const addToCart = document.querySelectorAll('.add-to-cart')
        const items = document.querySelectorAll('.items')

        const span = document.createElement('span')


        // console.log(cartWrapper)
        // console.log(cartWrapper[0].innerHTML)
        // console.log(cartContainer)

        const cartItemsHTML = []

        const getCartWrapperHTML = (img, kind, name, toppingArr, quantity, price) => {
          const cartContainer = document.createElement('div')

          cartContainer.classList.add('cart-container')
          // console.log(img)
          // console.log(kind)
          // console.log(name)
          // console.log(toppingArr)
          // console.log(quantity)
          // console.log(price)

          let toppingHTML = ``;


          if (kind === "ramen") {
            toppingHTML = `<p>toppings :</p>`
            for (let toppingItem of toppingArr) {
              toppingHTML += `
            <p>&emsp;&emsp;${toppingItem}</p>
            `
            }
          }


          cartContainer.innerHTML = `

          <div class="cart-content">
            <div class="image">
                <img src="${img}" width="150" height="150" alt="">
            </div>
            <div class="items">
                <h3>${name}</h3>
                ${toppingHTML}
            </div>
            <div class="price">
                <p>Quantity: ${quantity}</p>
                <h4>CA$<span class="price-item">${price}</span></h4>
            </div>
          </div>

          <div class="cart-bottom">
            <span class="remove">Remove</span>
          </div>

          `

          // console.log(cartWrapper[0])
          // cartWrapper[0].appendChild(cartContainer)

          // const span = document.createElement('span')
          // span.innerText = "Yoo"
          // console.log(str)
          cartWrapper[0].innerHTML = ``
          cartWrapper[0].appendChild(cartContainer)
          // cartWrapper[0].appendChild(span)

          // console.log(cartWrapper[0])
          // console.log(typeof(cartContainer))
          // console.log(cartContainer)
          // console.log(typeof(cartContainer.innerHTML))
          // console.log(cartContainer.innerHTML)
          // return cartWrapper[0]

          // $(".cart-wrapper").load(cartContainer)
          // $(".ramen").load("cart.html div.cart-wrapper")
          // $(".ramen").load("cart.html .cart")
          // $(".cart-wrapper").load(".cart-wrapper")
          // $("cart.html")

          // console.log(cartContainer)

          // console.log(toppingHTML)
          // cartItemsHTML.push(cartContainer)

          cartItemsHTML.push(cartContainer)
          // window.localStorage.setItem('item', cartContainer);

          // return cartItemsHTML
          // console.log(typeof(cartWrapper[0].innerHTML))
          // console.log(cartWrapper[0].innerHTML)
// ------------------------------------------------------------------------
          // return cartWrapper[0].innerHTML
// ------------------------------------------------------------------------
          return cartWrapper[0].innerHTML
// ------------------------------------------------------------------------


        }


// ------------------------------------------------------------------------
        // appendToCart("image1", "ramen", "Gyoza", ["味玉", "メンマ"], 2, 19)
        let localStorageIndex = 0

        const ramenImg = document.querySelectorAll('.modal-img-ramen')
        const ramenName = document.querySelectorAll('.modal-name-ramen')
        const ramenPrice = document.querySelectorAll('.modal-price-ramen')
        const addRamen = document.querySelectorAll('.addRamen')


        const image = document.querySelectorAll('.order-card-img > img')

        const createToppingArray = (index) => {
          let toppingArray = []
          const countTopping = document.querySelectorAll('.count-topping')
          // console.log(countTopping.length)

          // for (let j = 0; j < menuData.toppings.length; j++) {
          //     if (countTopping[j].innerHTML != 0) {
          //         toppingArray.push(menuData.toppings[j].name)
          //     }
          // }
          let k = index * 6;
          let l = 0;
          for (let j = index * 6; j < k + 6; j++) {
            // console.log(l)
            if (countTopping[j].innerHTML != 0) {
              toppingArray.push(menuData.toppings[l].name)
            }
            l++
          }
          return toppingArray
        }
        // console.log(ramenQuantity[0].innerHTML)

        
        let currentLength = 0

        for (let i = 0; i < addRamen.length; i++) {
          // console.log(toppingArray)
          addRamen[i].addEventListener('click', () => {
            const imagePath = image[i].getAttribute('src')
            const name = ramenName[i].innerHTML
            // const price = parseInt(ramenPrice[i].innerHTML)
            const price = parseFloat(ramenPrice[i].innerHTML)

            // console.log(imagePath)
            // console.log(name)
            // console.log(createToppingArray(i))
            // console.log(price)

            // console.log(price)
            // console.log(createToppingArray())
            // console.log(ramenQuantity[i].innerHTML)
            // appendToCart(ramenImg)
// ------------------------------------------------------------------------
            // cartWrapperHTML = getCartWrapperHTML(imagePath, "ramen", name, createToppingArray(i), 1, price)
// ------------------------------------------------------------------------
            cartContainerHTML = getCartWrapperHTML(imagePath, "ramen", name, createToppingArray(i), 1, price)
// ------------------------------------------------------------------------

            // console.log(typeof(cartWrapperHTML))
            // window.localStorage.setItem('items', JSON.stringify(cartWrapperHTML));
// ------------------------------------------------------------------------
            // window.localStorage.setItem('items', cartWrapperHTML);
// ------------------------------------------------------------------------
            // window.localStorage.setItem(`localStorageLength`, 0)
            // window.localStorage.setItem(`localStorageLength`, currentLength)
            // console.log(localStorageIndex)
            window.localStorage.setItem(`item${currentLength}`, cartContainerHTML)
            localStorageIndex++
            currentLength++
            window.localStorage.setItem(`localStorageLength`, currentLength)

// ------------------------------------------------------------------------

            // cartWrapper[0].appendChild(span)

            const itemObj = window.localStorage.getItem('items')

            // for (let j = 0; j < cartWrapperHTML.length; j++) {
            //   window.localStorage.setItem('items', cartWrapperHTML[i]);
            // }

            // const cartContainerHTML = getCartWrapperHTML(imagePath, "ramen", name, createToppingArray(i), 1, price)
            // window.localStorage.setItem(`item${i}`, cartContainerHTML);
            // window.localStorage.setItem('items', cartWrapperHTML);

            // const cartcreateCartContainer()

          })
          // appendToCart(`ramen${i+1}`, "ramen", )
        }


        const appetizerImg = document.querySelectorAll('.modal-img-appetizer')
        const appetizerName = document.querySelectorAll('.modal-name-appetizer')
        const appetizerPrice = document.querySelectorAll('.modal-price-appetizer')
        const appetizerQuantity = document.querySelectorAll('.modal-quantity-appetizer')
        const addAppetizer = document.querySelectorAll('.addAppetizer')
        const imagePathAppetizer = document.querySelectorAll('.appetizer img')
        // console.log(addAppetizer.length)
        for (let i = 0; i < addAppetizer.length; i++) {
          addAppetizer[i].addEventListener('click', () => {
            const imagePath = imagePathAppetizer[i].getAttribute('src')
            const name = appetizerName[i].innerHTML
            const price = parseFloat(appetizerPrice[i].innerHTML)
            const quantity = parseInt(appetizerQuantity[i].innerHTML)
  
            // console.log(imagePath)
            // console.log(name)
            // console.log(price)
            // console.log(quantity)

            // window.localStorage.setItem('items', cartWrapperHTML);
            cartContainerHTML = getCartWrapperHTML(imagePath, "appetizer", name, [], quantity, price)
            window.localStorage.setItem(`item${currentLength}`, cartContainerHTML)
            localStorageIndex++
            currentLength++
            window.localStorage.setItem(`localStorageLength`, currentLength)
          })
        }

        const drinkImg = document.querySelectorAll('.modal-img-drink')
        const drinkName = document.querySelectorAll('.modal-name-drink')
        const drinkPrice = document.querySelectorAll('.modal-price-drink')
        const drinkQuantity = document.querySelectorAll('.modal-quantity-drink')
        const addDrink = document.querySelectorAll('.addDrink')
        const imagePathDrink = document.querySelectorAll('.drink img')

        for (let i = 0; i < addDrink.length; i++) {
          addDrink[i].addEventListener('click', () => {
            const imagePath = imagePathDrink[i].getAttribute('src')
            const name = drinkName[i].innerHTML
            const price = parseFloat(drinkPrice[i].innerHTML)
            const quantity = parseInt(drinkQuantity[i].innerHTML)
  
            // console.log(imagePath)
            // console.log(name)
            // console.log(price)
            // console.log(quantity)

            cartContainerHTML = getCartWrapperHTML(imagePath, "appetizer", name, [], quantity, price)
            window.localStorage.setItem(`item${currentLength}`, cartContainerHTML)
            localStorageIndex++
            currentLength++
            window.localStorage.setItem(`localStorageLength`, currentLength)
          })
        }

        const otherImg = document.querySelectorAll('.modal-img-other')
        const otherName = document.querySelectorAll('.modal-name-other')
        const otherPrice = document.querySelectorAll('.modal-price-other')
        const otherQuantity = document.querySelectorAll('.modal-quantity-other')
        const addOther = document.querySelectorAll('.addOther')
        const imagePathOther = document.querySelectorAll('.other img')

        for (let i = 0; i < addOther.length; i++) {
          addOther[i].addEventListener('click', () => {
            const imagePath = imagePathOther[i].getAttribute('src')
            const name = otherName[i].innerHTML
            const price = parseFloat(otherPrice[i].innerHTML)
            const quantity = parseInt(otherQuantity[i].innerHTML)
  
            console.log(imagePath)
            console.log(name)
            console.log(price)
            console.log(quantity)

            cartContainerHTML = getCartWrapperHTML(imagePath, "appetizer", name, [], quantity, price)
            window.localStorage.setItem(`item${currentLength}`, cartContainerHTML)
            localStorageIndex++
            currentLength++
            window.localStorage.setItem(`localStorageLength`, currentLength)
          })
        }


        // const refresh = document.querySelector('.refresh')
        // refresh.addEventListener('click', (e) => {
        //   e.preventDefault()
        //   // $(".cart-wrapper").load("")
        //   // cartWrapper.appendChild()
        //   // console.log(cartItemsHTML)
        //   // cartWrapper.innerHTML = cartWrapperHTML
      })
})


// operations on cart.html


// const imageSrc = image[0].getAttribute('src')
// console.log(imageSrc0)
// console.log(imageSrc0)

// appendToCart(img, kind, name, toppings, quantity, price)

// ---------------/APPEND TO CART---------------
// appendToCart("./img/ramen1.jpg", "ramen", "shoyu", ["aji", "menma"], 1, 45)

