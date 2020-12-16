const usersCart = document.querySelector('.cart__products');
const productCards = Array.from(document.getElementsByClassName('product'));
for (const productCard of productCards) {
    const decButton = productCard.querySelector('.product__quantity-control_dec');
    const incButton = productCard.querySelector('.product__quantity-control_inc');
    const addingButton = productCard.querySelector('.product__add');
    const imageInCart = productCard.querySelector('.product__image').getAttribute('src');
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
        const usersCartArr = Array.from(document.querySelectorAll('.cart__product'))
        const currentProductId  = addingButton.closest('.product').getAttribute('data-id')
        const currentProductQuantity  = +addingButton.previousElementSibling.querySelector('.product__quantity-value').textContent
        let currentItem = usersCartArr.find((item)=>item.id === currentProductId)
        if(currentItem) {
            console.log('productQuantity', currentProductQuantity)
            const currentProductCount = currentItem.querySelector('.cart__product-count')
            currentProductCount.innerText = (currentProductQuantity + (+currentProductCount.textContent)).toString();
            return
        }
        const productInCart = document.createElement('div');
        productInCart.classList.add('cart__product');
        const productImage = document.createElement('img');
        productImage.classList.add('cart__product-image');
        const productQuantity = document.createElement('div');
        productQuantity.classList.add('cart__product-count');
        const deleteItem = document.createElement('div');
        deleteItem.classList.add('delete_item');
        deleteItem.innerHTML = '&times;';
        productInCart.insertAdjacentElement("afterbegin", productImage);
        productInCart.insertAdjacentElement("beforeend", productQuantity);
        productInCart.insertAdjacentElement("beforeend", deleteItem);
        if(+productCard.querySelector('.product__quantity-value').textContent>0) {
            usersCart.insertAdjacentElement("afterbegin", productInCart);
            productImage.setAttribute('src', imageInCart);
            productInCart.id = currentProductId
            console.log(productInCart.id)
            productQuantity.innerText = currentProductQuantity.toString()
        }
        deleteItem.addEventListener('click', ()=> {
            let itemToDelete = deleteItem.closest('.cart__product')
            itemToDelete.remove()
        })
    });
    }


