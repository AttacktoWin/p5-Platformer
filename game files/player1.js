// Player 1 Functions
function initPlayer1() {
    player1 = {
        x: 200,
        y: 580,
        w: 20,
        h: 20,
        xSpeed: 0,
        ySpeed: 0,
        a: 1,
        col: BLUE,
        homeX: 0,
        homeY: 0,
        jump: false,
        deaths: 0
    };
    game = {
        level: 1,
        platforms: [],
        spikes: [],
        moveables: [],
        specials: [],
        triggers: [],
        timer: 0,
        seconds: 0,
        minutes: 0,
        clearLevel: function() {
            game.platforms = [];
            game.spikes = [];
            game.moveables = [];
            game.specials = [];
            game.triggers = [];
        },
        logic: function() {
            for(i = 0; i < game.moveables.length; i++) {
                game.moveables[i].logic();
            }
            for(i = 0; i < game.triggers.length; i++) {
                game.triggers[i].logic();
            }

            game.seconds = parseInt(game.seconds);
            game.minutes = parseInt(game.minutes);
            if (game.timer%60 == 0) {
                game.seconds++;
            }
            if (game.seconds%60 == 0) {
                game.minutes++;
                game.seconds = 0;
            }
            if (game.seconds < 10) {
                game.seconds = "0" + game.seconds;
            }
            if (game.minutes < 10) {
                game.minutes = "0" + game.seconds;
            }
            game.timer++;
        },
        show: function() {
            for(i = 0; i < game.platforms.length; i++) {
                game.platforms[i].show();
            }
            for(i = 0; i < game.spikes.length; i++) {
                game.spikes[i].show();
            }
            for(i = 0; i < game.specials.length; i++) {
                game.specials[i].show();
            }
            fill(255);
            stroke(255);
            noStroke();
            textSize(16);
            text("Deaths: " + player1.deaths, 15, 20);
            text("Level " + game.level, width-75, 20);
            textSize(25);
            text(game.minutes + ":" + game.seconds + "." + game.timer%60, width/2-20, 25);
        }
    };
}

function respawn() {
    player1.x = player1.homeX;
    player1.y = player1.homeY;
    player1.ySpeed = 0;
    player1.xSpeed = 0;
}

function movePlayer1() {
    // Move Horizontally on Key is Down
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        player1.xSpeed = -5;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        player1.xSpeed = 5;
    }

    player1.x += player1.xSpeed;
    player1.xSpeed = 0;
    // Move Vertically - Gravity
    if (player1.ySpeed > 20) {
        player1.ySpeed = 20;
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
    for(i = 0; i < game.moveables.length; i++) {
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
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + game.spikes[i].w * 20) {
                if (player1.y + player1.h > game.spikes[i].y - 21 && player1.y < game.spikes[i].y) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 2) {
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + 21) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + game.spikes[i].w * 20) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 3) {
            if (player1.x + player1.w > game.spikes[i].x && player1.x < game.spikes[i].x + game.spikes[i].w * 20) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + 21) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (game.spikes[i].r == 4) {
            if(player1.x + player1.w > game.spikes[i].x - 21 && player1.x < game.spikes[i].x) {
                if (player1.y + player1.h > game.spikes[i].y && player1.y < game.spikes[i].y + game.spikes[i].w * 20) {
                    player1.deaths++;
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
        if (keyCode == UP_ARROW || keyCode == 87 || keyCode == 32) {
            player1.ySpeed = -20;
            player1.jump = true;
        }
    }
}
