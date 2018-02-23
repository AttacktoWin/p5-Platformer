function levelUp() {
    if (level == 1) {
        level2();
        level = 2;
    } else if (level == 2) {
        level3();
        level = 3;
    } else if (level == 3) {
        level4();
        level = 4;
    } else if (level == 4) {
        level5();
        level = 5;
    } else if (level == 5) {
        level6();
        level = 6;
    } else if (level == 6) {
        level7();
        level = 7;
    } else if (level == 7) {
        level7();
        level = 7;
    } 
    else if (level == "test") {
        levelTest();
        level = "test";
    }
}

function levelDown() {
    if (level == 1) {
        level1();
    } else if (level == 2) {
        level1();
        level = 1;
    } else if (level == 3) {
        level2();
        level = 2;
    } else if (level == 4) {
        level3();
        level = 3;
    } else if (level == 5) {
        level4();
        level = 4;
    } else if (level == 6) {
        level5();
        level = 5;
    } else if (level == 7) {
        level6();
        level = 6;
    }
    else if (level == "test") {
        levelTest()
        level = "test";
    }
}

function level1() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 549;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 548 - player1.h;
    } else {
        player1.homeX = 1;
        player1.homeY = 548 - player1.h
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    specials.push(new arrow(width - 10, 530));
}

function level2() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 549;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 50;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 0, 25, 500, GREY, ORANGE));
    platforms.push(new platform(25, 450, 700, 50, GREY, ORANGE));
    platforms.push(new platform(width - 25, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(150, 300, width - 175, 50, GREY, ORANGE));
    platforms.push(new platform(25, 125, 100, 50, GREY, ORANGE));
    platforms.push(new platform(175, 125, 600, 50, GREY, ORANGE));
}

function level3() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 50;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 549;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(width - 25, -500, 25, 1000, GREY, ORANGE));
    platforms.push(new platform(25, 100, 300, 50, GREY, ORANGE));
    platforms.push(new platform(475, 100, 300, 50, GREY, ORANGE));
    spikes.push(new spike(200, 400, 6, 1, RED));
    moveables.push(new moveable(3, 0, 300, 0, "spikes", 0))
}

function level4() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 549;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 50;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 0, 25, 500, GREY, ORANGE));
    platforms.push(new platform(25, 450, 700, 50, GREY, ORANGE));
    platforms.push(new platform(width - 25, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(150, 300, width - 175, 50, GREY, ORANGE));
    platforms.push(new platform(25, 125, 100, 50, GREY, ORANGE));
    platforms.push(new platform(175, 125, 600, 50, GREY, ORANGE));
    spikes.push(new spike(width - 50, 350, 1, 3, RED));
    spikes.push(new spike(150, 305, 2, 4, RED));
    spikes.push(new spike(25, 60, 3, 2, RED));
    moveables.push(new moveable(1.5, 0, 125, 0, "spikes", 2));
}

function level5() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 50;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 549;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(width - 25, -500, 25, 1000, GREY, ORANGE));
    platforms.push(new platform(75, 300, 75, 15, GREY, BLUE));
    spikes.push(new spike(25, 550, 30, 1, RED));
    moveables.push(new moveable(2.5, 0, 500, 0, "platforms", 3));
}

function level6() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 549;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 50;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 0, 25, 500, GREY, ORANGE));
    platforms.push(new platform(25, 450, 700, 50, GREY, ORANGE));
    platforms.push(new platform(width - 25, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(150, 300, width - 175, 50, GREY, ORANGE));
    platforms.push(new platform(25, 125, 100, 50, GREY, ORANGE));
    platforms.push(new platform(175, 125, 600, 50, GREY, ORANGE));
    spikes.push(new spike(width - 50, 350, 1, 3, RED));
    spikes.push(new spike(150, 305, 2, 4, RED));
    spikes.push(new spike(width - 25, 175, 6, 4, RED));
    spikes.push(new spike(25, 60, 3, 2, RED));
    moveables.push(new moveable(1.5, 0, 125, 0, "spikes", 3));
    triggers.push(new trigger(125, 150, width - 150, 120, function () {
        moveables.push(new moveable(-12.5, 0, -625, 0, "spikes", 2, true));
        triggers.splice(0, 1);
    }));
    triggers.push(new trigger(0, 0, 25, height, function () {
        if (moveables.length > 1) {
            moveables.splice(1, 1);
            spikes[2].x = width - 25;
            triggers.push(new trigger(125, 150, width - 150, 120, function () {
                moveables.push(new moveable(-12.5, 0, -625, 0, "spikes", 2, true));
                triggers.splice(1, 1);
            }));
        }
    }));
}

function level7() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 50;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player.homeY = 549;
    }
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(width - 25, -500, 25, 1000, GREY, ORANGE));
    platforms.push(new platform(25, 100, 675, 25, GREY, ORANGE));
    platforms.push(new platform(0, 0, width, 25, GREY, ORANGE));
    platforms.push(new platform(75, 200, width - 100, 25, GREY, ORANGE));
    platforms.push(new platform(50, 300, 75, 15, GREY, BLUE));
    platforms.push(new platform(200, 400, 75, 15, GREY, BLUE));
    spikes.push(new spike(125, 25, 3, 3, RED));
    spikes.push(new spike(425, 25, 3, 3, RED));
    spikes.push(new spike(width - 25, 135, 3, 4, RED));
    spikes.push(new spike(25, 550, 25, 1, RED));
    moveables.push(new moveable(1, 0, 50, 0, "platforms", 6));
    moveables.push(new moveable(2.5, 0, 100, 0, "platforms", 7));
    triggers.push(new trigger(0, 0, 20, height, function () {
        triggers.splice(1, triggers.length-1);
        triggers.push(new trigger(125, 45, 60, 50, function () {
            moveables.push(new moveable(0, 3, 0, 60, "spikes", 0, true));
            triggers.splice(1, 1);
        }));
        triggers.push(new trigger(425, 45, 60, 50, function () {
            moveables.push(new moveable(0, 3, 0, 60, "spikes", 1, true));
            triggers.splice(1, 1);
        }));
        triggers.push(new trigger(0, 100, width-100, 125, function() {
            moveables.push(new moveable(-5, 0, (-width)-75, 0, "spikes", 2, true));
            triggers.splice(1, 1);
        }))
    }));
}

function levelTest() {
    player1.homeX = 1;
    player1.homeY = 50;
    respawn();
    clearLevel();
    platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    platforms.push(new platform(0, 75, 25, 500, GREY, ORANGE));
    platforms.push(new platform(width - 25, -500, 25, 1000, GREY, ORANGE));
    platforms.push(new platform(25, 100, 675, 25, GREY, ORANGE));
    platforms.push(new platform(0, 0, width, 25, GREY, ORANGE));
    platforms.push(new platform(75, 200, width - 100, 25, GREY, ORANGE));
    platforms.push(new platform(50, 300, 75, 15, GREY, BLUE));
    platforms.push(new platform(200, 400, 75, 15, GREY, BLUE));
    spikes.push(new spike(125, 25, 3, 3, RED));
    spikes.push(new spike(425, 25, 3, 3, RED));
    spikes.push(new spike(width - 25, 135, 3, 4, RED));
    spikes.push(new spike(25, 550, 25, 1, RED));
    moveables.push(new moveable(1, 0, 50, 0, "platforms", 6));
    moveables.push(new moveable(2.5, 0, 100, 0, "platforms", 7));
    triggers.push(new trigger(0, 0, 20, height, function () {
        triggers.splice(1, triggers.length-1);
        moveables.splice(2, 3);
        triggers.push(new trigger(125, 45, 60, 50, function () {
            moveables.push(new moveable(0, 3, 0, 60, "spikes", 0, true));
            triggers.splice(1, 1);
        }));
        triggers.push(new trigger(425, 45, 60, 50, function () {
            moveables.push(new moveable(0, 3, 0, 60, "spikes", 1, true));
            triggers.splice(1, 1);
        }));
        triggers.push(new trigger(0, 100, width-100, 125, function() {
            moveables.push(new moveable(-5, 0, (-width)-100, 0, "spikes", 2, true));
            triggers.splice(1, 1);
        }))
    }));
}
