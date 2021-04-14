const loginForm = document.getElementById('signin');
const greetingForm = document.getElementById('welcome')
loginForm.classList.add('signin_active');
const loginRequest = new XMLHttpRequest();
const loginData = new FormData();
loginRequest.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
loginRequest.setRequestHeader('Content-Type', 'multipart/form-data')
const loginButton = document.getElementById('signin__btn');
loginButton.addEventListener('click', ()=>{
    const login = document.getElementsByClassName('control')[0].value;
    const password = document.getElementsByClassName('control')[1].value;
    loginData.append('login', login);
    loginData.append('password', password);
    loginRequest.onload = ()=>{
        const response = JSON.parse(loginRequest.response);
        if(response.success) {
            loginForm.classList.remove('signin_active');
            greetingForm.classList.add('welcome_active')
        }
        else alert("Неверный логин/пароль")
    }
    loginRequest.send(loginData)
})