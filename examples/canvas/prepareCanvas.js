var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var context = canvas.getContext("2d");
}

// Prepare some util constants
var maxWidth = canvas.width;
var maxHeight = canvas.height;
var offsetTop = 300;
var offsetBottom = 30;
var centerY = canvas.width / 2;
var centerX = canvas.height / 2;
