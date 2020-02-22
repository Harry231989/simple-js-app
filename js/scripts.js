/*This is a long comment .it explains several objects to the array that represents Pokemon*/

var repositoryArray = [
  {
  	name:"Bulbasaur",
  	height:7,
  	types:'grass' , 'poison',
  	age:9,
  	arm:'big',
  },
  {
  	name:'Charizard',
  	height:1.7,
  	types:['eletricity'],

  },
  {
  	name:'Squirtle',
  	height:0.5,
  	types:['grass' , 'poison']
  	age:9,
  	arm:'big',
  }
];


for (var i = 1; i <=3;i++) {
	console.log(i);
};	
   document.write(Pokemon);

var name = 'Bulbasaur';
var height = 7;
document.write("Bulbasaur(height:7)");


var name = 'Charizard';
var height = 1.7;
document.write('Charizard(height:1.7)'  + "Wow, that's big!");

var name = 'Squirtle';
var height = 0.5;
document.write('Squirtle(height:0.5)');


