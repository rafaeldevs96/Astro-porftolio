const nav = document.querySelector("#menuh");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click",()=>{
    nav.classList.add("visibilty");
})

close.addEventListener("click",()=>{
    nav.classList.remove("visibilty");
})