let drawArea = document.getElementById("draw-area").firstChild;
var rect = drawArea.getBoundingClientRect();


let startX, startY, endX, endY;

const figures = 
{
    "circle": drawCircle,
    "rectangle": drawRectangle,
}


var figure = prompt('Какую фигуру рисуем?');




function draw(event)
{
    endX = event.pageX - rect.left;
    endY = event.pageY - rect.top;
}


function stop(event)
{
  
    drawArea.removeEventListener("mousemove", draw);
}

if (figure=="квадрат") drawRectangle
else if (figure=="круг") drawCircle
else console.log("Такого элемента нет")

function drawCircle()
{
    drawArea.addEventListener("mousedown", (event) => {
    startX = endX = event.pageX - rect.left;
    startY = endY = event.pageY - rect.top;
    

    drawArea.addEventListener("mousemove", draw);
    drawArea.addEventListener("mouseup", stop);
})
 //   let circle = drawArea.getElementById("circle");
    
    let xDiff = Math.abs(endX - startX);
    let yDiff = Math.abs(endY - startY);

    let radius = Math.sqrt(xDiff * xDiff + yDiff * yDiff);

    if(isNaN(radius)) radius = 0;
    circle.setAttribute("r", radius);
}


function drawRectangle()
{
    drawArea.addEventListener("mousedown", (event) => {
        startX = endX = event.pageX - rect.left;
        startY = endY = event.pageY - rect.top;
        
    
        drawArea.addEventListener("mousemove", draw);
        drawArea.addEventListener("mouseup", stop);
    })
  //  let rectangle = drawArea.getElementById("rectangle");
   
    let width = Math.abs(endX - startX);
    let height = Math.abs(endY - startY);


    rectangle.setAttribute("width", width);
    rectangle.setAttribute("height", height);

    if(endX < startX) rectangle.setAttribute("x", endX);
    else rectangle.setAttribute("x", startX);
    
    if(endY < startY) rectangle.setAttribute("y", endY);
    else rectangle.setAttribute("y", startY);
}
