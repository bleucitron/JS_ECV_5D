var lastUpdate = 0;
var refreshTime = 0;

// Function to ensure each frame is drawn at fixed interval
function tick(){
    var now = performance.now();
    var deltaTime = now - lastUpdate;
    lastUpdate = now;
    refreshTime += deltaTime / 1000; // in seconds

    // display FPS info every 0.01 s
    if (refreshTime > 0.01){
        clear(context);
        draw(context);
        refreshTime = 0;
    }
}

// Function to animate the canvas
function animate(canvas){
    tick();
    requestAnimationFrame(animate);
}

animate(canvas);
