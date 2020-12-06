const usersCart = document.querySelector('.cart__products')
let productInCart = document.createElement('div')
productInCart.classList.add('cart__product')
let productImage = document.createElement('img')
productImage.classList.add('cart__product-image')
let productQuantity = document.createElement('div')
productQuantity.classList.add('cart__product-count')
productInCart.insertAdjacentElement("afterbegin", productImage)
productInCart.insertAdjacentElement("beforeend", productQuantity)
const productCards = Array.from(document.getElementsByClassName('product'))
for (let productCard of productCards) {
    let decButton = productCard.querySelector('.product__quantity-control_dec')
    let incButton = productCard.querySelector('.product__quantity-control_inc')
    let addingButton = productCard.querySelector('.product__add')
    let imageInCart = productCard.querySelector('.product__image').getAttribute('src')
    let productId = productCard.getAttribute('data-id')
    console.log(addingButton);
    console.log(imageInCart)
    incButton.addEventListener('click', ()=> {
        let quantityValue = +productCard.querySelector('.product__quantity-value').textContent;
        if (quantityValue>=0) {
            productCard.querySelector('.product__quantity-value').textContent = (quantityValue + 1).toString()
    }
    })
    decButton.addEventListener('click', ()=>{
        let quantityValue = +productCard.querySelector('.product__quantity-value').textContent;
        if (quantityValue>0) {
            productCard.querySelector('.product__quantity-value').textContent = (quantityValue - 1).toString()
        }
    })
    addingButton.addEventListener('click', ()=>{
        usersCart.insertAdjacentElement("afterbegin", productInCart);
        productImage.setAttribute('src', imageInCart);
        productInCart.setAttribute('data-id', productId)
        productQuantity.innerText = productCard.querySelector('.product__quantity-value').textContent;
        if(productInCart) {
            productQuantity.innerText = productCard.querySelector('.product__quantity-value').textContent;
        }
        if(productQuantity.innerText === (0).toString()) {
            productInCart.parentNode.removeChild(productInCart)
        }
    })
    };


