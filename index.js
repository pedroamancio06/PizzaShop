let show = true;
const menuCabecalho = document.querySelector('.cabecalho');
const menuHamburguer = menuCabecalho.querySelector('.menu__hamburguer');

function abrir() {
    menuCabecalho.classList.toggle('on', show);
    show = !show;
}