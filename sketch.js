// PLATFORMER LIBRARY
"use strict";
// Declare Global Variables
let player1;
let game;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    screen.orientation.lock('landscape');
    createCanvas(innerWidth, innerHeight);

    // Initialize Global Variables
    initPlayer1();
    game.clearLevel();

    title();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
    // LOGIC
    movePlayer1();
    // DRAW
    background(GREEN);
    drawPlayer1();
    if (game.level != "start") {
        game.logic();
    }
    game.show();

}

// EVENT FUNCTIONS
function keyPressed() {
    jumpPlayer1();
    if (keyCode === 82) {
        respawn();
    }
    if (keyCode === 13) {
        debugTeleport();
    }
}


function touchStarted() {
    for(var i = 0; i < touches.length; i++) {
        if (dist(touches[i].x, touches[i].y, jumpButton.x, jumpButton.y) < jumpButton.r) {
            jumpPlayer1();
        }
    }
    return false;
}

function touchEnded() {
    for(var i = 0; i < touches.length; i++) {
        if(dist(touches[i].x, touches[i].y, jumpButton.x, jumpButton.y) > jumpButton.r) {
            player1.jump = false;
        }
    }
    return false;
}
