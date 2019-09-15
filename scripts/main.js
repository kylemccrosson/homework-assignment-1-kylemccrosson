
// get the image tag from my html
let myPhoto = document.querySelector('img');

// define a click action for that <img>
myPhoto.onclick = function() {
  // get the src attribute
  let mySrc = myPhoto.getAttribute('src');

  // switch the src attribute between these two options
  if (mySrc === 'images/firefox-icon.png') {
    myPhoto.setAttribute('src', 'images/firefox2.png');
  } else {
    myPhoto.setAttribute('src', 'images/firefox-icon.png');
  }
};

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

// set the name to be displayed in the heading
function setUserName() {
  let myName = prompt('Please enter your name.');
  // check that a valid name has been given
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

// prompt the user to input a name, only if there is not already a name stored
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// add a click action to the button at the bottom of the page
myButton.onclick = function() {
  setUserName();
};
