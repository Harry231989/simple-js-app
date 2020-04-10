


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


function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height; 
    showModal(item.name,item.height, item.imageUrl);
  }).catch(function (e) {
    console.error(e);
  });

} 


/* comments to show all the details*/
function  showDetails(pokemon){
  loadDetails(pokemon);

  /*
loadDetails(item).then(function () 
{
 
});  */

//	console.log(pokemon);
}


var $modalContainer = document.querySelector('#modal-container');
  
function showModal( name, height, image) {
  // Clear all existing modal content
  $modalContainer.innerHTML = '';
  
  var modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Add the new modal content
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);
  
  var titleElement = document.createElement('h1');
  titleElement.innerText = 'Name: '+ name;
  
  var contentElement = document.createElement('p');
  contentElement.innerText = 'Height: '+ height;

  var  imageElement = document.createElement('img');
  imageElement.src = image;
  
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  $modalContainer.appendChild(modal);
  
  $modalContainer.classList.add('is-visible');
}

function hideModal() {
  $modalContainer.classList.remove('is-visible');
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

 
    showDetails( pokemon);   
});

}
return {
  add: add,
  getAll: getAll, 
  loadList: loadList,
  loadDetails:loadDetails
};


})();
  
respository.loadList().then(function() {
  // Now the data is loaded!
  respository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });
});

