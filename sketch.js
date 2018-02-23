// PLATFORMER LIBRARY
"use strict";
// Declare Global Variables
let player1;
let level;
let platforms, spikes, moveables, specials, triggers;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

// SETUP FUNCTION - Runs once at beginning of program
function setup() {
    createCanvas(800, 600);

	// Initialize Global Variables
	initPlayer1();
    level = 1;
    clearLevel();

    level1();
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
	// LOGIC
	movePlayer1();
	// DRAW
    background(GREEN);
	drawPlayer1();
    for(i = 0; i < moveables.length; i++) {
        moveables[i].logic();
    }
    for(i = 0; i < triggers.length; i++) {
        triggers[i].logic();
    }
    for(i = 0; i < platforms.length; i++) {
        platforms[i].show();
    }
    for(i = 0; i < spikes.length; i++) {
        spikes[i].show();
    }
    for(i = 0; i < specials.length; i++) {
        specials[i].show();
    }
    fill(255);
    stroke(255);
    noStroke();
    textSize(16);
    text("Deaths: " + player1.deaths, 15, 20);
    text("Level " + level, width-75, 20);
}

// EVENT FUNCTIONS
function keyPressed() {
	jumpPlayer1();
    if (keyCode === 82) {
        respawn();
    }
}
