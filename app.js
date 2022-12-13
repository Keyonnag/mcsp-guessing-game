console.log(setUp);


function setUp(){
    var gameObj = {
        guesses: [],
        solved: false,
        numOfGuesses: 0
    }
    var playerName = getName();
    gameObj.playerName = playerName;
    var secretNum = getRandomInt(1,10);
    gameObj.secretNum = secretNum;
    return gameObj;
}
function getName() {
    var name = prompt('What is your name?');
    return name; 
}
function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function guessingGame() {
   
    var gameObj = setUp();
   
    var count = 0
    
    while (!gameObj.solved) {
        var guess = prompt(gameObj.playerName + " Guess a number between 1 and 10");
        
        var guessNum = parseInt(guess);
        
        gameObj.guesses.push(guessNum);
        
        count += 1;
        
        if (guessNum < 1 || guessNum > 10) {
        
            alert(gameObj.playerName + ' doesnt know how to read...')
        
        } else if (guessNum === gameObj.secretNum) {
        
            alert("You NAILED IT " + gameObj.playerName + " !!!");
        
            gameObj.solved = true;
        
            alert("Great job " + gameObj.playerName + "! It took you " + count + " tries. Your guess(es) consisted of " + gameObj.guesses + " !")
        
            playAgain(); 
        
        } else if (guessNum > gameObj.secretNum) {
        
            alert("Too high " + gameObj.playerName + ", try again!");
        
        } else {
        
            alert("Too low " + gameObj.playerName + " , try again!");
        
        }
    }
}

function playAgain() {
    var ask = prompt('would you like to play again? Please type Yes or No');
    if (ask === 'Yes' || ask === 'yes') {
        guessingGame();
        } else {
            alert('Thank you, for playing!');
        }

}
guessingGame();