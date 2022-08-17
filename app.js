import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";

const showBackground= true;
const background = <img className='background' alt='ocean' src='/images/ocean.jpg'/>

//making an array of images from the animals.js file
let images = [];
for (const animal in animals){
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact}/> //animals[animal] instead of . bc animal is INDEX!
  );
}

//var used to render everything 
//heading tag could be {title || "click for fact"}
const animalFacts = 
(
  <div>
    <h1> {title==""? "Click an animal for a fun fact" : title } </h1> 
    {showBackground && background} 
    <div className='animals'>{images} </div>
    <p id='fact'> </p>
  </div>
)

function displayFact(e){
  let animalClicked = e.target.alt;
  let randIndex = Math.floor(Math.random()*animals[animalClicked].facts.length)
  let randFact = animals[animalClicked].facts[randIndex];
  document.getElementById('fact').innerHTML = randFact;
}

ReactDOM.render(animalFacts, document.getElementById('root'));
