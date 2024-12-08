const die = document.getElementById('die'); //sets variable for die element

// Function to simulate rolling the die
function rollDie() {
    // Random number between 1 and 6
    const randomDegreeX = Math.floor(Math.random() * 360);
    const randomDegreeY = Math.floor(Math.random() * 360);
    
    // Apply the random rotation to the die
    die.style.transform = `rotateX(${randomDegreeX}deg) rotateY(${randomDegreeY}deg)`;
}

// Event listener for hovering over the die
die.addEventListener('mouseenter', rollDie);