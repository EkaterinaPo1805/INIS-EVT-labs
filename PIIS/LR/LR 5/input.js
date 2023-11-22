let block;

document.querySelectorAll(".target").forEach((target) =>
{
    let startLeft;
    let startTop;

    target.addEventListener("mousedown", (event) =>
    {
        block = event.target;
        startLeft = block.style.left;
        startTop = block.style.top;

        document.addEventListener("mousemove", moveAt);
        document.addEventListener("mouseup", stop);

        document.addEventListener('keydown', backEvent => {
            if (backEvent.key === 'Escape') {
                document.removeEventListener("mouseup", stop);
                document.removeEventListener("mousemove", moveAt);
                block.style.left = startLeft;
                block.style.top = startTop;
            }
        });

        function stop()
        {
            document.removeEventListener("mousemove", moveAt);
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

        document.addEventListener("mousemove", moveAt);

        document.addEventListener("click", stop);

        document.addEventListener('keydown', backEvent => {
            if (backEvent.key === 'Escape') {
                document.removeEventListener("mouseup", stop);
                document.removeEventListener("mousemove", moveAt);
                block.style.background = baseColor;
                block.style.left = startLeft;
                block.style.top = startTop;
            }
        });

        function stop()
        {
            block.style.background = baseColor;
            document.removeEventListener("mousemove", moveAt);
        }

    });
});

function moveAt(event) {
    block.style.left = event.pageX - block.offsetWidth / 2 + 'px';
    block.style.top = event.pageY - block.offsetHeight / 2 + 'px';
}
