const dark = document.getElementById('dark');
const cancel = document.querySelectorAll('.cancel')
const card = document.querySelectorAll('.order-card')
const modal = document.querySelectorAll('.modal')
const body = document.querySelector('body')

// console.log(modal.length)
// console.log(cancel.length)


for (let i = 0; i < modal.length; i++) {
    card[i].addEventListener('click', () => {
        modal[i].style.display = "unset";
        dark.classList.add('clicked');
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

const cartWrapper = document.querySelector('.cart-wrapper')
const addToCart = document.querySelectorAll('.addToCart')
const items = document.querySelectorAll('.items')

// console.log("length is " + items.length)
// for (let i = 0; i < items.length; i++) {
//     console.log("i is  now " + i)
//     console.log("items: " + items.item(i).innerHTML)
// }

const cartContainer = document.createElement('div')
cartContainer.classList.add('cart-container')

// console.log(addToCart.item(1).innerHTML)
// console.log(addToCart.length)


function appendToCart(img, kind, name, toppings, quantity, price) {
    if (kind === "ramen") quantity = 1;
    let toppingHTML = ``
    cartWrapper.innerHTML = `
    <div class="cart-container">
        <div class="image">
            <!-- <img src="img/ramen.jpg" width="150" height="150" alt=""> -->
            <img src="img/${img}" width="150" height="150" alt="">
        </div>
        <div class="items">
            <h3>${name}</h3>
    `
    +
    toppingHTML
    +
    `    </div>
        <div class="price">
            <p>Quantity: ${quantity}</p>
            <h4>CA$${price}</h4>
        </div>
    </div>
    `

    if (kind === "ramen") {
        toppingHTML = `<p>toppings :</p>`
        for(let toppingItem of toppings) {
            topppingHTML += `
            <p>&emsp;&emsp;${toppingitem}</p>
            `
        }
    }

}

for (let i = 0; i < modal.length; i++) {
    // click
}



// ---------------/APPEND TO CART---------------