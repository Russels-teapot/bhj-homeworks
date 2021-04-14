const getCurrencies = new XMLHttpRequest();
const loaderAnimation = document.getElementById('loader')
getCurrencies.open('GET', 'https://netology-slow-rest.herokuapp.com');
getCurrencies.send()
getCurrencies.onreadystatechange = ()=> {
    if (getCurrencies.status === 200) {
        loaderAnimation.classList.remove('loader_active')
        const Currencies = JSON.parse(getCurrencies.responseText)
        console.log(Currencies)
        return Currencies
    }
}

//console.log(getCurrencies.response)
//const Currencies = JSON.parse(getCurrencies.response);
//console.log(getCurrencies.response)