window.onload = function() {
    var canvas = document.getElementById('canvas');
    var view = new View(canvas);
    view.updateDisplay();
}

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var view = new View(canvas);
    canvas.addEventListener("click", view.handleClick.bind(view), false);
    view.updateDisplay();
};