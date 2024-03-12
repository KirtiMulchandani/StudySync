document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.querySelector('.nav');
    const logoContent = document.querySelector('.logo');
    const contactBtn = document.querySelector('.contact-button');


    menuButton.addEventListener('click', function() {
        // console.log("Button clicked!"); 
        setTimeout(() => {
        navMenu.classList.toggle('show');
        logoContent.classList.toggle('hide');
        contactBtn.classList.toggle('show');
        }, 300); 
    });
});