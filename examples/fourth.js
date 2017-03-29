// FOURTH
var fourth = document.getElementById('fourth');
var start = document.querySelectorAll('#fourth div')[0];

var info = document.getElementById('info-mouse');
var sectionName = document.createElement('div');
var mousePosition = document.createElement('div');

info.append(sectionName);
info.append(mousePosition);

start.onclick = function(){
	var sections = Array.from(document.body.getElementsByTagName('section'));

	start.innerHTML = 'Tracking Mouse';

	sections.forEach(function(section){
		section.addEventListener('mousemove', function(event){
			info.childNodes[0].innerHTML = 'Section: ' + section.getAttribute('id');
			info.childNodes[1].innerHTML = 'X: ' + event.clientX + ' Y: ' + event.clientY;
		}, false);
	});
};
