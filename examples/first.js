// FIRST
var first = document.getElementById('first');

var addDivElement = document.createElement('div');
first.lastElementChild.appendChild(addDivElement);
addDivElement.innerHTML = 'Add Pokemon';

var removeDivElement = document.createElement('div');
first.lastElementChild.appendChild(removeDivElement);
removeDivElement.innerHTML = 'Remove Pokemon';

var pokemonList = ['bulbizarre', 'carapuce', 'salameche'];

var pokemonDiv = document.createElement('div');
first.appendChild(pokemonDiv);

function updateNumber(){
    document.getElementById('nb_pokemon').innerHTML = pokemonDiv.children.length;
}

addDivElement.addEventListener('click', function(){
    var newDiv = document.createElement('div');
    var randomNumber = Math.floor(Math.random()*3);
    newDiv.innerHTML = pokemonList[randomNumber];
    pokemonDiv.appendChild(newDiv);
    updateNumber();
});

removeDivElement.addEventListener('click', function(){
    var children = pokemonDiv.childNodes;
    if (children.length > 0)
        pokemonDiv.removeChild(children[children.length - 1]);
    updateNumber();
});
