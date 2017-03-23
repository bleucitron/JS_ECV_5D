// THIRD
var startSize = document.getElementById('start_size');
var stopSize = document.getElementById('stop_size');
var daddy = document.getElementById('daddy');

function grow(event){
    var min = 16;
    var max = 64;

    var newSize = min + (max - min) * (1 - event.clientY / window.innerHeight);

    daddy.style.fontSize = newSize + 'px';
}

startSize.addEventListener('click', function(){
    document.addEventListener('mousemove', grow);
});

stopSize.addEventListener('click', function() {
    document.removeEventListener('mousemove', grow);
});