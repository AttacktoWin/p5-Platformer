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
    if (keyCode === 32 || keyCode === 87 || keyCode === UP_ARROW) {
        jumpPlayer1();
    }
    if (keyCode === 82) {
        respawn();
    }
    if (keyCode === 13) {
        debugTeleport();
    }
}


function touchStarted() {
    for(var i = 0; i < touches.length; i++) {
        if (touches[i].x > width/2) {
            jumpPlayer1();
        }
        if (touches[i].x > dPad.x && touches[i].x < dPad.x + dPad.w) {
            if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                player1.left = true;
            }
        }
        if (touches[i].x > dPad.x + dPad.w + 5 && touches[i].x < dPad.x + 2*dPad.w) {
            if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                player1.right = true;
            }
        }
    }
    return false;
}

function touchMoved() {
    return false;
}

function touchEnded() {
    if (player1.left) {
        player1.left = false;
    }
    if (player1.right) {
        player1.right = false;
    }
    return false;
}
