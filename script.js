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

let currentImageObj;
currentImageObj = images[Math.floor(Math.random() * images.length)];

const blurredImage = document.getElementById('blurredImage');
blurredImage.src = currentImageObj.src;


let numOfTries = 10;
let correctGuess = false;

setTimeout(() => {
    while (numOfTries > 0 && correctGuess != true) {
        numOfTries -= 1;
        let userGuess;
        userGuess = window.prompt("Guess the name of the flower");
        console.log(userGuess);
        if (userGuess === null) {
            break;
            //alert(`Please enter a valid guess.`);
        } else if (userGuess === '') {
            alert(`Please enter a valid guess.`);
        } else {
            userGuess = userGuess.trim().toLowerCase();
            console.log("userguess: " + userGuess);
            let currentImage = currentImageObj.name.trim().toLowerCase();
            console.log("current: " + currentImage)
            if (userGuess === currentImage) {
                alert(`Correct! Its a ${currentImageObj.name}.`)
                blurredImage.style.filter = 'blur(0px)';
                correctGuess = true;
            } else {
                alert(`Wrong guess! Try again. You have ${numOfTries} more guesses`);
            }
        }
    }
}, 500);



//currentImage = images[Math.floor(Math.random() * images.length)];
//const blurredImage = document.getElementById('blurredImage');
//blurredImage.src = currentImage.src;

//const userGuess = window.prompt("Guess the name of the flower");
//console.log(currentImage.name);

//validating input
//if (userGuess) {
//    userGuess1 = userGuess.trim().toLowerCase();
//    if (userGuess1 === currentImage.name) {
//        alert(`Correct! Its a ${currentImage.name}.`)
//    } else {
//        alert(`Wrong guess! Try again.`);
//    }

//} else {
//    alert('Please enter a valid guess.');
//}

//function startGame() {
//    currentImage = images[Math.floor(Math.random() * images.length)];
//    const blurredImage = document.getElementById('blurredImage');
//    blurredImage.src = currentImage.src;
//    handleGuess();
//}

//function handleGuess() {
//    const userGuess = window.prompt("Guess the name of the flower");
//    if (userGuess) {
//        userGuess1 = userGuess.trim().toLowerCase();
//        if (userGuess1 === currentImage.name) {
//            alert(`Correct! Its a ${currentImage.name}.`)
//        } else {
//            alert(`Wrong guess! Try again.`);
//            handleGuess(); //asking to guess again
//        }

//    } else {
//        alert('Please enter a valid guess.');
//        handleGuess(); //prompting again if input is invalid
//    }
//}


//let currentImage = currentImageObj.name.trim().toLowerCase();
//console.log(`currentImage: ${currentImage}`);

//let userGuess = window.prompt("Guess the name of the flower");
//userGuess = userGuess.trim().toLowerCase();
//console.log(`UserGuess: ${userGuess}`);
//if (userGuess === currentImage) {
//    alert(`Correct! Its a ${currentImageObj.name}.`)
//} else {
//    alert(`Wrong guess! Try again.`);
//}

//startGame();
