


/*This is a long comment .it explains several objects to the array that represents Pokemon*/
var addListItem;
var respository =(function(){


    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
    // Other functions remain here
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
  


function add(item){
	repository.push(item);
}



function getAll(){
 
return repository;
}
/* comments to show all the details*/
function showDetaials(pokemon){
	
	console.log(pokemon);
}

var list = document.querySelector(".pokemon-list");

 addListItem = function(pokemon){
var pokemonLI = document.createElement("li");
var PokemonButton = document.createElement("button");

PokemonButton.classList.add("btnlist");
PokemonButton.innerText =pokemon.name;

pokemonLI.appendChild(PokemonButton);

 list.appendChild(pokemonLI);

/* comments for event listener*/
PokemonButton.addEventListener("click",function(){
 	showDetaials("Name:"+pokemon.name+" Detail Url:"+pokemon.detailsUrl);
 });

	
}

	
return {
  add: add,
  getAll: getAll, 
  loadList: loadList
};


})();
  
respository.loadList().then(function() {
  // Now the data is loaded!
  respository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });
});



