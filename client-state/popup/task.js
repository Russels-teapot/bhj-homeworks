const popupBlock = document.getElementById('subscribe-modal');
const checkCookie = ()=> {
  if(!document.cookie.split(';').find(row=>row.startsWith('popup=')))
  popupBlock.classList.add('modal_active')
};

const closingButton = Array.from(document.getElementsByClassName('modal__close'))[0];
closingButton.addEventListener('click', ()=>{
  popupBlock.classList.remove('modal_active')
  document.cookie = 'popup=wasShowed';
  console.log(document.cookie)
});

checkCookie();