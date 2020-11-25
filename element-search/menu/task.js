let arrOfLinks = Array.from(document.querySelectorAll('a.menu__link'));
for (let i=0; i<arrOfLinks.length; i++) {
        arrOfLinks[i].onclick = function () {
            arrOfLinks[i].querySelectorAll('menu_sub')[0].classList.add('menu_active');
            return false
        }
}