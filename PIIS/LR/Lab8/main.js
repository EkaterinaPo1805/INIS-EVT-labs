let drawCanvas = document.getElementById("draw-area").lastChild;

let drawctx = document.getElementById("draw-area").lastChild.getContext('2d');
let savectx = document.getElementById("draw-area").firstChild.getContext('2d');

var rect = drawCanvas.getBoundingClientRect();

const ctxWidth = drawCanvas.width;
const ctxHeight = drawCanvas.height;


drawCanvas.addEventListener("mousedown", startDrawing);

let startX, startY, finX, finY;


let figureType = "circle";

const renderFigure = 
{
    "circle": renderCircle,
    "rectangle": renderRectangle,
}

const drawFigure = 
{
    "circle": drawCircle,
    "rectangle": drawRectangle,
}

function startDrawing(event)
{
    drawctx.fillStyle = colorPicker.value;
    savectx.fillStyle = colorPicker.value;
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
    drawFigure[figureType]();
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

    drawctx.clearRect(0, 0, ctxWidth, ctxHeight);
    
    drawctx.fillRect(x, y, width, height);
}

function drawRectangle()
{
    let x, y;
    let width = Math.abs(finX - startX);
    let height = Math.abs(finY - startY);

    if(finX < startX) x = finX;
    else x = startX;
    
    if(finY < startY) y = finY;
    else y = startY;

    drawctx.clearRect(0, 0, ctxWidth, ctxHeight);
    
    savectx.fillRect(x, y, width, height);
}

function renderCircle()
{
    
    let xDiff = Math.abs(finX - startX);
    let yDiff = Math.abs(finY - startY);

    let radius = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(isNaN(radius)) radius = 0;

    drawctx.clearRect(0, 0, ctxWidth, ctxHeight);

    drawctx.beginPath();
    drawctx.arc(startX, startY, radius, 0, 2*Math.PI);
    drawctx.fill();
}

function drawCircle()
{ 
    let xDiff = Math.abs(finX - startX);
    let yDiff = Math.abs(finY - startY);

    let radius = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(isNaN(radius)) radius = 0;

    drawctx.clearRect(0, 0, ctxWidth, ctxHeight);
    
    savectx.beginPath();
    savectx.arc(startX, startY, radius, 0, 2*Math.PI);
    savectx.fill();
}


