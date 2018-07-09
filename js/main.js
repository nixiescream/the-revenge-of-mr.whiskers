function main(){
    var body = document.getElementById('main-body');
    var firstScript = document.getElementById('first-script');

    function buildSplash(body, firstScript){
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','principal-section');

        var titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'heading-container');

        var gameTitle = document.createElement('h1');
        gameTitle.innerHTML = "<h1>The revenge of <br><span>Mr. Whiskers</span></h1>";

        var buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'button-container');

        var startButton = document.createElement('button');
        startButton.setAttribute('id','start-button');
        startButton.setAttribute('value','start');
        startButton.setAttribute('class', 'btn btn-start');

        var textStartButton = document.createTextNode("Start!");
        startButton.appendChild(textStartButton);
        startButton.addEventListener('click', function(){
            destroySplash(body);
            buildGame(body, firstScript);
        });

        var instructionsButton = document.createElement('button');
        instructionsButton.setAttribute('id', 'instructions-button');
        instructionsButton.setAttribute('value','instructions');
        instructionsButton.setAttribute('class', 'btn btn-secondary');

        var textInstructionsButton = document.createTextNode("Instructions");
        instructionsButton.appendChild(textInstructionsButton);
        instructionsButton.addEventListener('click', function(){
            destroySplash(body);
            buildInstructions(body,firstScript);
        });
    
        titleContainer.appendChild(gameTitle);
        mainSection.appendChild(titleContainer);
        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(instructionsButton);
        mainSection.appendChild(buttonContainer);
        body.insertBefore(mainSection, firstScript);
    };

    buildSplash(body, firstScript);

    function destroySplash(body){
        var mainSection = document.getElementById('principal-section');
        body.removeChild(mainSection);

    };
    function buildGame(body, firstScript){
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id', 'game-container')
        var newCanvas = document.createElement('canvas');
        newCanvas.setAttribute('id', 'game');
        newCanvas.setAttribute('width', '1600');
        newCanvas.setAttribute('height', '810');

        mainSection.appendChild(newCanvas);
        body.insertBefore(mainSection, firstScript);
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        var floor = height-200;

        console.log(width, height);

        var game = new Game(ctx, width, height, floor);
        game.start(gameEnd);
    };

    function gameEnd(){
        destroyGame(body);
        buildGameOver(body, firstScript);
    };

    function destroyGame(body){
        var mainSection = document.getElementById('game-container');
        body.removeChild(mainSection);
    };

    function buildGameOver(body, firstScript){
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','main-section');

        var titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'heading-container');

        var gameTitle = document.createElement('h1');
        gameTitle.innerHTML = "Game over &#x1F63F;";

        var buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'button-container');

        var startButton = document.createElement('button');
        startButton.setAttribute('id','start-button');
        startButton.setAttribute('value','start');
        startButton.setAttribute('class', 'btn btn-start');

        var textStartButton = document.createTextNode("Replay!!");
        startButton.appendChild(textStartButton);
        startButton.addEventListener('click', function(){
            destroyGameOver(body);
            buildGame(body, firstScript);
        });

        var goToStartButton = document.createElement('button');
        goToStartButton.setAttribute('id', 'go-to-start');
        goToStartButton.setAttribute('value','go-to-start');
        goToStartButton.setAttribute('class', 'btn btn-secondary');
        var textGoToStartButton = document.createTextNode("Go to start");

        goToStartButton.appendChild(textGoToStartButton);
        goToStartButton.addEventListener('click', function(){
            destroyGameOver(body);
            buildSplash(body, firstScript);
        });
    
        titleContainer.appendChild(gameTitle);
        buttonContainer.appendChild(startButton);
        buttonContainer.appendChild(goToStartButton);
        mainSection.appendChild(titleContainer);
        mainSection.appendChild(buttonContainer);
        body.insertBefore(mainSection, firstScript);
    };

    function destroyGameOver(body){
        var mainSection = document.getElementById('main-section');
        body.removeChild(mainSection);
    };

    function buildInstructions(body, firstScript){
        var mainSection = document.createElement('section');
        mainSection.setAttribute('id','main-section');

        var titleContainer = document.createElement('div');
        titleContainer.setAttribute('class', 'heading-container');

        var instructionsTitle = document.createElement('h1');
        var textTitle = document.createTextNode("Instructions!");
        instructionsTitle.appendChild(textTitle);

        var instructionsContent = document.createElement('div');
        instructionsContent.setAttribute('class', 'content')
        instructionsContent.innerHTML = "<p>&#x21E6; to move left</p>\
        <p>&#x21E8; to move right</p><p>&#x21E7; to jump</p>\
        <p>Try not to die &#X1F638</p>";

        var buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'button-container');

        var goToStartButton = document.createElement('button');
        goToStartButton.setAttribute('id', 'go-to-start');
        goToStartButton.setAttribute('value','go-to-start');
        goToStartButton.setAttribute('class', 'btn btn-info');

        var textGoToStartButton = document.createTextNode("Go to start");
        goToStartButton.appendChild(textGoToStartButton);
        goToStartButton.addEventListener('click', function(){
            destroyInstructions(body);
            buildSplash(body, firstScript);
        });

        titleContainer.appendChild(instructionsTitle);
        buttonContainer.appendChild(goToStartButton);
        mainSection.appendChild(titleContainer);
        mainSection.appendChild(instructionsContent);
        mainSection.appendChild(buttonContainer);
        body.insertBefore(mainSection, firstScript);
    };

    function destroyInstructions(body){
        var mainSection = document.getElementById('main-section');
        body.removeChild(mainSection);
    };
}

window.onload = function() {
    main();
  };

