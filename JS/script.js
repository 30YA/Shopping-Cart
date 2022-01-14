"use strict";
// -----------------------------------------------------
const addtoMain = document.querySelector('.main');
loadProducts(products,addtoMain);

//basket click : -------------------------------
const basket = document.querySelector('.basket');
basket.addEventListener('click', openModal);

const close = document.querySelector('.close');
close.addEventListener('click', closeModal);
