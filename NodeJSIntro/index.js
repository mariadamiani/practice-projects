//jshint esversion:6

/* Modules */
const superheroes = require("superheroes"); //superhero name generator
const supervillains = require("supervillains"); //supervillains name generator

/* Code */
console.log("Hello, world!");

var mySuperheroName = superheroes.random();
console.log("My superhero name is " + mySuperheroName);

var mySupervillainName = supervillains.random();
console.log("My supervillain name is " + mySupervillainName);
