/*jshint esversion: 6 */

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');

const errorNotBlue = document.getElementsByClassName('error-not-blue');

const evens = document.querySelectorAll('li:nth-child(even)');

const romanceItems = document.querySelectorAll('nav#myNav ul li');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const removeItemButton = document.querySelector('button.removeItemButton');

const listItems = document.querySelectorAll('li');

const firstUl = document.querySelector('ul');

firstUl.addEventListener('mouseover', (e) => {
  if (event.target.tagName === 'LI') {
    e.target.parentNode.removeChild(e.target);
  }
});

firstUl.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});


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

descriptionButton.addEventListener('click', () => {
  descriptionP.textContent = descriptionInput.value + ':';
  descriptionInput.value = '';
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

addItemButton.addEventListener('click', () => {
  let newListItem = document.createElement('li');
  //newListItem.append(addItemInput.value);
  //or
  newListItem.textContent = addItemInput.value;

  let firstList = document.querySelector('ul.firstList');
  firstList.appendChild(newListItem);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let firstList = document.querySelector('ul.firstList');
  let lastChild = document.querySelector('ul.firstList li:last-child');
  firstList.removeChild(lastChild);
});
