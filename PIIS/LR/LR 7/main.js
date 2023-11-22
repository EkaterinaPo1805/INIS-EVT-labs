let drawArea = document.getElementById("draw-area").firstChild;
var rect = drawArea.getBoundingClientRect();
let figureType;

let startX, startY, finX, finY;

const figures = 
{
    "circle": renderCircle,
    "rectangle": renderRectangle,
}


var figure = prompt( 'Круг или Прямоугольник?')
if (figure === 'Круг') figureType = "circle"
if (figure === 'Прямоугольник') figureType = "rectangle"


drawArea.addEventListener("mousedown", startDrawing);

function startDrawing(event)
{
    startX = finX = event.pageX - rect.left;
    startY = finY = event.pageY - rect.top;
    
    figures[figureType]();

    drawArea.addEventListener("mousemove", draw);
    drawArea.addEventListener("mouseup", stopDrawing);
}


function draw(event)
{
    finX = event.pageX - rect.left;
    finY = event.pageY - rect.top;
    figures[figureType]();
}


function stopDrawing(event)
{
    let figure = drawArea.getElementById(figureType);
    if(figure != undefined) figure.removeAttribute("id");

    drawArea.removeEventListener("mousemove", draw);
}



function renderCircle()
{
    let circle = drawArea.getElementById("circle");
   if(circle == undefined)
    {
        circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.id = "circle";
        circle.setAttribute("cx", startX);
        circle.setAttribute("cy", startY);
        circle.setAttribute("r", "1");
        drawArea.appendChild(circle);
    }
    
    let xDiff = Math.abs(finX - startX);
    let yDiff = Math.abs(finY - startY);

    let radius = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(isNaN(radius)) radius = 0;
    circle.setAttribute("r", radius);
}


function renderRectangle()
{
    let rectangle = drawArea.getElementById("rectangle");
    if(rectangle == undefined)
    {
        rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rectangle.id = "rectangle";
        drawArea.appendChild(rectangle);
    }
    let width = Math.abs(finX - startX);
    let height = Math.abs(finY - startY);


    rectangle.setAttribute("width", width);
    rectangle.setAttribute("height", height);

    if(finX < startX) rectangle.setAttribute("x", finX);
    else rectangle.setAttribute("x", startX);
    
    if(finY < startY) rectangle.setAttribute("y", finY);
    else rectangle.setAttribute("y", startY);
}
