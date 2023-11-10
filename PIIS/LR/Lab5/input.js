let selected;

document.querySelectorAll(".target").forEach((block) =>
{
    let startLeft;
    let startTop;

    block.addEventListener("mousedown", (event) =>
    {
        block = event.target;
        startLeft = block.style.left;
        startTop = block.style.top;

        document.addEventListener("mousemove", moveAt);


        document.addEventListener("mouseup", stopMoving);

        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                document.removeEventListener("mouseup", stopMoving);
                document.removeEventListener("mousemove", moveAt);
                block.style.left = startLeft;
                block.style.top = startTop;
            }
        });

        function stopMoving(event)
        {
            document.removeEventListener("mousemove", moveAt);
            startLeft = block.style.left;
            startTop = block.style.top;
        }
    });

    block.addEventListener("dblclick", (event) => 
    {
        block = event.target;
        startLeft = block.style.left;
        startTop = block.style.top;
        
        let baseColor = block.style.background;

        block.style.background = "blue";

        document.addEventListener("mousemove", moveAt);

        document.addEventListener("click", stopMoving);

        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                document.removeEventListener("mouseup", stopMoving);
                document.removeEventListener("mousemove", moveAt);
                block.style.background = baseColor;
                block.style.left = startLeft;
                block.style.top = startTop;
            }
        });

        function stopMoving(event)
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