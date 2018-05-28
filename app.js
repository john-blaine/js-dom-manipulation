/*jshint esversion: 6 */

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');

const errorNotBlue = document.getElementsByClassName('error-not-blue');

const evens = document.querySelectorAll('li:nth-child(even)');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
  for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = myTextInput.value;
  }
  for (let j = 0; j < errorNotBlue.length; j++) {
    errorNotBlue[j].style.color = 'red';
  }
});

for (let i = 0; i < evens.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}
