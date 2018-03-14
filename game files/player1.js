// Player 1 Functions
function initPlayer1() {
    player1 = {
        x: 200,
        y: 580,
        w: (width / 100 * 2),
        h: (width / 100 * 2),
        xSpeed: 0,
        ySpeed: 0,
        a: (width / 100 * 0.12),
        col: BLUE,
        homeX: 0,
        homeY: 0,
        jump: false,
        left: false,
        right: false,
        deaths: 0
    };
    game = {
        level: "start",
        pause: false,
        platforms: [],
        spikes: [],
        moveables: [],
        specials: [],
        keys: [],
        triggers: [],
        timer: 0,
        seconds: 0,
        minutes: 0,
        clearLevel: function () {
            game.platforms = [];
            game.spikes = [];
            game.moveables = [];
            game.specials = [];
            game.keys = [];
            game.triggers = [];
        },
        logic: function () {
            for (i = 0; i < game.moveables.length; i++) {
                game.moveables[i].logic();
            }
            for (i = 0; i < game.keys.length; i++) {
                game.keys[i].logic();
            }
            for (i = 0; i < game.triggers.length; i++) {
                game.triggers[i].logic();
            }

            game.timer = parseInt(game.timer);
            game.seconds = parseInt(game.seconds);
            game.minutes = parseInt(game.minutes);
            if (game.timer >= 60) {
                game.seconds++;
                game.timer -= 60;
            }
            if (game.seconds >= 60) {
                game.minutes++;
                game.seconds -= 60;
            }
            if (game.seconds < 10) {
                game.seconds = "0" + game.seconds;
            }
            if (game.minutes < 10) {
                game.minutes = "0" + game.minutes;
            }
            game.timer++;
            if (game.timer < 10) {
                game.timer = "0" + game.timer;
            }
        },
        show: function () {
            for (i = 0; i < game.platforms.length; i++) {
                game.platforms[i].show();
            }
            for (i = 0; i < game.spikes.length; i++) {
                game.spikes[i].show();
            }
            for (i = 0; i < game.specials.length; i++) {
                game.specials[i].show();
            }
            for (i = 0; i < game.keys.length; i++) {
                game.keys[i].show();
            }
            fill(255);
            stroke(255);
            noStroke();
            textAlign(LEFT);
            textSize((player1.w * 0.75));
            text("Deaths: " + player1.deaths, (player1.w * 2), (player1.w * 1.25));
            text("Level " + game.level, width - (player1.w * 6), (player1.w * 1.25));
            textAlign(CENTER);
            textSize((player1.w * 1.5));
            text(game.minutes + ":" + game.seconds + "." + game.timer, width / 2, (player1.w * 1.5));
            //Jump Button Rendering
            fill(0, 20, 255, 50);
            ellipse(jumpButton.x, jumpButton.y, jumpButton.r);
            fill(255);
            textSize((player1.w));
            textAlign(CENTER);
            text("JUMP", jumpButton.x, jumpButton.y + (player1.w * 0.5));
            // D-Pad Rendering
            fill(25, 25, 25, 60);
            rect(dPad.x, dPad.y, dPad.w, dPad.h);
            rect(dPad.x + dPad.w + 5, dPad.y, dPad.w, dPad.h);
            stroke(255, 255, 255, 75);
            strokeWeight((player1.w * 0.5));
            line(dPad.x + (player1.w / 2), dPad.y + (dPad.h / 2), dPad.x + dPad.w - (player1.w / 2), dPad.y + (dPad.h / 2));
            line(dPad.x + (player1.w / 2), dPad.y + (dPad.h / 2), dPad.x + (dPad.w / 3), dPad.y + (player1.w / 2));
            line(dPad.x + (player1.w / 2), dPad.y + (dPad.h / 2), dPad.x + (dPad.w / 3), dPad.y + (dPad.h - (player1.w / 2)));
            line(dPad.x + dPad.w + (player1.w / 1.5), dPad.y + (dPad.h / 2), dPad.x + dPad.w * 2 - (player1.w / 2), dPad.y + (dPad.h / 2));
            line(dPad.x + dPad.w * 2 - (player1.w / 2), dPad.y + (dPad.h / 2), dPad.x + dPad.w + 2 * (dPad.w / 3), dPad.y + (player1.w / 2));
            line(dPad.x + dPad.w * 2 - (player1.w / 2), dPad.y + (dPad.h / 2), dPad.x + dPad.w + 2 * (dPad.w / 3), dPad.y + (dPad.h - (player1.w / 2)));
            if (game.pause) {
                fill(20, 20, 20, 150);
                rect(0, 0, width, height);
                textAlign(CENTER);
                textSize(50);
                text("PAUSED", width / 2, height / 2);
            }
            // Pause Button
            noStroke();
            fill(40, 40, 40, 150);
            rect(width - (player1.w * 2), player1.w * 0.5, player1.w * 1.5, player1.w * 1.5);
            stroke(255, 255, 255, 150);
            strokeWeight(5);
            line(width - (player1.w * 1.45), player1.w * 0.75, width - (player1.w * 1.45), player1.w * 1.75);
            line(width - (player1.w), player1.w * 0.75, width - (player1.w), player1.w * 1.75);
        }
    };
    jumpButton = {
        x: width - (width / 100 * 10),
        y: height - (height / 100 * 10),
        r: player1.w * 4
    };
    dPad = {
        x: (width / 100 * 5),
        y: height - (height / 100 * 10),
        w: (player1.w * 5),
        h: (player1.w * 3)
    }
}

function respawn() {
    player1.x = player1.homeX;
    player1.y = player1.homeY;
    player1.ySpeed = 0;
    player1.xSpeed = 0;
}

function movePlayer1() {
    // Move Horizontally on Key is Down
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65) || player1.left) {
        player1.xSpeed = -(player1.w / 2);
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) || player1.right) {
        player1.xSpeed = (player1.w / 2);
    }

    player1.x += player1.xSpeed;
    player1.xSpeed = 0;
    // Move Vertically - Gravity
    if (player1.ySpeed > player1.w) {
        player1.ySpeed = player1.w;
    }
    player1.y += player1.ySpeed; // Move Vertically
    player1.ySpeed += player1.a; // Apply Gravity
    if (player1.y + player1.h > height) {
        player1.y = height - player1.h;
        player1.ySpeed = 0;
    }

    // Collision Detection
    for (i = 0; i < game.platforms.length; i++) {
        if (player1.x + player1.w > game.platforms[i].x && player1.x < game.platforms[i].x + game.platforms[i].w) {
            if (player1.y <= game.platforms[i].y - 1 && player1.y + player1.h >= game.platforms[i].y - 1) {
                player1.ySpeed = 0;
                player1.y = game.platforms[i].y - player1.h - 1;
                player1.jump = false;
            }
            if (player1.y <= game.platforms[i].y + game.platforms[i].h && player1.y + player1.h >= game.platforms[i].y + game.platforms[i].h) {
                player1.y = game.platforms[i].y + game.platforms[i].h + 1
                player1.ySpeed = player1.a;
            }
        }

        if (player1.x + player1.w > game.platforms[i].x && player1.x <= game.platforms[i].x) {
            if (player1.y >= game.platforms[i].y && player1.y + player1.h < game.platforms[i].y + game.platforms[i].h) {
                player1.x = game.platforms[i].x - player1.w;
            }
        }
        if (player1.x < game.platforms[i].x + game.platforms[i].w + 1 && player1.x + player1.w >= game.platforms[i].x + game.platforms[i].w) {
            if (player1.y >= game.platforms[i].y && player1.y + player1.h < game.platforms[i].y + game.platforms[i].h) {
                player1.x = game.platforms[i].x + game.platforms[i].w;
            }
        }
    }

    // Moveables Collision Detection
    for (i = 0; i < game.moveables.length; i++) {
        if (game.moveables[i].type == "platforms") {
            if (player1.x + player1.w > game.platforms[game.moveables[i].index].x && player1.x < game.platforms[game.moveables[i].index].x + game.platforms[game.moveables[i].index].w) {
                if (player1.y == game.platforms[game.moveables[i].index].y - player1.h - 1) {
                    player1.xSpeed += game.moveables[i].xSpeed;
                    player1.ySpeed += game.moveables[i].ySpeed;
                }
            }
        }
    }

    // Spike Collision Detection
    for (i = 0; i < game.spikes.length; i++) {
        if (game.spikes[i].r == 1) {
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + game.spikes[i].w * (player1.w)) {
                if (player1.y + player1.h > game.spikes[i].y - (player1.w + 1) && player1.y < game.spikes[i].y) {
                    player1.deaths++;
                    game.seconds = parseInt(game.seconds);
                    game.seconds += 10;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 2) {
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + (player1.w + 1)) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + game.spikes[i].w * (player1.w)) {
                    player1.deaths++;
                    game.seconds = parseInt(game.seconds);
                    game.seconds += 10;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 3) {
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + game.spikes[i].w * (player1.w)) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + (player1.w + 1)) {
                    player1.deaths++;
                    game.seconds = parseInt(game.seconds);
                    game.seconds += 10;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 4) {
            if (player1.x + player1.w > game.spikes[i].x - (player1.w + 1) && player1.x < game.spikes[i].x) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + game.spikes[i].w * (player1.w)) {
                    player1.deaths++;
                    game.seconds = parseInt(game.seconds);
                    game.seconds += 10;
                    respawn();
                }
            }
        }



    }

    // Level Movement
    if (player1.x > width) {
        levelUp();
    }
    if (player1.x < 0) {
        levelDown();
    }
}

function drawPlayer1() {
    // Draw Player
    noStroke();
    fill(player1.col);
    rect(player1.x, player1.y, player1.w, player1.h);
}

function jumpPlayer1() {
    // Jump on UP_ARROW
    if (!player1.jump) {
        player1.ySpeed = -(player1.w * 1.1);
        player1.jump = true;
    }
}

function debugTeleport() {
    player1.x = mouseX;
    player1.y = mouseY;
}
