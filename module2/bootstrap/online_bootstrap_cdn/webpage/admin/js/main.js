// add id through query selector

const menu=document.querySelector("#menu");
const menuList=document.querySelector("#menu-list");
const btnToggle=document.querySelector("#btn-toggle");
btnToggle.addEventListener("click",function(){

    menuList.classList.toggle("active");
    
});
