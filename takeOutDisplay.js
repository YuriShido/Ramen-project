const orderCard = document.querySelectorAll('.order-card')
const appetizerCard = document.querySelectorAll('.appetizer-card')
const drinkCard = document.querySelectorAll('.drink-card')
const otherCard = document.querySelectorAll('.other-card')
const oederCards = document.querySelectorAll('.orderCards')

let menuData = {};
$.ajax({
    url: './menuData.json',
    dataType: 'json',
    async: false,
    success: function (json) {
        menuData = json;
    }
});



function ramensDisplay() {
    let ramenHTML = ``;
    for (let i = 0; i < menuData.ramens.length; i++) {

        // const div = document.createElement('div')
        // div.classList.add('order-card')
        // const orderCard = document.querySelectorAll('.order-card')


        orderCard[i].innerHTML = `
        <div class="order-card-img">
            <img src="/img/ramen${i + 1}.jpg" alt="ramen01">
        </div>
        <div class="order-card-info">
            <div class="info-title">
                ${menuData.ramens[i].name}
            </div>
            <div class="info-description">
                ${menuData.ramens[i].description}
            </div>
            <p class="info-price">
                CA$${menuData.ramens[i].price.toFixed(2)}
            </p>
        </div>
        `
    }
}

function appetizerDisplay() {
    // appetizerHTML = ``;
    for (let j = 0; j < menuData.appetizers.length; j++) {
        appetizerCard[j].innerHTML = `
        <div class="order-card-img">
            <img src="/img/appetizer${j + 1}.jpg" alt="ramen01">
        </div>
        <div class="order-card-info">
            <div class="info-title">
                ${menuData.appetizers[j].name}
            </div>
            <div class="info-description">
                ${menuData.appetizers[j].description}
            </div>
            <p class="info-price">
                CA$${menuData.appetizers[j].price.toFixed(2)}
            </p>
        </div>
        `
    }
}

function drinkDisplay() {
    // drinkHTML = ``;
    for (let k = 0; k < menuData.drinks.length; k++) {
        drinkCard[k].innerHTML = `
        <div class="order-card-img">
            <img src="/img/drink${k + 1}.jpg" alt="ramen01">
        </div>
        <div class="order-card-info">
            <div class="info-title">
                ${menuData.drinks[k].name}
            </div>
            <div class="info-description">
                ${menuData.drinks[k].description}
            </div>
            <p class="info-price">
                CA$${menuData.drinks[k].price.toFixed(2)}
            </p>
        </div>
        `
    }
}

function otherDisplay() {
    // otherHTML = ``;
    for (let l = 0; l < menuData.others.length; l++) {
        otherCard[l].innerHTML = `
        <div class="order-card-img">
            <img src="/img/other${l + 1}.jpg" alt="ramen01">
        </div>
        <div class="order-card-info">
            <div class="info-title">
                ${menuData.others[l].name}
            </div>
            <div class="info-description">
                ${menuData.others[l].description}
            </div>
            <p class="info-price">
                CA$${menuData.others[l].price.toFixed(2)}
            </p>
        </div>
        `
    }
}

ramensDisplay()
appetizerDisplay()
drinkDisplay()
otherDisplay()