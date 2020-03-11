
/*This is a long comment .it explains several objects to the array that represents Pokemon*/
 var pokemonRepository = [
  {
  	name:'Bulbasaur',
  	height:7,
  	types:['grass' , 'poison'],
  	age:9,
  	arm:'big',
  },
 {
  	name:'Charizard',
  	height:1.7,
  	types:['grass',  'poison'],

  },

  {
  	name:'Squirtle',
  	height:0.5,
  	types:['grass' ,  'poison'],
  	age:9,
  	arm:'big',
  },
  {  
   name: 'lucyopo',
   height:0.8,
   types:['grass' , 'poison'],
   age:59,
   arm:'small',
  },

  {
  	name: 'Anthonyk',
  	height:5.8,
  	types:['grass' , 'poison'],
  	age:63,
  	arm:'big',
  },

  {
  	name:'Richlo',
  	height:5.3,
  	types:['grass' , 'poison'],
  	age:34,
  	arm:'small',
  },
];

var addListItem;
var respository =(function(){

function add(item){
	pokemonRepository.add(item);
}



function getAll(){
  
return pokemonRepository;
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
PokemonButton.innerText =pokemon;

pokemonLI.appendChild(PokemonButton);


 list.appendChild(pokemonLI);

/* comments for event listener*/
PokemonButton.addEventListener("click",function(){
 	showDetaials(pokemon);
 });

	
}

	
return getAll();

})();


/*
respository.forEach(function(item) {
 	document.write( item.name  +  '<br>')
 	document.write(item.height  +  '<br>')
 	document.write(item.types  +  '<br>')
 	document.write(item.age  +  '<br>')
 	document.write(item.arm  +  '<br>')
  
 });
*/




respository.forEach(function(item) {

addListItem(item.name);

}); 






