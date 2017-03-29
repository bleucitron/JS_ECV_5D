// FIFTH
var square = document.getElementById('square');
var startMovingSquare = document.querySelectorAll('#fifth div')[0];

startMovingSquare.onclick = function(){

	window.addEventListener('keydown', function(event){
		event.preventDefault();

		var key = event.keyCode;

		var top = parseInt(square.style.top);
		var left = parseInt(square.style.left);

		switch(key){
			case 37:
				square.style.left = left - 10 + 'px';
				break;
			case 38:
				square.style.top = top - 10 + 'px';
				break;
			case 39:
				square.style.left = left + 10 + 'px';
				break;
			case 40:
				square.style.top = top + 10 + 'px';
				break;
		}
	});
};
