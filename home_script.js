let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("open");
});

// document.addEventListener('click', function () {
//     const cart_icon = document.getElementById('cart_icon');
//     const cart = document.getElementById('cart');

//     cart_icon.addEventListener('click', function () {
//         cart.classList.toggle('open');
//     });
// });
