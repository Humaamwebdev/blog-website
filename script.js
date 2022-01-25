let searchBtn = document.querySelector('#search-icon');
let searchBox = document.querySelector('.search-form');
let navbar = document.querySelector('nav');
let menu = document.querySelector('#menu-bar');

searchBtn.onclick = () =>{
    searchBox.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
}

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
}
