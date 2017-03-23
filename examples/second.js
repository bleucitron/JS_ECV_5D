// SECOND
var second = document.getElementById('second');

var blue = document.getElementById('blue');
var red = document.getElementById('red');
var green = document.getElementById('green');

[blue, red, green].forEach(function(element){
    var id = element.getAttribute('id');

    element.addEventListener('click', function(){
        second.classList = [];
        if (second.classList.contains(id))
            second.classList.remove(id);
        else
            second.classList.add(id);
        // second.classList.toggle(id);
    });
});