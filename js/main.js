const menuBtn= document.querySelector('.menu-btn');
let menuOpen= false; 
// let menu=document.querySelector('.menu');


menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else{
        menuBtn.classList.remove('open');
        menuOpen=false;
    }
})