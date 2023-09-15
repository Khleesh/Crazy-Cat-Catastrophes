localStorage.nullItem=function(L,R){if(localStorage.getItem(L)){localStorage.setItem(L,R)}} //Localstorage.nullItem: if the item doesnt exist then define it.
seconds=0
minutes=0
function preload(){
    mojangles=loadFont('images/mojangles.otf');
}

function setup(){ //Only runs once
    createCanvas(window.innerWidth,window.innerHeight);
    frameRate(60);
    gameState="Game";
};
onresize=(event)=>{resizeCanvas(window.innerWidth,window.innerHeight)};

function time(){ //Returns MM:SS.mmm, run every frame
    milli=millis();
    seconds=floor(milli/1000);
    minutes=floor(seconds/60);
    if(milli>999){milli%=999};
    if(seconds>59){seconds%=59};
    return `${minutes}:${seconds}.${milli.toString().padStart(3,'0')}`; //Minutes have no length cap
}

function draw(){ //Every frame
    background("#87CEEB"); //This needs to be run every frame to clear screen
    textAlign(LEFT,TOP);
    textSize(20);
    textFont(mojangles); //Swap out with litterally any font ever
    switch(gameState){
        case "Game":
            text(`Game Version: 3.0.0\nTime: ${time()}\nLevel: ${null}\nCoins: ${null}\nDeaths: ${null}`,12,12);
            
            break;
        case "Pause":
            textSize(30);
            text('Crazy Cat Catastrophes',20,20);
            textSize(25);
            text('Resume',20,70);
            text('Restart',20,120);
            text('Options',20,170);
            text('Menu',20,220);
            break;
        case "Menu":
            text(`Game Version: 3.0.0`,20,20);
            textSize(30);
            text(`Crazy Cat Catastrophes`,20,100);
            textSize(25);
            text('Resume',20,150);
            text('New Game',20,200);
            text('Options',20,250);
            text('Quit',20,300);
            break;
    }
}
function keyPressed(){
    //if(keyCode === ESCAPE && gameState == "Game" ){
    //    gameState = "Pause";
    //} else if (keyCode === ESCAPE && gameState == "Pause"){
    //    gameState = "Game";
    //}
    switch(true){
        case(keyCode === ESCAPE && gameState == "Game"):
            gameState = "Pause";
        break;
        case(keyCode === ESCAPE && gameState == "Pause"):
            gameState = "Game";
        break;
        case(keyCode === KeyM && gameState == "Paused"):
            gameState = "Menu";
        break;
    }
}