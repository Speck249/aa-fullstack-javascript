// Import and assign readline module functions.
const readline = require('readline');
// Initialize interface to read data from stream. 
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout 
});

let secretNumber;
let numAttempts;

const askRange = () => {
    // Function collects user provided range for random number generation.
    rl.question("Enter a max number: ", (maxNum) => {
        rl.question("Enter a min number: ", (minNum) => {
            // typecast user input, rendered String by readline module.
            maxNum = Number(maxNum);
            minNum = Number(minNum);
            console.log(`I'm thinking of a number between ${minNum} and ${maxNum}`);
            randomInRange(minNum, maxNum);
            // Start Game.
            askGuess();
        })
    })
};

const randomInRange = (min, max) => {
    // Function generates random secret whole number.
    secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
};


const checkGuess = (num) => {
    // Function validates users answer against secret number.
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
};

const askGuess = () => {
    // Function collects user's guess and closes interface when game is won.
    rl.question("Enter a guess: ", (answer) => {
        let userGuess = Number(answer)
        numAttempts--
        if (numAttempts > 0) {
            if (checkGuess(userGuess)) {
                console.log('YOU WIN!');
                rl.close();
            } else {
                askGuess()
            }
        } else if (numAttempts === 0) {
            console.log('You lose')
            rl.close()
        }
    });
};

const askLimit = () => {
    // Function limits numbers of user attempts.
    rl.question("Choose Number of Tries You Get: ", (answer) => {
        numAttempts = Number(answer)
        askRange()
    })
};

askLimit();