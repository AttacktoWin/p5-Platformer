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
    for (i = 0; i < platforms.length; i++) {
        if (player1.x + player1.w > platforms[i].x && player1.x < platforms[i].x + platforms[i].w) {
            if (player1.y <= platforms[i].y - 1 && player1.y + player1.h >= platforms[i].y - 1) {
                player1.ySpeed = 0;
                player1.y = platforms[i].y - player1.h - 1;
                player1.jump = false;
            }
            if (player1.y <= platforms[i].y + platforms[i].h && player1.y + player1.h >= platforms[i].y + platforms[i].h) {
                player1.y = platforms[i].y + platforms[i].h + 1
                player1.ySpeed = player1.a;
            }
        }

        if (player1.x + player1.w > platforms[i].x && player1.x <= platforms[i].x) {
            if (player1.y >= platforms[i].y && player1.y + player1.h < platforms[i].y + platforms[i].h) {
                player1.x = platforms[i].x - player1.w;
            }
        }
        if (player1.x < platforms[i].x + platforms[i].w + 1 && player1.x + player1.w >= platforms[i].x + platforms[i].w) {
            if (player1.y >= platforms[i].y && player1.y + player1.h < platforms[i].y + platforms[i].h) {
                player1.x = platforms[i].x + platforms[i].w;
            }
        }
    }

    // Moveables Collision Detection
    for(i = 0; i < moveables.length; i++) {
        if (moveables[i].type == "platforms") {
            if (player1.x + player1.w > platforms[moveables[i].index].x && player1.x < platforms[moveables[i].index].x + platforms[moveables[i].index].w) {
                if (player1.y == platforms[moveables[i].index].y - player1.h - 1) {
                    player1.xSpeed += moveables[i].xSpeed;
                    player1.ySpeed += moveables[i].ySpeed;
                }
            }
        }
    }
    
    // Spike Collision Detection
    for (i = 0; i < spikes.length; i++) {
        if (spikes[i].r == 1) {
            if (player1.x + player1.w > spikes[i].x && player1.x < spikes[i].x + spikes[i].w * 20) {
                if (player1.y + player1.h > spikes[i].y - 21 && player1.y < spikes[i].y) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (spikes[i].r == 2) {
            if (player1.x + player1.w > spikes[i].x && player1.x < spikes[i].x + 21) {
                if (player1.y + player1.h > spikes[i].y && player1.y < spikes[i].y + spikes[i].w * 20) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (spikes[i].r == 3) {
            if (player1.x + player1.w > spikes[i].x && player1.x < spikes[i].x + spikes[i].w * 20) {
                if (player1.y + player1.h > spikes[i].y && player1.y < spikes[i].y + 21) {
                    player1.deaths++;
                    respawn();
                }
            }
        } else if (spikes[i].r == 4) {
            if(player1.x + player1.w > spikes[i].x - 21 && player1.x < spikes[i].x) {
                if (player1.y + player1.h > spikes[i].y && player1.y < spikes[i].y + spikes[i].w * 20) {
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
