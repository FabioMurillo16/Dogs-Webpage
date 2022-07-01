let hamburguer= document.querySelector('.menu-btn', '.cont-btn' );
let menu=document.querySelector('.menu');
let Body =document.querySelector('body');


hamburguer.addEventListener('click',()=>{
    menu.classList.toggle("spread")  
})