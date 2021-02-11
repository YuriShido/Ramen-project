const dark = document.getElementById('dark');
const card = document.querySelectorAll('.order-card')
const modal = document.querySelectorAll('.modal')
const body = document.querySelector('body')

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
}


const plus = document.querySelectorAll('.plus');
const count = document.querySelectorAll('.count');
const minus = document.querySelectorAll('.minus');

for (let j = 0; j < plus.length; j++) {
    let currentQuantity = parseInt(count[j].innerHTML)

    plus[j].addEventListener('click', () => {
        count[j].innerHTML = ++currentQuantity
        getTotal()
        console.log(ramen)
    })
    minus[j].addEventListener('click', () => {
        count[j].innerHTML = --currentQuantity
    })
}


// ---------------GET TOTAL---------------
let ramen = [[], [], [], [], [], [], [], []]
let appetizer = []
let drink = []
let other = []

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
// ---------------GET TOTAL---------------



// console.log(plus.length)