const toolTips = Array.from(document.getElementsByClassName('has-tooltip'));
for (let tip of toolTips) {
    const toolTipText = tip.getAttribute('title');
    const tipDiv = document.createElement('div');
    tipDiv.innerText = toolTipText;
    tipDiv.classList.add('tooltip')
    tip.insertAdjacentElement("afterend", tipDiv);
    tip.addEventListener('click', (e)=> {
        let tipPosition = tip.getBoundingClientRect();
        let arrOfTips = Array.from(document.getElementsByClassName('tooltip'))
        if (!arrOfTips.some((item)=>item.classList.contains('tooltip_active'))) {
        tipDiv.classList.toggle('tooltip_active');
        tipDiv.style.left = tipPosition.left + 'px';
        tipDiv.style.top = tipPosition.bottom + 'px';
        }
        else {
            let activeTip = arrOfTips.find((item)=> item.classList.contains('tooltip_active'));
            activeTip.classList.remove('tooltip_active');
            tipDiv.classList.add('tooltip_active');
            tipDiv.style.left = tipPosition.left + 'px';
            tipDiv.style.top = tipPosition.bottom + 'px';
            if(tipDiv === activeTip) {
                tipDiv.classList.remove('tooltip_active')
            }
        }
        e.preventDefault()
    });
}
