e.addEventListener("mousedown", function() {
    isMouseDown = true;
});

function move(event, id) {
    var e = document.getElementById(id);

    var isMouseDown = true;

    if (isMouseDown) {
        var x = event.clientX;
        var y = event.clientY;

        e.style.left = x - 25 + "px";
        e.style.top = y - 25 + "px";

        var height = parseInt(screen.height / 2);
        var width = parseInt(screen.width / 2);

        var d = document.getElementById(id + "Hidden");
        if (
            (y <= (height + 80)) && (y >= (height - 80)) &&
            (x >= (width - 130)) && (x <= (width + 130))
            ) {
                d.value = id;
        } else {
            d.value = "";
        }

    }
}

