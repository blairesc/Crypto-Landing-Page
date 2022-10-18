let menu = document.querySelector('.menu-bar');
let navItems = document.querySelector('.nav-items');
let navSign = document.querySelector('.nav-sign');

menu.onclick = () =>{
    menu.classList.toggle('text-gray-400');
    navItems.classList.toggle('hidden');
    navSign.classList.toggle('hidden');
}
