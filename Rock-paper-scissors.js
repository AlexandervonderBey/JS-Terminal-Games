// Loading animation
function progressBar(callback) {
    let progress = 0;
    const interval = setInterval(() => {
        progress++;
        process.stdout.write(`\rProgress: [${'='.repeat(progress)}${' '.repeat(20 - progress)}] ${progress * 5}%`);
        if (progress === 20) {
            clearInterval(interval);
            console.log("\nHello player, the game Rock-Paper-Scissors has been loaded.");
            callback();
        }
    }, 100);
}

progressBar(() => {

    // Initiation of variables + conversion of user input to lower case for further processing
    const args = process.argv.slice(2).map(arg => arg.toLowerCase());
    const optionsArray = ["rock", "paper", "scissors"];
    let userInput;
    let computerInput;

    // Input validation 1 - check input for rock, paper, scissors
    if (args.includes("rock")) {
        userInput = "rock";
    } else if (args.includes("paper")) {
        userInput = "paper";
    } else if (args.includes("scissors")) {
        userInput = "scissors";
    } else {
        userInput = false;
    }

    // Input validation 2 - check for no or more than one argument + error message
    if (args.length < 1) {
        console.error("You forgot to enter an input, please choose between following options: Rock, paper or scissors.");
        return;
    } else if (args.length > 1) {
        console.error("You entered more than one element, please choose only one of following options: Rock, paper or scissors.");
        return;
    } else if (!userInput) {
        console.error("You did not enter a valid input, please enter: Rock, paper, or scissors.");
        return;
    }

    // Random selection from array (computer)
    randomSelector = Math.floor(Math.random() * optionsArray.length);
    computerInput = optionsArray[randomSelector];

    console.log(`You selected ${userInput}, the computer selected ${computerInput}.`);

    // game logic
    if (userInput === "rock" && computerInput === "paper") {
        console.log("Paper beats rock, the computer wins, good luck next time.");
    } else if (userInput === "rock" && computerInput === "scissors") {
        console.log("Rock beats scissors, the player wins, congratulations.");
    } else if (userInput === "rock" && computerInput === "rock") {
        console.log("Both parties chose rock, it's a tie!");
    } else if (userInput === "paper" && computerInput === "scissors") {
        console.log("Scissors beats paper, the computer wins, good luck next time.");
    } else if (userInput === "paper" && computerInput === "rock") {
        console.log("Paper beats rock, the player wins, congratulations.");
    } else if (userInput === "paper" && computerInput === "paper") {
        console.log("Both parties chose paper, it's a tie!");
    } else if (userInput === "scissors" && computerInput === "rock") {
        console.log("Rock beats scissors, the computer wins, good luck next time.");
    } else if (userInput === "scissors" && computerInput === "paper") {
        console.log("Scissors beats paper, the player wins, congratulations!");
    } else if (userInput === "scissors" && computerInput === "scissors") {
        console.log("Both parties chose scissors, it's a tie!");
    }
});

