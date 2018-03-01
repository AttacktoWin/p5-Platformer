function levelUp() {
    if (game.level == "start") {
        level1();
        game.level = 1;
    } else if (game.level == 1) {
        level2();
        game.level = 2;
    } else if (game.level == 2) {
        level3();
        game.level = 3;
    } else if (game.level == 3) {
        level4();
        game.level = 4;
    } else if (game.level == 4) {
        level5();
        game.level = 5;
    } else if (game.level == 5) {
        level6();
        game.level = 6;
    } else if (game.level == 6) {
        level7();
        game.level = 7;
    } else if (game.level == 7) {
        level8();
        game.level = 8;
    } else if (game.level == 8) {
        level8();
        level = 8;
    } else if (game.level == "test") {
        levelTest();
        game.level = "test";
    }
}

function levelDown() {
    if (game.level == 1) {
        level1();
    } else if (game.level == 2) {
        level1();
        game.level = 1;
    } else if (game.level == 3) {
        level2();
        game.level = 2;
    } else if (game.level == 4) {
        level3();
        game.level = 3;
    } else if (game.level == 5) {
        level4();
        game.level = 4;
    } else if (game.level == 6) {
        level5();
        game.level = 5;
    } else if (game.level == 7) {
        level6();
        game.level = 6;
    } else if (game.level == 8) {
        level7();
        game.level = 7;
    } else if (game.level == "test") {
        levelTest()
        game.level = "test";
    }
}

function title() {
    player1.homeX = 1;
    player1.homeY = height - 51;
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.specials.push({
        show: function () {
            fill(255);
            noStroke();
            textAlign(CENTER);
            textSize(72);
            text("GOOD LUCK", width / 2, height / 2);
            textSize(30);
            text("Arrow Keys or WASD", width / 2, height / 2 + 50);
        }
    });
    game.specials.push(new arrow(width - 10, height - 70));
}

function level1() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - 51 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - 51 - player1.h;
    } else {
        player1.homeX = 1;
        player1.homeY = height - 51 - player1.h
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.specials.push(new arrow(width - 10, height - 70));
}

function level2() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - 50 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 150 - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, 50, height - 150, GREY, ORANGE));
    game.platforms.push(new platform(50, height - 250, width - 175, 100, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(150, height / 2 + 25, width - 200, 100, GREY, ORANGE));
    game.platforms.push(new platform(50, height / 2 - 250, 100, 100, GREY, ORANGE));
    game.platforms.push(new platform(250, height / 2 - 250, width - 300, 100, GREY, ORANGE));
}

function level3() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 150 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - 50 - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, -500, 50, height + 350, GREY, ORANGE));
    game.platforms.push(new platform(50, 150, width / 2 - 200, 50, GREY, ORANGE));
    game.platforms.push(new platform(width / 2 + 200, 150, 710, 50, GREY, ORANGE));
    game.spikes.push(new spike(width / 2 - 400, 400, 6, 1, RED));
    game.moveables.push(new moveable(6, 0, 600, 0, "spikes", 0))
}

function level4() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - 50 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 150;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, 50, height - 150, GREY, ORANGE));
    game.platforms.push(new platform(50, height - 250, width - 175, 100, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(160, height / 2 + 25, width - 210, 100, GREY, ORANGE));
    game.platforms.push(new platform(50, height / 2 - 250, 100, 100, GREY, ORANGE));
    game.platforms.push(new platform(250, height / 2 - 250, width - 300, 100, GREY, ORANGE));
    game.spikes.push(new spike(width - 90, height / 2 + 125, 1, 3, RED));
    game.spikes.push(new spike(160, height / 2 + 30, 2, 4, RED));
    game.spikes.push(new spike(50, 160, 3, 2, RED));
    game.moveables.push(new moveable(3, 0, 200, 0, "spikes", 2));
}

function level5() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 150 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - 51 - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, -500, 50, height + 300, GREY, ORANGE));
    game.platforms.push(new platform(75, 300, 125, 25, GREY, BLUE));
    game.spikes.push(new spike(50, height - 50, 30, 1, RED));
    game.moveables.push(new moveable(3.5, 0, 1000, 0, "platforms", 3));
}

function level6() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = height - 50 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 150 - player1.h;
    }
    respawn();
    game.clearLevel();

    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, 50, height - 150, GREY, ORANGE));
    game.platforms.push(new platform(50, height - 250, width - 175, 100, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(160, height / 2 + 25, width - 210, 100, GREY, ORANGE));
    game.platforms.push(new platform(50, height / 2 - 250, 100, 100, GREY, ORANGE));
    game.platforms.push(new platform(250, height / 2 - 250, width - 300, 100, GREY, ORANGE));
    game.spikes.push(new spike(width - 90, height / 2 + 125, 1, 3, RED));
    game.spikes.push(new spike(160, height / 2 + 30, 2, 4, RED));
    game.spikes.push(new spike(width - 50, 400, 4, 4, RED));
    game.spikes.push(new spike(50, 160, 3, 2, RED));
    game.moveables.push(new moveable(3, 0, 200, 0, "spikes", 3));
    game.triggers.push(new trigger(175, 450, width - 150, 120, function () {
        game.moveables.push(new moveable(-35, 0, -1600, 0, "spikes", 2, true));
        game.triggers.splice(0, 1);
    }));
    game.triggers.push(new trigger(0, 0, 50, height, function () {
        if (game.moveables.length > 1) {
            game.moveables.splice(1, 1);
            game.spikes[2].x = width - 50;
            game.triggers.push(new trigger(175, 450, width - 150, 120, function () {
                game.moveables.push(new moveable(-35, 0, -1600, 0, "spikes", 2, true));
                game.triggers.splice(1, 1);
            }));
        }
    }));
}

function level7() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 150 - player1.h;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = height - 50 - player1.h;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, height - 50, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 150, 50, height, GREY, ORANGE));
    game.platforms.push(new platform(width - 50, -500, 50, 1000, GREY, ORANGE));
    game.platforms.push(new platform(50, 150, 675, 50, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, width, 50, GREY, ORANGE));
    game.platforms.push(new platform(75, 200, width - 100, 25, GREY, ORANGE));
    game.platforms.push(new platform(50, 300, 125, 25, GREY, BLUE));
    game.platforms.push(new platform(200, 400, 125, 15, GREY, BLUE));
    game.spikes.push(new spike(150, 50, 3, 3, RED));
    game.spikes.push(new spike(425, 50, 3, 3, RED));
    game.spikes.push(new spike(width - 25, 135, 3, 4, RED));
    game.spikes.push(new spike(25, 550, 25, 1, RED));
    game.moveables.push(new moveable(1, 0, 50, 0, "platforms", 6));
    game.moveables.push(new moveable(2.5, 0, 100, 0, "platforms", 7));
    game.triggers.push(new trigger(0, 0, 20, height, function () {
        game.triggers.splice(1, game.triggers.length - 1);
        game.triggers.push(new trigger(125, 45, 60, 50, function () {
            game.moveables.push(new moveable(0, 3, 0, 60, "spikes", 0, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(425, 45, 60, 50, function () {
            game.moveables.push(new moveable(0, 3, 0, 60, "spikes", 1, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(0, 100, width - 100, 125, function () {
            game.moveables.push(new moveable(-5, 0, (-width) + 75, 0, "spikes", 2, true));
            game.triggers.splice(1, 1);
        }))
    }));
}

function level8() {
    if (player1.x > width) {
        player1.homeX = 1;
        player1.homeY = 549;
    } else if (player1.x < 0) {
        player1.homeX = width - 2 - player1.w;
        player1.homeY = 549;
    }
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
    game.platforms.push(new platform(0, 0, 25, 500, GREY, ORANGE));
    game.platforms.push(new platform(25, 475, 600, 25, GREY, ORANGE));
    game.platforms.push(new platform(width - 100, 100, 25, 450, GREY, ORANGE));
    game.platforms.push(new platform(200, 400, 500, 25, GREY, ORANGE));
    game.platforms.push(new platform(width - 25, 0, 25, 475, GREY, ORANGE));
    game.platforms.push(new platform(250, 275, 450, 25, GREY, ORANGE));
    game.platforms.push(new platform(50, 100, 75, 15, GREY, BLUE)); // i = 7
    game.platforms.push(new platform(250, 125, 75, 15, GREY, ORANGE)); // i = 8
    game.platforms.push(new platform(450, 125, 75, 15, GREY, ORANGE)); // i = 9
    game.platforms.push(new platform(625, 125, 75, 15, GREY, ORANGE));
    game.platforms.push(new platform(25, 0, width - 25, 25, GREY, ORANGE));
    game.moveables.push(new moveable(0, 1.5, 0, 200, "platforms", 7));
    game.spikes.push(new spike(100, 500, 3, 3, RED));
    game.spikes.push(new spike(250, 500, 3, 3, RED));
    game.spikes.push(new spike(400, 500, 3, 3, RED));
    game.spikes.push(new spike(700, 505, 2, 4, RED));
    game.spikes.push(new spike(255, 300, 2, 3, RED));
    game.spikes.push(new spike(330, 300, 2, 3, RED));
    game.spikes.push(new spike(410, 300, 2, 3, RED));
    game.spikes.push(new spike(490, 300, 2, 3, RED));
    game.spikes.push(new spike(570, 300, 2, 3, RED));
    game.spikes.push(new spike(250, 275, 21, 1, RED));
    game.spikes.push(new spike(370, 45, 2, 1, RED));
    game.spikes.push(new spike(370, 45, 2, 3, RED));
    game.spikes.push(new spike(560, 45, 2, 1, RED));
    game.spikes.push(new spike(560, 45, 2, 3, RED));
    game.moveables.push(new moveable(0, 2, 0, 200, "spikes", 10));
    game.moveables.push(new moveable(0, 2, 0, 200, "spikes", 11));
    game.moveables.push(new moveable(0, 2, 0, 200, "spikes", 12));
    game.moveables.push(new moveable(0, 2, 0, 200, "spikes", 13));
    game.keys.push(new key(675, 375, 725, 100, 50, 15, 0, ORANGE, BROWN));
    game.triggers.push(new trigger(0, 0, 15, height, function () {
        game.triggers.splice(1, game.triggers.length);
        game.triggers.push(new trigger(100, 500, 60, 100, function () {
            game.moveables.push(new moveable(0, 1, 0, 25, "spikes", 0, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(250, 500, 60, 100, function () {
            game.moveables.push(new moveable(0, 1, 0, 25, "spikes", 1, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(400, 500, 60, 100, function () {
            game.moveables.push(new moveable(0, 1, 0, 25, "spikes", 2, true));
            game.triggers.splice(1, 1);
        }));

        game.triggers.push(new trigger(650, 500, 50, 100, function () {
            game.moveables.push(new moveable(-2, 0, -50, 0, "spikes", 3, true));
            game.triggers.splice(1, 1);
        }));
        game.triggers.push(new trigger(600, 375, 100, 50, function () {
            game.spikes[5].r = 1;
            game.spikes[5].y += 100;
            game.spikes[7].r = 1;
            game.spikes[7].y += 100;
            game.triggers.splice(1, 1);
        }));
    }));
}

function levelTest() {
    player1.homeX = 1;
    player1.homeY = 549;
    game.level = "test";
    respawn();
    game.clearLevel();
    game.platforms.push(new platform(0, 550, width, height, GREY, ORANGE));
}
