let changingBlocks = Array.from(document.getElementsByClassName('rotator__case'));
let changeBlock = function() {
    let activeBlock = changingBlocks.findIndex(item => item.classList.contains('rotator__case_active'));
    if(activeBlock === changingBlocks.length-1) {
        let blockColor = changingBlocks[0].dataset.color;
        changingBlocks[0].classList.add('rotator__case_active');
        changingBlocks[0].style.color = blockColor;
    }
    else {
        let blockColor = changingBlocks[activeBlock+1].dataset.color
        changingBlocks[activeBlock+1].classList.add('rotator__case_active');
        changingBlocks[activeBlock+1].style.color = blockColor;
    };
    changingBlocks[activeBlock].classList.remove('rotator__case_active');
};

setInterval(changeBlock, 1000)