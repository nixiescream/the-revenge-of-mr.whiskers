function main(){
    function buildSplash(){
        var body = document.getElementById('main-body');
        var firstScript = document.getElementById('first-script');
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','main-section');
        var gameTitle = document.createElement('h1');
        var textTitle = document.createTextNode("The revenge of Mr. Whiskers"); 
        gameTitle.appendChild(textTitle);  
        var startButton = document.createElement('button');
        startButton.setAttribute('id','start-button');
        startButton.setAttribute('value','start');
        var textStartButton = document.createTextNode("Start!");
        startButton.appendChild(textStartButton);
        startButton.addEventListener('click', function(){
            destroySplash();
            buildGame();
        });
        var instructionsButton = document.createElement('button');
        instructionsButton.setAttribute('id', 'instructions-button');
        instructionsButton.setAttribute('value','instructions');
        var textInstructionsButton = document.createTextNode("Instructions");
        instructionsButton.appendChild(textInstructionsButton);
        instructionsButton.addEventListener('click', function(){
            destroySplash();
            buildInstructions();
        });
    
        mainSection.appendChild(gameTitle);
        mainSection.appendChild(startButton);
        mainSection.appendChild(instructionsButton);
        body.insertBefore(mainSection, firstScript);
    };

    buildSplash();

    function destroySplash(){
        var body = document.getElementById('main-body');
        var mainSection = document.getElementById('main-section');
        body.removeChild(mainSection);

    };
    function buildGame(){
        var body = document.getElementById('main-body');
        var firstScript = document.getElementById('first-script');
        var newCanvas = document.createElement('canvas');
        newCanvas.setAttribute('id', 'game');
        newCanvas.setAttribute('width', '1584');
        newCanvas.setAttribute('height', '790');

        body.insertBefore(newCanvas, firstScript);
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');
        //var game = new Game();
        //game.start();

        setTimeout(function(){
            destroyGame();
            buildGameOver();
        }, 5000);
    };

    function destroyGame(){
        var body = document.getElementById('main-body');
        var canvas = document.getElementById('game');
        body.removeChild(canvas);
    };

    function buildGameOver(){
        var body = document.getElementById('main-body');
        var firstScript = document.getElementById('first-script');
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','main-section');
        var gameTitle = document.createElement('h1');
        var textTitle = document.createTextNode("Game over! :("); 
        gameTitle.appendChild(textTitle);  
        var startButton = document.createElement('button');
        startButton.setAttribute('id','start-button');
        startButton.setAttribute('value','start');
        var textStartButton = document.createTextNode("Replay!!");
        startButton.appendChild(textStartButton);
        startButton.addEventListener('click', function(){
            destroyGameOver();
            buildGame();
        });
        var goToStartButton = document.createElement('button');
        goToStartButton.setAttribute('id', 'go-to-start');
        goToStartButton.setAttribute('value','go-to-start');
        var textGoToStartButton = document.createTextNode("Go to start");
        goToStartButton.appendChild(textGoToStartButton);
        goToStartButton.addEventListener('click', function(){
            destroyGameOver();
            buildSplash();
        });
    
        mainSection.appendChild(gameTitle);
        mainSection.appendChild(startButton);
        mainSection.appendChild(goToStartButton);
        body.insertBefore(mainSection, firstScript);
    };

    function destroyGameOver(){
        var body = document.getElementById('main-body');
        var mainSection = document.getElementById('main-section');
        body.removeChild(mainSection);
    };

    function buildInstructions(){
        var body = document.getElementById('main-body');
        var firstScript = document.getElementById('first-script');
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','main-section');
        var instructionsTitle = document.createElement('h1');
        var textTitle = document.createTextNode("Instructions!");
        instructionsTitle.appendChild(textTitle);
        var instructionsContent = document.createElement('div');
        instructionsContent.innerHTML = "<p>&#x21E6; to move left</p>\
        <p>&#x21E8; to move right</p><p>&#x21E7; to jump</p>\
        <p>Try not to die :)</p>";
        var goToStartButton = document.createElement('button');
        goToStartButton.setAttribute('id', 'go-to-start');
        goToStartButton.setAttribute('value','go-to-start');
        var textGoToStartButton = document.createTextNode("Go to start");
        goToStartButton.appendChild(textGoToStartButton);
        goToStartButton.addEventListener('click', function(){
            destroyInstructions();
            buildSplash();
        });

        mainSection.appendChild(instructionsTitle);
        mainSection.appendChild(instructionsContent);
        mainSection.appendChild(goToStartButton);
        body.insertBefore(mainSection, firstScript);
    };

    function destroyInstructions(){
        var body = document.getElementById('main-body');
        var mainSection = document.getElementById('main-section');
        body.removeChild(mainSection);
    };
}

window.onload = function() {
    main();
  };

