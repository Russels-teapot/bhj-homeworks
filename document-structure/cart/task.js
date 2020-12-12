const usersCart = document.querySelector('.cart__products');
const productCards = Array.from(document.getElementsByClassName('product'));
for (const productCard of productCards) {
    const decButton = productCard.querySelector('.product__quantity-control_dec');
    const incButton = productCard.querySelector('.product__quantity-control_inc');
    const addingButton = productCard.querySelector('.product__add');
    const imageInCart = productCard.querySelector('.product__image').getAttribute('src');
    const productId = productCard.getAttribute('data-id');
    incButton.addEventListener('click', ()=> {
        let quantityValue = +productCard.querySelector('.product__quantity-value').textContent;
        if (quantityValue>=0) {
            productCard.querySelector('.product__quantity-value').textContent = (quantityValue + 1).toString()
    }
    });
    decButton.addEventListener('click', ()=>{
        let quantityValue = +productCard.querySelector('.product__quantity-value').textContent;
        if (quantityValue>0) {
            productCard.querySelector('.product__quantity-value').textContent = (quantityValue - 1).toString()
        }
    });
    addingButton.addEventListener('click', ()=>{
        const usersCartArr = Array.from('usersCart')
        const currentProductId  = addingButton.closest('.product').getAttribute('data-id')
        const productInCart = document.createElement('div');
        productInCart.classList.add('cart__product');
        const productImage = document.createElement('img');
        productImage.classList.add('cart__product-image');
        const productQuantity = document.createElement('div');
        productQuantity.classList.add('cart__product-count');
        productInCart.insertAdjacentElement("afterbegin", productImage);
        productInCart.insertAdjacentElement("beforeend", productQuantity);
        if(+productCard.querySelector('.product__quantity-value').textContent>0) {
            usersCart.insertAdjacentElement("afterbegin", productInCart);
            productImage.setAttribute('src', imageInCart);
            productInCart.id = currentProductId
            console.log(productInCart.id)
            productQuantity.innerText = productCard.querySelector('.product__quantity-value').textContent
        }
        let currentItem = usersCartArr.find((item)=>item.id === productInCart.id)
        console.log(currentItem)
        if(currentItem) {
            currentItem.querySelector('.cart__product-count').innerText = ((+productQuantity.innerText) + (currentItem.querySelector('.product__quantity-value').textContent)).toString();
        }
        /*if(productQuantity.innerText === (0).toString()) {
            productInCart.parentNode.removeChild(productInCart)
        }
        */
    });
    }


