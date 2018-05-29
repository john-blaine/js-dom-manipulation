/*jshint esversion: 6 */

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');

const errorNotBlue = document.getElementsByClassName('error-not-blue');

const evens = document.querySelectorAll('li:nth-child(even)');

const romanceItems = document.querySelectorAll('nav#myNav ul li');

const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
  for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = myTextInput.value;
  }
  for (let j = 0; j < errorNotBlue.length; j++) {
    errorNotBlue[j].style.color = 'red';
  }
});

for (let k = 0; k < evens.length; k++) {
  evens[k].style.backgroundColor = 'lightgray';
}

for (let l = 0; l < romanceItems.length; l++) {
  romanceItems[l].style.color = 'darkred';
}

button.addEventListener('click', () => {
  p.textContent = input.value + ':';
});
