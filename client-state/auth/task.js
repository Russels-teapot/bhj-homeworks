const loginForm = document.getElementById('signin__form');
const loginDiv = document.getElementById('signin');
const greetingForm = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const logoutBtn = document.getElementById('logout_btn');
loginDiv.classList.add('signin_active');
const loginRequest = new XMLHttpRequest();
const loginData = new FormData();
logoutBtn.addEventListener('click', ()=>{
    greetingForm.classList.remove('welcome_active');
    loginDiv.classList.add('signin_active');
    userId.innerText = "";
    loginForm.reset();
});
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    loginData.append('login', document.getElementsByClassName('control')[0].value);
    loginData.append('password', document.getElementsByClassName('control')[1].value);
    loginRequest.onload = ()=>{
        const response = JSON.parse(loginRequest.response);
        if(response.success) {
            loginDiv.classList.remove('signin_active');
            greetingForm.classList.add('welcome_active');
            userId.append(response.user_id)
        }
        else {
            loginForm.reset();
            alert("Неверный логин/пароль")
        }
    };
    loginRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    loginRequest.send(loginData)
});
