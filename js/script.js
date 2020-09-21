'use strict';
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const section = document.querySelectorAll('section');

function openMenu(){
    
    hamburger.addEventListener('click',()=>{
        
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    
    });
}
function closeMenu(){
    section.forEach(i =>{
        i.addEventListener('click',() =>{  
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
        });
    });
    
}
openMenu();
closeMenu();

