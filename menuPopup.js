const popRamenC = document.querySelectorAll('.popRamenC');
const popRamenOuter = document.querySelectorAll('.popRamenOuter');
const popAppC  = document.querySelectorAll('.pop-appetizer-c');
const popDrink = document.querySelectorAll('.pop-drink-c');
const popOthers = document.querySelectorAll('.popup-others-c');

let menuData = {};
$.ajax({
    url: './menuData.json',
    dataType: 'json',
    async: false,
    success: function (json) {
        menuData = json;
    }
});

console.log(menuData)

//get menu from json
function getRamenMenu() {

  for(let i = 0; i < menuData.ramens.length; i++) {

    const popBox = document.createElement('div');
    popBox.classList.add('pop-ramen-c', 'pop-box', 'popRamenC')
    const popRamenC = document.querySelector('.popRamenC');
    popRamenC.innerHTML = 
    `<img src="img/ramen${i+1}.jpg">
    <div class="menu-detail ">
        <h3>${menuData.ramens[i].name}</h3>
        <p>${menuData.ramens[i].price}</p>
    </div>
    <div class="menu-detail">
        <p>CA$${menuData.ramens[i].description}</p>
        <p>450kcal</p>
    </div>`
    popRamenC.appendChild(popRamenOuter);
  }
}

function getAppetizer() {
   
  for(let i = 0; i < manuData.ramens.length; i++) {

     popAppC[i].innerHTML = `
     <img src="img/appetizer${i+1}.jpg">
     <div class="menu-detail ">
         <h3>${menuData.appetizers[i].name}</h3>
         <p>${menuData.appetizers[i].price}</p>
     </div>
     <div class="menu-detail">
         <p>CA$${menuData.appetizers.description}</p>
         <p>450kcal</p>
     </div>
     `
  }

}

function getDrinkMenu() {

  for(let i = 0; i < manuData.ramens.length; i++) {

     popDrink[i].innerHTML = `
            <img src="img/drink${i + 1}.jpg">
            <div class="menu-detail drink-detail">
                <h3>${menuData.drinks.name}</h3>
                <p>${menuData.drinks.price}</p>
            </div>
            <div class="menu-detail drink-detail">
                <p>${menuData.drinks.description}</p>
                <p>450kcal</p>
            </div>
     `
  }

}

function getOtherMenu() {

  for(let i = 0; i < manuData.ramens.length; i++) {
      
    popOthers[i].innerHTML = `
    <img src="img/other${i+1}.jpg">
    <div class="menu-detail ">
        <h3>${menuData.others.name}</h3>
        <p>${menuData.others.price}</p>
    </div>
    <div class="menu-detail">
        <p>${menuData.others.description}</p>
        <p>450kcal</p>
    </div>
    `
  }
}

// getRamenMenu();
getAppetizer();
// getDrinkMenu();
getOtherMenu();