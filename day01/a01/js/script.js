// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// document.querySelector('html').onclick = function() {
//     alert('Dont Click me');
// }
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/mastek_icon.png') {
      myImage.setAttribute('src','img/evosys-icon.png');
    } else {
      myImage.setAttribute('src','img/mastek_icon.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
  }
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      sessionStorage.setItem('name', myName);
      myHeading.textContent = 'Mastek is cool, ' + myName;
    }
  }
  if(!sessionStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Mastek is cool, ' + storedName;
  }