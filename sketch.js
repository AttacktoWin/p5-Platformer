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
    if (!game.pause) {
        movePlayer1();
    }
    // DRAW
    background(GREEN);

    if (game.level != "complete" && game.level != "displayScores") {
        drawPlayer1();
    }
    if (game.level != "start" && !game.pause && game.level != "complete" && game.level != "displayScores") {
        game.logic();
    }
    if (game.level != "displayScores") {
        game.show();
    } else {
        game.displayScores();
    }

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
    if (!game.pause) {
        for (var i = 0; i < touches.length; i++) {
            if (touches[i].x > width / 2) {
                jumpPlayer1();
            }
            if (touches[i].x > dPad.x && touches[i].x < dPad.x + dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.left = true;
                }
            }
            if (touches[i].x > dPad.x + dPad.w + 5 && touches[i].x < dPad.x + 2 * dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.right = true;
                }
            }
        }
    }
    for (var i = 0; i < touches.length; i++) {
        if (touches[i].x > width - (player1.w * 2) && touches[i].x < (width - (player1.w * 2)) + (player1.w * 1.5)) {
            if (touches[i].y > player1.w * 0.5 && touches[i].y > (player1.w * 0.5) + (player1.w * 1.5)) {
                game.pause = !game.pause;
            }
        }
    }
    if (game.level == "complete") {
        for (var i = 0; i < touches.length; i++) {
            if (touches[i].x > width / 3 && touches[i].x < width / 3 + 200) {
                if (touches[i].y > (height / 3) * 2 && touches[i].y < (height / 3) * 2 + 75) {
                    if (typeof localStorage.GLscores != "string") {
                        localStorage.setItem("GLscores", "-1");
                    }
                    var scoreNum = parseInt(localStorage.GLscores) + 1;
                    localStorage.GLscores = "" + scoreNum;
                    localStorage.setItem("GLscore" + scoreNum, "" + game.minutes + ":" + game.seconds + "." + game.timer);
                    for (var i = 0; i < scoreNum + 1; i++) {
                        game.scores.push(localStorage.getItem("GLscore" + i));
                    }
                    game.scores.sort();
                    game.level = "displayScores";
                }
            }
        }
    }
    return false;
}

function touchMoved() {
    player1.left = false;
    player1.right = false;
    if (!game.pause) {
        for (var i = 0; i < touches.length; i++) {
            if (touches[i].x > width / 2) {
                jumpPlayer1();
            }
            if (touches[i].x > dPad.x && touches[i].x < dPad.x + dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.left = true;
                }
            }
            if (touches[i].x > dPad.x + dPad.w + 5 && touches[i].x < dPad.x + 2 * dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.right = true;
                }
            }
        }
    }
    return false;
}

function touchEnded() {
    if (touches.length === 0) {
        player1.left = false;
        player1.right = false;
    } else {
        for (var i = 0; i < touches.length; i++) {
            if (touches[i].x > dPad.x && touches[i].x < dPad.x + dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.left = true;
                } else {
                    player1.left = false;
                }
            } else {
                player1.left = false;
            }
            if (touches[i].x > dPad.x + dPad.w + 5 && touches[i].x < dPad.x + 2 * dPad.w) {
                if (touches[i].y > dPad.y && touches[i].y < dPad.y + dPad.h) {
                    player1.right = true;
                } else {
                    player1.right = false;
                }
            } else {
                player1.right = false;
            }
        }
    }
    return false;
}
