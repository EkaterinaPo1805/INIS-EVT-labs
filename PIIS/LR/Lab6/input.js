let selected;

document.querySelectorAll(".target").forEach((block) =>
{
    let startLeft;
    let startTop;

    block.addEventListener("mousedown", (event) =>
    {
        selected = event.target;
        startLeft = selected.style.left;
        startTop = selected.style.top;

        document.addEventListener("mousemove", moveAt);


        document.addEventListener("mouseup", stopMoving);

        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                document.removeEventListener("mouseup", stopMoving);
                document.removeEventListener("mousemove", moveAt);
                selected.style.left = startLeft;
                selected.style.top = startTop;
            }
        });

        function stopMoving(event)
        {
            document.removeEventListener("mousemove", moveAt);
            startLeft = selected.style.left;
            startTop = selected.style.top;
        }
    });

    block.addEventListener("dblclick", (event) => 
    {
        selected = event.target;
        startLeft = selected.style.left;
        startTop = selected.style.top;
        
        let baseColor = selected.style.background;

        selected.style.background = "blue";

        document.addEventListener("mousemove", moveAt);

        document.addEventListener("click", stopMoving);

        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                document.removeEventListener("mouseup", stopMoving);
                document.removeEventListener("mousemove", moveAt);
                selected.style.background = baseColor;
                selected.style.left = startLeft;
                selected.style.top = startTop;
            }
        });

        function stopMoving(event)
        {
            selected.style.background = baseColor;
            document.removeEventListener("mousemove", moveAt);
        }
    });
});

function moveAt(event) {
    selected.style.left = event.pageX - selected.offsetWidth / 2 + 'px';
    selected.style.top = event.pageY - selected.offsetHeight / 2 + 'px';
}