var range = Array.from(Array(300).keys());

// Initialize 300 points
var initialPoints = range
.map(function(index){
    return {
        x: getRandomValue(0, maxWidth),
        y: -getRandomValue(0, offsetTop),
        radius: getRandomValue(3, 10),
        speed: getRandomValue(0.5, 2)
    };
});

// Function to get random value between min and max
function getRandomValue(min, max){
    return min + max * Math.random();
}

// Function to get random sign + or -
function getRandomSign(){
    return Math.random() > 0.5 ? 1 : -1;
}

// Function to move each point
function move(point){
    point.y += point.speed + getRandomValue(0, 0.5) * getRandomSign();
    point.x += getRandomValue(0, 0.5) * getRandomSign();

    // if the point is too far down, reset its Y position in the upper part of the canvas
    if (point.y > canvas.height + offsetBottom)
        point.y = - getRandomValue(0, offsetTop);

    return point;
}

// Global function to draw
function draw(context){
    context.fillStyle = "#4286f4";
    context.fillRect (0, 0, maxWidth, maxHeight);

    initialPoints
    .map(move)
    .forEach(function(point){
        drawPoint(point, context);
    });
}

// Function to draw a single point
function drawPoint(point, context, color='#EEE'){
    context.fillStyle = color;
    context.beginPath();

    context.arc(point.x, point.y, point.radius, 0, Math.PI*2, true);
    context.fill();
}

// Function to clear the canvas
function clear(context){
	context.clearRect(0 , 0 , canvas.width, canvas.height);
}
