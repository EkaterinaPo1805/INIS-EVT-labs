let drawCanvas = document.getElementById("draw-area").lastChild;

let drawctx = document.getElementById("draw-area").lastChild.getContext('2d');

var rect = drawCanvas.getBoundingClientRect();


drawCanvas.addEventListener("mousedown", startDrawing);

let figureType;
let startX, startY, finX, finY;

var figure = prompt( 'Круг или Прямоугольник?')
if (figure === 'Круг') figureType = "circle"
if (figure === 'Прямоугольник') figureType = "rectangle"


const renderFigure = 
{
    "circle": renderCircle,
    "rectangle": renderRectangle,
}



function startDrawing(event)
{

    startX = finX = event.pageX - rect.left;
    startY = finY = event.pageY - rect.top;

    drawCanvas.addEventListener("mousemove", draw);
    drawCanvas.addEventListener("mouseup", stopDrawing);
    drawCanvas.addEventListener("mouseover", stopDrawing);
}

function draw(event)
{
    finX = event.pageX - rect.left;
    finY = event.pageY - rect.top;
    renderFigure[figureType]();
}

function stopDrawing(event)
{
    drawCanvas.removeEventListener("mousemove", draw);
    drawCanvas.removeEventListener("mouseover", stopDrawing);
}

function renderRectangle()
{
    let x, y;
    let width = Math.abs(finX - startX);
    let height = Math.abs(finY - startY);


    if(finX < startX) x = finX;
    else x = startX;
    
    if(finY < startY) y = finY;
    else y = startY;
    
    drawctx.fillRect(x, y, width, height);
}



function renderCircle()
{
    
    let xDiff = Math.abs(finX - startX);
    let yDiff = Math.abs(finY - startY);

    let radius = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(isNaN(radius)) radius = 0;


    drawctx.beginPath();
    drawctx.arc(startX, startY, radius, 0, 2*Math.PI);
    drawctx.fill();
}

