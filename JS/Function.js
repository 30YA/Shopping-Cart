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
                this.setCartValue(cartProducts);
                this.cartUI(cartProducts);
                document.querySelector('.empty').style.display = 'none';
            })
        })
    }
    setCartValue(cartProducts){
        const total_item = document.querySelector('.total-item');
        const total_Price = document.querySelector('.total-price');
        let tempCartItem = 0;
        const totalPrice = cartProducts.reduce((acc,cur) => {
            tempCartItem += cur.quantity;
            return acc + cur.price;
        },0);
        total_item.textContent = tempCartItem;
        total_Price.textContent = `Total Price : ${totalPrice}`;
    }
    cartUI(cartProducts){
        const modalproduct = document.querySelector('.modal-products');
        modalproduct.innerHTML = '';
        const list = [];
        cartProducts.forEach(item => {
            list.push(`
            <div class="added-Products">
              <div class="product-img">
                <img src=${item.imgURL} alt="">
              </div>
              <div class="product-name">
                <h3>${item.name}</h3>
                <p class="price">${item.price} $</p>
              </div>
              <div class="product-number">
                <button><i class="fas fa-plus"></i></button>
                <p>2</p>
                <button><i class="fas fa-minus"></i></button>
              </div>
              <i class="fas fa-trash-alt"></i>
            </div>`
            );
        });
        for(let key of list){
            modalproduct.innerHTML += key;
        }
    }
}
// save added products to cart :
class storage {
    static saveCartProducts(cartProducts){
        localStorage.setItem('Cart',JSON.stringify(cartProducts));
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