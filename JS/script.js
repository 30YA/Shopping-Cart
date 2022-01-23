"use strict";
const Allproducts = [
    {
        id: 1,
        name: 'Sony Alpha',
        description: 'Mirrorless Interchangeable Lens',
        price: 24000,
        imgURL: 'img/1.png',
        off:'30 %',
        like: 58,
    },
    {
        id: 2,
        name: 'Sony 6400',
        description: 'Mirrorless Interchangeable Lens',
        price: 15000,
        imgURL: 'img/2.png',
        off:'80 %',
        like: 148,
    },
    {
        id: 3,
        name: 'Canon D90',
        description: 'Mirrorless Interchangeable Lens',
        price: 18000,
        imgURL: 'img/3.png',
        off:'10 %',
        like: 596,
    },
    {
        id: 4,
        name: 'Nikon D800',
        description: 'Mirrorless Interchangeable Lens',
        price: 35000,
        imgURL: 'img/4.png',
        off:'15 %',
        like: 110,
    },
    {
        id: 5,
        name: 'Canon D850',
        description: 'Mirrorless Interchangeable Lens',
        price: 22000,
        imgURL: 'img/5.png',
        off:'25 %',
        like: 363,
    },
    {
        id: 6,
        name: 'Sony T8',
        description: 'Mirrorless Interchangeable Lens',
        price: 9000,
        imgURL: 'img/1.png',
        off:'45 %',
        like: 263,
    }
];
const cartProducts = localStorage.getItem('Cart')?
JSON.parse(localStorage.getItem('Cart')):
[];
// -----------------------------------------------------
const addtoMain = document.querySelector('.main');
document.addEventListener('DOMContentLoaded', () => {
    const products = new Products();
    const ui = new UI();
    ui.displayProducts(products.getProducts());
    ui.getAddToCartBTN(products.getProducts());
})
//basket click : -------------------------------
const basket = document.querySelector('.basket');
const close = document.querySelector('.close');
basket.addEventListener('click', openModal);
close.addEventListener('click', closeModal);