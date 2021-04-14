const clearingButton = document.getElementById('clearing_button');
const inputArea = document.getElementById('editor');

clearingButton.addEventListener('click', ()=>{
  localStorage.removeItem('inputArea')
  inputArea.value = ''
});

inputArea.oninput = () => {
  localStorage.setItem('inputArea', inputArea.value);
};
inputArea.value = localStorage.getItem('inputArea');

