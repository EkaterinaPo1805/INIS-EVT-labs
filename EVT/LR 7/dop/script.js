let fBtn = document.getElementById("fbutton");
let sBtn = document.getElementById("sbutton");
let tBtn = document.getElementById("tbutton");
let container = document.getElementById("container");


fBtn.addEventListener("click", (e)=>
{
    container.classList.remove("second");
    container.classList.remove("third");
    container.classList.add("first");
});

sBtn.addEventListener("click", (e)=>
{
    container.classList.remove("first");
    container.classList.remove("third");
    container.classList.add("second");
});

tBtn.addEventListener("click", (e)=>
{
    container.classList.remove("first");
    container.classList.remove("second");
    container.classList.add("third");
});