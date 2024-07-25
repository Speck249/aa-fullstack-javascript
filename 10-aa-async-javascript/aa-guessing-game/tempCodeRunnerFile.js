let secretNumber = randomInRange();

function checkGuess(num) {
    if (num > secretNumber) {
        console.log('Too high');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        if (checkGuess(Number(answer))) {
            console.log('YOU WIN!');
            rl.close()
        } else {
            askGuess()
        }
    });
}