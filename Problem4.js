let theFavNumber = 10; // Set this to your favorite number
let guessNumber =parseInt(prompt("Guess my favorite number:"));

while (true) {
  // Prompt user for a guess
  guess = parseInt(prompt("Retry:")); // guess the user

  if (guess > theFavNumber) {
    console.log("Too high!");
  } else if (guess < theFavNumber) {
    console.log("Too low!");
  } else {
    console.log("Wrong input.");
  }
}

console.log("Correct! You guessed the favorite number."); // user guest the correctly
