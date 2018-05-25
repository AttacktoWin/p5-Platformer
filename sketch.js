"use strict";

let game, player;

let GREY = 80;
let RED = "#bb2a27";
let GREEN = "#8cc542";
let BLUE = "#28a9e0";
let ORANGE = "#faaf3b";
let BROWN = "#aa6c39";

function setup() {
    createCanvas(1920, 1080);

    init();

}

function draw() {
    background(GREEN);
    if (game.state == "build") {
        game.show();        
    } else if (game.state == "playing") {
        player.move();
        game.logic();
        game.display();
    }
}

function mouseClicked() {
    if(game.state == "build") {
        game.level.select();
    }
}

function mouseDragged() {
    if (game.state == "build") {
        game.level.move();
    }
}

function mouseReleased() {
    game.level.initX = 0;
    game.level.initY = 0;
}