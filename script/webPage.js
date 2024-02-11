import {cart, addTocart} from '../Projects/data/cart.js';
import {products} from '../Projects/data/product.js';

let productsHtml = '';

let showCase = '';

products.forEach((product) => {
    showCase += `
        <div class="products-showcase">
        <img src="${product.image}" alt="">
        </div> `
})

products.forEach((product) => {
    productsHtml += `
        <div class="select-pro">
        <div>
            <img src="${product.image}" alt="">
            <p>${product.name}</p>
            <span>MRP $${(product.priceCents/100).toFixed(2)} /-</span>
            <button type="button" class="js-add-to-cart" data-product-id="${product.productId}">
                <i class="fa-solid fa-shopping-bag"></i>
            </button>
        </div>
        </div> `;
})

document.querySelector('.js-showcase').innerHTML = showCase;

document.querySelector('.js-products-grid').innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addTocart(productId);
        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;            
        })

        document.querySelector('.js-cart').innerHTML = cartQuantity;
    });
});