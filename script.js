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
    { src: './images/jasmine.jpg', name: 'jasmine' },
    { src: './images/lily.jpg', name: 'lily' },
    { src: './images/rose.jpg', name: 'rose' },
    { src: './images/sun.jpg', name: 'sunFlower' },
];

//let currentImage;
const blurredImage = document.getElementById('blurredImage');
blurredImage.src = './images/lotus.jpg';