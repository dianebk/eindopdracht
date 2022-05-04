// Maak het raam versleepbaar:
var raam = document.getElementsByClassName("raam");
raam.onmousedown = function (event) {
    let shiftX = event.clientX - raam.getBoundingClientRect().left;
    let shiftY = event.clientY - raam.getBoundingClientRect().top;

    // (1) prepare to moving: make absolute and on top by z-index
    raam.style.position = 'absolute';
    raam.style.zIndex = 90;

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(raam);

    // centers the ball at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        raam.style.left = pageX - shiftX + 'px';
        raam.style.top = pageY - shiftY + 'px';
    }

    // move our absolutely positioned ball under the pointer
    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // (2) move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (3) drop the ball, remove unneeded handlers
    raam.onmouseup = function () {
        // document.getElementById('modal').style.display = 'block';
        document.removeEventListener('mousemove', onMouseMove);
        raam.onmouseup = null;
    };
};

raam.ondragstart = function () {
    return false;
};
