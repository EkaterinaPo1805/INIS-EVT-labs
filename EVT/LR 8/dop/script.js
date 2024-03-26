let Btn1 = document.getElementById("fbutton");
let Btn2 = document.getElementById("sbutton");
let Btn3 = document.getElementById("tbutton");
let Btn4 = document.getElementById("fourthbutton");
let Btn5 = document.getElementById("fifthbutton");
let Btn6 = document.getElementById("sixthbutton");
let Btn7 = document.getElementById("seventhbutton");
let Btn8 = document.getElementById("eighthbutton");
let Btn9 = document.getElementById("ninethbutton");
let grid = document.getElementById("grid");
let grid1 = document.getElementById("grid1");
let grid2 = document.getElementById("grid2");


Btn1.addEventListener("click", (e)=>
{
    grid.classList.remove("second");
    grid.classList.remove("third");
    grid.classList.add("first");
});

Btn2.addEventListener("click", (e)=>
{
    grid.classList.remove("first");
    grid.classList.remove("third");
    grid.classList.add("second");
});

Btn3.addEventListener("click", (e)=>
{
    grid.classList.remove("first");
    grid.classList.remove("second");
    grid.classList.add("third");
});

Btn4.addEventListener("click", (e)=>
{
    grid1.classList.remove("sixth");
    grid1.classList.remove("fifth");
    grid1.classList.add("fourth");
});

Btn5.addEventListener("click", (e)=>
{
    grid1.classList.remove("fourth");
    grid1.classList.remove("sixth");
    grid1.classList.add("fifth");
});

Btn6.addEventListener("click", (e)=>
{
    grid1.classList.remove("fourth");
    grid1.classList.remove("fifth");
    grid1.classList.add("sixth");
});

Btn7.addEventListener("click", (e)=>
{
    grid2.classList.remove("eighth");
    grid2.classList.remove("nineth");
    grid2.classList.add("seventh");
});

Btn8.addEventListener("click", (e)=>
{
    grid2.classList.remove("seventh");
    grid2.classList.remove("nineth");
    grid2.classList.add("eighth");
});

Btn9.addEventListener("click", (e)=>
{
    grid2.classList.remove("seventh");
    grid2.classList.remove("eighth");
    grid2.classList.add("nineth");
});
