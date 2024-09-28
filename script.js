//console.log(`ALAB-Interaction with the Browser`);

//const randomNumber = Math.floor(Math.random() * 11);
//console.log(randomNumber);

//const answer = prompt("what is random number?");

////everything that comes from the DOM will be a string
//if (answer === randomNumber.toString()) {
//    document.body.style.backgroundColor = 'green';
//} else {
//    document.body.style.backgroundColor = 'red';
//}


const images = [
    { src: './images/jasmine.jpg', name: 'Jasmine' },
    { src: './images/lily.jpg', name: 'Lily' },
    { src: './images/rose.jpg', name: 'Rose' },
    { src: './images/sun.jpg', name: 'SunFlower' },
];

//const blurredImage = document.getElementById('blurredImage');
//blurredImage.src = './images/lotus.jpg';

let currentImage;

currentImage = images[Math.floor(Math.random() * images.length)];
const blurredImage = document.getElementById('blurredImage');
blurredImage.src = currentImage.src;

const userGuess = window.prompt("Guess the name of the flower");
console.log(currentImage.name);

//validating input
if (userGuess) {
    userGuess1 = userGuess.trim().toLowerCase();
    if (userGuess1 === currentImage.name) {
        alert(`Correct! Its a ${currentImage.name}.`)
    } else {
        alert(`Wrong guess! Try again.`);
    }

} else {
    alert('Please enter a valid guess.');
}
