
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
];

var respository =(function(){

function add(item){
	pokemonRepository.add(item);
}

function getAll(){
 
return pokemonRepository;
}

return getAll();

})();


respository.forEach(function(item) {
 	document.write( item.name  +  '<br>')
 	document.write(item.height  +  '<br>')
 	document.write(item.types  +  '<br>')
 	document.write(item.age  +  '<br>')
 	document.write(item.arm  +  '<br>')
  
 });



/*return {
	add:  add,
	getAll:  getAll
}/;

*/





 






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





