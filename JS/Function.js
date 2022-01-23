"use strict";
// ----------------------------------
// get products :
class Products{
    getProducts(){
        return Allproducts;
    }
}
// display products :
class UI {
    displayProducts(products){
        const list = [];
        products.forEach(item => {
            list.push(`
            <div class="product">
              <div class="title">
                <span><i class="fas fa-heart"></i> ${item.like}</span>
                <span>${item.off} off</span>
              </div>
              <div class="info">
                <img src=${item.imgURL} alt="">
                <h3>${item.name}</h3>
                <h6>${item.description}</h6>
                <button class="addToCart" data-id="${item.id}">add to Cart</button>
              </div>
            </div>`
            );
        });
        const div = document.createElement('div');
        div.classList = 'products';
        for(let key of list){
            div.innerHTML += key;
        }
        addtoMain.append(div);
    }
    getAddToCartBTN(products){
        const nodelist = document.querySelectorAll('.addToCart');
        const addToCart = [...nodelist];
        addToCart.forEach(btn => {
            const id = btn.dataset.id
            const isInCart = cartProducts.find(item => {
                return item.id == id;
            })
            if (isInCart) {
                btn.textContent = 'in Cart';
                btn.disabled = true;
            }
            btn.addEventListener('click', () => {
                const findP = products.find(item => {
                    return item.id == id;
                })
                findP.quantity = 1;
                cartProducts.push(findP);
                storage.saveCartProducts(cartProducts);
                btn.textContent = 'in Cart';
                btn.disabled = true;
            })
        })
    }
}
// save added products to cart :
class storage {
    static saveCartProducts(cartProducts){
        localStorage.setItem('Cart',JSON.stringify(cartProducts))
    }
}
//basket click : -------------------------------
function openModal() {
    const modal = document.querySelector('.modal');
    const dark = document.querySelector('.dark');

    modal.style.opacity = '1';
    modal.style.zIndex = "11";

    dark.style.display = 'block';
    // modal.style.transition = "transition: transform .5s ease-out;"
    // dark.style.opacity = '1';
}
function closeModal() {
    const modal = document.querySelector('.modal');
    const dark = document.querySelector('.dark');

    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.zIndex = "-10";
    },300)

    dark.style.display = 'none';
}