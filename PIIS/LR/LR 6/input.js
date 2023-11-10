let block;

document.querySelectorAll(".target").forEach((target) =>
{
    let startLeft;
    let startTop;

    target.addEventListener("touchstart", (event) =>
    {
        block = event.target;
        startLeft = block.style.left;
        startTop = block.style.top;

        document.addEventListener("touchmove", moveAt);
        document.addEventListener("touchend", stop);

        document.addEventListener('touchcancel', cancel);
        });

        function cancel(){
            document.removeEventListener("touchend", stop);
            document.removeEventListener("touchmove", moveAt);
            block.style.left = startLeft;
            block.style.top = startTop;
        }

        function stop()
        {
            document.removeEventListener("touchmove", moveAt);
            startLeft = block.style.left;
            startTop = block.style.top;
        }
    });

    target.addEventListener("dblclick", (event) => 
    {
        block = event.target;
        startLeft = block.style.left;
        startTop = block.style.top;
        
        let baseColor = block.style.background;

        block.style.background = "purple";

        document.addEventListener("touchmove", moveAt);

        document.addEventListener("click", stop);

        document.addEventListener('touchcancel', cancel);

        function cancel(){
            document.removeEventListener("touchend", stop);
            document.removeEventListener("touchmove", moveAt);
            block.style.left = startLeft;
            block.style.top = startTop;
        }

        function stop()
        {
            block.style.background = baseColor;
            document.removeEventListener("touchmove", moveAt);
        }

    });

function moveAt(event) {
    block.style.left = event.pageX - block.offsetWidth / 2 + 'px';
    block.style.top = event.pageY - block.offsetHeight / 2 + 'px';
}
