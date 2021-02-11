const modalRamen = document.querySelectorAll('.ramen-modal')
const modalAppetizer = document.querySelectorAll('.appetizer-modal')
const modalDrink = document.querySelectorAll('.drink-modal')
const modalOther = document.querySelectorAll('.other-modal')

// console.log(modalOther)

// let menuData = {};
// $.ajax({
//     url: './menuData.json',
// 	dataType: 'json',
// 	async: false,
// 	success: function(json) {
//         menuData = json;
// 	}
// });

// ---------------------------
let totalPrice = 0

// ---------------------------

function ramenModal() {
    let toppingHTML = ``;

    for (let j = 0; j < menuData.toppings.length; j++) {
        toppingHTML += `
        <div class="topping-item">
            <span>${menuData.toppings[j].name}</span>
            <div class="topping-item-add">
                <span class="plus">+&nbsp</span>
                <span class="count count${j}">0</span>
                <span class="minus">&nbsp-&nbsp&nbsp</span>
                <span>$${menuData.toppings[j].price.toFixed(2)}</span>
            </div>
        </div>
        `
    }

    for (let i = 0; i < modalRamen.length; i++) {
        modalRamen[i].innerHTML = `
            <div class="modal-img imgRamen${i+1}">
            </div >
            <div class="modal-customize">
                <div class="topping">
                    ${toppingHTML}

                    <div class="modal-total">
                        <h2>Total:</h2>
                        <h2>CA$<span class="ramen-total">${menuData.ramens[i].price.toFixed(2)}</span></h2>
                    </div>
                    
                    <div class="modal-addcart">
                        <button>cancel</button>
                        <button>add to card</button>
                    </div>

                </div>
            </div>
        `
        const imgRamen = document.querySelector(`.imgRamen${i+1}`)
        // document.querySelector(`.img${i+1}`).style.backgroundImage = "url('../img/ramen4.jpg')"
        imgRamen.style.backgroundImage = `url('../img/ramen${i+1}.jpg')`
        imgRamen.style.backgroundSize = "cover"
        imgRamen.style.backgroundPosition = "center"

    }
}

// function otherModal(className, kind) {
//     const modal = document.querySelectorAll(className)
//     const data = menuData.kind;

//     for (let o = 0; o < modal.length; o++) {
//         modal[i].innerHTML = `
//         <div class="modal-img ${kind}${o+1}">
//             </div >
//             <div class="modal-customize">
//                 <div class="quantity">
//                     <div class="quantity-item">
//                     <span class="plus">+&nbsp</span>
//                     <span class="count">0</span>
//                     <span class="minus">&nbsp-&nbsp&nbsp</span>
//                     // <span>$${menuData.appetizers[k].price.toFixed(2)}</span>
//                     </div>
//                 </div>
//             </div>
//         `

//         const imgAppetizer = document.querySelector(`.imgAppetizer${k+1}`)
//         // document.querySelector(`.img${i+1}`).style.backgroundImage = "url('../img/ramen4.jpg')"
//         imgAppetizer.style.backgroundImage = `url('../img/appetizer${k+1}.jpg')`
//         imgAppetizer.style.backgroundSize = "cover"
//         imgAppetizer.style.backgroundPosition = "center"
//     }
// }

function appetizerModal() {
    for (let k = 0; k < modalAppetizer.length; k++) {
        modalAppetizer[k].innerHTML = `
        <div class="modal-img imgAppetizer${k+1}">
            </div >
            <div class="modal-customize">
                <div class="quantity">
                    <div class="quantity-item">
                        <span class="plus">+&nbsp</span>
                        <span class="count count${k}">0</span>
                        <span class="minus">&nbsp-&nbsp&nbsp</span>
                        <span>$${menuData.appetizers[k].price.toFixed(2)}</span>
                    </div>


                    <div class="modal-total">
                        <h2>Total:</h2>
                        <h2>CA$${menuData.appetizers[k].price.toFixed(2)}</h2>
                    </div>


                </div>
            </div>
        `

        const imgAppetizer = document.querySelector(`.imgAppetizer${k+1}`)
        // document.querySelector(`.img${i+1}`).style.backgroundImage = "url('../img/ramen4.jpg')"
        imgAppetizer.style.backgroundImage = `url('../img/appetizer${k+1}.jpg')`
        imgAppetizer.style.backgroundSize = "cover"
        imgAppetizer.style.backgroundPosition = "center"
    }
}
function drinkModal() {
    for (let l = 0; l < modalDrink.length; l++) {
        modalDrink[l].innerHTML = `
        <div class="modal-img imgDrink${l+1}">
            </div >
            <div class="modal-customize">
                <div class="quantity">
                    <div class="quantity-item">
                        <span class="plus">+&nbsp</span>
                        <span class="count count${l}">0</span>
                        <span class="minus">&nbsp-&nbsp&nbsp</span>
                        <span>$${menuData.drinks[l].price.toFixed(2)}</span>
                    </div>


                    <div class="modal-total">
                        <h2>Total:</h2>
                        <h2>CA$${menuData.drinks[l].price.toFixed(2)}</h2>
                    </div>


                </div>
            </div>
        `

        const imgDrink = document.querySelector(`.imgDrink${l+1}`)
        // document.querySelector(`.img${i+1}`).style.backgroundImage = "url('../img/ramen4.jpg')"
        imgDrink.style.backgroundImage = `url('../img/drink${l+1}.jpg')`
        imgDrink.style.backgroundSize = "cover"
        imgDrink.style.backgroundPosition = "center"
    }
}
function otherModal() {
    for (let m = 0; m < modalOther.length; m++) {
        modalOther[m].innerHTML = `
        <div class="modal-img imgOther${m+1}">
            </div >
            <div class="modal-customize">
                <div class="quantity">
                    <div class="quantity-item">
                        <span class="plus">+&nbsp</span>
                        <span class="count count${m}">0</span>
                        <span class="minus">&nbsp-&nbsp&nbsp</span>
                        <span>$${menuData.others[m].price.toFixed(2)}</span>
                    </div>



                    <div class="modal-total">
                        <h2>Total:</h2>
                        <h2>CA$${menuData.others[m].price.toFixed(2)}</h2>
                    </div>



                </div>
            </div>
        `

        const imgOther = document.querySelector(`.imgOther${m+1}`)
        // document.querySelector(`.img${i+1}`).style.backgroundImage = "url('../img/ramen4.jpg')"
        imgOther.style.backgroundImage = `url('../img/other${m+1}.jpg')`
        imgOther.style.backgroundSize = "cover"
        imgOther.style.backgroundPosition = "center"
    }
}




ramenModal()
appetizerModal()
drinkModal()
otherModal()


// div作って