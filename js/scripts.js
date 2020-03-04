/*This is a long comment .it explains several objects to the array that represents Pokemon*/
 var pokemonRepository = (function  () {
  	 var repositoryArray = [
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
];

function add(pokemonRepository.add(item) {
	repositoryArray.push(pokemonRepository);
}

function getAll(pokemonRepository.getAll() {
	return pokemonRepository;
}

return {
	add:  add,
	getAll:  getAll
};

})();



 






/*
  
var repositoryArray = ['Bulbasaur'  +  'Charizard'  +  'Squirtle'];
var arrayLength = repositoryArray.length;
for (var i = 0; i < arrayLength;i++) {
	console.log(repositoryArray[i]);
    document.write("<p>"  +  'Bulbasaur(height:7)' + 'grass','poison'  +  9  +  'big'  + "</p>");
    document.write("<p>"  +  'Charizard(height:1.7)-Wow thats big'  + 'grass','poison'  +  "</p>");
    document.write("<p>"  +  'Squirtle(height:0.5)'    +   'grass','poison'  +  9  +  'big'  + "</p>")


};
*/


 repositoryArray.forEach(function(pokemonRepository)  {
 	document.write(repositoryArray.name  +  '<br>')
 	document.write(repositoryArray.height  +  '<br>')
 	document.write(repositoryArray.types  +  '<br>')
 	document.write(repositoryArray.age  +  '<br>')
 	document.write(repositoryArray.arm  +  '<br>')
  
 });



