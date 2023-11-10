
const workspace = document.querySelector('#canva');
let startX, startY, endX,endY

workspace.addEventListener('mousedown', function (event) {
    startX = event.clientX;
    startY = event.clientY;


document.addEventListener("mousemove", moveAt)
document.addEventListener("mouseup", stop);
function stop()
{
    document.removeEventListener("mousemove", moveAt);
}
})

function draw() {
    var canvas = document.getElementById("canva");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      ctx.fillRect(startX, startY, endX, endY);
    }
  }

  function moveAt(event) {
    endX = event.clientX;
    endY = event.clientY;
}