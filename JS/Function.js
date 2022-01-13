"use strict";
//------------------------------------
const products = [
    {
        id: 1,
        name: 'Sony Alpha',
        description: 'Mirrorless Interchangeable Lens',
        price: 24000,
        off:'30 %',
        like: 58,
    },
    {
        id: 2,
        name: 'Sony 6400',
        description: 'Mirrorless Interchangeable Lens',
        price: 15000,
        off:'80 %',
        like: 148,
    },
    {
        id: 3,
        name: 'Canon D90',
        description: 'Mirrorless Interchangeable Lens',
        price: 18000,
        off:'10 %',
        like: 596,
    },
    {
        id: 4,
        name: 'Nikon D800',
        description: 'Mirrorless Interchangeable Lens',
        price: 35000,
        off:'15 %',
        like: 110,
    },
    {
        id: 5,
        name: 'Canon D850',
        description: 'Mirrorless Interchangeable Lens',
        price: 22000,
        off:'25 %',
        like: 363,
    },
    {
        id: 5,
        name: 'Sony T8',
        description: 'Mirrorless Interchangeable Lens',
        price: 9000,
        off:'45 %',
        like: 263,
    }
]
// this function add all products to Html and show it to user
function loadProducts(products,addtoMain) {
    const sia = [];
    products.forEach(item => {
        sia.push(`
        <div class="product">
          <div class="title">
            <span><i class="fas fa-heart"></i> ${item.like}</span>
            <span>${item.off} off</span>
          </div>
          <div class="info">
            <img src="img/1.png" alt="">
            <h3>${item.name}</h3>
            <h6>${item.description}</h6>
            <button>add to Cart</button>
          </div>
        </div>`
        );
    });
    const div = document.createElement('div');
    div.classList = 'products';
    for(let key of sia){
        div.innerHTML += key;
    }
    addtoMain.append(div);
}