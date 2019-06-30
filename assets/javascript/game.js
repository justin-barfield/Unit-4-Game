/* Structure Notes */

// Display buttons 'crystals'
// Generate random number and display on screen
    // Set score to 0 (function)
    // Set hidden value to buttons
        // Math to get values for buttons that allow adding/multiplying to random number?
    // Buttons add to score
// Win if matching random number
    // Add to Wins
// Lose if over random number
    // Add to loses
// Restart game
    // Get new random number
    // Get new button values
    // Reset score counter

    var log = console.log

    var score = 0;
    var button1Val = 0;
    var button2Val = 0;
    var button3Val = 0;
    var button4Val = 0;
    var generatedNumber = 0;
    var hiddenArray = [];
    var wins = 0;
    var losses = 0;
    
    function randomNumber() {
        return Math.floor((Math.random() * 100) + 50);
    };
    
    function setRandomNumber() {
        generatedNumber = randomNumber();
        $('#random-number').html(generatedNumber);
        return;
    };
    
    function resetScore() {
        var score = 0;
        $('#score').html(0);
        return score;
    };
    
    function increaseWin() {
        wins++;
        $('#wins').html(wins);
        return wins;
    };
    
    function increaseLosses() {
        losses++;
        $('#losses').html(losses);
        return losses;
    };
    
    function hiddenRandomNumber() {
        
        while(hiddenArray.length < 4){
            var test = Math.floor((Math.random() * 9) + 2);
            if(hiddenArray.indexOf(test) === -1) {
                hiddenArray.push(test);
            };
        };
    };
    
    
    
    function setHiddenValues() {
        hiddenRandomNumber();
        button1Val = Math.floor(generatedNumber / hiddenArray[0]) + 1;
        button2Val = Math.floor(generatedNumber / hiddenArray[1]) + 1;
        button3Val = Math.floor(generatedNumber / hiddenArray[2]) + 1;
        button4Val = Math.floor(generatedNumber / hiddenArray[3]) + 1;
    
        $('#button1').val(button1Val);
        $('#button2').val(button2Val);
        $('#button3').val(button3Val);
        $('#button4').val(button4Val);
        
        return button1Val, button2Val, button3Val, button4Val 
    };
    
    var lossSound = new Audio();
    function playLossSound() {
    
    };
    
    var winSound = new Audio();
    function playWinSound() {
        winSound.src = 'assets/images/cheer1.wav';
        winSound.play();
    };
    
    function resetGame() {
        // debugger;
        setRandomNumber();
        setHiddenValues();
        resetScore();
        log(generatedNumber);
        log(hiddenArray);
        log(button1Val, button2Val, button3Val, button4Val);
    
    };
    
    function addToScore() {
        $('img').click(function() {
            var buttonVal = $(this).val();
            var scoreVal = $('#score').html();
            score = +buttonVal + +scoreVal;
            $('#score').text(score);
    
            if(score === generatedNumber){
    
                playWinSound();
                increaseWin();
                setTimeout(function() {
                    resetGame();
                }, 1000);
    
            } else if (score > generatedNumber){
                // playLossSound();
                increaseLosses();
                setTimeout(function() {
                    resetGame();
                }, 1000);
            };
            return score
        });
    };
    
    resetGame();
    addToScore();
