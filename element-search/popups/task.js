let arrOfModals = Array.from(document.getElementsByClassName('modal'));
arrOfModals[0].classList.add('modal_active');
let arrOfClosingButtons = Array.from(document.getElementsByClassName('modal__close'));
let closingButton1 = arrOfClosingButtons[0];
let closingButton2 = arrOfClosingButtons[2];
closingButton1.onclick = function() {
    arrOfModals[0].classList.remove('modal_active')
};
closingButton2.onclick = function() {
    arrOfModals[1].classList.remove('modal_active')
};
let successButton = document.getElementsByClassName('show-success')[0];
successButton.onclick = function() {
    arrOfModals[1].classList.add('modal_active');
    arrOfModals[0].classList.remove('modal_active')
}



