const popRamenC = document.querySelectorAll('.popRamenC');
const popRamenOuter = document.querySelectorAll('.popRamenOuter');
const popAppC  = document.querySelectorAll('.pop-appetizer-c');
const popDrink = document.querySelectorAll('.pop-drink-c');
const popOthers = document.querySelectorAll('.pop-others-c');

let menuData = {};
$.ajax({
    url: './menuData.json',
    dataType: 'json',
    async: false,
    success: function (json) {
        menuData = json;
    }
});

console.log(menuData.ramens)
//get menu from json
// function getRamenMenu() {

//   for(let i = 0; i < menuData.ramens.length; i++) {

//     const popBox = document.createElement('div');
//     popBox.classList.add('pop-ramen-c', 'pop-box', 'popRamenC')
//     const popRamenC = document.querySelectorAll('.popRamenC');
// // console.log("this is" + popRamenC[i]);

//     console.log(popBox)
//     console.log(popRamenC)
//     popRamenC[i].innerHTML = `
//     <img src="img/ramen${i+1}.jpg">
//     <div class="menu-detail ">
//         <h3>${menuData.ramens[i].name}</h3>
//         <p>${menuData.ramens[i].price}</p>
//     </div>
//     <div class="menu-detail">
//         <p>CA$${menuData.ramens[i].description}</p>
//         <p>450kcal</p>
//     </div>
//     `
//     popRamenC[i].appendChild(popRamenOuter);
//   }
// }

// function getRamenMenu() {

//   for(let i = 0; i < menuData.ramens.length; i++) {

//     // console.log(popBox)
//     console.log(popRamenC)
//     popRamenC[i].innerHTML = `
//     <img src="img/ramen${i+1}.jpg">
//     <div class="menu-detail ">
//         <h3>${menuData.ramens[i].name}</h3>
//         <p>CA$${menuData.ramens[i].price}</p>
//     </div>
//     <div class="menu-detail">
//         <p>${menuData.ramens[i].description}</p>
        
//     </div>
//     `
  
//   }
// }

function getRamenMenu() {

  for(let i = 0; i < menuData.ramens.length; i++) {

    // console.log(popBox)
    console.log(popRamenC)
    popRamenC[i].innerHTML = `
    <img src="img/ramen${i+1}.jpg">
    <div class="menu-detail ">
        <h3>${menuData.ramens[i].name}</h3>
        <p>${menuData.ramens[i].description}</p>
        <p class="menu-price">CA$${menuData.ramens[i].price}</p>
    </div>
   
    `
  
  }
}


// console.log(menuData.appetizers.length);
function getAppetizer() {
   
  for(let i = 0; i < menuData.appetizers.length; i++) {
    
     popAppC[i].innerHTML = `
     <img src="img/appetizer${i+1}.jpg">
     <div class="menu-detail ">
         <h3>${menuData.appetizers[i].name}</h3>
         <p>${menuData.appetizers[i].description}</p>
         <p class="menu-price">CA$${menuData.appetizers[i].price}</p>
     </div>
    
     `
  }

}
console.log(menuData.drinks.length)
function getDrinkMenu() {

  for(let i = 0; i < menuData.drinks.length; i++) {

     popDrink[i].innerHTML = `
            <img src="img/drink${i + 1}.jpg">
            <div class="menu-detail drink-detail">
                <h3>${menuData.drinks[i].name}</h3>
                <p>${menuData.drinks[i].description}</p>
                <p class="menu-price">CA$${menuData.drinks[i].price}</p>
            </div>
            
     `
  }

}

function getOtherMenu() {

  for(let i = 0; i < menuData.others.length; i++) {
      
    console.log(popOthers[i])
    popOthers[i].innerHTML = `
    <img src="img/other${i+1}.jpg">
    <div class="menu-detail ">
        <h3>${menuData.others[i].name}</h3>
        <p>${menuData.others[i].description}</p>
        <p class="menu-price">CA$${menuData.others[i].price}</p>
    </div>

    `
  }
}

getRamenMenu();
getAppetizer();
getDrinkMenu();
getOtherMenu();